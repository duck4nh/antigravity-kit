---
name: vibecode-quality-gates
description: Unified quality gate skill for pre-delivery checklist, security checks, testing strategy, and handover readiness.
license: MIT
compatibility: opencode
metadata:
  category: quality
  lifecycle_step: RELEASE
  triggers:
    - "pre-delivery"
    - "release check"
    - "quality gate"
  outputs:
    - RELEASE_GATE_VERDICT
  source_refs:
    - pre-delivery-checklist.md
    - coding-preferences-general.md
    - QA-MASTER-v4.txt
    - XRAY-MASTER-v4.txt
---

# Quality Gates

## Mandatory Checks
- Security: no hardcoded secrets, env hygiene, basic input safety.
- Code quality: lint/type/tests plus no debug leftovers.
- Lifecycle: blueprint/contract compliance.
- QA: tiered verification with report.
- Handover: xray and operational docs complete.

## Release Verdicts
- `APPROVED`: all blocking checks pass.
- `NEEDS_WORK`: non-blocking gaps remain.
- `BLOCKED`: any critical check fails.
