---
description: Create new OpenCode skills with proper structure
triggers:
  - create skill
  - new skill
  - skill template
---

# Skill Creator

Create properly structured OpenCode skills.

## Skill Structure

```
skill/
└── my-skill/
    ├── SKILL.md          # Required - skill definition
    ├── scripts/          # Optional - automation scripts
    │   └── helper.py
    ├── data/             # Optional - reference data
    │   └── examples.csv
    └── references/       # Optional - documentation
        └── patterns.md
```

## SKILL.md Template

```markdown
---
description: Brief description of what this skill does
triggers:
  - keyword 1
  - keyword 2
  - phrase that activates skill
---

# Skill Name

[Detailed description of capabilities]

## When to Use

- Use case 1
- Use case 2

## Process

1. Step 1
2. Step 2
3. Step 3

## Output

- What the skill produces

## Examples

[Usage examples]
```

## Best Practices

1. **Clear triggers** - Use specific keywords
2. **Concise description** - One sentence summary
3. **Structured content** - Headers, lists, tables
4. **Examples** - Show real usage
5. **Keep it focused** - One skill, one purpose

## Trigger Keywords

Good triggers are:
- Specific to the domain
- Commonly used phrases
- Action-oriented verbs

Avoid:
- Too generic ("help", "do")
- Overlapping with other skills
- Too many triggers (5-10 max)
