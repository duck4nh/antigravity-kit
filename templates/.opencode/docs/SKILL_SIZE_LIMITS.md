# Skill Size Limits and Optimization Guidelines

## 🎯 Target Limits

### Maximum Sizes
- **Lines**: ≤ 500 lines per SKILL.md
- **Characters**: ≤ 25,000 characters (~6,250 tokens)
- **File Size**: ≤ 50 KB

### Recommended Sizes
- **Optimal**: 200-400 lines
- **Acceptable**: 400-500 lines
- **Review Required**: > 500 lines

---

## 📊 Current Status (2026-02-10)

### Oversized Skills (>500 lines)

| Skill | Lines | Priority | Action |
|-------|-------|----------|--------|
| jest-expert | 959 | 🔴 High | Break into modules |
| cli-expert | 852 | 🔴 High | Remove verbose examples |
| react-performance | 816 | 🟡 Medium | Condense patterns |
| typescript-type | 795 | 🟡 Medium | Move type tables to docs |
| vite-expert | 790 | 🟡 Medium | Simplify config examples |
| devops-expert | 789 | 🟡 Medium | Focus on core |
| mongodb-expert | 761 | 🟢 Low | Remove duplicate queries |
| vibecode-* | ~750 | 🟢 Low | Template-based, acceptable |

### Statistics
- **Total Skills**: 68
- **Oversized**: 22 skills (32%)
- **Average Size**: 734 lines/skill
- **Target Average**: 350 lines/skill

---

## 🔧 Optimization Strategies

### 1. Move Verbose Examples to Docs/

**Before:**
```markdown
## Usage Examples

### Example 1: Basic setup (50 lines)
### Example 2: Advanced config (100 lines)
### Example 3: Edge cases (80 lines)
```

**After:**
```markdown
## Quick Examples

### Basic setup (10 lines)
### See docs/skills/jest-examples.md for more
```

### 2. Extract Common Patterns

**Before:**
```markdown
## Error Handling
[20 lines repeated in every skill]

## Testing
[15 lines repeated in every skill]

## Best Practices
[30 lines repeated in every skill]
```

**After:**
```markdown
## Error Handling
See [Core Error Handling](../instructions/workflows/error-handling-advanced.md)

## Testing
See [Testing Guidelines](../instructions/workflows/testing-guide.md)
```

### 3. Use Tables Instead of Long Lists

**Before:**
```markdown
### Option 1: Description...
[10 lines]

### Option 2: Description...
[10 lines]

### Option 3: Description...
[10 lines]
```

**After:**
```markdown
| Option | Description | Use Case |
|--------|-------------|----------|
| 1 | Desc | Case 1 |
| 2 | Desc | Case 2 |
| 3 | Desc | Case 3 |
```

### 4. Create Modular Skills

**Before:**
```
jest-expert/SKILL.md (959 lines)
```

**After:**
```
jest-expert/
├── SKILL.md (250 lines - core)
├── patterns.md (200 lines - common patterns)
├── troubleshooting.md (150 lines)
└── examples.md (refer to docs/)
```

---

## 📋 Optimization Checklist

For each oversized skill:

- [ ] Count lines and identify oversized sections
- [ ] Extract verbose examples to docs/
- [ ] Remove duplicate boilerplate
- [ ] Replace long lists with tables
- [ ] Use references to core instructions
- [ ] Consider modular structure if >700 lines
- [ ] Test after optimization

---

## 🚀 Quick Wins (Top 5 Priority)

### 1. jest-expert (959 lines → target 400)
- Move test examples to docs/
- Extract mocking patterns
- Remove redundant setup instructions
- **Savings**: ~400 lines

### 2. cli-expert (852 lines → target 400)
- Remove duplicate command examples
- Simplify framework comparisons
- Focus on Commander.js (primary)
- **Savings**: ~350 lines

### 3. react-performance (816 lines → target 400)
- Condense optimization techniques
- Use tables for pattern comparison
- Move profiling examples to docs/
- **Savings**: ~300 lines

### 4. typescript-type (795 lines → target 400)
- Move type tables to reference
- Simplify advanced examples
- Focus on most-used patterns
- **Savings**: ~300 lines

### 5. vite-expert (790 lines → target 400)
- Remove duplicate config examples
- Simplify plugin explanations
- Focus on common use cases
- **Savings**: ~300 lines

**Total Quick Win Savings**: ~1,650 lines (~6,500 tokens)

---

## 📈 Expected Impact

### When Multiple Skills Loaded

**Before:**
```
Task: React app testing
Skills loaded: react-expert (310) + jest-expert (959) + testing-expert (625)
Total: 1,894 lines
```

**After:**
```
Skills loaded: react-expert (310) + jest-expert (400) + testing-expert (400)
Total: 1,110 lines
Savings: 784 lines (41% reduction)
```

### Context Savings

| Scenario | Before | After | Savings |
|----------|--------|-------|---------|
| **Single skill load** | ~734 lines | ~400 lines | -45% |
| **3 skills load** | ~2,200 lines | ~1,200 lines | -45% |
| **5 skills load** | ~3,670 lines | ~2,000 lines | -45% |

---

## 🔍 Maintenance

### Monthly Review

1. Run size check script
2. Identify new oversized skills
3. Optimize top 3
4. Update this document

### CI Integration

Add to CI pipeline:
```bash
# Check skill sizes
find templates/.opencode/skill -name "SKILL.md" -exec sh -c '
  lines=$(wc -l < "$1")
  if [ $lines -gt 500 ]; then
    echo "Oversized: $1 ($lines lines)"
    exit 1
  fi
' _ {} \;
```

---

**Last Updated**: 2026-02-10
**Next Review**: 2026-03-10
