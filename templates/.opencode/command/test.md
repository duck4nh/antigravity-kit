---
description: Run the complete testing pipeline
argument-hint: [specific test file or pattern - optional]
---

# Testing Pipeline

**Target:** $ARGUMENTS (or all tests if not specified)

## Steps

1. Run `pnpm type:check` - Check for type errors
2. Run `pnpm lint` - Check for linting errors  
3. Run `pnpm test` - Run test suite
4. Report any failures
5. Fix failures if found
6. Repeat until all pass
7. Report success

## Quick Commands

```bash
# Full pipeline
pnpm type:check && pnpm lint && pnpm test

# Specific file
pnpm test -- [file-pattern]

# Watch mode
pnpm test -- --watch
```
