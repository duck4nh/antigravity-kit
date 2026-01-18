---
activation: model_decision
description: Apply when user requests upgrading dependencies, migrating to new version or stack
---

# [MIGRATE] Migrate Mode

**Goal:** Safely upgrade or migrate code with minimal disruption and zero data loss.

## Process

1. Assess current state and language/framework
2. Research target version/stack
3. Identify breaking changes
4. Create migration plan
5. Execute step-by-step
6. Verify and test
7. Document changes

## Output Format

```markdown
## [MIGRATE]: [From] -> [To]

**Type:** [Dependency Update / Major Upgrade / Stack Migration]
**Language:** [JS/Python/Java/Go/PHP/Ruby]
**Risk Level:** [Low / Medium / High / Critical]

---

### Current State
| Item | Current Version |
|------|-----------------|
| [Package/Framework] | vX.X.X |

### Target State
| Item | Target Version |
|------|----------------|
| [Package/Framework] | vY.Y.Y |

---

### Breaking Changes
| Change | Impact | Migration Required |
|--------|--------|-------------------|
| [API change] | [Affected files] | [What to do] |

### Migration Plan
#### Phase 1: Preparation
- [ ] Backup current state
- [ ] Review changelog/migration guide

#### Phase 2: Update Dependencies
[Language-specific commands]

#### Phase 3: Code Changes
| File | Change Required |
|------|-----------------|
| `path/to/file` | [Description] |

#### Phase 4: Testing & Verification
- [ ] All tests pass
- [ ] No errors/warnings
- [ ] Performance verified

### Rollback Plan
1. [Step to revert]
2. [Step to restore]
```

## Package Manager Commands

### Check Outdated Dependencies

| Language | Command |
|----------|---------|
| JS/TS (npm) | `npm outdated` |
| JS/TS (yarn) | `yarn outdated` |
| JS/TS (pnpm) | `pnpm outdated` |
| Python (pip) | `pip list --outdated` |
| Python (poetry) | `poetry show --outdated` |
| Java (Maven) | `mvn versions:display-dependency-updates` |
| Java (Gradle) | `gradle dependencyUpdates` |
| Go | `go list -m -u all` |
| PHP (Composer) | `composer outdated` |
| Ruby (Bundler) | `bundle outdated` |

### Update Dependencies

| Language | Update Single | Update All |
|----------|---------------|------------|
| npm | `npm install pkg@version` | `npm update` |
| yarn | `yarn add pkg@version` | `yarn upgrade` |
| pip | `pip install pkg==version` | `pip install -U -r requirements.txt` |
| poetry | `poetry add pkg@version` | `poetry update` |
| Maven | Edit `pom.xml` | `mvn versions:use-latest-releases` |
| Go | `go get pkg@version` | `go get -u ./...` |
| Composer | `composer require pkg:version` | `composer update` |
| Bundler | Edit `Gemfile` | `bundle update` |

## Risk Assessment

| Risk Level | Criteria | Approach |
|------------|----------|----------|
| [-] **Low** | Patch update, no breaking changes | Direct update |
| [*] **Medium** | Minor version, some deprecations | Plan + test |
| [!] **High** | Major version, breaking changes | Detailed plan + staging |
| [!!] **Critical** | Stack migration, data schema changes | Phased rollout + rollback ready |

## Common Migrations by Language

### JavaScript/TypeScript

| Stack | From → To | Key Changes |
|-------|-----------|-------------|
| Node.js | 18 → 20 | Permission model, test runner stable |
| Node.js | 20 → 22 | WebSocket client, glob/require sync |
| React | 17 → 18 | Concurrent, createRoot, auto batching |
| React | 18 → 19 | React Compiler, Actions, use() hook |
| Next.js | 13 → 14 | Server Actions stable, Turbopack |
| Next.js | 14 → 15 | Async Request APIs, React 19 |
| TypeScript | 4.x → 5.x | Decorators, const type params |

### Python

| Stack | From → To | Key Changes |
|-------|-----------|-------------|
| Python | 3.9 → 3.10 | Pattern matching, ParamSpec |
| Python | 3.10 → 3.11 | Exception groups, tomllib |
| Python | 3.11 → 3.12 | Type param syntax, f-string changes |
| Django | 4.x → 5.x | Async support, facet filters |
| FastAPI | 0.100+ | Pydantic v2 required |
| Flask | 2.x → 3.x | Python 3.8+ required |

### Java

| Stack | From → To | Key Changes |
|-------|-----------|-------------|
| Java | 11 → 17 | Records, sealed classes, pattern matching |
| Java | 17 → 21 | Virtual threads, string templates |
| Spring Boot | 2.x → 3.x | Jakarta EE, native support, Java 17+ |
| Hibernate | 5.x → 6.x | Jakarta persistence, new query API |

### Go

| Stack | From → To | Key Changes |
|-------|-----------|-------------|
| Go | 1.20 → 1.21 | Built-in min/max, slog package |
| Go | 1.21 → 1.22 | Range over integers, enhanced routing |
| Go | 1.22 → 1.23 | Iterators, timer changes |

### PHP

| Stack | From → To | Key Changes |
|-------|-----------|-------------|
| PHP | 8.1 → 8.2 | Readonly classes, null/false types |
| PHP | 8.2 → 8.3 | Typed class constants, json_validate |
| Laravel | 10 → 11 | Slim skeleton, per-second rate limiting |
| Symfony | 6.x → 7.x | PHP 8.2+, new security system |

### Ruby

| Stack | From → To | Key Changes |
|-------|-----------|-------------|
| Ruby | 3.1 → 3.2 | WASI support, Regexp improvements |
| Ruby | 3.2 → 3.3 | YJIT improvements, Prism parser |
| Rails | 7.0 → 7.1 | Async queries, Dockerfile generator |
| Rails | 7.1 → 7.2 | Dev containers, default PWA |

## Migration Patterns

### 1. Dependency Update (Low Risk)
```bash
# JavaScript
npm update [package]

# Python  
pip install --upgrade [package]

# Go
go get -u [package]
```

### 2. Major Version Upgrade (Medium-High Risk)
1. Read official migration guide
2. Check community issues/discussions
3. Update in isolated branch
4. Run full test suite
5. Deploy to staging first
6. Monitor after production deploy

### 3. Stack Migration (High-Critical Risk)
1. Create parallel implementation
2. Feature flag for gradual rollout
3. Data migration strategy
4. Maintain backward compatibility
5. Monitor metrics closely
6. Keep old system running until verified

## Principles

| DON'T | DO |
|-------|-----|
| Update everything at once | Update incrementally |
| Skip reading changelogs | Read migration guides thoroughly |
| Migrate in production | Test in staging first |
| Forget rollback plan | Always have a way back |
| Rush the process | Take time, verify each step |
| Assume it works | Run full test suite |
| Ignore deprecation warnings | Fix warnings before they become errors |

## Pre-Migration Checklist

- [ ] Current version documented
- [ ] All tests passing
- [ ] Git branch created
- [ ] Backup/snapshot available
- [ ] Team notified
- [ ] Downtime window scheduled (if needed)
- [ ] Rollback plan documented

## Post-Migration Checklist

- [ ] All tests passing
- [ ] No new console warnings/errors
- [ ] No deprecation warnings (or plan to fix)
- [ ] Performance benchmarked
- [ ] Documentation updated
- [ ] Lock files committed (`package-lock.json`, `poetry.lock`, etc.)
- [ ] Team notified of completion
- [ ] Monitoring in place
