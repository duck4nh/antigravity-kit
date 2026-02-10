---
name: vibecode-core-governance
description: Governance model, gatekeeping policy, and definition-of-done for Vibecode + .opencode.
license: MIT
compatibility: opencode
metadata:
  category: core
  lifecycle_step: GLOBAL
  triggers:
    - "governance"
    - "definition of done"
    - "gatekeeping"
  outputs:
    - GOVERNANCE_DECISION
  source_refs:
    - PHILOSOPHY_V4.md
    - coding-preferences-general.md
    - pre-delivery-checklist.md
---

# Governance Core

## Mission
- Keep lifecycle discipline and prevent scope drift.
- Enforce security and quality defaults.

## Mandatory Gates
1. No major build before Vision + Context.
2. No implementation before Blueprint + Contract.
3. No release before QA and pre-delivery checks.

## Definition of Done
- Deliverables match approved contract.
- No hardcoded secrets.
- Quality checks completed.
- Handover artifacts available.

## Escalation
- If request violates gates, stop and route back to required stage.
