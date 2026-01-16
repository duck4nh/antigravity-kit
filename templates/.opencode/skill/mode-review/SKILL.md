---
name: mode-review
description: >-
  Review mode for code review, security audit, and best practices check. Use when
  user asks for code review or quality assessment. Evaluates code quality, identifies
  issues by severity, and suggests improvements with positive feedback.
license: MIT
compatibility: opencode
metadata:
  category: workflow
  source: antigravity-kit
---

# Review Mode

**Goal:** Evaluate code quality, identify issues, and suggest improvements.

## Process

1. Understand the code's purpose and language
2. Review against language-specific standards
3. Identify issues by severity
4. Suggest specific improvements
5. Highlight what's done well

## Output Format

```markdown
## REVIEW: [Component/Feature name]

**Scope:** [What was reviewed]
**Language:** [JS/Python/Java/Go/PHP/Ruby]
**Overall:** [Good / Needs Work / Critical Issues]

---

### Summary
| Category | Status |
|----------|--------|
| Functionality | OK / Warning / Error |
| Code Quality | OK / Warning / Error |
| Security | OK / Warning / Error |
| Performance | OK / Warning / Error |
| Maintainability | OK / Warning / Error |

---

### Issues Found

#### Critical
| Issue | Location | Suggestion |
|-------|----------|------------|
| [Description] | `file:line` | [How to fix] |

#### Important
| Issue | Location | Suggestion |
|-------|----------|------------|
| [Description] | `file:line` | [How to fix] |

#### Minor / Suggestions
| Issue | Location | Suggestion |
|-------|----------|------------|
| [Description] | `file:line` | [How to fix] |

---

### What's Done Well
- [Positive point 1]
- [Positive point 2]

---

### Recommended Actions
1. [ ] [Action 1] - Priority: High
2. [ ] [Action 2] - Priority: Medium
3. [ ] [Action 3] - Priority: Low
```

## Review Checklist

### Code Quality (All Languages)
- [ ] No loose typing (no `any`, raw `Object`, `interface{}` abuse)
- [ ] Meaningful names
- [ ] No duplicate code
- [ ] Small functions (< 50 lines)
- [ ] Proper error handling

### Security (All Languages)
- [ ] No hardcoded secrets/credentials
- [ ] Input validation present
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (output escaping)
- [ ] Proper authentication/authorization
- [ ] Sensitive data not logged

### Performance
- [ ] No unnecessary loops/iterations
- [ ] No memory leaks (proper cleanup)
- [ ] Efficient algorithms (avoid O(n²) when O(n) possible)
- [ ] No N+1 queries

### Maintainability
- [ ] Code is self-documenting
- [ ] Complex logic has comments explaining WHY
- [ ] Follows project/language conventions
- [ ] Easy to test (dependencies injectable)

## Severity Levels

| Level | Description | Action Required |
|-------|-------------|-----------------|
| **Critical** | Security vulnerability, data loss, crash | Must fix before merge |
| **Important** | Bug, bad practice, tech debt | Should fix soon |
| **Minor** | Style, optimization, nice-to-have | Optional improvement |

## Principles

| DON'T | DO |
|-------|-----|
| Only criticize | Balance with positive feedback |
| Be vague ("this is bad") | Be specific with location and fix |
| Focus on style only | Prioritize functionality and security |
| Rewrite everything | Suggest minimal effective changes |
| Skip context | Understand purpose before reviewing |
