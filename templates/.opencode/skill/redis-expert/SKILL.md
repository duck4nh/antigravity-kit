---
name: redis-expert
description: >-
  Redis expert. Caching strategies, session storage, rate limiting, pub/sub.
  Use for caching implementation and Redis configuration.
---

# Redis Expert

## Installation

```bash
# Ubuntu
apt install redis-server -y
systemctl enable redis-server

# Docker
docker run -d --name redis -p 6379:6379 redis:alpine
```

## Basic Commands

```bash
redis-cli

# Strings
SET key "value"
GET key
SETEX key 3600 "value"    # With TTL (1 hour)
TTL key                    # Check TTL

# Hash (objects)
HSET user:1 name "John" email "john@example.com"
HGET user:1 name
HGETALL user:1

# Lists
LPUSH queue "task1"
RPOP queue

# Sets
SADD tags "node" "redis"
SMEMBERS tags

# Sorted Sets
ZADD leaderboard 100 "player1"
ZRANGE leaderboard 0 -1 WITHSCORES
```

## Node.js Integration

```typescript
import { createClient } from 'redis';

const redis = createClient({ url: 'redis://localhost:6379' });
await redis.connect();

// Cache pattern
async function getUser(id: string) {
  const cached = await redis.get(`user:${id}`);
  if (cached) return JSON.parse(cached);
  
  const user = await db.user.findUnique({ where: { id } });
  await redis.setEx(`user:${id}`, 3600, JSON.stringify(user));
  return user;
}

// Invalidate
await redis.del(`user:${id}`);
```

## Caching Strategies

| Strategy | Use Case | Implementation |
|----------|----------|----------------|
| **Cache-Aside** | Read-heavy | Check cache → Miss → Load DB → Store cache |
| **Write-Through** | Consistency | Write DB → Write cache |
| **Write-Behind** | Write-heavy | Write cache → Async write DB |
| **TTL** | General | Set expiration time |

## Common Patterns

```typescript
// Rate limiting
async function rateLimit(ip: string, limit = 100) {
  const key = `rate:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  return count <= limit;
}

// Session storage
app.use(session({
  store: new RedisStore({ client: redis }),
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Pub/Sub
await redis.subscribe('channel', (message) => {
  console.log('Received:', message);
});
await redis.publish('channel', 'Hello!');
```
