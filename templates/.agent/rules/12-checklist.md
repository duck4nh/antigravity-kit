---
activation: always_on
---

# Pre-Delivery Checklist

Mandatory checklist before delivering code. Apply relevant sections based on project type.

## Code Quality (All Languages)

| Check | JS/TS | Python | Java | Go | PHP | Ruby |
|-------|-------|--------|------|-----|-----|------|
| No loose typing | No `any` | Type hints | No raw `Object` | No `interface{}` abuse | Type declarations | N/A |
| No magic values | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Error handling | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Clear naming | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| No duplicate code | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Universal Checks
- [ ] No hardcoded magic numbers/strings (use constants)
- [ ] Complete error handling (no silent failures)
- [ ] Clear variable/function naming (self-documenting)
- [ ] No duplicate code (DRY principle)
- [ ] No commented-out code left in
- [ ] No debug statements left (console.log, print, etc.)

## Structure

- [ ] Correct folder structure for the framework
- [ ] Correct naming convention for the language
- [ ] < 200 lines/file (recommended)
- [ ] < 50 lines/function (recommended)
- [ ] Single Responsibility Principle
- [ ] Proper imports/exports organization

## Security (Critical)

- [ ] No hardcoded secrets/credentials/API keys
- [ ] Environment variables used for config
- [ ] Input validation present
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (output escaping)
- [ ] Authentication/authorization checks in place
- [ ] Sensitive data not logged

## API/Backend

- [ ] Proper HTTP status codes
- [ ] Request validation
- [ ] Error responses are consistent
- [ ] Rate limiting considered
- [ ] CORS configured (if applicable)
- [ ] API documentation updated (if applicable)

## Database

- [ ] Migrations are reversible
- [ ] Indexes added for query performance
- [ ] No N+1 queries
- [ ] Transactions used where needed
- [ ] Data validation at model level
- [ ] Foreign keys and constraints set

## UI/UX (Frontend)

- [ ] Follows Design System
- [ ] Responsive (mobile-first)
- [ ] Loading states
- [ ] Error states
- [ ] Empty states
- [ ] Accessibility (a11y)
  - [ ] Alt text for images
  - [ ] ARIA labels where needed
  - [ ] Keyboard navigation works
  - [ ] Color contrast sufficient

## Performance

### All Languages
- [ ] No memory leaks (proper cleanup)
- [ ] Efficient algorithms (avoid O(n²) when possible)
- [ ] Caching used where appropriate
- [ ] No unnecessary loops/iterations

### Frontend Specific
- [ ] No unnecessary re-renders
- [ ] Lazy loading for heavy components
- [ ] Optimized images (compressed, correct format)
- [ ] Bundle size considered

### Backend Specific
- [ ] Database queries optimized
- [ ] No N+1 queries
- [ ] Async operations where appropriate
- [ ] Connection pooling used

## Maintainability

- [ ] Comments at complex logic (explain WHY)
- [ ] Self-documenting code
- [ ] Testable (dependencies injectable)
- [ ] Extensible (SOLID principles)
- [ ] No unintended side effects
- [ ] Functions are pure where possible

## Testing

- [ ] Unit tests for critical logic
- [ ] Edge cases covered
- [ ] Tests pass locally
- [ ] Test coverage maintained (not decreased)

## Documentation

- [ ] README updated (if applicable)
- [ ] API docs updated (if applicable)
- [ ] Complex logic explained in comments
- [ ] Breaking changes documented

## Quick Checklist by Severity

### 🔴 Must Fix (Blockers)
- [ ] Security vulnerabilities
- [ ] Hardcoded secrets
- [ ] Crashes / critical bugs
- [ ] Data loss potential

### 🟡 Should Fix
- [ ] Missing error handling
- [ ] No input validation
- [ ] Performance issues
- [ ] Missing tests for critical paths

### 🟢 Nice to Have
- [ ] Code style improvements
- [ ] Additional documentation
- [ ] Minor optimizations
- [ ] Edge case handling
