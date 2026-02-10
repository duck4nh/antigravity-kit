# Vibecode Workflows

This guide explains the key workflows available in Vibecode Kit v4.0 and when to use each one.

---

## Overview

Vibecode Kit provides multiple workflows for different development scenarios:

1. **Partnership Workflows** - For new projects and features
2. **Specialized Workflows** - For debugging, QA, documentation
3. **Traditional Commands** - For quick tasks and fixes

---

## 1. Partnership Workflows

### Vision-First Workflow (`/vision`)

**Use when**: Starting a new project from scratch

**Process:**
```
/vision [description]
    ↓
AI proposes complete vision
    ↓
You provide context
    ↓
AI adjusts vision
    ↓
/blueprint (create detailed spec)
    ↓
[Implement according to blueprint]
    ↓
/refine (minor adjustments)
```

**Example:**
```
/vision I need a landing page for my project management tool

AI: [Proposes complete landing page structure with hero, social proof,
     problem/pain points, solution, how it works, testimonials, pricing,
     FAQ, final CTA - with suggested tech stack and design system]

You: It's a tool for remote teams, primary audience is startup founders,
     colors should be blue-based (trust), need video testimonial section

AI: [Adjusts vision to include remote team focus, founder-oriented copy,
     blue color palette, adds video testimonial section]

You: Approved!

/blueprint Create detailed specification

[Builder implements exact blueprint]
```

**When to use:**
- ✅ New projects
- ✅ New major features
- ✅ Complete page redesigns
- ✅ Starting from blank canvas

---

### Template-Based Workflow

**Use when**: Building specific project types with proven patterns

**Available Templates:**
- `vibecode-landing-page` - High-converting landing pages
- `vibecode-saas-app` - Full SaaS applications
- `vibecode-dashboard` - Data visualization dashboards
- `vibecode-blog-docs` - Content sites (blog/docs)
- `vibecode-portfolio` - Personal portfolios

**Process:**
```
[Describe project]
    ↓
AI loads appropriate template
    ↓
AI proposes vision based on template
    ↓
You provide context
    ↓
[Create blueprint]
    ↓
[Build]
```

**Example:**
```
I need a portfolio for a UX designer

[AI loads vibecode-portfolio skill]

AI: For UX designers, I recommend the BOLD style with strong visual
     impact, large typography, expressive animations. Here's my vision...

You: I want to showcase case studies, need project cards with hover
     effects, clients are startups and agencies

AI: [Adjusts vision for case study focus, startup/agency audience]

You: Perfect, create blueprint!

[Proceed with build]
```

**When to use:**
- ✅ Building common project types
- ✅ Want proven patterns
- ✅ Faster than custom vision
- ✅ Industry-standard approaches

---

## 2. Specialized Workflows

### Deep Investigation (`/investigate`)

**Use when**: Complex bugs requiring systematic analysis

**Process:**
```
/investigate [issue description]
    ↓
Gather context (5W1H)
    ↓
Reproduce & diagnose
    ↓
Forensic analysis
    ↓
Deep investigation
    ↓
Root cause identification
    ↓
Fix & verify
    ↓
Prevention planning
```

**Example:**
```
/investigate Random 500 errors in production, only happens under load

AI: Let me gather context:
     - When did this start? (When)
     - What's the error pattern? (What)
     - Under what load? (Where)
     - Any recent changes? (Why)
     [Gathers logs, metrics, recent commits]

[Analyzes request patterns, database queries, memory usage]

AI: Root cause identified: Database connection pool exhaustion under high load
     Location: lib/db.ts:45 (90% confidence)
     Fix: Implement connection pooling with retry logic
     Verify: Load test with 1000 concurrent users

[Implements fix, verifies, adds monitoring]
```

**When to use:**
- ✅ Intermittent bugs
- ✅ Performance issues
- ✅ Complex failures
- ✅ Need root cause analysis

---

### Quality Assurance (`/qa`)

**Use when**: Planning comprehensive testing strategy

**Process:**
```
/qa [feature description]
    ↓
Define scope
    ↓
Test strategy (unit/integration/E2E)
    ↓
Test planning
    ↓
Environment setup
    ↓
Execution plan
    ↓
Success criteria
    ↓
Continuous improvement
```

**Example:**
```
/qa Plan testing for payment processing feature

AI: Scope: Payment processing with Stripe
     Critical paths: Checkout, refund, webhooks
     Risk areas: Payment failures, webhook security

Test Strategy:
- Unit: Payment service, webhook handlers
- Integration: Stripe API, database
- E2E: Complete checkout flow
- Security: Webhook signature verification
- Performance: Load test payment processing

Environment:
- Test: Stripe test mode
- Staging: Stripe test mode with staging data
- Production: Monitor with dashboards

Success Criteria:
- 95%+ code coverage
- All payment flows tested
- Webhook retry logic verified
- Load tested to 100 payments/minute
```

