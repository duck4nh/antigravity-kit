# Pre-Delivery Verification Checklist

## Phase 1: Self-Verification (TRƯỚC khi deliver)

### Functional Verification
- [ ] Manual test Happy Path
- [ ] Test all edge cases
- [ ] Test error scenarios
- [ ] Verify with sample data

### Code Quality Verification
- [ ] Lint pass (no warnings)
- [ ] Type check pass
- [ ] No console.log/debug statements
- [ ] No TODO/FIXME comments (or documented)

### Integration Verification
- [ ] Works with existing code
- [ ] No breaking changes to dependents
- [ ] API contracts maintained
- [ ] Database migrations tested (if any)

### Performance Smoke Test
- [ ] No obvious performance degradation
- [ ] Memory usage acceptable
- [ ] Load time acceptable (frontend)

## Phase 2: Automated Verification (NẾU có)

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass (critical paths)
- [ ] Test coverage ≥ 80%

## Phase 3: Documentation

- [ ] README updated (if needed)
- [ ] API documentation updated (if public API)
- [ ] Migration guide (if breaking change)

## Phase 4: Final Approval Questions

TRƯỚC khi mark task "complete", HỎI user:

1. ✅ "I've verified [X, Y, Z]. Ready for your review?"
2. ✅ "Found potential issue: [description]. Address now or later?"
3. ✅ "Edge case [X] needs clarification. How should it behave?"

## Pre-Delivery Command Reference

```bash
# Run all verification commands
npm run lint
npm run typecheck
npm test

# Check for debug statements
rg "console\.(log|debug|warn)" src/

# Check for TODO/FIXME
rg "TODO|FIXME" src/
```
