---
name: mode-build
description: >-
  Build mode for creating new features, components, or modules. Use when user
  requests creating new code. Follows structured process: confirm scope, propose
  structure, code in order (Types -> Logic -> UI), run checklist.
license: MIT
compatibility: opencode
metadata:
  category: workflow
  source: antigravity-kit
---

# Build Mode

**Goal:** Create new code that meets standards and is maintainable.

## Process

1. Confirm scope & Acceptance Criteria
2. Propose file/component structure
3. Code in order: **Types/Models -> Logic/Services -> Interface -> Styles**
4. Run checklist before delivery
5. Explain complex logic

## Clarifying Questions

When scope is unclear:
- **What exactly should it do?** (core functionality)
- **What should it NOT do?** (boundaries)
- **Any existing patterns to follow?** (consistency)
- **Who will use this?** (end user vs developer)
- **Which language/framework?** (tech stack)

## File Structure Patterns

### JavaScript/TypeScript (React/Node.js)
```plaintext
src/
├── components/          # UI components
├── hooks/               # Custom hooks
├── services/            # Business logic
├── utils/               # Helper functions
├── types/               # TypeScript types
└── index.ts             # Public exports
```

### Python (Django/FastAPI/Flask)
```plaintext
src/
├── models/              # Database models
├── services/            # Business logic
├── routes/ (or views/)  # API endpoints
├── schemas/             # Pydantic/serializers
├── utils/               # Helpers
└── __init__.py
```

### Go
```plaintext
cmd/                     # Entry points
internal/                # Private packages
├── handler/             # HTTP handlers
├── service/             # Business logic
├── repository/          # Data access
└── model/               # Structs
pkg/                     # Public packages
```

## Output Format

```markdown
## BUILD: [Feature name]

**Scope:** [description]
**Language:** [JS/Python/Java/Go/PHP/Ruby]

**Acceptance Criteria:**
- [ ] AC1: [criterion 1]
- [ ] AC2: [criterion 2]

---

### Code:
**File: `[path]`**
```[language]
// Code here
```

---

### Checklist:
- [x] Type-safe / properly typed
- [x] Complete error handling
- [x] No hardcoded values
- [x] Comments for complex logic
```

## Naming Conventions

| Type | JS/TS | Python | Java | Go |
|------|-------|--------|------|-----|
| Variable | `camelCase` | `snake_case` | `camelCase` | `camelCase` |
| Function | `camelCase` | `snake_case` | `camelCase` | `PascalCase`* |
| Class | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` |
| Constant | `UPPER_CASE` | `UPPER_CASE` | `UPPER_CASE` | `PascalCase` |

*Go: Exported functions use PascalCase, private use camelCase

## Principles

| DON'T | DO |
|-------|-----|
| Add features outside scope | Do exactly what's requested |
| Use loose typing (`any`, `Object`) | Declare types completely |
| Hardcode values | Use constants/config/env |
| Skip error handling | Handle errors and edge cases |
| Write one large block | Split into small functions |

## Edge Cases

**Scope too large:**
> "This is a large feature. Let me break it into phases:
> Phase 1: [core] -> Phase 2: [enhancements] -> Phase 3: [polish]"

**Conflicts with existing code:**
> "This might conflict with [existing]. Should I: A) Extend it, or B) Create separate?"
