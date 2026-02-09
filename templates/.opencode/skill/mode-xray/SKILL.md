---
name: mode-xray
description: Handover protocol for codebase analysis and documentation. Use for project handover, upgrade planning, developer onboarding, or archiving. Creates comprehensive documentation including PROJECT_XRAY.md with architecture, components, API reference, and troubleshooting.
---

# XRAY MODE - The Handover Protocol

## 🎯 Purpose

The XRAY protocol is used when you need to:
1. **Handover**: Transfer project to another team, client, or archive
2. **Upgrade Planning**: Prepare for major upgrades, assess technical debt, plan refactoring
3. **Onboarding**: Help new developers understand the codebase quickly

## 📋 Usage

**Trigger Keywords**: `xray`, `handover`, `onboarding`, `documentation`

**Where to Use**: Use in Claude Code (Builder role) for direct codebase X-Ray

---

## 🔬 Role Setup: CODEBASE ANALYST

You are analyzing millions of codebases. You KNOW how to read and understand code quickly. You KNOW what recipients need to know.

**Mission**: X-Ray the entire project and create documentation so anyone can take over and work on it.

## 🎯 XRAY Goals

After completion, the recipient will be able to:
1. **UNDERSTAND** what the project does and why
2. **KNOW** the structure and how parts connect
3. **RUN** the project locally
4. **FIX** basic bugs
5. **ADD** new features
6. **DEPLOY** when needed

---

## 📋 5-Step XRAY Workflow

```
SCAN → ANALYZE → DOCUMENT → PACKAGE → VERIFY
  │        │          │          │         │
  AI       AI         AI         AI       User
 scans   analyzes   writes    packages   reviews
```

---

# Step 1: PROJECT SCAN

When starting XRAY:

```
🔬 XRAY PROTOCOL ACTIVATED

Please provide:
1. Project path: ___
2. X-Ray purpose:
   □ Handover (transfer)
   □ Upgrade Planning (planning upgrades)
   □ Onboarding (introduction for new person)
   □ Archive (storage)

I will start scanning the project.
```

## SCAN Commands

```bash
# Directory structure
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | head -50

# Package dependencies
cat package.json

# Required environment variables
cat .env.example || cat .env.local || echo "No env file found"

# Config files
ls -la *.config.* 2>/dev/null

# Current README
cat README.md 2>/dev/null || echo "No README found"
```

---

# Step 2: DEEP ANALYSIS

## Analysis Output Format

```
═══════════════════════════════════════════════════════════════
🔬 XRAY ANALYSIS: [Project Name]
═══════════════════════════════════════════════════════════════

📊 PROJECT OVERVIEW
──────────────────────────────────────────────────────────────
Type:           [Landing Page / SaaS / Dashboard / etc]
Framework:      [Next.js 14 / React / etc]
Language:       [TypeScript / JavaScript]
Styling:        [Tailwind / CSS Modules / etc]
State Management: [None / Zustand / Redux / etc]
Database:       [None / Supabase / Prisma / etc]
Authentication: [None / NextAuth / etc]

📈 CODEBASE METRICS
──────────────────────────────────────────────────────────────
Total Files:    [X] files
Lines of Code:  ~[X] lines
Components:     [X] components
API Routes:     [X] routes
Test Coverage:  [X]% (if tests exist)

📁 ARCHITECTURE DIAGRAM
──────────────────────────────────────────────────────────────

[ASCII diagram of project structure]

Example:
┌─────────────────────────────────────────────────────────────┐
│                         app/                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   layout    │  │    page     │  │  api/       │        │
│  │   (root)    │  │   (home)    │  │  routes     │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │                │
│         └────────────────┼────────────────┘                │
│                          │                                  │
│  ┌───────────────────────┼───────────────────────┐        │
│  │              components/                       │        │
│  │  ┌────────┐  ┌────────┐  ┌────────┐          │        │
│  │  │sections│  │   ui   │  │ layout │          │        │
│  │  └────────┘  └────────┘  └────────┘          │        │
│  └───────────────────────────────────────────────┘        │
│                          │                                  │
│  ┌───────────────────────┼───────────────────────┐        │
│  │                  lib/                          │        │
│  │  ┌────────┐  ┌────────┐  ┌────────┐          │        │
│  │  │ utils  │  │  hooks │  │ types  │          │        │
│  │  └────────┘  └────────┘  └────────┘          │        │
│  └───────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘

🔗 KEY DEPENDENCIES
──────────────────────────────────────────────────────────────
Core:
• next: [version] - Framework
• react: [version] - UI library
• typescript: [version] - Language

Styling:
• tailwindcss: [version]
• [other styling libs]

Features:
• [library]: [purpose]
• [library]: [purpose]

Dev:
• eslint, prettier, etc.

⚙️ CONFIGURATION FILES
──────────────────────────────────────────────────────────────
• next.config.js - [purpose and key settings]
• tailwind.config.ts - [custom theme, plugins]
• tsconfig.json - [path aliases, strict mode]
• .env.local - [required env vars]

🗄️ DATA FLOW
──────────────────────────────────────────────────────────────
[Describe data flow in app]

Example:
User Action → Component → API Route → Database → Response → UI Update

═══════════════════════════════════════════════════════════════
```

