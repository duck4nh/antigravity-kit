# /xray

The Xray command creates comprehensive documentation for project handoff, upgrade planning, or developer onboarding.

## When to Use

Use `/xray` for:

**Handoff Scenarios:**
- Transferring project to another team
- Delivering to client
- Archiving project before departure

**Planning Scenarios:**
- Preparing for major upgrades
- Assessing technical debt
- Planning refactoring work

**Onboarding Scenarios:**
- New developer joining project
- Need quick project understanding
- Learning unfamiliar codebase

## How It Works

The Xray protocol follows a 5-step process:

1. **SCAN**: Analyze project structure and dependencies
2. **ANALYZE**: Deep dive into architecture, patterns, metrics
3. **DOCUMENT**: Create comprehensive documentation
4. **PACKAGE**: Assemble handoff package
5. **VERIFY**: Validate completeness

## What to Provide

When using `/xray`, specify:

**Project Path:**
- Where is the project located?

**Purpose:**
- Handoff (transfer to others)
- Upgrade Planning (assess for upgrades)
- Onboarding (help new developers)
- Archive (document before storage)

## Examples

```
/xray D:/projects/myapp for handoff
/xray Current project for upgrade planning
/xray This codebase for onboarding new developer
/xray Project before I leave for archive
```

## Output

You'll receive:

**PROJECT_XRAY.md** containing:
- Project overview and tech stack
- Architecture diagrams
- Component documentation
- API reference
- Database schema
- Environment variables
- Deployment guide
- Common tasks
- Troubleshooting guide
- Future improvements

**Additional Files:**
- Updated README.md (if needed)
- .env.example (environment template)
- CHANGELOG.md (if doesn't exist)

## Verification

The protocol includes:
- Fresh clone test (simulates new developer)
- Documentation completeness check
- Code quality assessment
- Security checklist
- Deployment verification

## Related Commands

- `/handover` - Alias for /xray
- `/blueprint` - For architectural planning

## Skills Used

This command uses the **mode-xray** skill which provides the handover protocol.

---

*Part of Vibecode Kit v4.0 "The Partnership Edition"*
