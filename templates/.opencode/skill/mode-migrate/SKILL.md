---
name: mode-migrate
description: >-
  Migrate mode for upgrading dependencies, migrating to new versions or stacks.
  Use when user requests version upgrades or stack migrations. Creates detailed
  migration plan with breaking changes, step-by-step execution, and rollback plan.
license: MIT
compatibility: opencode
metadata:
  category: workflow
  source: antigravity-kit
---

# Migrate Mode

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
## MIGRATE: [From] -> [To]

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
| npm | `npm outdated` |
| Python (pip) | `pip list --outdated` |
| Python (poetry) | `poetry show --outdated` |
| Go | `go list -m -u all` |

### Update Dependencies
| Language | Update Single | Update All |
|----------|---------------|------------|
| npm | `npm install pkg@version` | `npm update` |
| pip | `pip install pkg==version` | `pip install -U -r requirements.txt` |
| Go | `go get pkg@version` | `go get -u ./...` |

## Risk Assessment

| Risk Level | Criteria | Approach |
|------------|----------|----------|
| **Low** | Patch update, no breaking changes | Direct update |
| **Medium** | Minor version, some deprecations | Plan + test |
| **High** | Major version, breaking changes | Detailed plan + staging |
| **Critical** | Stack migration, data schema changes | Phased rollout + rollback ready |

## Common Migrations

### JavaScript/TypeScript
| Stack | From -> To | Key Changes |
|-------|-----------|-------------|
| React | 18 -> 19 | React Compiler, Actions, use() hook |
| Next.js | 14 -> 15 | Async Request APIs, React 19 |
| Node.js | 20 -> 22 | WebSocket client, glob/require sync |

### Python
| Stack | From -> To | Key Changes |
|-------|-----------|-------------|
| Python | 3.11 -> 3.12 | Type param syntax, f-string changes |
| Django | 4.x -> 5.x | Async support, facet filters |
| FastAPI | 0.100+ | Pydantic v2 required |

### Go
| Stack | From -> To | Key Changes |
|-------|-----------|-------------|
| Go | 1.21 -> 1.22 | Range over integers, enhanced routing |
| Go | 1.22 -> 1.23 | Iterators, timer changes |

## Principles

| DON'T | DO |
|-------|-----|
| Update everything at once | Update incrementally |
| Skip reading changelogs | Read migration guides thoroughly |
| Migrate in production | Test in staging first |
| Forget rollback plan | Always have a way back |
| Rush the process | Take time, verify each step |
| Assume it works | Run full test suite |

## Pre-Migration Checklist

- [ ] Current version documented
- [ ] All tests passing
- [ ] Git branch created
- [ ] Backup/snapshot available
- [ ] Rollback plan documented

## Post-Migration Checklist

- [ ] All tests passing
- [ ] No new console warnings/errors
- [ ] Performance benchmarked
- [ ] Documentation updated
- [ ] Lock files committed
