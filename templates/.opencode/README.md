# OpenCode Configuration Template

Cấu hình tối ưu cho OpenCode AI Assistant với agents, commands, skills, và instructions.

**Version**: 1.0 + Vibecode Kit v4.0 Integration

---

## 🎉 What's New: Vibecode Kit v4.0

**The Partnership Edition** - A revolutionary approach where AI proposes complete vision first based on proven patterns, then you provide context.

### New Features

- **6 New Commands**: `/vision`, `/investigate`, `/qa`, `/xray`, `/blueprint`, `/handover`
- **8 New Skills**: Mode skills (investigate, qa, xray) + Project templates (landing-page, saas-app, dashboard, blog-docs, portfolio)
- **Partnership Model**: AI proposes first, you provide context (vs. traditional "AI follows orders")
- **Enhanced Commands**: `/fix` and `/test` now include guidance on when to use vs. specialized workflows

### Quick Start with Vibecode

```bash
# Start a new project with AI-proposed vision
/vision I need a landing page for my SaaS product

# Deep investigation for complex bugs
/investigate Random 500 errors in production

# Quality assurance planning
/qa Plan testing for payment feature

# Comprehensive documentation
/xray Current project for handoff
```

**See**: `.vibecode/README.md` for complete Vibecode documentation.

---

## 📁 Cấu Trúc Thư Mục

```
.opencode/
├── opencode.json          # Cấu hình chính (lazy loading enabled)
├── AGENTS.md              # Tài liệu về agents
├── agent/                 # Các agent chuyên biệt (4 files)
├── command/               # Slash commands (14 files: 8 original + 6 new)
├── instructions/          # Hướng dẫn coding (6 files)
├── skill/                 # Knowledge skills (68 files: 60+ original + 8 new)
└── .vibecode/             # Vibecode Kit integration
    ├── PHILOSOPHY.md      # Partnership model philosophy
    ├── README.md          # Vibecode quick start
    ├── CHANGELOG.md       # Version history
    └── workflows/         # Universal workflow protocol
        └── VIBECODE-MASTER.md
```

---

## 📄 opencode.json

**Mục đích**: File cấu hình chính của OpenCode.

**Nội dung**:
| Key | Mô tả |
|-----|-------|
| `instructions` | Paths đến các file instructions |
| `agent` | Định nghĩa các agent modes (build/plan) |
| `tools` | Bật/tắt các tools |
| `mcp` | Model Context Protocol servers |
| `permission` | Quyền cho các commands |
| `skill` | Cấu hình lazy loading cho skills |

**Lazy Loading**: Skills được load khi cần, giảm context size ~40%.

```json
{
  "skill": {
    "autoload": false,
    "triggerLoad": true
  }
}
```

---

## 👤 agent/ - Specialized Agents (4)

**Mục đích**: Các agent chuyên biệt theo domain, được tự động kích hoạt dựa trên context.

### Danh sách Agents

| Agent | File | Expertise |
|-------|------|-----------|
| **Fullstack Dev** | `fullstack-dev.md` | Frontend (React, Next.js, UI) + Backend (APIs, Node.js, Auth) |
| **Infra Expert** | `infra-expert.md` | DevOps (Docker, CI/CD) + Database (Schema, Queries, Migrations) |
| **Security Expert** | `security-expert.md` | Vulnerabilities, Auth, Pentesting, OWASP |
| **Code Reviewer** | `code-reviewer.md` | Code quality, Best practices, Architecture review |

### Cách sử dụng

```bash
# Tự động - OpenCode tự detect dựa trên context
"Tạo một trang user profile với Next.js"  # → fullstack-dev

# Explicit - Gọi trực tiếp
"@infra-expert Setup Docker compose for this project"

# Chaining - Kết hợp nhiều agents
"@fullstack-dev Build the feature" → "@code-reviewer Review changes"
```

---

## ⚡ command/ - Slash Commands (8)

**Mục đích**: Các workflow được định nghĩa sẵn, gọi bằng `/command-name`.

### Danh sách Commands

