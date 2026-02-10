---
name: mode-xray
description: Codebase xray mode for handover, onboarding, and technical debt visibility.
license: MIT
compatibility: opencode
metadata:
  category: mode
  lifecycle_step: XRAY
  triggers:
    - "handover"
    - "onboarding"
    - "xray"
  outputs:
    - PROJECT_XRAY.md
  source_refs:
    - XRAY-MASTER-v4.txt
---

# Mode XRAY

## Instructions
- Scan architecture, dependencies, env requirements, and operating commands.
- Produce a practical handover document with risks and next steps.

## Guardrails
- Exclude secrets from documentation.
- Verify quick-start commands are runnable.
