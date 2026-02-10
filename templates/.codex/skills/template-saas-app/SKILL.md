---
name: template-saas-app
description: SaaS application baseline with auth, dashboard shell, feature modules, and scope boundaries.
license: MIT
compatibility: opencode
metadata:
  category: template
  lifecycle_step: TEMPLATE
  triggers:
    - "saas"
    - "web app"
    - "subscription app"
  outputs:
    - TEMPLATE_DEFAULTS
  source_refs:
    - VIBECODE-MASTER-v4.txt
---

# Template SaaS App

## Default Areas
- Public pages, auth flows, main dashboard, settings/profile.

## Default Stack
- Next.js + Tailwind + auth + data layer (Supabase/Prisma).

## KPI Focus
- Time-to-first-value, role clarity, reliability of core CRUD flows.
