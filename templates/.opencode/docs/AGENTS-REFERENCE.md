# OpenCode Agents

Specialized agents for development tasks. Triggered automatically by context or explicitly with `@agent-name`.

---

## 📋 Quick Navigation

| Documentation | Purpose |
|---------------|---------|
| **Main Agents** | Core OpenCode agents (below) |
| **Vibecode Agents** | Partnership model agents → See `docs/vibecode/vibecode-agents.md` |

---

## Available Agents

### Core OpenCode Agents

| Agent | Trigger | Description |
|-------|---------|-------------|
| | `fullstack-dev` | frontend, backend, react, api | Full-stack: Next.js, React, Node.js, APIs |
| | `infra-expert` | database, devops, docker, deploy | Infrastructure: DB, CI/CD, Cloud |
| | `code-reviewer` | review, audit, check | Code review and quality |
| | `security-expert` | security, vulnerability | Security assessment |

### Vibecode Agents (Partnership Model)

| Agent | Trigger | Description | Documentation |
|-------|---------|-------------|----------------|
| **Architect** | vision, propose, design | Proposes complete vision first | `docs/vibecode/vibecode-agents.md` |
| **Builder** | build, implement | Implements approved blueprint | `docs/vibecode/vibecode-agents.md` |
| **Investigator** | investigate, debug, analyze | Deep debugging protocol | `docs/vibecode/vibecode-agents.md` |
| **QA Specialist** | qa, test planning, quality | Quality assurance planning | `docs/vibecode/vibecode-agents.md` |
| **X-Ray** | xray, handover, document | Project documentation | `docs/vibecode/vibecode-agents.md` |

> **💡 Tip**: Vibecode agents use a **Partnership Model** where AI proposes vision first, then you provide context. Traditional agents follow your direct instructions. Use the right agent for your task!

---

## Available Agents

| Agent | Trigger | Description |
|-------|---------|-------------|
| `fullstack-dev` | frontend, backend, react, api | Full-stack: Next.js, React, Node.js, APIs |
| `infra-expert` | database, devops, docker, deploy | Infrastructure: DB, CI/CD, Cloud |
| `code-reviewer` | review, audit, check | Code review and quality |
| `security-expert` | security, vulnerability | Security assessment |

---

## Agent Details

### fullstack-dev
**Expertise**: Next.js 16+, React 19, Node.js, TypeScript, REST/GraphQL

**When to use**:
- Building pages/components
- Creating APIs
- Full-stack features

```bash
@fullstack-dev Create user authentication system
```

### infra-expert
**Expertise**: PostgreSQL, MongoDB, Docker, CI/CD, AWS/GCP

**When to use**:
- Database design
- Docker setup
- CI/CD pipelines
- Cloud deployment

```bash
@infra-expert Setup GitHub Actions pipeline
```

### code-reviewer
**Expertise**: Code quality, architecture, best practices

**When to use**:
- After completing features
- Before merging PRs
- Architecture decisions

```bash
@code-reviewer Review my changes
```

### security-expert
**Expertise**: OWASP, secure coding, vulnerability assessment

**When to use**:
- Security audits
- Auth implementation
- Vulnerability fixes

```bash
@security-expert Check for vulnerabilities
```

---

## Interaction Rules

**ALWAYS use the `question` tool when:**
- Presenting choices or options to user
- Needing user confirmation for actions
- Asking for preferences or decisions
- Clarifying ambiguous requests

**Benefits:**
- Interactive form select for easy selection
- Option to type custom answer if needed
- Cleaner UX than text-based options

**Example scenarios:**
- "Where to save this file?" → Show location options
- "Which framework?" → Show framework choices
- "Delete or keep?" → Show action options

---

## Agent Modes

| Mode | Description | Permissions |
|------|-------------|-------------|
| `build` | Implementation | Full access |
| `plan` | Analysis only | Read-only |

---

## Creating Custom Agents

```markdown
<!-- .opencode/agent/my-agent.md -->
---
name: my-agent
description: Brief description
---

# Agent Name

## Expertise
- Area 1
- Area 2

## When to Use
- Use case 1

## Process
1. Step 1
2. Step 2
```
