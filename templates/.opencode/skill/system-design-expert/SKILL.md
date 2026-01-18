---
name: system-design-expert
description: >-
  System design and architecture expert. Microservices, scalability, database
  design, API design, load balancing. Use for architecture decisions.
---

# System Design Expert

## Architecture Patterns

| Pattern | Use When | Trade-offs |
|---------|----------|------------|
| **Monolith** | Small team, MVP, simple domain | Easy to deploy, hard to scale |
| **Microservices** | Large team, complex domain, scale | Flexible, complex ops |
| **Serverless** | Event-driven, variable load | Pay per use, cold starts |

## Scalability Checklist

### Horizontal Scaling
- [ ] Stateless application (no local sessions)
- [ ] Load balancer configured
- [ ] Database connection pooling
- [ ] Shared cache (Redis)
- [ ] CDN for static assets

### Database Scaling
- [ ] Read replicas for read-heavy
- [ ] Sharding for write-heavy
- [ ] Caching layer (Redis)
- [ ] Indexing optimized

## Common Patterns

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Client    │────▶│ Load Balancer│────▶│  App Server │
└─────────────┘     └──────────────┘     └──────┬──────┘
                                                 │
                    ┌────────────────────────────┼────────────────────────────┐
                    │                            │                            │
               ┌────▼────┐                 ┌─────▼─────┐               ┌──────▼──────┐
               │  Cache  │                 │  Database │               │ File Storage│
               │ (Redis) │                 │(PostgreSQL)│               │    (S3)     │
               └─────────┘                 └───────────┘               └─────────────┘
```

## Estimation Guidelines

| Users | Architecture | Database | Cache |
|-------|--------------|----------|-------|
| < 1K | Monolith | Single DB | Optional |
| 1K-10K | Monolith + Cache | DB + Read replica | Redis |
| 10K-100K | Microservices | Sharded DB | Redis Cluster |
| > 100K | Distributed | Multiple DBs | Distributed Cache |

## API Design

```
# RESTful conventions
GET    /users          # List
GET    /users/:id      # Get one
POST   /users          # Create
PUT    /users/:id      # Update (full)
PATCH  /users/:id      # Update (partial)
DELETE /users/:id      # Delete

# Pagination
GET /users?page=1&limit=20

# Filtering
GET /users?status=active&role=admin

# Response format
{
  "data": [...],
  "meta": { "total": 100, "page": 1 }
}
```
