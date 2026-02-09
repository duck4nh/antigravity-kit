# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-02-09

### Added - Vibecode Integration (The Partnership Edition)

#### New Commands (Vibecode Partnership Model)
- **`/vision`** - AI proposes complete vision first, then you provide context
- **`/blueprint`** - Create detailed blueprint after vision is approved
- **`/investigate`** - Deep debugging protocol with 9-step investigation
- **`/qa`** - Quality assurance planning with tiered approach (Tier 1/2/3)
- **`/xray`** - Project documentation for handover and onboarding
- **`/handover`** - Alias for /xray command

#### New Skills
- **`mode-investigate`** - Complex bug investigation workflow
  - Evidence collection checklist
  - Hypotheses generation format
  - Investigation procedures
  - Fix design guidelines
- **`mode-qa`** - Quality assurance planning workflow
  - Tiered approach (Tier 1: Smoke, Tier 2: Integration, Tier 3: E2E)
  - Test case templates
  - Project type-specific tests
- **`mode-xray`** - Project documentation workflow
  - 5-step documentation process
  - Analysis output format
  - Handover package structure

#### New Project Template Skills
- **`vibecode-landing-page`** - Landing page architecture with conversion optimization
- **`vibecode-saas-app`** - SaaS application with authentication & subscriptions
- **`vibecode-dashboard`** - Dashboard with data visualization patterns
- **`vibecode-blog-docs`** - Blog/docs with readability & SEO guidelines
- **`vibecode-portfolio`** - Portfolio with visual impact & animation patterns

#### New Instruction Files
- **`vibecode-philosophy.md`** - Partnership model explanation (Architect + Homeowner)
- **`vibecode-workflows.md`** - Complete 6-step workflow documentation
- **`vibecode-agents.md`** - Vibecode agents usage guide

#### Enhanced Documentation
- **README.md** - Complete rewrite with:
  - What's New in v4.0 section
  - Detailed command usage examples
  - Partnership model explanation
  - 60+ skills with triggers
  - 14 commands comparison table
  - 4 detailed usage examples

### Changed

#### Enhanced Commands
- **`/fix`** - Now includes Vibecode cross-reference
  - Auto-suggest `/investigate` after 3 failed fixes
  - Quick reference table comparing /fix vs /investigate

- **`/test`** - Enhanced with QA workflow
  - Added test execution vs QA planning comparison
  - Recommended workflow: /qa → /test

#### Enhanced Configuration
- **`opencode.json`** - Added new instructions:
  - `./.vibecode/README.md`
  - `./.vibecode/workflows/*.md`

- **`AGENTS.md`** - Added Vibecode Agents section:
  - Architect (vision, propose, design)
  - Builder (build, implement)
  - Investigator (investigate, debug, analyze)
  - QA Specialist (qa, test planning)
  - X-Ray (xray, handover, document)

### New Directory Structure
```
templates/.vibecode/
├── README.md                    # Vibecode quick start
├── PHILOSOPHY.md                # Partnership model explained
├── CHANGELOG.md                 # Vibecode version history
└── workflows/
    ├── VIBECODE-MASTER.md       # 6-step vision workflow
    ├── DEBUG-MASTER.md          # 9-step investigation workflow
    ├── QA-MASTER.md             # 6-step QA workflow
    └── XRAY-MASTER.md           # 5-step documentation workflow
```

### Improvements Summary

| Area | Before | After | Benefit |
|------|--------|-------|---------|
| **New Projects** | Start coding immediately | /vision → /blueprint → build | Better architecture |
| **Complex Bugs** | Manual debugging | /investigate (9-step protocol) | Thorough analysis |
| **Quality** | Basic testing | /qa + tiered testing | Comprehensive coverage |
| **Handover** | Manual documentation | /xray (structured output) | Smooth onboarding |
| **Documentation** | Basic README | 4 detailed examples | Clearer guidance |

### Partnership Model Benefits

| Feature | Traditional | Partnership Model |
|---------|-------------|-------------------|
| **Approach** | Follow your instructions | AI proposes vision first |
| **Ratio** | 100% your direction | 80% patterns + 20% your context |
| **Best For** | Specific tasks | New projects, exploration |
| **Time Saved** | 0% | ~40% on architecture decisions |

### Breaking Changes
None. All new features are additive and work alongside existing workflows.

### Migration Guide
No migration needed. All new features are opt-in:
- Use `/vision` for new projects (optional)
- Use `/investigate` for complex bugs (optional)
- Use `/qa` for test planning (optional)
- Existing workflows continue to work unchanged

---

## [3.0.0] - 2026-02-09

### Added - Enhanced Workflow & Quality Assurance

#### New Instruction Files
- **`pre-delivery-checklist.md`** - 4-phase verification workflow
- **`security-checklist.md`** - Security-first development checklist
- **`tdd-workflow.md`** - Test-Driven Development workflow
- **`error-handling-advanced.md`** - Advanced error handling system

#### Enhanced Skills
- **`mode-build`** - Added Test Planning & Security Checklist
- **`mode-debug`** - Added Post-Fix Verification & Impact Assessment
- **`mode-optimize`** - Added Risk Assessment & Rollback Plan

#### Enhanced Commands
- **`/fix`** - 3-Level Tiered Debugging (Quick/Standard/Deep)
- **`/review`** - Structured output with severity classification

---

## [2.2.0] - Previous Release

### Initial Features
- 4 specialized agents
- 8 slash commands
- 60+ lazy-loaded skills
- Multi-model AI provider support
- MCP server integration

---

[Unreleased]: https://github.com/duck4nh/antigravity-kit/tree/HEAD
[4.0.0]: https://github.com/duck4nh/antigravity-kit/releases/tag/v4.0.0
[3.0.0]: https://github.com/duck4nh/antigravity-kit/releases/tag/v3.0.0
[2.2.0]: https://github.com/duck4nh/antigravity-kit/releases/tag/v2.2.0
