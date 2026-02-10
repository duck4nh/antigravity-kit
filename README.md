# Antigravity Kit

> **AI Agent Capability Expansion Toolkit** - Bộ công cụ mở rộng khả năng AI coding assistant với 60+ skills, rules, và workflows chuyên biệt.

[![Version](https://img.shields.io/badge/Version-4.1.1-blue)](https://github.com/duck4nh/antigravity-kit)
[![Skills](https://img.shields.io/badge/Skills-60+-blue)](#-skills)
[![Commands](https://img.shields.io/badge/Commands-14+-green)](#-commands)
[![Rules](https://img.shields.io/badge/Rules-13-green)](#-rules)
[![IDEs](https://img.shields.io/badge/IDEs-Antigravity%20%7C%20OpenCode-purple)](#-installation)

---

## Table of Contents

- [Introduction](#-introduction)
- [What's New in v4.1.1](#-whats-new-in-v411)
- [Supported IDEs](#-supported-ides)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Commands](#-commands)
- [Skills](#-skills)
- [Rules](#-rules)
- [Agents](#-agents)
- [Usage Examples](#-usage-examples)
- [Project Structure](#-project-structure)
- [Credits](#-credits)
- [Contributing](#-contributing)

---

## 🌟 Introduction

**Antigravity Kit** là bộ công cụ toàn diện bao gồm:

- **Skills** - Chuyên môn domain-specific (React, Node.js, Database, Testing, UI/UX...)
- **Rules** - Guidelines và constraints cho agent behavior
- **Modes** - Task-specific workflows (Build, Debug, Optimize, Review...)
- **Commands** - Slash commands để thực hiện tác vụ nhanh chóng
- **Agents** - Specialized agents cho development tasks

### Key Features

✅ **68 Skills** - Lazy-loaded để tiết kiệm context  
✅ **14 Commands** - Nhanh chóng thực hiện tác vụ phức tạp  
✅ **13 Rules** - Hướng dẫn agent behavior  
✅ **Dual IDE Support** - Hoạt động trên cả Antigravity và OpenCode  
✅ **Enhanced Workflow** - 3-level debugging, TDD workflow, security checklist  
✅ **Vibecode Integration** - Partnership model cho project development

### Powered By

- [UI UX Pro Max](https://ui-ux-pro-max-skill.nextlevelbuilder.io/) - Design Intelligence với 50 styles, 21 palettes, 50 font pairings
- [ClaudeKit](https://claudekit.cc/) - Production-ready AI subagents và workflows

---

## 🚀 What's New in v4.1.1

### Codex Skill Naming Update

- Renamed custom Codex skills to shorter IDs (removed `vibecode-` prefix).
- Examples: `mode-vision`, `mode-blueprint`, `template-saas-app`, `quality-gates`.

### New Codex Usage Documentation

- Added detailed per-skill guide:
  - `templates/.codex/SKILLS_USAGE_GUIDE.md`
- Includes: when-to-use matrix, per-skill prompts, lifecycle combos, troubleshooting.

### Template and Config Alignment

- Updated template skill indexes under:
  - `templates/.codex/skills/index.md`
  - `templates/.agents/skills/index.md`
- Updated config path examples in:
  - `templates/.codex/config.toml`

### Previous Major Additions (v4.0)

- Vibecode lifecycle commands: `/vision`, `/blueprint`, `/investigate`, `/qa`, `/xray`, `/handover`.
- Partnership workflow for planning-first project execution.

---

## 🎯 Supported IDEs

| IDE | Folder | Features | Context Usage |
|-----|--------|----------|---------------|
| **OpenCode** | `.opencode/` + `AGENTS.md` | Skills loaded on-demand, minimal context | ~2500 tokens |
| **Antigravity** | `.agent/` | Full rules với activation types, workflows | Standard |

Both IDEs share cùng skills và capabilities, optimized cho mỗi platform's architecture.

---

## 📦 Installation

### Using CLI (Recommended)

```bash
# Navigate to your project
cd your-project

# Install cho both IDEs (recommended)
npx @duck4nh/antigravity-kit init

# Or specify target IDE
npx @duck4nh/antigravity-kit init --ide opencode
npx @duck4nh/antigravity-kit init --ide antigravity
npx @duck4nh/antigravity-kit init --ide both
```

### CLI Commands

| Command | Description |
|---------|-------------|
| `npx @duck4nh/antigravity-kit init` | Install vào current directory |
| `npx @duck4nh/antigravity-kit update` | Update đến latest version |
| `npx @duck4nh/antigravity-kit status` | Check installation status |

### CLI Options

| Option | Description |
|--------|-------------|
| `-i, --ide <target>` | Target IDE: `antigravity`, `opencode`, hoặc `both` |
| `-f, --force` | Overwrite existing installation |
| `-p, --path <dir>` | Custom project path |
| `-b, --branch <name>` | Use specific branch |

---

## 🎮 Quick Start

### For OpenCode Users

```bash
# 1. Install
npx @duck4nh/antigravity-kit init --ide opencode

# 2. Skills tự động load khi needed
User: "Fix bug in this React component"
Agent: (automatically loads react-expert skill)

# 3. Use slash commands
User: /fix "Login button not working"
User: /review src/
User: /test

# 4. Press Tab to switch giữa Build và Plan modes
```

### For Antigravity Users

```bash
# 1. Install
npx @duck4nh/antigravity-kit init --ide antigravity

# 2. Rules tự động apply dựa trên activation type
# - always_on: Luôn active
# - model_decision: Agent quyết định khi apply

# 3. Skills có sẵn trong .agent/skills/
# 4. Workflows có sẵn trong .agent/workflows/
```

---

## 💻 Commands

### Core Commands

| Command | Purpose | Usage | Time |
|---------|---------|-------|------|
| `/fix` | **3-Level Tiered Debugging** | `/fix "Bug description" [--level 1\|2\|3]` | 5-60 min |
| `/review` | **Structured Code Review** | `/review <path>` | 10-15 min |
| `/test` | **Test Execution** | `/test [test-pattern]` | 2-5 min |
| `/commit` | **Smart Git Commit** | `/commit "message"` | 1 min |
| `/clean` | **Code Cleanup** | `/clean <path>` | 5-10 min |
| `/enhance` | **Code Enhancement** | `/enhance <path>` | 10-15 min |
| `/plan` | **Planning Mode** | `/plan "task"` | 5-10 min |
| `/think` | **Deep Analysis** | `/think "question"` | 5-10 min |

### Vibecode Commands (Partnership Model)

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/vision` | **AI proposes vision first** | Starting new project from scratch |
| `/blueprint` | **Create detailed blueprint** | After vision is approved |
| `/investigate` | **Deep debugging protocol** | Complex bugs cần thorough investigation |
| `/qa` | **Quality assurance planning** | Creating comprehensive test plans |
| `/xray` | **Project documentation** | Handover, onboarding, codebase analysis |
| `/handover` | **Alias cho /xray** | Same as /xray |

### Command Comparison

| Task | Old Way | New Way (v4.1.1) | Benefit |
|------|---------|----------------|---------|
| **Simple bug** | `/fix` + manual steps | `/fix` (Level 1 auto) | ⚡ 5-10 min |
| **Complex bug** | Manual investigation | `/investigate` hoặc `/fix --level 3` | 🔬 Thorough analysis |
| **New project** | Start coding immediately | `/vision` → `/blueprint` → build | 🎯 Better architecture |
| **Code review** | Manual checklist | `/review` (structured output) | 📊 Actionable feedback |

---

## 🎓 Skills

Skills are domain-specific expertise modules loaded on-demand bởi agent.

### Frontend

| Skill | Description | Triggers |
|-------|-------------|----------|
| `react-expert` | React 18/19, hooks, patterns, performance | react, component, hooks |
| `nextjs-expert` | App Router, Server Components, SSR | next, nextjs, app router |
| `css-expert` | CSS architecture, responsive, design systems | css, styling, responsive |
| `state-management-expert` | Redux, Zustand, React Query | state, redux, store |
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 font pairings | design, ui, ux, styling |
| `accessibility-expert` | WCAG compliance, a11y testing | accessibility, a11y, wcag |

### Backend

| Skill | Description | Triggers |
|-------|-------------|----------|
| `nodejs-expert` | Async patterns, modules, performance | node, nodejs, backend |
| `nestjs-expert` | Module architecture, DI, testing | nest, nestjs |
| `rest-api-expert` | RESTful design, HTTP semantics | api, rest, endpoint |
| `auth-expert` | JWT, OAuth 2.0, RBAC, security | auth, authentication, jwt |

### Database

| Skill | Description | Triggers |
|-------|-------------|----------|
| `prisma-expert` | Schema design, migrations, queries | prisma, orm, schema |
| `database-expert` | General database optimization | database, db, sql |
| `postgres-expert` | PostgreSQL-specific patterns | postgres, postgresql |
| `mongodb-expert` | MongoDB document modeling | mongodb, mongo |
| `redis-expert` | Caching, sessions, rate limiting | redis, cache |

### Testing

| Skill | Description | Triggers |
|-------|-------------|----------|
| `testing-expert` | General testing strategies | test, testing, tdd |
| `jest-expert` | Jest framework, mocking | jest, unit test |
| `vitest-expert` | Vitest, Vite integration | vitest |
| `playwright-expert` | E2E testing, browser automation | playwright, e2e |

### DevOps & Tools

| Skill | Description | Triggers |
|-------|-------------|----------|
| `devops-expert` | CI/CD, infrastructure | devops, cicd, deployment |
| `docker-expert` | Containerization, Compose | docker, container |
| `github-actions-expert` | GitHub Actions workflows | github actions, workflow |
| `git-expert` | Git workflows, conflicts | git, merge, conflict |
| `typescript-expert` | TypeScript patterns, type system | typescript, ts, types |

### Workflow Modes

| Skill | Description | Triggers |
|-------|-------------|----------|
| `mode-consulting` | Compare options, make recommendations | should, recommend, compare |
| `mode-build` | Create features, components, modules | create, build, implement |
| `mode-debug` | Fix bugs, analyze root cause | fix, debug, error |
| `mode-optimize` | Refactor, improve performance | optimize, refactor, improve |
| `mode-learn` | Explain concepts, code, architecture | explain, how does, what is |
| `mode-review` | Code review, security audit | review, check, audit |
| `mode-migrate` | Version upgrades, stack migrations | upgrade, migrate, update |
| `mode-investigate` | Deep debugging protocol | investigate, deep debug |
| `mode-qa` | Quality assurance planning | qa, test plan, quality |
| `mode-xray` | Project documentation | xray, handover, onboarding |

### Security & Operations

| Skill | Description | Triggers |
|-------|-------------|----------|
| `pentest-expert` | Penetration testing methodology | pentest, security test |
| `web-security-expert` | OWASP, XSS, SQLi, CSRF | security, vulnerability |
| `exploit-dev-expert` | Exploit development, PoC | exploit, poc, payload |
| `mode-tool-dev` | Security tool development | script, automate, scanner |
| `cloud-deployment-expert` | VPS, AWS, Docker deployment | deploy, production, vps |
| `linux-server-expert` | Ubuntu/Debian, Nginx, SSL | server, nginx, ssl |
| `system-design-expert` | Architecture, scalability | architecture, design, scale |

---

## 📋 Rules

Rules là guidelines điều hướng agent behavior (Antigravity only).

### Activation Types

| Type | Description |
|------|-------------|
| `always_on` | Luôn được áp dụng |
| `model_decision` | Agent tự quyết định khi nào áp dụng |

### Rules List

| File | Activation | Description |
|------|------------|-------------|
| `01-identity.md` | Always On | Role & working principles |
| `02-task-classification.md` | Always On | Task types classification |
| `03-mode-consulting.md` | Model Decision | Consulting process |
| `04-mode-build.md` | Model Decision | Build process |
| `05-mode-debug.md` | Model Decision | Debug process |
| `06-mode-optimize.md` | Model Decision | Optimization process |
| `07-mode-learn.md` | Model Decision | Learning/explaining process |
| `08-mode-review.md` | Model Decision | Code review process |
| `09-mode-migrate.md` | Model Decision | Migration process |
| `10-technical-standards.md` | Always On | Coding standards |
| `11-communication.md` | Always On | Communication style |
| `12-checklist.md` | Always On | Pre-delivery checklist |
| `13-special-situations.md` | Always On | Edge case handling |

---

## 🤖 Agents

### Core OpenCode Agents

| Agent | Triggers | Expertise |
|-------|----------|-----------|
| `fullstack-dev` | frontend, backend, react, api | Next.js, React, Node.js, APIs |
| `infra-expert` | database, devops, docker, deploy | PostgreSQL, MongoDB, Docker, CI/CD |
| `code-reviewer` | review, audit, check | Code quality, architecture, best practices |
| `security-expert` | security, vulnerability | OWASP, secure coding, vulnerability assessment |

### Vibecode Agents (Partnership Model)

| Agent | Triggers | Role | Description |
|-------|----------|------|-------------|
| **Architect** | vision, propose, design | Leads with patterns | Proposes complete vision first |
| **Builder** | build, implement | Executes vision | Implements approved blueprint |
| **Investigator** | investigate, debug, analyze | Deep debugging | 9-step investigation protocol |
| **QA Specialist** | qa, test planning, quality | Quality assurance | Tiered testing approach |
| **X-Ray** | xray, handover, document | Documentation | Project analysis & handover |

> **💡 Partnership Model**: AI proposes vision first (80% patterns), you provide context (20% unique) = Perfect product

---

## 📚 Usage Examples

### Example 1: Quick Bug Fix (Level 1)

```bash
# Agent auto-classifies as Level 1 (simple bug)
User: /fix "Email validation not working"

Agent Output:
🔍 Analyzing bug...
📊 Bug Classification: Level 1 (Simple)
⚡ Quick Fix Workflow initiated (5-10 min)

1. Reproduce → Enter invalid email, nothing happens
2. Diagnose → Missing regex validation
3. Fix → Add email validation regex
4. Verify → Test with valid/invalid emails

✅ Fixed: Email validation now works
✅ Tested: Valid emails pass, invalid emails show error
⏱️ Time: 8 minutes
```

### Example 2: Partnership Model - New Project

```bash
# Step 1: AI proposes vision
User: /vision "I need a landing page for my SaaS product"

Agent: Proposes complete architecture:
- Hero section with CTA
- Social proof (logos, testimonials)
- Problem/Solution framework
- Pricing table
- FAQ section
- Recommended tech stack: Next.js + Tailwind + shadcn/ui

# Step 2: Provide context
User: "Our audience is developers. Focus on API features and code examples."

Agent: Adjusts vision to include:
- Interactive API demo
- Code snippets in multiple languages
- Developer-focused copy

# Step 3: Create blueprint
User: /blueprint

Agent: Creates detailed blueprint with all sections, components, and implementation plan
```

### Example 3: Deep Investigation (Level 3)

```bash
User: /fix "Production API timeout at 2-3 PM daily" --level 3

Agent Process:
1. Pre-Debug: Gather info (logs, recent changes, metrics)
2. Reproduce: Load test at peak traffic
3. Diagnose: API times, DB queries, memory profiling
4. Hypothesize: 5 potential causes
5. Confirm: API timeout + no retry + slow DB query
6. Fix: Timeout + Retry + Circuit breaker
7. Verify: Load test, performance comparison
8. Impact: p95 -90%, errors -93%
9. Rollback: Document rollback triggers & steps

✅ Fixed: API handles peak traffic
📊 Performance: p95 800ms (was 8000ms), error rate 0.1% (was 15%)
⏱️ Time: 45 minutes
```

### Example 4: Code Review

```bash
User: /review src/services/auth.ts

Agent Output:
📊 Code Review Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 Metrics
  Files: 1
  Lines: 245
  Functions: 12
  Complexity: Medium

🚨 Critical Issues (2)
  [!] Hardcoded JWT secret in line 45
  [!] No rate limiting on login endpoint

⚠️ Major Issues (3)
  [*] Missing error handling in refreshToken()
  [*] No input validation on email field
  [*] Token expiration not configurable

💪 Strengths
  ✓ Clean separation of concerns
  ✓ Good use of TypeScript types
  ✓ Comprehensive JSDoc comments

📋 Action Items
  1. Move JWT secret to environment variables
  2. Add rate limiting middleware
  3. Implement error boundaries
  4. Add input validation with Zod
```

---

## 📁 Project Structure

```
your-project/
├── .opencode/                  # OpenCode configuration
│   ├── opencode.json           # Config file
│   ├── skill/                  # 60+ skills (lazy-loaded)
│   │   ├── react-expert/
│   │   ├── typescript-expert/
│   │   └── ...
│   ├── command/                # 14+ slash commands
│   │   ├── fix.md
│   │   ├── review.md
│   │   ├── vision.md
│   │   └── ...
│   ├── agent/                  # Specialized agents
│   │   ├── fullstack-dev.md
│   │   ├── security-expert.md
│   │   └── ...
│   └── instructions/           # Workflow instructions
│       ├── pre-delivery-checklist.md
│       ├── security-checklist.md
│       ├── tdd-workflow.md
│       └── error-handling-advanced.md
├── .agent/                     # Antigravity configuration
│   ├── rules/                  # 13 rule files
│   │   ├── 01-identity.md
│   │   ├── 02-task-classification.md
│   │   └── ...
│   ├── skills/                 # 35+ skills
│   │   ├── react-expert/
│   │   ├── nestjs-expert/
│   │   └── ...
│   └── workflows/              # Workflow definitions
│       ├── request.md
│       └── ui-ux-pro-max.md
├── shared/                     # Shared resources
│   └── ui-ux-pro-max/          # UI/UX design data
│       ├── data/               # CSV databases
│       │   ├── colors.csv
│       │   ├── styles.csv
│       │   └── ...
│       └── scripts/            # Search scripts
├── .vibecode/                  # Vibecode integration
│   ├── README.md               # Vibecode philosophy
│   ├── PHILOSOPHY.md           # Partnership model
│   └── workflows/              # MASTER workflows
│       ├── VIBECODE-MASTER.md
│       ├── DEBUG-MASTER.md
│       └── ...
└── AGENTS.md                   # Core rules cho OpenCode
```

---

## 🎓 Credits

Project này được xây dựng dựa trên và inspired bởi:

| Project | Description | Link |
|---------|-------------|------|
| **UI UX Pro Max** | Design Intelligence - 50 styles, 21 palettes, 50 font pairings | [ui-ux-pro-max-skill.nextlevelbuilder.io](https://ui-ux-pro-max-skill.nextlevelbuilder.io/) |
| **ClaudeKit** | Production-ready AI subagents và workflows | [claudekit.cc](https://claudekit.cc/) |
| **Vibecode Kit** | Partnership model workflows & templates | [vibecode.cc](https://vibecode.cc/) |

---

## 🤝 Contributing

### Adding a New Skill

1. Create folder in both locations:
   - `.opencode/skill/your-skill/SKILL.md`
   - `.agent/skills/your-skill/SKILL.md`

2. Use correct frontmatter:

**OpenCode format:**
```markdown
---
name: your-skill
description: >-
  Skill description (max 1024 chars). Explain when to use this skill.
license: MIT
compatibility: opencode
metadata:
  category: frontend
---

# Your Skill

Instructions for the agent...
```

**Antigravity format:**
```markdown
---
name: your-skill
description: Skill description. Use when X or Y.
---

# Your Skill

Instructions for the agent...
```

### Adding a New Command

1. Create file: `.opencode/command/your-command.md`
2. Add frontmatter:

```markdown
---
description: Command description
argument-hint: "[optional-arg]"
---

# /your-command

Command purpose and usage...
```

### Adding a New Rule (Antigravity only)

1. Create file: `.agent/rules/XX-your-rule.md`
2. Add frontmatter:

```markdown
---
activation: always_on | model_decision
description: When to apply (if model_decision)
---

# Your Rule

Content...
```

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/duck4nh">duck4nh</a>
</p>

<p align="center">
  <a href="https://github.com/duck4nh/antigravity-kit/stargazers">⭐ Star us on GitHub!</a>
</p>
