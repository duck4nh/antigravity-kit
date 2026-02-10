# Git Commit Guidelines

## Conventional Commits

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

## Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(auth): add OAuth login` |
| `fix` | Bug fix | `fix(cart): correct total calculation` |
| `docs` | Documentation | `docs: update API readme` |
| `style` | Formatting only | `style: fix indentation` |
| `refactor` | Code restructure | `refactor(user): extract validation` |
| `test` | Add/fix tests | `test(api): add user endpoint tests` |
| `chore` | Maintenance | `chore: update dependencies` |
| `perf` | Performance | `perf(db): optimize query` |
| `ci` | CI/CD changes | `ci: add deploy workflow` |

## Rules

1. **Subject line**
   - Max 72 characters
   - Imperative mood ("Add" not "Added")
   - No period at end
   - Capitalize first letter

2. **Body** (optional)
   - Explain what and why, not how
   - Wrap at 72 characters
   - Blank line between subject and body

3. **Footer** (optional)
   - Breaking changes: `BREAKING CHANGE: description`
   - Issue references: `Fixes #123`, `Closes #456`

## Examples

### Simple
```
feat(auth): add password reset endpoint
```

### With Body
```
fix(cart): prevent negative quantities

Users were able to enter negative quantities which caused
incorrect totals. Added validation to reject values < 1.

Fixes #234
```

### Breaking Change
```
feat(api): change response format to JSON:API

BREAKING CHANGE: All API responses now follow JSON:API spec.
Clients must update their parsing logic.
```

## Before Committing

- [ ] Code compiles without errors
- [ ] Tests pass
- [ ] Linting passes
- [ ] No debug code left
- [ ] No secrets/credentials
