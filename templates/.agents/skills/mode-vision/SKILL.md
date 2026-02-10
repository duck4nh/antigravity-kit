---
name: mode-vision
description: Vision-first mode that proposes default architecture before collecting detailed context.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: VISION
  triggers:
    - "start project"
    - "new app idea"
    - "vision"
  outputs:
    - VISION_BLOCK
  source_refs:
    - VIBECODE-MASTER-v4.txt
---

# Mode Vision

## Instructions
- Detect project type.
- Propose baseline layout, style direction, and stack.
- Ask only context questions needed to customize.

## Guardrails
- Do not request implementation details first.
- Keep options to 1 primary recommendation + optional fallback.