| Command | Mô tả | Ví dụ |
|---------|-------|-------|
| `/fix` | Diagnose và fix bugs với root cause analysis | `/fix "API returns 500 error"` |
| `/review` | Code review theo 6 dimensions | `/review src/components/` |
| `/test` | Run testing pipeline | `/test` |
| `/commit` | Git commit với conventional format | `/commit feat` |
| `/clean` | Code cleanup và refactoring | `/clean` |
| `/enhance` | UI/UX enhancement (SEO, mobile, design) | `/enhance homepage` |
| `/plan` | Create & execute implementation plan | `/plan "User auth system"` |
| `/think` | Deep analysis & brainstorming | `/think "Redux vs Zustand?"` |

### Cách sử dụng

```bash
# Syntax
/command-name [arguments]

# Ví dụ
/fix "Button click không hoạt động"
/review src/services/
/commit feat
/enhance ProductCard component
/think "Microservices vs Monolith?"
/plan "Implement payment system"
```

### Command Details

#### `/fix` - Bug Fixing (gộp từ fix + debug)
- Root cause analysis với 5W1H
- Systematic debugging
- Fix implementation + prevention

#### `/enhance` - UI/UX Enhancement (gộp từ enhance + seo + mobile + design-system)
- Pixel-perfect UI improvements
- SEO optimization
- Mobile responsiveness
- Design system consistency

#### `/plan` - Planning (gộp từ write-plan + execute-plan)
- Phase 1: Create detailed implementation plan
- Phase 2: Execute with checkpoints
- Supports complex multi-step features

#### `/think` - Deep Analysis (gộp từ ultra-think + brainstorm)
- Extended thinking for complex decisions
- Brainstorming với structured output
- Architecture và technology decisions

---

## 📚 instructions/ - Coding Guidelines (6)

**Mục đích**: Hướng dẫn coding được tự động inject vào context của AI.

### Danh sách Instructions

| File | Nội dung |
|------|----------|
| `coding-preferences-general.md` | SOLID, DRY, env safety, file organization |
| `coding-preferences-typescript.md` | No `any`, async/await, types, utility types |
| `commits.md` | Conventional commits format |
| `testing.md` | Test structure, naming, coverage |
| `responses.md` | Response style (concise, no emojis) |
| `tooling-preferences.md` | Build tools, Makefile, Docker |

### Cách hoạt động

- **Tự động load** - Tất cả files trong `instructions/` được load khi khởi động
- **Không cần gọi** - AI tự động tuân theo các guidelines
- **Có thể customize** - Sửa đổi theo coding standards của team

---

## 🧠 skill/ - Knowledge Skills (60+, Lazy Loaded)

**Mục đích**: Kiến thức chuyên sâu về các công nghệ/domain cụ thể.

**⚡ Lazy Loading**: Skills chỉ được load khi triggered bởi keywords, giảm đáng kể context size.

### Categories

#### Frontend (12 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `react-expert` | react, hooks, components |
| `nextjs-expert` | next.js, app router, server components |
| `css-styling-expert` | css, styling, tailwind |
| `accessibility-expert` | a11y, wcag, aria |
| `frontend-ui-animator` | animation, transition, motion |
| `state-management-expert` | redux, zustand, jotai |
| `react-performance` | performance, optimization, memo |
| `vite-expert` | vite, bundler |
| `webpack-expert` | webpack, bundle |
| `ui-ux-pro-max` | ui design, ux, color palette |

#### Backend (10 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `nodejs-expert` | node.js, express, async |
| `nestjs-expert` | nest.js, modules, di |
| `rest-api-expert` | rest, api design, endpoints |
| `auth-expert` | authentication, jwt, oauth |
| `prisma-expert` | prisma, orm, schema |
| `database-expert` | database, sql, queries |
| `postgres-expert` | postgresql, pg |
| `mongodb-expert` | mongodb, mongoose |
| `redis-expert` | redis, caching |

#### DevOps (8 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `docker-expert` | docker, container |
| `devops-expert` | ci/cd, pipeline |
| `github-actions-expert` | github actions, workflow |
| `git-expert` | git, merge, rebase |
| `cloud-deployment-expert` | deploy, aws, cloud |
| `linux-server-expert` | linux, server, nginx |
| `monitoring-expert` | monitoring, logs, metrics |

#### Testing (5 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `testing-expert` | testing, test |
| `jest-testing-expert` | jest, mock |
| `vitest-testing-expert` | vitest |
| `playwright-expert` | e2e, playwright |

