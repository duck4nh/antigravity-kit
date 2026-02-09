---
description: Diagnose and fix bugs with systematic debugging
argument-hint: Bug description or error message
---

# Bug Fix & Debug

**Issue:** $ARGUMENTS

> 💡 Load `mode-debug` skill for error patterns, prevention strategies, and examples.

---

## Quick Fix vs Deep Investigation

**Use `/fix` for:**
- Straightforward bugs with clear error messages
- Issues you can quickly identify and resolve
- Simple fixes that don't require extensive analysis
- Problems where the solution is obvious

**Examples:**
```
/fix TypeError: Cannot read property 'x' of undefined
/fix Button click not firing
/fix Import statement missing
```

**Use `/investigate` for:**
- Complex or intermittent bugs
- Issues requiring deep system analysis
- Problems that resist standard debugging
- Root cause analysis for persistent errors
- Understanding WHY something is happening

**Examples:**
```
/investigate Random 500 errors in production
/investigate Memory leak over time
/investigate Performance degradation only under load
```

**Choosing the right approach:**
- If you can say "I know what's wrong, I just need to fix it" → `/fix`
- If you need to say "I need to understand what's happening first" → `/investigate`

---

## Workflow
```
Gather (5W1H) → Reproduce → Analyze → Propose → Fix → Verify → Impact/Rollback
```

## Steps
### 1. Gather (5W1H)
Need info? Error? Screen? Steps? Changes? Logs?

### 2. Reproduce & Diagnose
- Document steps
- Add logs: `console.log('[DEBUG]', { what, data })`

### 3. Analyze Root Cause
**Hypothesize:** 🔴 High / 🟡 Med / 🟢 Low
```
🎯 Root: [desc]
📍 Loc: `file:line`
📊 Conf: X%
🔧 Fix: [solution]
```
**⏸️ Wait approval.**

### 4. Fix
- Minimal targeted fix
- Add defensive checks
- Write regression test

### 5. Verify
✅ Bug gone ✅ Tests pass ✅ No regressions ✅ Logs clean

### 6. Impact & Rollback
- Files: [modified]
- Deps: [dependents]
- Risk: L/M/H
- Rollback: Revert [hash]

### 7. Prevention
| Action | Priority |
|--------|----------|
| [Add validation] | High |
| [Write test] | Med |

## Quick Bug Patterns
| Type | JS/TS | Python | Go |
|------|-------|--------|-----|
| Null | `x?.y ?? d` | `get('k', d)` | Bounds |
| Type | Guard | `isinstance()` | Assert |
| Race | `await` | Lock | Mutex |
| Bounds | Range | Range | Index |

## Output Format
```markdown
## 🔧 FIX: [Title]
**Root:** [desc] @ `file.ts:line` (X%)
### Fix:
```diff
- [old]
+ [new]
```
✅ Verified ✅ Tests ✅ No regressions
**Impact:** [files], Risk [L/M/H], Rollback [hash]
**Prevent:** [action]
```

## Principles
| ❌ DON'T | ✅ DO |
|---------|-------|
| Guess | Request logs |
| Refactor | Minimal fix |
| Stop at fix | Verify + prevent |
| Fix symptoms | Root cause |
| Skip test | Test first |
| Ignore impact | Assess rollback |
