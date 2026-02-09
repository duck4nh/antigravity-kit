# OpenCode Configuration Changelog

All notable changes to the OpenCode configuration template will be documented in this file.

## [3.0.0] - 2026-02-09

### Added - Enhanced Workflow & Quality Assurance (Major Release)

### Added - Enhanced Workflow & Quality Assurance

#### New Instruction Files
- **`pre-delivery-checklist.md`** - Comprehensive verification workflow before delivering code
  - 4-phase verification (Self, Automated, Documentation, Approval)
  - Functional, code quality, integration, and performance checks
  - Final approval questions template

- **`security-checklist.md`** - Security-first development checklist
  - Pre-implementation threat modeling
  - Input validation, output encoding, auth/authz checks
  - OWASP Top 10 quick reference
  - Security scanning commands

- **`tdd-workflow.md`** - Test-Driven Development workflow
  - Red-Green-Refactor cycle explanation
  - Test case generation checklist (happy, sad, edge, integration)
  - Complete TDD session example
  - Integration with mode-build workflow

- **`error-handling-advanced.md`** - Advanced error handling system
  - Error type hierarchy (Business, System, Critical)
  - TypeScript error class examples
  - Recovery strategies for each error type
  - Circuit breaker, fallback, timeout patterns
  - Error monitoring integration (Sentry, Datadog)

#### Enhanced Skills

**`mode-build/SKILL.md`**
- ✅ Added **Test Planning phase** after scope confirmation
- ✅ Added **Security Checklist** integration
- ✅ Enhanced checklist with security and pre-delivery verification
- ✅ TDD approach recommended (Tests FIRST)
- ✅ Links to new instruction files

**`mode-debug/SKILL.md`**
- ✅ Added **Post-Fix Verification phase**
- ✅ Added **Impact Assessment** (affected areas, risk level, monitoring)
- ✅ Added **Rollback Plan** (triggers, steps)
- ✅ Enhanced principles table

**`mode-optimize/SKILL.md`**
- ✅ Added **Risk Assessment phase** (risk classification, questions)
- ✅ Added **Safe Optimization Strategies**
  - Feature flag approach
  - Gradual rollout plan
  - A/B testing
- ✅ Added **Rollback Plan** (triggers, steps, safety checklist)
- ✅ Added optimization safety checklist

#### Enhanced Commands

**`command/review.md`**
- ✅ Added **structured code review output format**
  - Summary with metrics
  - Issues by severity (Critical, Major, Minor)
  - Strengths and action items
  - Severity classification guidelines
  - Comprehensive review checklist (6 dimensions)

#### Configuration Updates

**`opencode.json`**
- ✅ Added new instruction files to instructions array
  - pre-delivery-checklist.md
  - security-checklist.md
  - tdd-workflow.md
  - error-handling-advanced.md

### Improvements Summary

| Area          | Before | After | Benefit |
| ------------- | ------ | ----- | ------- |
| **Bug Fixing** | 5W1H + fix | + Post-fix verification + rollback | ✅ Fewer regressions |
| **Coding** | Types → Logic → UI | + Test planning + Security first | ✅ Higher quality |
| **Optimization** | Measure → Improve | + Risk assessment + Safe rollout | ✅ Safer changes |
| **Security** | Reactive (agent) | + Proactive checklist in workflow | ✅ Shift left |
| **Error Handling** | Basic try/catch | + Classification + Recovery | ✅ Better UX |
| **Delivery** | Basic checklist | + Structured verification | ✅ More reliable |
| **Code Review** | Invoke skill | + Structured output format | ✅ Actionable feedback |

### Breaking Changes
None. All changes are additive enhancements.

### Migration Guide
No migration needed. All new features are opt-in and work alongside existing workflows.

---

## [2.2.0] - Previous Release

### Initial Features
- 4 specialized agents (fullstack-dev, infra-expert, security-expert, code-reviewer)
- 8 slash commands (fix, review, test, commit, clean, enhance, plan, think)
- 6 coding guidelines (TypeScript, general, commits, testing, responses, tooling)
- 60+ lazy-loaded skills
- Multi-model AI provider support
- MCP server integration (Context7, Firecrawl, Web Search Prime)

---

## [Unreleased]

### Initial Features
- 4 specialized agents (fullstack-dev, infra-expert, security-expert, code-reviewer)
- 8 slash commands (fix, review, test, commit, clean, enhance, plan, think)
- 6 coding guidelines (TypeScript, general, commits, testing, responses, tooling)
- 60+ lazy-loaded skills
- Multi-model AI provider support
- MCP server integration (Context7, Firecrawl, Web Search Prime)

---

## Format

This changelog follows the principles of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### Types of Changes
- **Added** - New features
- **Changed** - Changes in existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security vulnerability fixes
