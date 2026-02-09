---
name: mode-debug
description: >-
  Debug mode for fixing bugs, errors, and crashes. Use when user reports bugs or
  errors that need fixing. Follows 5W1H approach: gather info, reproduce, analyze
  root cause, fix, and prevent recurrence.
license: MIT
compatibility: opencode
metadata:
  category: workflow
  source: antigravity-kit
---

# Debug Mode

**Goal:** Find the correct cause, fix the right place, prevent recurrence.

## Process

1. Gather information (5W1H)
2. Reproduce the bug
3. Analyze root cause
4. Propose fix + explanation
5. **Propose prevention measures**
6. **Post-fix verification**
7. **Impact assessment**
8. **Rollback plan (if needed)**

## Required Questions If Information Is Missing

1. Exact error message? (Copy verbatim)
2. Which screen/feature does it occur on?
3. Can it be reproduced? Specific steps?
4. Any recent code changes?
5. Anything unusual in logs?
6. Which language/framework are you using?

## Common Bug Patterns

### Null/None Reference Errors
| Language | Error Message | Typical Cause |
|----------|---------------|---------------|
| JS/TS | `Cannot read property of undefined` | Missing null check |
| Python | `AttributeError: 'NoneType' has no attribute` | Variable is None |
| Java | `NullPointerException` | Object not initialized |
| Go | `panic: runtime error: invalid memory address` | Nil pointer |

### Type/Cast Errors
| Language | Error Message | Typical Cause |
|----------|---------------|---------------|
| JS/TS | `TypeError: X is not a function` | Wrong type assignment |
| Python | `TypeError: unsupported operand type` | Type mismatch |
| Java | `ClassCastException` | Invalid casting |

### Common Logic Bugs
| Bug Type | Symptom | All Languages |
|----------|---------|---------------|
| Off-by-one | Wrong loop bounds | `<` vs `<=`, index starts at 0 or 1 |
| Race condition | Inconsistent data | Async/threading without sync |
| Memory leak | Performance degrades | Missing cleanup, circular refs |
| Infinite loop | App hangs/freezes | Missing break condition |

## Output Format

```markdown
## DEBUG

**Symptom:** [error description]
**Language:** [JS/Python/Java/Go/PHP/Ruby]

**Reproduction:**
1. [Step 1]
2. [Step 2]
3. [Error appears]

---

### Analysis:
**Root Cause:** [root cause]
**Location:** `[file:line]`

### Fix:
```diff
- [old code]
+ [new code]
```

**Reason:** [explanation]

### Prevention:
| Suggestion | Priority |
|------------|----------|
| [Add validation] | High |
| [Write unit test] | Medium |

### Post-Fix Verification:
| Check       | Action/Command                          | Expected   |
| ----------- | --------------------------------------- | ---------- |
| Reproduce   | [Steps to trigger bug]                  | NOT occur  |
| Unit tests  | `npm test -- related.test.ts`           | Pass       |
| Integration | Manual test related features            | Works      |
| Performance | Compare before/after metrics            | No degrade |

### Impact Assessment:
**Affected Areas:**
- [ ] Direct: [list files/functions modified]
- [ ] Indirect: [list dependent modules]
- [ ] User-facing: [list UI/UX changes]

**Risk Level:** [Low/Medium/High]

**Monitoring needed:** [logs/metrics to watch after fix]

### Rollback Plan:
**Rollback if:**
- New errors appear
- Performance degrades > 20%
- Dependent features break

**Rollback steps:**
1. Revert commit [hash]
2. Restart services
3. Verify old behavior restored
4. Document lessons learned
```

## Quick Fix Examples

### JavaScript
```diff
- const userName = user.name;
+ const userName = user?.name ?? 'Unknown';
```

### Python
```diff
- email = data['email']
+ email = data.get('email', '')
```

### Go
```diff
- value := items[index]
+ if index < len(items) {
+     value := items[index]
+ }
```

## Principles

| DON'T | DO |
|-------|-----|
| Guess randomly | Request log/screenshot |
| Refactor randomly | Fix the right place, minimal change |
| Stop after fixing | Verify + prevent recurrence |
| Fix symptoms | Find and fix root cause |
| Skip testing fix | Verify fix works before delivering |
| Ignore side effects | Assess impact + rollback plan |
