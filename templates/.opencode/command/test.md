---
description: Run the complete testing pipeline
argument-hint: [specific test file or pattern - optional]
---

# Testing Pipeline

**Target:** $ARGUMENTS (or all tests if not specified)

---

## Test Execution vs QA Planning

**Use `/test` for:**
- Running existing test suites
- Executing tests to verify code works
- Quick validation after changes
- CI/CD pipeline testing
- Checking if tests pass

**Examples:**
```
/test
/test tests/auth.test.ts
/test --watch
```

**Use `/qa` for:**
- Planning comprehensive test strategies
- Designing test approaches before implementation
- Preventing issues before they occur
- Establishing quality standards
- Creating complete test plans

**Examples:**
```
/qa Plan testing for new payment feature
/qa Create QA strategy for authentication system
/qa Design test coverage for API endpoints
```

**Choosing the right approach:**
- If you want to RUN tests and see results → `/test`
- If you want to PLAN how to test something → `/qa`

**Typical workflow:**
```
1. /qa - Plan testing approach (before building)
2. [Build feature]
3. /test - Execute tests (after building)
4. /fix or /investigate - Fix any failures
```

---

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
