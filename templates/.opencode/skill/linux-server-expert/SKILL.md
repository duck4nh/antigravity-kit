---
name: linux-server-expert
description: >-
  Linux server administration expert. Ubuntu/Debian, Nginx, Apache, SSL,
  firewall, systemd, server hardening. Use for server setup and config.
---

# Linux Server Expert

## Initial Server Setup

```bash
# Update system
apt update && apt upgrade -y

# Create user with sudo
adduser deploy
usermod -aG sudo deploy

# SSH key auth
mkdir -p /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
# Add public key to authorized_keys

# Disable root login & password auth
vim /etc/ssh/sshd_config
# PermitRootLogin no
# PasswordAuthentication no
systemctl restart sshd
```

## Firewall (UFW)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
ufw status
```

## Nginx Configuration

```nginx
# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name example.com www.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## SSL with Let's Encrypt

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d example.com -d www.example.com
# Auto-renewal is set up automatically
certbot renew --dry-run
```

## Systemd Service

```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My App
After=network.target

[Service]
Type=simple
User=deploy
WorkingDirectory=/home/deploy/myapp
ExecStart=/usr/bin/node dist/main.js
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl enable myapp
systemctl start myapp
systemctl status myapp
```

## Quick Commands

```bash
# Logs
journalctl -u myapp -f          # Service logs
tail -f /var/log/nginx/error.log

# Disk
df -h                           # Disk usage
du -sh /var/*                   # Directory sizes

# Process
htop                            # Process monitor
lsof -i :3000                   # What uses port
```
