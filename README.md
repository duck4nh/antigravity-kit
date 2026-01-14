# 🚀 Antigravity Kit

> **Bộ công cụ mở rộng khả năng AI Agent** - Tập hợp skills, rules và workflows, UX/UI Pro Max để tăng cường năng lực cho AI coding assistants.

[![Skills](https://img.shields.io/badge/Skills-35+-blue)](#-skills)
[![Rules](https://img.shields.io/badge/Rules-10-green)](#-rules)
[![Workflows](https://img.shields.io/badge/Workflows-1-orange)](#-workflows)

---

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Skills](#-skills)
- [Rules](#-rules)
- [Workflows](#-workflows)
- [Cài đặt](#-cài-đặt)
- [Sử dụng](#-sử-dụng)
- [Đóng góp](#-đóng-góp)

---

## 🎯 Giới thiệu

**Antigravity Kit** là bộ sưu tập toàn diện các:

- **Skills** - Chuyên môn theo lĩnh vực (React, Node.js, Database, Testing...)
- **Rules** - Quy tắc và ràng buộc hướng dẫn cách làm việc
- **Workflows** - Quy trình từng bước cho các tác vụ phổ biến

Được thiết kế để tích hợp với các AI agents hỗ trợ tiêu chuẩn **Agent Skills**.

---

## 📁 Cấu trúc dự án

```
antigravity-kit/
├── .agent/
│   ├── rules/              # 10 rule files
│   │   ├── 01-identity.md
│   │   ├── 02-task-classification.md
│   │   ├── 03-mode-consulting.md
│   │   ├── 04-mode-build.md
│   │   ├── 05-mode-debug.md
│   │   ├── 06-mode-optimize.md
│   │   ├── 07-technical-standards.md
│   │   ├── 08-communication.md
│   │   ├── 09-checklist.md
│   │   └── 10-special-situations.md
│   │
│   ├── skills/             # 35+ domain expertise
│   │   ├── react-expert/
│   │   ├── nextjs-expert/
│   │   ├── typescript-expert/
│   │   ├── prisma-expert/
│   │   ├── auth-expert/
│   │   ├── ui-ux-pro-max/
│   │   └── ...
│   │
│   ├── shared/             # Shared resources
│   │   └── ui-ux-pro-max/  # UI/UX search database
│   │       ├── data/       # CSV databases
│   │       └── scripts/    # Python search tools
│   │
│   └── workflows/          # Step-by-step procedures
│       └── ui-ux-pro-max.md
│
├── doc.md                  # Skills documentation
├── doc-Rules-Workflows.md  # Rules & Workflows documentation
└── README.md               # This file
```

---

## 🧠 Skills

Skills là các module chuyên môn theo lĩnh vực. Agent tự động nhận diện và sử dụng skill phù hợp với tác vụ.

### Frontend

| Skill | Mô tả |
|-------|-------|
| `react-expert` | React 18/19, hooks, patterns, performance |
| `nextjs-expert` | App Router, Server Components, SSR |
| `css-expert` | CSS architecture, responsive, design systems |
| `state-management-expert` | Redux, Zustand, React Query |
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 font pairings |

### Backend

| Skill | Mô tả |
|-------|-------|
| `nodejs-expert` | Async patterns, modules, performance |
| `nestjs-expert` | Module architecture, DI, testing |
| `rest-api-expert` | RESTful design, HTTP semantics |
| `auth-expert` | JWT, OAuth 2.0, RBAC, security |

### Database

| Skill | Mô tả |
|-------|-------|
| `prisma-expert` | Schema design, migrations, queries |
| `database-expert` | General database optimization |
| `postgres-expert` | PostgreSQL-specific patterns |
| `mongodb-expert` | MongoDB document modeling |

### Testing

| Skill | Mô tả |
|-------|-------|
| `testing-expert` | General testing strategies |
| `jest-expert` | Jest framework, mocking |
| `vitest-expert` | Vitest, Vite integration |
| `playwright-expert` | E2E testing, browser automation |

### DevOps & Tools

| Skill | Mô tả |
|-------|-------|
| `devops-expert` | CI/CD, infrastructure |
| `docker-expert` | Containerization, Compose |
| `github-actions-expert` | GitHub Actions workflows |
| `git-expert` | Git workflows, conflicts |

### Code Quality

| Skill | Mô tả |
|-------|-------|
| `code-review` | Comprehensive code review |
| `refactoring-expert` | Code smell detection, refactoring |
| `typescript-expert` | TypeScript patterns, type system |
| `accessibility-expert` | WCAG compliance, a11y |

---

## 📏 Rules

Rules là các quy tắc hướng dẫn cách agent làm việc. Có 3 loại activation:

- **always_on** - Luôn áp dụng
- **model_decision** - Agent tự quyết định
- **glob** - Áp dụng theo file pattern

### Danh sách Rules

| # | File | Activation | Mô tả |
|---|------|------------|-------|
| 1 | `01-identity.md` | Always On | Vai trò & nguyên tắc làm việc |
| 2 | `02-task-classification.md` | Always On | Phân loại 4 loại nhiệm vụ |
| 3 | `03-mode-consulting.md` | Model Decision | Quy trình tư vấn |
| 4 | `04-mode-build.md` | Model Decision | Quy trình xây mới |
| 5 | `05-mode-debug.md` | Model Decision | Quy trình sửa lỗi |
| 6 | `06-mode-optimize.md` | Model Decision | Quy trình tối ưu |
| 7 | `07-technical-standards.md` | Always On | Coding standards |
| 8 | `08-communication.md` | Always On | Phong cách giao tiếp |
| 9 | `09-checklist.md` | Always On | Checklist trước khi giao |
| 10 | `10-special-situations.md` | Always On | Xử lý tình huống đặc biệt |

---

## 🔄 Workflows

Workflows là quy trình từng bước. Gọi bằng slash command `/workflow-name`.

| Workflow | Command | Mô tả |
|----------|---------|-------|
| UI/UX Pro Max | `/ui-ux-pro-max` | Thiết kế UI với 50 styles, 21 palettes |

---

## 📦 Cài đặt

### Workspace-specific (khuyến nghị)

Copy thư mục `.agent` vào root của project:

```bash
git clone https://github.com/your-username/antigravity-kit.git
cp -r antigravity-kit/.agent your-project/
```

### Global (tất cả workspaces)

Copy vào thư mục global:

```bash
# Skills
cp -r antigravity-kit/.agent/skills ~/.gemini/antigravity/skills/

# Workflows
cp -r antigravity-kit/.agent/workflows ~/.gemini/antigravity/workflows/
```

---

## 🚀 Sử dụng

### Skills

Skills tự động được áp dụng. Agent sẽ đọc skill khi nhận diện tác vụ liên quan:

```
User: "Fix bug trong React component này"
Agent: (tự động sử dụng react-expert skill)
```

### Rules

Rules áp dụng dựa trên activation type:
- **always_on**: Luôn có hiệu lực
- **model_decision**: Agent quyết định khi nào áp dụng
- **glob**: Áp dụng khi làm việc với files matching pattern

### Workflows

Gọi workflow bằng slash command:

```
User: /ui-ux-pro-max
Agent: (thực hiện theo workflow)
```

---

## 🤝 Đóng góp

### Thêm Skill mới

1. Tạo folder: `.agent/skills/your-skill/`
2. Tạo `SKILL.md` với format:

```markdown
---
name: your-skill
description: Mô tả skill. Sử dụng khi X hoặc Y.
---

# Your Skill

Instructions for the agent...
```

### Thêm Rule mới

1. Tạo file: `.agent/rules/your-rule.md`
2. Thêm frontmatter:

```markdown
---
activation: always_on | model_decision | glob
glob: "**/*.tsx"  # nếu dùng glob
description: Mô tả khi nào áp dụng  # nếu dùng model_decision
---

# Your Rule

Content...
```

### Thêm Workflow mới

1. Tạo file: `.agent/workflows/your-workflow.md`
2. Format:

```markdown
---
description: Mô tả workflow
---

# Your Workflow

## Step 1: ...
## Step 2: ...
```

---

## 📄 License

MIT License - Xem [LICENSE](LICENSE) để biết thêm chi tiết.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/vudovn">VudoVN</a>
</p>
