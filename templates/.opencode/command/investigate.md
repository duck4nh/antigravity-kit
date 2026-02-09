# /investigate

The Investigate command initiates deep debugging protocol to thoroughly analyze and fix complex issues.

## When to Use

Use `/investigate` for:
- Complex bugs that are hard to reproduce
- Issues that standard debugging can't solve
- Problems requiring deep system analysis
- Root cause analysis for persistent errors
- Understanding why something is happening

## How It Works

The investigation follows a systematic 7-step protocol:

1. **Initial Report**: Describe the issue comprehensively
2. **Context Gathering**: System, environment, recent changes
3. **Forensic Analysis**: Logs, metrics, error patterns
4. **Deep Investigation**: Code paths, dependencies, race conditions
5. **Root Cause Identification**: The actual underlying cause
6. **Fix & Verify**: Implement and verify the fix
7. **Prevention**: Document and prevent future occurrences

## What to Provide

When using `/investigate`, include:

**Issue Description:**
- What is happening?
- What should happen?
- When did it start?
- How often does it occur?

**Context:**
- Environment (production, staging, local)
- Recent changes
- Error messages/logs
- Steps to reproduce

## Examples

```
/investigate Users are experiencing random 500 errors
/investigate Memory usage keeps increasing over time
/investigate API responses are slow only in production
/investigate Data inconsistency between database and cache
```

## Output

You'll receive:
- Complete investigation report
- Root cause analysis
- Recommended fix
- Prevention strategies
- Documentation for future reference

## Related Commands

- `/fix` - For quick, straightforward fixes
- `/qa` - Quality assurance to prevent issues

## Skills Used

This command uses the **mode-investigate** skill which provides the deep debugging protocol.

---

*Part of Vibecode Kit v4.0 "The Partnership Edition"*