---

# Step 3: DOCUMENTATION

## Create File: PROJECT_XRAY.md

```markdown
# 🔬 PROJECT X-RAY: [Project Name]

Generated: [Date]
By: Vibecode Kit v4.0 - XRAY Protocol

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Architecture](#architecture)
4. [Key Components](#key-components)
5. [API Reference](#api-reference)
6. [Database Schema](#database-schema)
7. [Environment Variables](#environment-variables)
8. [Deployment](#deployment)
9. [Common Tasks](#common-tasks)
10. [Troubleshooting](#troubleshooting)
11. [Future Improvements](#future-improvements)

---

## 1. Overview

### What is this project?
[Brief description of what the project does]

### Tech Stack
| Category | Technology |
|----------|------------|
| Framework | [Next.js 14] |
| Language | [TypeScript] |
| Styling | [Tailwind CSS] |
| Database | [Supabase] |
| Auth | [NextAuth] |
| Deployment | [Vercel] |

### Project History
- Created: [Date]
- Last updated: [Date]
- Built with: Vibecode Kit v4.0

---

## 2. Quick Start

### Prerequisites
- Node.js [version]
- npm/yarn/pnpm
- [Other requirements]

### Installation
```bash
# Clone repository
git clone [repo-url]
cd [project-name]

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev

# Open http://localhost:3000
```

### First-time Setup
1. [Step 1]
2. [Step 2]
3. [Step 3]

---

## 3. Architecture

### Directory Structure
```
[project]/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── (auth)/            # Auth routes group
│   └── api/               # API routes
├── components/
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI
│   └── layout/            # Layout components
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── hooks/             # Custom hooks
│   └── types/             # TypeScript types
├── public/                # Static assets
└── [other folders]
```

### Architecture Diagram
[ASCII diagram from analysis]

### Data Flow
[Describe data flow]

---

## 4. Key Components

### [Component 1]
**Location:** `components/sections/Hero.tsx`
**Purpose:** [Description]
**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Hero headline |

**Usage:**
```tsx
<Hero title="Welcome" />
```

### [Component 2]
[Same format]

---

## 5. API Reference

### [Endpoint 1]
**Route:** `POST /api/[route]`
**Purpose:** [Description]
**Request:**
```json
{
  "field": "value"
}
```
**Response:**
```json
{
  "success": true,
  "data": {}
}
```

---

## 6. Database Schema

### Tables/Collections
[Describe schema if database exists]

### Relationships
[Describe relationships]

---

## 7. Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| DATABASE_URL | Yes | Database connection | postgres://... |
| NEXTAUTH_SECRET | Yes | Auth secret | random-string |
| [VAR] | [Yes/No] | [Description] | [Example] |

---

## 8. Deployment

### Vercel (Recommended)
1. Connect repo to Vercel
2. Set environment variables
3. Deploy

### Manual Deployment
```bash
npm run build
npm start
```

### Environment-specific configs
- Production: [notes]
- Staging: [notes]

---

## 9. Common Tasks

### Add a new page
1. Create file in `app/[route]/page.tsx`
2. [Other steps]

### Add a new component
1. Create in `components/[category]/`
2. Export from index if applicable

### Add a new API route
1. Create in `app/api/[route]/route.ts`
2. [Other steps]

### Modify styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`

---

## 10. Troubleshooting

### Common Issues

**Issue: [Description]**
```
Error message here
```
**Solution:** [How to fix]

---

## 11. Future Improvements

### Technical Debt
- [ ] [Item 1]
- [ ] [Item 2]

### Planned Features
- [ ] [Feature 1]
- [ ] [Feature 2]

### Upgrade Recommendations
- [ ] Upgrade [package] from [version] to [version]
- [ ] Consider migrating to [technology]

---

## Appendix

### Changelog Reference
See `CHANGELOG.md` for version history.

### Related Documentation
- [Link 1]
- [Link 2]

### Contact
Original developer: [Contact info if applicable]

---

*Generated by Vibecode Kit v4.0 - XRAY Protocol*
```

---

# Step 4: PACKAGE

## Create Handover Package

```
═══════════════════════════════════════════════════════════════
📦 HANDOVER PACKAGE CHECKLIST
═══════════════════════════════════════════════════════════════

I will create/verify the following files:

DOCUMENTATION:
□ PROJECT_XRAY.md      - Full project documentation
□ README.md            - Quick start guide (update if needed)
□ CHANGELOG.md         - Version history
□ .env.example         - Environment template

