---
description: Generate changelog from git commits
triggers:
  - changelog
  - release notes
  - version history
  - what changed
---

# Changelog Generator

Generate changelogs from git commit history.

## Process

1. **Analyze commits** since last release/tag
2. **Categorize** by conventional commit type
3. **Group** by feature area
4. **Format** for release notes

## Output Format

```markdown
# Changelog

## [1.2.0] - 2025-01-22

### Added
- New feature X (#123)
- Support for Y (#124)

### Changed
- Improved performance of Z (#125)
- Updated dependencies (#126)

### Fixed
- Bug in component A (#127)
- Memory leak in service B (#128)

### Deprecated
- Old API endpoint `/v1/old`

### Removed
- Legacy support for X

### Security
- Patched vulnerability CVE-2025-XXXX
```

## Commit Type Mapping

| Prefix | Category |
|--------|----------|
| `feat:` | Added |
| `fix:` | Fixed |
| `docs:` | Documentation |
| `refactor:` | Changed |
| `perf:` | Changed (Performance) |
| `test:` | (Internal) |
| `chore:` | (Internal) |
| `BREAKING CHANGE:` | ⚠️ Breaking |

## Commands

```bash
# Get commits since last tag
git log $(git describe --tags --abbrev=0)..HEAD --oneline

# Get all tags
git tag --sort=-version:refname

# Commits between versions
git log v1.0.0..v1.1.0 --oneline
```

## Best Practices

- Link to PRs/issues when available
- Highlight breaking changes prominently
- Group related changes together
- Keep descriptions concise but clear