**When to use:**
- ✅ Before building features
- ✅ Establishing quality standards
- ✅ Preventing issues
- ✅ Compliance requirements

---

### Handover Documentation (`/xray`)

**Use when**: Creating comprehensive project documentation

**Process:**
```
/xray [project] for [purpose]
    ↓
SCAN (project structure)
    ↓
ANALYZE (architecture, patterns)
    ↓
DOCUMENT (create docs)
    ↓
PACKAGE (assemble handoff)
    ↓
VERIFY (validate completeness)
```

**Example:**
```
/xray Current project for handoff to new developer

[Scans project structure, dependencies, config]
[Analyzes architecture, data flow, components]
[Creates PROJECT_XRAY.md with:
 - Overview: E-commerce platform, Next.js 14, PostgreSQL
 - Architecture: Diagrams showing app structure
 - Components: 47 components organized by feature
 - API: 12 endpoints with request/response examples
 - Database: Schema with relationships
 - Environment: All required env vars documented
 - Setup: Complete setup instructions
 - Common tasks: Add product, update inventory, process orders
 - Troubleshooting: Common issues and solutions
]

[Verifies fresh clone works with documentation]
```

**When to use:**
- ✅ Transferring projects
- ✅ Developer onboarding
- ✅ Client delivery
- ✅ Archive before leaving

---

## 3. Traditional Workflows

### Quick Fix (`/fix`)

**Use when**: Straightforward bugs with clear solutions

**Process:**
```
/fix [bug description]
    ↓
Gather info
    ↓
Reproduce
    ↓
Identify cause
    ↓
Implement fix
    ↓
Verify
    ↓
Document
```

**Example:**
```
/fix Button click not firing on Submit button

[Quickly identifies: onClick handler missing]
[Adds: onClick={handleSubmit}]
[Verifies: Button now works]
```

**When to use:**
- ✅ Simple bugs
- ✅ Clear error messages
- ✅ Obvious solutions
- ✅ Quick fixes

---

### Test Execution (`/test`)

**Use when**: Running existing test suites

**Process:**
```
/test [optional pattern]
    ↓
Type check
    ↓
Lint
    ↓
Run tests
    ↓
Report results
    ↓
Fix failures
```

**When to use:**
- ✅ Verifying code works
- ✅ CI/CD pipelines
- ✅ After changes
- ✅ Quick validation

---

## Workflow Selection Guide

| Situation | Use Workflow |
|-----------|-------------|
| **New project from scratch** | `/vision` or template skill |
| **Specific project type** | Template skill (landing-page, saas-app, etc.) |
| **Complex bug investigation** | `/investigate` |
| **Simple bug fix** | `/fix` |
| **Planning testing strategy** | `/qa` |
| **Running tests** | `/test` |
| **Creating documentation** | `/xray` or `/handover` |
| **Detailed specifications** | `/blueprint` |
| **Code review** | `/review` |
| **Performance optimization** | `/enhance` |

---

## Combining Workflows

Workflows can be combined for complex projects:

**Example: Building New Feature**
```
1. /vision - Propose feature architecture
2. /qa - Plan testing strategy
3. [Build feature]
4. /test - Run tests
5. /review - Code review
6. [Fix issues if found]
```

**Example: Debugging Production Issue**
```
1. /investigate - Deep analysis
2. /fix - Implement fix
3. /test - Verify fix
4. /qa - Update tests to prevent recurrence
```

**Example: Project Handoff**
```
1. /xray - Create comprehensive documentation
2. /review - Verify code quality
3. /test - Ensure all tests pass
4. [Handoff complete]
```

---

## Best Practices

### 1. Choose Right Workflow
- Start with `/vision` for new projects
- Use `/investigate` for complex issues
- Quick tasks → `/fix`, `/test`

### 2. Provide Clear Context
- Be specific about goals
- Share constraints early
- Describe target audience
- Mention tech preferences

### 3. Follow the Process
- Don't skip steps
- Approve blueprints before building
- Test after implementing
- Document changes

### 4. Iterate Appropriately
- Vision stage: Major changes OK
- Blueprint stage: Confirm before proceeding
- Build stage: Only minor refinements
- After build: Use `/refine` for tweaks

---

## Summary

**Partnership Workflows** leverage AI's pattern knowledge:
- Start with proposed vision
- Add your unique context
- Build better products faster

**Specialized Workflows** provide deep expertise:
- Debugging with `/investigate`
- Quality planning with `/qa`
- Documentation with `/xray`

**Traditional Commands** handle quick tasks:
- Simple fixes with `/fix`
- Test execution with `/test`

**All work together** to provide comprehensive development support.

---

*Vibecode Kit v4.0 - The Partnership Edition*
