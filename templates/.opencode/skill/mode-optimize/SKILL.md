---
name: mode-optimize
description: >-
  Optimize mode for refactoring, performance improvement, and code cleanup. Use when
  user requests optimization or identifies slow code. Measures baseline, identifies
  bottlenecks, improves without changing behavior, compares before/after.
license: MIT
compatibility: opencode
metadata:
  category: workflow
  source: antigravity-kit
---

# Optimize Mode

**Goal:** Improve quality **WITHOUT changing behavior**.

## Process

1. **Risk assessment** (classify change type)
2. Measure current state (baseline)
3. Identify main bottleneck
4. **Choose safe optimization strategy**
5. Propose improvements + predict results
6. Refactor by priority order
7. Compare before/after
8. Ensure tests still pass
9. **Document rollback plan**

## Performance Metrics by Language

| Language | Build/Size | Runtime | Profiling Tool |
|----------|------------|---------|----------------|
| JS/TS | Bundle < 500KB | Render < 16ms | Webpack Analyzer, Lighthouse |
| Python | N/A | Response < 100ms | `cProfile`, `py-spy` |
| Java | JAR size | GC pause < 50ms | JProfiler, VisualVM |
| Go | Binary size | p99 latency | `pprof`, `go test -bench` |

## Common Optimization Patterns

### All Languages
| Issue | Solution | Impact |
|-------|----------|--------|
| Slow DB queries | Add indexes, limit results, eager loading | High |
| N+1 queries | Batch loading, JOINs | High |
| Large payloads | Pagination, compression, lazy loading | High |
| Repeated calculations | Caching, memoization | Medium |
| Memory leaks | Proper cleanup, weak references | Medium |

### Language-Specific

| Language | Common Issue | Solution |
|----------|--------------|----------|
| JS/TS | Unnecessary re-renders | `React.memo`, `useMemo`, `useCallback` |
| JS/TS | Large bundle | Code splitting, tree shaking, dynamic imports |
| Python | Slow loops | NumPy vectorization, list comprehensions |
| Go | Excessive allocations | Sync.Pool, pre-allocate slices |

## Output Format

```markdown
## OPTIMIZE

**Issue:** [slow / duplicate code / hard to maintain]
**Language:** [JS/Python/Java/Go/PHP/Ruby]

**Baseline:**
- Response time: X ms
- Memory: X MB
- LOC: X

---

### Bottleneck:
| Issue | Location | Severity |
|-------|----------|----------|
| [Description] | `file:line` | High |

### Proposal:
| Item | Before | After | Change |
|------|--------|-------|--------|
| Response time | 500ms | 50ms | -90% |
| Memory | 200MB | 50MB | -75% |

### Regression Check:
- [ ] Tests still pass
- [ ] Behavior unchanged
- [ ] Performance verified

## Risk Assessment

### Risk Classification
| Change Type      | Risk Level | Rollback Ease | Strategy                        |
| ---------------- | ---------- | ------------- | ------------------------------- |
| Algorithm change | High       | Easy          | A/B test, gradual rollout       |
| Database schema  | High       | Hard          | Migration plan, rollback script |
| Caching layer    | Medium     | Medium        | Feature flag, monitor           |
| Code refactor    | Low        | Easy          | Tests, revert if fail           |

### Risk Questions
- [ ] What if optimization introduces bugs?
- [ ] Can we rollback easily?
- [ ] What's the blast radius?
- [ ] Who gets affected if fails?

### Safe Optimization Strategies

#### Strategy 1: Feature Flag (Recommended for critical paths)
```typescript
// Use feature flag for new optimized code
const useNewOptimization = featureFlags.get('use-v2-algorithm', false);

if (useNewOptimization) {
  return optimizedMethod(data);
} else {
  return legacyMethod(data);
}
```

#### Strategy 2: Gradual Rollout
```markdown
**Week 1:** 5% of traffic
**Week 2:** 25% of traffic
**Week 3:** 50% of traffic
**Week 4:** 100% of traffic

**Monitor after each phase:**
- Error rate
- Performance metrics
- User complaints
```

#### Strategy 3: A/B Testing
```markdown
**Control:** Current implementation
**Variant:** Optimized implementation

**Metrics to compare:**
- Response time (p50, p95, p99)
- Error rate
- Resource usage
- User satisfaction

**Statistical significance:** 95% confidence
```

## Rollback Plan

### Document Before Optimizing
```markdown
**Rollback Trigger:**
- Error rate increases > 5%
- p95 latency degrades > 20%
- User complaints > X/hour

**Rollback Steps:**
1. [Revert commit / disable feature flag]
2. [Verify old behavior restored]
3. [Monitor for Y minutes]
4. [Document lessons learned]
```

### Optimization Safety Checklist
- [ ] Baseline metrics documented
- [ ] Rollback plan written
- [ ] Feature flag available (if critical)
- [ ] Monitoring/alerts configured
- [ ] Tests covering the change
- [ ] Code reviewed
- [ ] Staged rollout planned
```

## Quick Optimization Examples

### React Re-render
```diff
- function UserList({ users }) {
-   return users.map(u => <UserCard user={u} />);
- }
+ const UserList = React.memo(function UserList({ users }) {
+   return users.map(u => <UserCard key={u.id} user={u} />);
+ });
```

### Python N+1 Query
```diff
- for order in orders:
-     print(order.customer.name)
+ orders = Order.objects.select_related('customer').all()
+ for order in orders:
+     print(order.customer.name)
```

### Go Slice Pre-allocation
```diff
- var results []Result
- for _, item := range items {
-     results = append(results, process(item))
- }
+ results := make([]Result, 0, len(items))
+ for _, item := range items {
+     results = append(results, process(item))
+ }
```

## Principles

| DON'T | DO |
|-------|-----|
| Optimize prematurely | Measure first, optimize later |
| Change behavior | Keep behavior unchanged |
| Prioritize cleverness | Readability > Performance |
| Skip tests | Re-run tests after changes |
| Optimize everything | Focus on bottlenecks (80/20 rule) |
