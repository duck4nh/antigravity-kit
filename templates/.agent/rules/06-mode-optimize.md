---
activation: model_decision
description: Apply when user requests refactoring, optimization, or performance improvement
---

# [OPTIMIZE] Optimize Mode

**Goal:** Improve quality **WITHOUT changing behavior**.

## Process

1. Measure current state (baseline)
2. Identify main bottleneck
3. Propose improvements + predict results
4. Refactor by priority order
5. Compare before/after
6. Ensure tests still pass

## Performance Metrics by Language

| Language | Build/Size | Runtime | Memory | Profiling Tool |
|----------|------------|---------|--------|----------------|
| JS/TS | Bundle < 500KB | Render < 16ms | Heap usage | Webpack Analyzer, Lighthouse |
| Python | N/A | Response < 100ms | Memory profiler | `cProfile`, `py-spy`, `memory_profiler` |
| Java | JAR size | GC pause < 50ms | Heap < limit | JProfiler, VisualVM, JMH |
| Go | Binary size | p99 latency | Allocs/op | `pprof`, `go test -bench` |
| PHP | N/A | Response < 200ms | Peak memory | Blackfire, Xdebug profiler |
| Ruby | N/A | Response < 100ms | Object allocations | `ruby-prof`, `stackprof` |

## Profiling Commands

### JavaScript/TypeScript
```bash
# Bundle analysis
npx webpack-bundle-analyzer stats.json
npx vite-bundle-visualizer

# Runtime profiling
# Use Chrome DevTools Performance tab
```

### Python
```bash
# CPU profiling
python -m cProfile -s cumtime script.py
py-spy top --pid <PID>

# Memory profiling
python -m memory_profiler script.py
```

### Java
```bash
# JVM profiling
java -XX:+PrintGCDetails -jar app.jar

# Benchmarking with JMH
mvn clean install
java -jar target/benchmarks.jar
```

### Go
```bash
# CPU profiling
go test -cpuprofile=cpu.prof -bench .
go tool pprof cpu.prof

# Memory profiling
go test -memprofile=mem.prof -bench .
go tool pprof mem.prof
```

### PHP
```bash
# Xdebug profiling
php -d xdebug.mode=profile script.php

# Blackfire
blackfire run php script.php
```

### Ruby
```bash
# ruby-prof
ruby-prof script.rb

# stackprof
ruby -r stackprof script.rb
```

## Common Optimization Patterns

### All Languages
| Issue | Solution | Impact |
|-------|----------|--------|
| Slow DB queries | Add indexes, limit results, eager loading | [!] High |
| N+1 queries | Batch loading, JOINs | [!] High |
| Large payloads | Pagination, compression, lazy loading | [!] High |
| Repeated calculations | Caching, memoization | [*] Medium |
| Memory leaks | Proper cleanup, weak references | [*] Medium |
| Slow loops | Early exit, algorithm optimization | [*] Medium |

### Language-Specific Optimizations

| Language | Common Issue | Solution |
|----------|--------------|----------|
| JS/TS | Unnecessary re-renders | `React.memo`, `useMemo`, `useCallback` |
| JS/TS | Large bundle | Code splitting, tree shaking, dynamic imports |
| Python | Slow loops | NumPy vectorization, list comprehensions |
| Python | GIL bottleneck | `multiprocessing`, `asyncio` |
| Java | GC pauses | Object pooling, reduce allocations |
| Java | Slow startup | GraalVM native image, class data sharing |
| Go | Excessive allocations | Sync.Pool, pre-allocate slices |
| Go | Lock contention | Channels, atomic operations |
| PHP | Slow autoloading | `composer dump-autoload -o` |
| PHP | Repeated DB queries | Query caching, Redis |
| Ruby | Slow ActiveRecord | `includes`, `pluck`, raw SQL |
| Ruby | Memory bloat | Avoid large object graphs |

## Output Format

```markdown
## [OPTIMIZE]

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
| [Description] | `file:line` | [!] High |

### Proposal:
| Item | Before | After | Δ |
|------|--------|-------|---|
| Response time | 500ms | 50ms | -90% |
| Memory | 200MB | 50MB | -75% |

### Regression Check:
- [ ] Tests still pass
- [ ] Behavior unchanged
- [ ] Performance verified
```

## Examples

### JavaScript - React Re-render
```diff
- function UserList({ users }) {
-   return users.map(u => <UserCard user={u} />);
- }
+ const UserList = React.memo(function UserList({ users }) {
+   return users.map(u => <UserCard key={u.id} user={u} />);
+ });
```

### Python - N+1 Query
```diff
# Before: N+1 queries
- for order in orders:
-     print(order.customer.name)

# After: Eager loading
+ orders = Order.objects.select_related('customer').all()
+ for order in orders:
+     print(order.customer.name)
```

### Java - Object Allocation
```diff
- for (int i = 0; i < 1000; i++) {
-     String s = new String("constant");
- }
+ private static final String CONSTANT = "constant";
+ for (int i = 0; i < 1000; i++) {
+     // Use CONSTANT
+ }
```

### Go - Slice Pre-allocation
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

### PHP - Query Caching
```diff
- $users = User::where('active', true)->get(); // Called multiple times
+ $users = Cache::remember('active_users', 3600, function () {
+     return User::where('active', true)->get();
+ });
```

### Ruby - Eager Loading
```diff
- @orders = Order.all
- # In view: order.customer.name causes N+1
+ @orders = Order.includes(:customer).all
```

## Refactoring Priorities

| Priority | When | Action |
|----------|------|--------|
| [!] High | Causes production issues | Fix immediately |
| [*] Medium | Noticeable slowdown | Plan for next sprint |
| [-] Low | Minor improvement | Nice to have |

## Principles

| DON'T | DO |
|-------|-----|
| Optimize prematurely | Measure first, optimize later |
| Change behavior | Keep behavior unchanged |
| Prioritize cleverness | Readability > Performance |
| Skip tests | Re-run tests after changes |
| Optimize everything | Focus on bottlenecks (80/20 rule) |
| Guess the problem | Profile to find real issues |
