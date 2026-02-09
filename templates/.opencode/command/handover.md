# /handover

The Handover command is an alias for `/xray` - it creates comprehensive documentation for project handoff.

## When to Use

Use `/handover` when:
- Transferring project to another developer/team
- Delivering completed work to client
- Archiving project before leaving
- Onboarding new team members

## What It Does

Creates complete handoff package including:
- Comprehensive documentation
- Architecture diagrams
- Setup instructions
- Deployment guides
- Troubleshooting information

## How to Use

```
/handover [project path] for handoff
```

**Examples:**
```
/handover This project for the new developer joining tomorrow
/handover Current codebase for client delivery
/handover Complete documentation before I transfer
```

## What You'll Get

**PROJECT_XRAY.md** with:
- Complete project overview
- Tech stack and dependencies
- Architecture and structure
- Setup and run instructions
- Deployment guide
- Common tasks reference
- Troubleshooting section

**Plus:**
- Updated README.md
- Environment variable template (.env.example)
- CHANGELOG.md (if missing)

## Verification

The handover protocol includes:
- Documentation completeness check
- Fresh clone simulation
- Code quality assessment
- Security review
- Deployment verification

## Alias For

This command is an alias for `/xray` - both commands do the same thing.

**Use `/handover` when:**
- Purpose is specifically transferring to others
- Want clearer intent in command history

**Use `/xray` when:**
- Need analysis for other purposes (upgrade planning, onboarding)
- Want broader scope beyond just handoff

## Related Commands

- `/xray` - Full command with all use cases
- `/blueprint` - For technical specifications
- `/investigate` - For deep code analysis

## Example Workflow

```
# Complete work on project
/handover Create documentation for new developer

# Output:
✅ PROJECT_XRAY.md created
✅ README.md updated
✅ .env.example created
✅ Documentation verified
✅ Ready for handoff
```

## Best Practices

1. **Run before leaving**: Always create handover docs before project handoff
2. **Include context**: Add any important context not obvious from code
3. **Verify**: Test that fresh clone works with your documentation
4. **Update**: Keep docs updated as project evolves

---

*Part of Vibecode Kit v4.0 "The Partnership Edition"*
