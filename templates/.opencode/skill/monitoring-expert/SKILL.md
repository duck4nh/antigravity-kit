---
name: monitoring-expert
description: >-
  Monitoring and observability expert. Logging, metrics, error tracking,
  health checks. Use for production monitoring setup.
---

# Monitoring Expert

## Logging (Node.js)

```typescript
// Using Pino (fast)
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV !== 'production' 
    ? { target: 'pino-pretty' } 
    : undefined
});

// Usage
logger.info({ userId: 123 }, 'User logged in');
logger.error({ err, requestId }, 'Failed to process');

// Express middleware
import pinoHttp from 'pino-http';
app.use(pinoHttp({ logger }));
```

## Error Tracking (Sentry)

```typescript
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
});

// Capture errors
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error);
  throw error;
}

// Express error handler
app.use(Sentry.Handlers.errorHandler());
```

## Health Checks

```typescript
// /health endpoint
app.get('/health', async (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks: {
      database: await checkDatabase(),
      redis: await checkRedis(),
    }
  };
  
  const isHealthy = Object.values(health.checks).every(v => v === 'ok');
  res.status(isHealthy ? 200 : 503).json(health);
});

async function checkDatabase() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return 'ok';
  } catch { return 'error'; }
}
```

## Metrics (Prometheus)

```typescript
import promClient from 'prom-client';

// Default metrics
promClient.collectDefaultMetrics();

// Custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route', 'status'],
});

// Middleware
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status: res.statusCode });
  });
  next();
});

// Endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});
```

## Quick Debug Commands

```bash
# Check logs
journalctl -u myapp -f --since "1 hour ago"
docker logs -f --tail 100 container_name

# Check resources
htop
df -h
free -m

# Network
netstat -tlnp
ss -tlnp
curl -I http://localhost:3000/health
```