#### Security (6 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `pentest-expert` | pentest, vulnerability |
| `web-security-expert` | xss, sql injection, csrf |
| `exploit-dev-expert` | exploit, payload |
| `bash-automation` | bash, script |
| `python-security-tools` | security tools |

#### Code Quality (5 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `code-review` | review, audit |
| `refactoring-expert` | refactor, clean code |
| `typescript-expert` | typescript, types |
| `documentation-expert` | docs, documentation |
| `oracle` | complex bugs, deep analysis |

#### Modes (10 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `mode-build` | create, implement |
| `mode-debug` | bug, error, fix |
| `mode-optimize` | optimize, performance |
| `mode-review` | review, check |
| `mode-learn` | explain, how does |
| `mode-consulting` | compare, recommend |
| `mode-migrate` | upgrade, migrate |
| `mode-pentest` | security test |
| `mode-exploit` | exploit dev |
| `mode-tool-dev` | script, automation |

#### Utilities (4 skills)
| Skill | Trigger keywords |
|-------|------------------|
| `browser` | puppeteer, automation |
| `skill-creator` | create skill |
| `changelog-generator` | changelog, release notes |
| `cli-expert` | cli, command line |

### Cách sử dụng Skills

```bash
# Tự động - Triggered by keywords (lazy loaded)
"Tối ưu React performance"  # → react-performance skill

# Explicit - Yêu cầu cụ thể
"Sử dụng prisma-expert để design schema cho user management"

# Trong commands
/fix "Database query slow"  # → database-expert + mode-debug
```

---

## 🚀 Quick Start

### 1. Copy template vào project

```bash
cp -r templates/.opencode your-project/.opencode
```

### 2. Customize (optional)

```bash
# Sửa instructions theo team standards
vim .opencode/instructions/coding-preferences-general.md

# Thêm agents mới
vim .opencode/agent/my-custom-agent.md

# Thêm commands mới
vim .opencode/command/my-workflow.md
```

### 3. Sử dụng

```bash
# Khởi động OpenCode
opencode

# Sử dụng commands
/fix "Button không hoạt động"
/review src/

# Agents tự động hoạt động dựa trên context
"Tạo authentication API với JWT"
```

---

## 📝 Tạo Custom Content

### Tạo Agent mới

```markdown
<!-- .opencode/agent/my-agent.md -->
---
name: my-agent
description: Mô tả ngắn về agent
---

# Agent Name

[Chi tiết về expertise]

## When to Use
- Use case 1
- Use case 2

## Process
1. Step 1
2. Step 2

## Output
- Output description
```

### Tạo Command mới

```markdown
<!-- .opencode/command/my-command.md -->
---
description: Mô tả command
argument-hint: [optional arguments]
---

# Command Name

**Input:** $ARGUMENTS

## Steps
1. Step 1
2. Step 2

## Output
- Expected output
```

### Tạo Skill mới

```markdown
<!-- .opencode/skill/my-skill/SKILL.md -->
---
description: Mô tả skill
triggers:
  - keyword1
  - keyword2
---

# Skill Name

[Detailed knowledge content]

## Examples
[Usage examples]
```

---

## ⚙️ Configuration Options

### opencode.json keys

```json
{
  "instructions": ["./AGENTS.md", "./instructions/*.md"],
  "agent": {
    "build": { "mode": "primary" },
    "plan": { "mode": "primary", "permission": { "edit": "deny" } }
  },
  "tools": {
    "bash": true,
    "read": true,
    "write": true,
    "edit": true
  },
  "skill": {
    "autoload": false,
    "triggerLoad": true
  },
  "mcp": {
    "context7": { "enabled": true }
  }
}
```

### Agent Modes

| Mode | Description | Permissions |
|------|-------------|-------------|
| `build` | Implementation mode | Full access |
| `plan` | Analysis mode | Read-only, no edits |

---

## 📊 Statistics

| Category | Count | Notes |
|----------|-------|-------|
| Agents | 4 | Consolidated from 6 |
| Commands | 8 | Consolidated from 14 |
| Instructions | 6 | Coding guidelines |
| Skills | 60+ | Lazy loaded on demand |

### Optimization Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Commands | 14 | 8 | -43% |
| Agents | 6 | 4 | -33% |
| Context size | ~40k tokens | ~25k tokens | -40% |

---

## 🔗 References

- [OpenCode Documentation](https://opencode.ai/docs)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Conventional Commits](https://conventionalcommits.org)
