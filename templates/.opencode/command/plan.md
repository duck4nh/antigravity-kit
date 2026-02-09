---
description: Create and execute implementation plans
argument-hint: [action: write|execute] [description]
---

# Planning

**Input:** $ARGUMENTS

## Write Plan
```bash
/plan write "User authentication system"
/plan "Add payment integration"
```

### Structure
```markdown
## Objective
[What we're building]

## Phases

### Phase 1: Foundation
- [ ] Task 1.1
- [ ] Task 1.2
- Checkpoint: [verification]

### Phase 2: Core
- [ ] Task 2.1
- [ ] Task 2.2
- Checkpoint: [verification]

### Phase 3: Polish
- [ ] Task 3.1
- [ ] Task 3.2
- Checkpoint: [verification]

## Risks
- Risk 1 → Mitigation
- Risk 2 → Mitigation

## Success Criteria
- [ ] Functional requirements
- [ ] Tests passing
- [ ] Documentation complete
```

## Execute Plan
```bash
/plan execute
```

### Workflow
1. Load existing plan
2. Execute tasks in batches
3. Checkpoint after each phase
4. Report progress
5. Handle blockers (pause & consult)

## Tips
- Keep phases small (3-5 tasks each)
- Define clear checkpoints
- Document blockers immediately
