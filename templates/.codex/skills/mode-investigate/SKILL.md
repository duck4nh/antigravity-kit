---
name: mode-investigate
description: Investigation-first mode for uncertain issues, evidence collection, and hypothesis ranking.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: INVESTIGATE
  triggers:
    - "investigate"
    - "unclear issue"
    - "need evidence"
  outputs:
    - INVESTIGATION_LOG
  source_refs:
    - DEBUG-MASTER-v4.txt
---

# Mode Investigate

## Instructions
- Collect reproducible evidence, environment details, and recent changes.
- Rank hypotheses by confidence and test cost.
- Hand off to Debug mode once root cause confidence is high.

## Guardrails
- No implementation in this mode unless explicitly approved.