CODE QUALITY:
□ No debug console.log remaining
□ No unnecessary commented-out code
□ No critical TODO/FIXME
□ TypeScript errors: 0
□ Lint errors: 0

ASSETS:
□ Images optimized
□ Fonts included or have instructions
□ Icons have source

DEPLOYMENT:
□ Build command works: `npm run build`
□ No build errors
□ Environment variables documented

═══════════════════════════════════════════════════════════════
```

## Optional: Create Upgrade Guide

```markdown
# 🚀 UPGRADE GUIDE: [Project Name]

## Current State
- Framework: [version]
- Key dependencies: [versions]
- Last updated: [date]

## Recommended Upgrades

### Priority 1: Security
| Package | Current | Target | Breaking Changes |
|---------|---------|--------|------------------|
| [pkg] | [v1] | [v2] | [Yes/No - details] |

### Priority 2: Performance
[Same format]

### Priority 3: Features
[Same format]

## Upgrade Steps

### Step 1: [Upgrade X]
```bash
npm update [package]
```
Changes needed: [list]

### Step 2: [Upgrade Y]
[Instructions]

## Testing After Upgrade
1. Run `npm run build`
2. Run `npm run test` (if tests exist)
3. Manual test key features:
   - [ ] [Feature 1]
   - [ ] [Feature 2]

## Rollback Plan
If issues occur:
1. `git checkout [previous-commit]`
2. `npm install`
3. Verify working
```

---

# Step 5: VERIFICATION

## Verification Checklist

```
═══════════════════════════════════════════════════════════════
✅ HANDOVER VERIFICATION
═══════════════════════════════════════════════════════════════

Please verify each item:

DOCUMENTATION:
□ PROJECT_XRAY.md has complete information?
□ README.md has clear Quick Start?
□ .env.example has all required vars?

FRESH CLONE TEST:
(Simulate new person receiving project)

1. Clone fresh copy of repo
2. Follow README instructions
3. Does project run?

□ `npm install` - success?
□ `npm run dev` - runs without errors?
□ All features working?

HANDOVER READY:
□ All documentation complete
□ Fresh clone test passed
□ No critical issues

═══════════════════════════════════════════════════════════════
```

## Final Output

```
═══════════════════════════════════════════════════════════════
🎉 XRAY COMPLETE
═══════════════════════════════════════════════════════════════

📦 HANDOVER PACKAGE READY

Files created/updated:
• PROJECT_XRAY.md - Full documentation
• README.md - Quick start (updated)
• .env.example - Environment template
• CHANGELOG.md - History (if not existed)

📋 SUMMARY:
• Project: [Name]
• Type: [Type]
• Complexity: [Low/Medium/High]
• Estimated onboarding time: [X hours]

🔗 NEXT STEPS FOR RECEIVER:
1. Clone repository
2. Read README.md for quick start
3. Read PROJECT_XRAY.md for full understanding
4. Setup .env.local from .env.example
5. Run `npm install && npm run dev`

═══════════════════════════════════════════════════════════════

Project ready for handover!
```

---

# Appendices

## A. QUICK XRAY (10 minutes)

```
When need quick overview:

1. Read package.json → tech stack
2. Read README.md → purpose
3. Look at app/ or src/ → structure
4. Run `npm run dev` → verify works
5. Quick click through app → understand features
```

## B. CODE HEALTH INDICATORS

```
🟢 HEALTHY:
• TypeScript strict mode
• ESLint configured
• Tests present
• README updated
• No TODOs in critical paths

🟡 NEEDS ATTENTION:
• Some console.logs
• Outdated dependencies
• Missing documentation
• Few/no tests

🔴 TECHNICAL DEBT:
• Any type everywhere
• No error handling
• Hardcoded values
• No environment variables
• Commented-out code blocks
```

## C. SECURITY CHECKLIST

```
Before handover, verify:

□ No secrets in code (API keys, passwords)
□ No .env files committed
□ .gitignore includes sensitive files
□ Dependencies have no known vulnerabilities
  (run: npm audit)
□ Auth properly implemented (if applicable)
□ Input validation present
□ No SQL injection risks
□ CORS properly configured
```

## D. HANDOVER EMAIL TEMPLATE

```
Subject: Project Handover: [Project Name]

Hi [Recipient],

I'm handing over the [Project Name] project. Here's what you need:

📦 Repository: [URL]
📄 Documentation: See PROJECT_XRAY.md in repo

Quick Start:
1. Clone the repo
2. Copy .env.example to .env.local
3. Run npm install && npm run dev

Key things to know:
• [Important point 1]
• [Important point 2]
• [Important point 3]

Known issues/limitations:
• [Issue 1]
• [Issue 2]

Feel free to reach out if you have questions.

Best,
[Your name]
```

---

# Quick Start

```
To start X-Ray, please provide:

1. Project path: ___
2. Purpose: Handover / Upgrade / Onboarding / Archive

I will scan and create full documentation for the project.
```
