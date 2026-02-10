---
name: vibecode-mode-build
description: Build execution mode for implementing approved blueprint/contract without architectural improvisation.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: BUILD
  triggers:
    - "implement"
    - "build now"
    - "coder pack"
  outputs:
    - BUILD_PROGRESS_REPORT
  source_refs:
    - VIBECODE-MASTER-v4.txt
    - coding-preferences-general.md
---

# Mode Build

## Instructions
- Implement exactly according to approved blueprint/contract.
- Report progress by milestones.
- Escalate conflicts instead of unilateral design changes.

## Guardrails
- No tech stack swaps.
- No hidden scope expansion.
