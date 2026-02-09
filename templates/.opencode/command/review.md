---
description: Request a structured code review
argument-hint: [files or scope]
---

# Code Review

**Focus Area:** $ARGUMENTS

## Instructions

1. Invoke the `code-review` skill
2. Focus on files/areas specified above (if any)
3. Use this STRUCTURED OUTPUT format:

```markdown
# Code Review Report

## 📊 Summary
| Metric         | Value                            |
| -------------- | -------------------------------- |
| Files Reviewed | X                                |
| Total Issues   | X (X critical, X major, X minor) |
| Overall Score  | X/10                             |

## 🔴 Critical Issues (Must Fix)

### Issue #1: [Title]
**Location:** `file.ts:line`
**Severity:** Critical
**Category:** Security / Performance / Bug
**Description:** [What's wrong]
**Impact:** [What could happen]
**Fix:**
```diff
- [current code]
+ [fixed code]
```
**Prevention:** [How to avoid in future]

## 🟠 Major Issues (Should Fix)

[Same format as above]

## 🟡 Minor Issues (Nice to Fix)

[Same format as above]

## ✅ Strengths
- [What's done well]

## 📝 Action Items
| Priority  | Item                  | Effort |
| --------- | --------------------- | ------ |
| 🔴 High   | [fix critical issues] | 2h     |
| 🟠 Medium | [fix major issues]    | 4h     |
| 🟢 Low    | [improvements]        | 1h     |

## 🎯 Recommendations
1. [Most important improvement]
2. [Second improvement]
3. [Third improvement]
```

## Severity Guidelines

| Severity    | Definition                                      | Examples                                 |
| ----------- | ----------------------------------------------- | ---------------------------------------- |
| 🔴 Critical | Security vuln, data loss, crash, broken feature | SQL injection, null pointer, broken auth |
| 🟠 Major    | Performance issue, bad practice, technical debt | N+1 query, no error handling, any type   |
| 🟡 Minor    | Style, naming, minor improvements               | Long line, inconsistent naming           |

## Review Checklist

### Architecture & Design
- [ ] SOLID principles followed
- [ ] Proper separation of concerns
- [ ] Appropriate design patterns
- [ ] Scalable architecture

### Code Quality
- [ ] Type-safe (no `any` abuse)
- [ ] DRY principle (no duplication)
- [ ] Clear naming conventions
- [ ] Proper error handling

### Security & Dependencies
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] OWASP Top 10 check
- [ ] Dependencies up-to-date

### Performance & Scalability
- [ ] No obvious bottlenecks
- [ ] Efficient algorithms
- [ ] Proper caching (if needed)
- [ ] Database optimization

### Testing Coverage
- [ ] Unit tests present
- [ ] Edge cases covered
- [ ] Integration tests (if needed)
- [ ] Test coverage ≥ 80%

### Documentation & API Design
- [ ] Code commented where complex
- [ ] API documented (if public)
- [ ] README updated (if needed)
- [ ] Types/interfaces clear

