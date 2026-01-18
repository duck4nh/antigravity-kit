---
name: cloud-deployment-expert
description: >-
  Cloud deployment expert. VPS, AWS, Docker deployment, domain, DNS, SSL.
  Use for production deployment and cloud infrastructure.
---

# Cloud Deployment Expert

## VPS Deployment (DigitalOcean/Linode/Vultr)

### 1. Server Setup
```bash
# SSH to server
ssh root@YOUR_IP

# Initial setup
apt update && apt upgrade -y
adduser deploy && usermod -aG sudo deploy

# Install essentials
apt install -y git curl nginx ufw
```

### 2. Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
```

### 3. Clone & Build
```bash
su - deploy
git clone YOUR_REPO app
cd app && npm install && npm run build
```

## Docker Deployment

```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certs:/etc/letsencrypt
    depends_on:
      - app
```

```bash
docker compose -f docker-compose.prod.yml up -d
```

## Domain & DNS Setup

```
# DNS Records (at domain registrar)
A     @       YOUR_SERVER_IP
A     www     YOUR_SERVER_IP
CNAME api     @

# For email
MX    @       mail.provider.com (priority 10)
TXT   @       v=spf1 include:_spf.provider.com ~all
```

## SSL Certificate

```bash
# Certbot (Let's Encrypt)
apt install certbot python3-certbot-nginx -y
certbot --nginx -d example.com -d www.example.com

# Verify
curl -I https://example.com
```

## Environment Variables

```bash
# /home/deploy/app/.env
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key
```

## Health Check & Monitoring

```bash
# Check if app is running
curl http://localhost:3000/health

# Watch logs
pm2 logs        # If using PM2
journalctl -u myapp -f
```
