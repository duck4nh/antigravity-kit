---
description: Create a git commit with conventional format
argument-hint: [type: feat/fix/docs/refactor/test/chore]
---

# Git Commit

**Type:** $ARGUMENTS

## Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

## Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting (no code change) |
| `refactor` | Code restructure |
| `test` | Tests |
| `chore` | Maintenance |

## Workflow

1. `git status` - Review changes
2. `git diff` - Verify what's changed
3. `git add <files>` - Stage relevant files
4. Create commit with conventional message
5. `git status` - Verify commit

## Guidelines

- Keep subject line under 72 chars
- Use imperative mood ("Add" not "Added")
- Don't end subject with period
- Separate subject from body with blank line
- Body explains what and why (not how)
