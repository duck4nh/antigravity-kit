---
name: mode-blueprint
description: Converts approved vision+context into detailed technical blueprint and approval checkpoint.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: BLUEPRINT
  triggers:
    - "blueprint"
    - "technical spec"
    - "architecture detail"
  outputs:
    - BLUEPRINT.md
  source_refs:
    - VIBECODE-MASTER-v4.txt
    - blueprint.md
---

# Mode Blueprint

## Instructions
- Produce complete structure, design system, stack, and file map.
- Include responsive, accessibility, and quality expectations.
- Add explicit approval checklist.

## Guardrails
- Mark blueprint freeze after approval.
- Route major changes back to Vision.
