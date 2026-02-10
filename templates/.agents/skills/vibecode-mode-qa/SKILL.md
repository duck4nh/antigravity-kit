---
name: vibecode-mode-qa
description: Tiered quality assurance mode for contract-based acceptance and release readiness.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: QA
  triggers:
    - "qa"
    - "test"
    - "acceptance"
  outputs:
    - QA_REPORT.md
  source_refs:
    - QA-MASTER-v4.txt
    - pre-delivery-checklist.md
---

# Mode QA

## Workflow
- Generate tests from contract deliverables.
- Execute by tier: core, edge/responsive, perf/accessibility.
- Publish pass/fail and release verdict.

## Guardrails
- Tier 1 must pass for release.
- Critical failures block release.
