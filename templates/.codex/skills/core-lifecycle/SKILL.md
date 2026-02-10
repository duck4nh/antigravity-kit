---
name: core-lifecycle
description: Enforces the six-step lifecycle with mandatory checkpoints and transition criteria.
license: MIT
compatibility: opencode
metadata:
  category: core
  lifecycle_step: GLOBAL
  triggers:
    - "lifecycle"
    - "vision context blueprint"
    - "workflow gates"
  outputs:
    - LIFECYCLE_CHECKPOINT_REPORT
  source_refs:
    - PHILOSOPHY_V4.md
    - VIBECODE-MASTER-v4.txt
---

# Lifecycle Core

## Flow
`VISION -> CONTEXT -> BLUEPRINT -> CONTRACT -> BUILD -> REFINE`

## Transition Rules
- 1->2: vision proposed with layout/style/stack.
- 2->3: context captured and applied.
- 3->4: blueprint approved and frozen.
- 4->5: contract confirmed and scope locked.
- 5->6: build runs and core functionality works.

## Block Conditions
- Missing approval at any checkpoint.
- Major change request after blueprint freeze.

## Required Outputs
- Stage summary and next allowed action.
