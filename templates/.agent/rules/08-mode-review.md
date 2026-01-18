---
activation: model_decision
description: Apply when user asks for code review, security audit, or best practices check
---

# [REVIEW] Review Mode

**Goal:** Evaluate code quality, identify issues, and suggest improvements.

## Process

1. Understand the code's purpose and language
2. Review against language-specific standards
3. Identify issues by severity
4. Suggest specific improvements
5. Highlight what's done well

## Output Format

```markdown
## [REVIEW]: [Component/Feature name]

**Scope:** [What was reviewed]
**Language:** [JS/Python/Java/Go/PHP/Ruby]
**Overall:** [Good / Needs Work / Critical Issues]

---

### Summary
| Category | Status |
|----------|--------|
| Functionality | [OK] / [?] / [X] |
| Code Quality | [OK] / [?] / [X] |
| Security | [OK] / [?] / [X] |
| Performance | [OK] / [?] / [X] |
| Maintainability | [OK] / [?] / [X] |

---

### Issues Found

#### [!] Critical
| Issue | Location | Suggestion |
|-------|----------|------------|
| [Description] | `file:line` | [How to fix] |

#### [*] Important
| Issue | Location | Suggestion |
|-------|----------|------------|
| [Description] | `file:line` | [How to fix] |

#### [-] Minor / Suggestions
| Issue | Location | Suggestion |
|-------|----------|------------|
| [Description] | `file:line` | [How to fix] |

---

### What's Done Well
- [+] [Positive point 1]
- [+] [Positive point 2]

---

### Recommended Actions
1. [ ] [Action 1] - Priority: High
2. [ ] [Action 2] - Priority: Medium
3. [ ] [Action 3] - Priority: Low
```

## Review Checklist (All Languages)

### Code Quality
| Check | JS/TS | Python | Java | Go | PHP | Ruby |
|-------|-------|--------|------|-----|-----|------|
| No loose typing | No `any` | Type hints used | No raw `Object` | No `interface{}` abuse | Type declarations | N/A |
| Meaningful names | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| No duplicate code | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Small functions | < 50 lines | < 50 lines | < 50 lines | < 50 lines | < 50 lines | < 50 lines |
| Error handling | try/catch | try/except | try/catch | if err != nil | try/catch | begin/rescue |

### Security (All Languages)
- [ ] No hardcoded secrets/credentials
- [ ] Input validation present
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (output escaping)
- [ ] Proper authentication/authorization
- [ ] Sensitive data not logged

### Security - Language Specific
| Concern | JS/TS | Python | Java | Go | PHP | Ruby |
|---------|-------|--------|------|-----|-----|------|
| SQL Injection | Parameterized | `%s` params | PreparedStatement | `?` placeholders | PDO prepare | ActiveRecord |
| XSS | `textContent`, sanitize | Template escaping | OWASP encoder | `html/template` | `htmlspecialchars` | ERB `<%=` |
| Secrets | `process.env` | `os.environ` | `System.getenv` | `os.Getenv` | `getenv()` | `ENV[]` |

### Performance (All Languages)
- [ ] No unnecessary loops/iterations
- [ ] No memory leaks (proper cleanup)
- [ ] Efficient algorithms (avoid O(n²) when O(n) possible)
- [ ] Proper caching where needed
- [ ] No N+1 queries

### Performance - Language Specific
| Concern | JS/TS | Python | Java | Go | PHP | Ruby |
|---------|-------|--------|------|-----|-----|------|
| Re-renders | `React.memo` | N/A | N/A | N/A | N/A | N/A |
| Memory | Cleanup in useEffect | Context managers | try-with-resources | `defer` | unset() | Blocks |
| Async | `Promise.all` | `asyncio.gather` | `CompletableFuture` | Goroutines | Async libs | Threads |

### Maintainability
- [ ] Code is self-documenting
- [ ] Complex logic has comments explaining WHY
- [ ] Follows project/language conventions
- [ ] Easy to test (dependencies injectable)
- [ ] Easy to extend (SOLID principles)

## Severity Levels

| Level | Symbol | Description | Action Required |
|-------|--------|-------------|-----------------|
| **Critical** | [!] | Security vulnerability, data loss, crash | Must fix before merge |
| **Important** | [*] | Bug, bad practice, tech debt | Should fix soon |
| **Minor** | [-] | Style, optimization, nice-to-have | Optional improvement |

## Common Issues by Language

### JavaScript/TypeScript
| Issue | Example | Fix |
|-------|---------|-----|
| Missing null check | `user.name` | `user?.name` |
| `any` type | `data: any` | Define proper type |
| Memory leak | Missing cleanup | `useEffect` cleanup |

### Python
| Issue | Example | Fix |
|-------|---------|-----|
| No type hints | `def get(id):` | `def get(id: int) -> User:` |
| Bare except | `except:` | `except SpecificError:` |
| Mutable default | `def f(x=[]):` | `def f(x=None):` |

### Java
| Issue | Example | Fix |
|-------|---------|-----|
| Null not checked | `user.getName()` | `Optional.ofNullable(user)` |
| Resource leak | Manual close | try-with-resources |
| God class | 1000+ lines | Split responsibilities |

### Go
| Issue | Example | Fix |
|-------|---------|-----|
| Ignored error | `result, _ := f()` | `if err != nil { }` |
| Naked return | `return` in long func | Named or explicit returns |
| Data race | Shared state | Channels or sync.Mutex |

### PHP
| Issue | Example | Fix |
|-------|---------|-----|
| No type hints | `function f($x)` | `function f(int $x): string` |
| SQL injection | `"WHERE id=$id"` | PDO prepared statements |
| `==` vs `===` | `$x == 0` | `$x === 0` |

### Ruby
| Issue | Example | Fix |
|-------|---------|-----|
| N+1 query | `posts.each { p.author }` | `Post.includes(:author)` |
| Missing safe navigation | `user.address.city` | `user&.address&.city` |
| No rescue specificity | `rescue` | `rescue StandardError` |

## Review Types

### Quick Review
- **Focus:** Security, critical bugs, obvious issues
- **Time:** 5-10 minutes
- **Output:** Short summary + critical issues only

### Standard Review
- **Focus:** All categories
- **Time:** 15-30 minutes
- **Output:** Full review format

### Deep Review
- **Focus:** Architecture, scalability, edge cases
- **Time:** 30+ minutes
- **Output:** Full review + architecture suggestions

## Principles

| DON'T | DO |
|-------|-----|
| Only criticize | Balance with positive feedback |
| Be vague ("this is bad") | Be specific with location and fix |
| Focus on style only | Prioritize functionality and security |
| Rewrite everything | Suggest minimal effective changes |
| Skip context | Understand purpose before reviewing |
| Apply wrong language rules | Check language-specific conventions |
