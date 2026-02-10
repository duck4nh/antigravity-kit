---
name: mode-debug
description: Structured debug mode focused on root-cause confirmation and controlled fixes.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: DEBUG
  triggers:
    - "bug"
    - "error"
    - "not working"
  outputs:
    - ROOT_CAUSE_REPORT
  source_refs:
    - DEBUG-MASTER-v4.txt
---

# Mode Debug

## Workflow
1. Gather evidence.
2. Form hypotheses.
3. Validate in order.
4. Confirm root cause.
5. Apply one controlled fix at a time.

## Guardrails
- No blind guessing.
- Document fix and verification results.
