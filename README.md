# Antigravity Kit

> **AI Agent Capability Expansion Toolkit** - A comprehensive collection of skills, rules, and workflows for AI coding assistants.

[![Skills](https://img.shields.io/badge/Skills-42+-blue)](#-skills)
[![Rules](https://img.shields.io/badge/Rules-13-green)](#-rules)
[![IDEs](https://img.shields.io/badge/IDEs-Antigravity%20%7C%20OpenCode-purple)](#-installation)

---

## Table of Contents

- [Introduction](#-introduction)
- [Supported IDEs](#-supported-ides)
- [Installation](#-installation)
- [Skills](#-skills)
- [Rules](#-rules)
- [Usage](#-usage)
- [Credits](#-credits)
- [Contributing](#-contributing)

---

## Introduction

**Antigravity Kit** is a comprehensive collection of:

- **Skills** - Domain-specific expertise (React, Node.js, Database, Testing, UI/UX...)
- **Rules** - Guidelines and constraints for agent behavior
- **Modes** - Task-specific workflows (Build, Debug, Optimize, Review...)

This toolkit combines the best of:
- [UI UX Pro Max](https://ui-ux-pro-max-skill.nextlevelbuilder.io/) - Design Intelligence with 50 styles, 21 palettes, 50 font pairings
- [ClaudeKit](https://claudekit.cc/) - Production-ready AI subagents, workflows, and integrations

---

## Supported IDEs

| IDE | Folder | Features |
|-----|--------|----------|
| **OpenCode** | `.opencode/` + `AGENTS.md` | Skills loaded on-demand, minimal context (~2500 tokens) |
| **Antigravity** | `.agent/` | Full rules with activation types, workflows |

Both IDEs share the same skills and capabilities, optimized for each platform's architecture.

---

## Installation

### Using CLI (Recommended)

```bash
# Navigate to your project
cd your-project

# Install for both IDEs (recommended)
npx @duck4nh/antigravity-kit init

# Or specify target IDE
npx @duck4nh/antigravity-kit init --ide opencode
npx @duck4nh/antigravity-kit init --ide antigravity
npx @duck4nh/antigravity-kit init --ide both
```

### CLI Commands

| Command | Description |
|---------|-------------|
| `npx @duck4nh/antigravity-kit init` | Install into current directory |
| `npx @duck4nh/antigravity-kit update` | Update to the latest version |
| `npx @duck4nh/antigravity-kit status` | Check installation status |

### CLI Options

| Option | Description |
|--------|-------------|
| `-i, --ide <target>` | Target IDE: `antigravity`, `opencode`, or `both` |
| `-f, --force` | Overwrite existing installation |
| `-p, --path <dir>` | Custom project path |
| `-b, --branch <name>` | Use specific branch |

---

## Skills

Skills are domain-specific expertise modules loaded on-demand by the agent.

### Frontend

| Skill | Description |
|-------|-------------|
| `react-expert` | React 18/19, hooks, patterns, performance |
| `nextjs-expert` | App Router, Server Components, SSR |
| `css-expert` | CSS architecture, responsive, design systems |
| `state-management-expert` | Redux, Zustand, React Query |
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 font pairings |
| `accessibility-expert` | WCAG compliance, a11y testing |

### Backend

| Skill | Description |
|-------|-------------|
| `nodejs-expert` | Async patterns, modules, performance |
| `nestjs-expert` | Module architecture, DI, testing |
| `rest-api-expert` | RESTful design, HTTP semantics |
| `auth-expert` | JWT, OAuth 2.0, RBAC, security |

### Database

| Skill | Description |
|-------|-------------|
| `prisma-expert` | Schema design, migrations, queries |
| `database-expert` | General database optimization |
| `postgres-expert` | PostgreSQL-specific patterns |
| `mongodb-expert` | MongoDB document modeling |

### Testing

| Skill | Description |
|-------|-------------|
| `testing-expert` | General testing strategies |
| `jest-expert` | Jest framework, mocking |
| `vitest-expert` | Vitest, Vite integration |
| `playwright-expert` | E2E testing, browser automation |

### DevOps & Tools

| Skill | Description |
|-------|-------------|
| `devops-expert` | CI/CD, infrastructure |
| `docker-expert` | Containerization, Compose |
| `github-actions-expert` | GitHub Actions workflows |
| `git-expert` | Git workflows, conflicts |
| `typescript-expert` | TypeScript patterns, type system |

### Workflow Modes

| Skill | Description |
|-------|-------------|
| `mode-consulting` | Compare options, make recommendations |
| `mode-build` | Create features, components, modules |
| `mode-debug` | Fix bugs, analyze root cause |
| `mode-optimize` | Refactor, improve performance |
| `mode-learn` | Explain concepts, code, architecture |
| `mode-review` | Code review, security audit |
| `mode-migrate` | Version upgrades, stack migrations |

---

## Rules

Rules are guidelines that direct agent behavior (Antigravity only).

### Activation Types

| Type | Description |
|------|-------------|
| `always_on` | Always applied |
| `model_decision` | Agent decides when to apply |

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

## Usage

### OpenCode

Skills are automatically loaded when the agent identifies a related task:

```
User: "Fix bug in this React component"
Agent: (loads react-expert skill on-demand)
```

**Tips:**
- Press **Tab** to switch between Build and Plan modes
- AGENTS.md contains core rules (~2500 tokens for minimal context)
- Skills loaded on-demand to save context

### Antigravity

Rules apply based on activation type:
- **always_on**: Always active
- **model_decision**: Agent decides when to apply

Skills are available in `.agent/skills/` and loaded automatically.

---

## Project Structure

```
your-project/
├── .opencode/                  # OpenCode configuration
│   ├── opencode.json           # Config file
│   └── skill/                  # 42+ skills
│       ├── react-expert/
│       ├── typescript-expert/
│       └── ...
├── .agent/                     # Antigravity configuration
│   ├── rules/                  # 13 rule files
│   ├── skills/                 # 35+ skills
│   └── workflows/              # Workflow definitions
├── shared/                     # Shared resources
│   └── ui-ux-pro-max/          # UI/UX design data
│       ├── data/               # CSV databases
│       └── scripts/            # Search scripts
└── AGENTS.md                   # Core rules for OpenCode
```

---

## Credits

This project is built upon and inspired by:

| Project | Description | Link |
|---------|-------------|------|
| **UI UX Pro Max** | Design Intelligence - 50 styles, 21 palettes, 50 font pairings | [ui-ux-pro-max-skill.nextlevelbuilder.io](https://ui-ux-pro-max-skill.nextlevelbuilder.io/) |
| **ClaudeKit** | Production-ready AI subagents and workflows | [claudekit.cc](https://claudekit.cc/) |

---

## Contributing

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

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with by <a href="https://github.com/duck4nh">duck4nh</a>
</p>
