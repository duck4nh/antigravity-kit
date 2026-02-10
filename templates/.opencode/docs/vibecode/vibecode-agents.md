# Vibecode Agents

**Vibecode Kit v4.0 "The Partnership Edition"** - Specialized agents for AI-Human partnership workflow.

> **📌 Important**: This file is located at `instructions/vibecode-agents.md` and is part of the Vibecode Kit integration. For the main OpenCode agents, see `AGENTS.md`.

---

## 🔗 Navigation

- **← Back to Main**: See `AGENTS.md` for core OpenCode agents
- **↑ Overview**: See `instructions/vibecode-philosophy.md` for Partnership model philosophy
- **📖 Workflows**: See `instructions/vibecode-workflows.md` for complete workflow guide

---

## 📊 Quick Reference

| Agent | Role | Key Commands | When to Use |
|-------|------|-------------|------------|
| **Architect** | Proposes complete vision based on proven patterns | `/vision`, `/blueprint` | New projects, features |
| **Builder** | Implements exactly according to approved blueprint | Build commands | After blueprint approval |
| **Investigator** | Deep debugging and root cause analysis | `/investigate` | Complex bugs, system issues |
| **QA Specialist** | Quality assurance planning and strategy | `/qa` | Test planning, prevention |
| **X-Ray** | Comprehensive project documentation and handoff | `/xray`, `/handover` | Handoff, onboarding, archive |

---

## 🎯 Partnership Model

The Vibecode agents follow a **revolutionary approach**:

### Traditional vs Partnership

```
TRADITIONAL (v3.0 - Contractor):
Human gives orders → AI follows instructions → AI builds

PARTNERSHIP (v4.0):
AI proposes vision → Human provides context → Together refine → Builder implements
```

### The Formula

```
80% proven patterns + 20% your unique context = Perfect product
```

### Key Benefits

- ✅ **Faster**: AI proposes complete vision immediately
- ✅ **Better Quality**: Leverages proven patterns
- ✅ **Less Friction**: No blank page paralysis
- ✅ **More Satisfying**: True partnership experience

---

## 🤖 Agent Details

### 1. Vibecode Architect

**Role**: Proposes complete vision first based on proven patterns

**Expertise**:
- Millions of successful projects analyzed
- Proven patterns across all project types
- Best practices in architecture and design

**When to Use**:
- Starting new projects from scratch
- Building complete features
- Need architectural guidance
- Want faster iteration

**How It Works**:
```
1. Receives project request
2. Proposes complete vision (80% patterns)
3. Asks for context (your 20% input)
4. Adjusts vision based on needs
5. Creates detailed blueprint
6. Seeks approval before build
```

**Example Commands**:
```bash
/vision Build a landing page for my SaaS product
/vision Create a dashboard for tracking sales metrics
/vision Design a portfolio for a UX designer
```

**Output**: Complete vision with architecture, tech stack, design system

---

### 2. Vibecode Builder

**Role**: Codes exactly according to approved blueprint

**Expertise**:
- Faithful implementation of specifications
- Clean, maintainable code
- No deviations from agreed architecture

**When to Use**:
- Blueprint has been approved
- Ready for implementation
- Need faithful execution of specifications

**How It Works**:
```
1. Receives approved blueprint
2. Codes exactly to specifications
3. No deviations from architecture
4. Reports completion
```

**Example Commands**:
```bash
"Build according to the approved blueprint"
"Implement the design we agreed on"
"Code based on the specifications"
```

**Output**: Working code matching blueprint specifications

---

### 3. Vibecode Investigator

**Role**: Deep debugging protocol for complex issues

**Expertise**:
- Systematic 7-step investigation process
- Root cause analysis
- Prevention strategies
- Forensic debugging

**When to Use**:
- Complex or intermittent bugs
- Issues requiring deep analysis
- Root cause investigation needed
- Performance degradation

**How It Works**:
```
1. Gathers comprehensive context (5W1H)
2. Reproduces and diagnoses
3. Performs forensic analysis
4. Identifies root cause
5. Implements fix with verification
6. Documents prevention
```

**Example Commands**:
```bash
/investigate "Random 500 errors in production"
/investigate "Memory leak over time"
/investigate "Performance degradation under load"
```

**Output**: Complete investigation report with root cause and fix

---

### 4. Vibecode QA Specialist

**Role**: Quality assurance planning and strategy

**Expertise**:
- Comprehensive testing strategies
- Test case design
- Coverage planning
- Quality standards

**When to Use**:
- Planning comprehensive testing approach
- Preventing issues before they occur
- Establishing quality standards
- Pre-release quality planning

**How It Works**:
```
1. Defines testing scope
2. Creates test strategy (unit/integration/E2E)
3. Plans test cases and coverage targets
4. Establishes success criteria
5. Documents testing approach
```

**Example Commands**:
```bash
/qa "Plan testing for payment feature"
/qa "Create QA strategy for authentication"
/qa "Design test coverage for API endpoints"
```

**Output**: Comprehensive QA plan with test strategy and success criteria

---

### 5. Vibecode X-Ray

**Role**: Comprehensive project documentation and handoff

**Expertise**:
- 5-step handover protocol
- Complete codebase analysis
- Documentation generation
- Verification procedures

**When to Use**:
- Transferring project to team/client
- Developer onboarding
- Project archival
- Upgrade planning
- Knowledge transfer

**How It Works**:
```
1. Scans project structure and dependencies
2. Analyzes architecture and patterns
3. Creates comprehensive documentation
4. Packages handoff materials
5. Verifies completeness with fresh clone test
```

**Example Commands**:
```bash
/xray "Current project for handoff"
/xray "Create documentation for new developer"
/xray "Document before major upgrade"
```

**Output**: Complete handoff package with PROJECT_XRAY.md, README, env templates

---

## 🔄 Complete Workflow

### Step-by-Step Partnership Process

```
┌─────────────────────────────────────────────────────────┐
│ 1. VISION (Architect)                                    │
│    /vision "Build [project type]"                     │
│    ↓                                                    │
│    AI proposes complete vision                          │
│    ↓                                                    │
│ 2. CONTEXT (You provide)                                │
│    Business goals, constraints, audience                │
│    ↓                                                    │
│ 3. BLUEPRINT (Architect refines)                         │
│    /blueprint (create detailed spec)                     │
│    ↓                                                    │
│ 4. APPROVAL (You confirm)                                │
│    "Approved"                                          │
│    ↓                                                    │
│ 5. BUILD (Builder implements)                            │
│    [Build according to blueprint]                       │
│    ↓                                                    │
│ 6. REFINE (Both tweak)                                  │
│    /refine [minor adjustments]                           │
└─────────────────────────────────────────────────────────┘
```

### Alternative Workflows

```
INVESTIGATION WORKFLOW:
/investigate [issue] → Deep analysis → Root cause → Fix → Verify

QA WORKFLOW:
/qa [feature] → Test strategy → Coverage plan → Success criteria

XRAY WORKFLOW:
/xray [project] for [purpose] → Analyze → Document → Package → Verify
```

---

## 🔗 Integration with OpenCode Agents

Vibecode agents work **seamlessly** with existing OpenCode agents:

```
Project Request:
    ↓
┌─────────────────────────────────────────────┐
│  1. Vibecode Architect → /vision            │
│     Proposes complete vision                 │
└─────────────────────────────────────────────┘
    ↓
┌�─────────────────────────────────────────────┐
│  2. Fullstack Dev → Implements tech stack    │
│    (React, Next.js, APIs, Database)          │
└─────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────┐
│  3. Code Reviewer → Reviews implementation  │
│    (Code quality, architecture)              │
└─────────────────────────────────────────────┘
    ↓
┌─────────────────────────────────────────────┐
│  4. Security Expert → Validates security    │
│    (Vulnerabilities, auth, OWASP)            │
└─────────────────────────────────────────────┘
```

**Key**: No conflicts, both systems complement each other.

---

## 🎯 Decision Tree: Which Agent to Use?

```
Need to build something?
├─ Yes → New project from scratch?
│   ├─ Yes → /vision (Vibecode Architect)
│   └─ No  → Specific task?
│       ├─ Bug fix → /fix (traditional) or /investigate (Vibecode)
│       ├─ Test → /test (traditional) or /qa (Vibecode planning)
│       └─ Review → @code-reviewer
│
Need to document/handoff?
└─ Yes → /xray (Vibecode X-Ray)
```

---

## 📚 Skills Available

Vibecode adds **8 new skills** to the OpenCode ecosystem:

### Mode Skills (3)
- `mode-investigate` - Deep debugging protocol
- `mode-qa` - Quality assurance protocol
- `mode-xray` - Handover documentation protocol

### Project Templates (5)
- `vibecode-landing-page` - High-converting landing pages
- `vibecode-saas-app` - Full SaaS applications
- `vibecode-dashboard` - Data visualization dashboards
- `vibecode-blog-docs` - Content sites (blog/docs)
- `vibecode-portfolio` - Personal portfolios

### Usage

Skills are **auto-loaded** when trigger keywords detected:
```bash
"Build a landing page" → vibecode-landing-page skill loads
"Debug complex issue" → mode-investigate skill loads
```

---

## 📖 Documentation Structure

### Vibecode Documentation
```
.vibecode/
├── PHILOSOPHY.md          # Partnership model philosophy
├── README.md              # Quick start guide
├── CHANGELOG.md           # Version history
└── workflows/
    └── VIBECODE-MASTER.md  # Universal workflow protocol
```

### Integration Documentation
```
instructions/
├── vibecode-philosophy.md  # Philosophy for users
├── vibecode-workflows.md   # Workflow usage guide
└── vibecode-agents.md      # This file - Agent details
```

---

## 🚀 Quick Start Examples

### Building a Landing Page

```bash
# 1. Start with vision
/vision I need a landing page for my SaaS product

# AI proposes complete vision with:
# - Hero, social proof, problem/solution, testimonials, pricing, FAQ
# - Tech stack: Next.js 14, Tailwind CSS, Framer Motion
# - Design system suggestions

# 2. Provide context
"It's for remote teams, blue color scheme, need video testimonials"

# 3. AI adjusts vision
# - Adds remote team focus, video testimonial section

# 4. Approve
"Approved!"

# 5. Build
[Builder implements according to blueprint]

# 6. Refine if needed
/refine "Change headline to be shorter"
```

### Debugging Complex Issue

```bash
# 1. Start investigation
/investigate "Random 500 errors under load"

# AI performs systematic 7-step investigation:
# - Gathers context (5W1H)
# - Reproduces and diagnoses
# - Forensic analysis
# - Root cause identified
# - Fix implemented
# - Prevention documented

# Output: Complete investigation report with fix
```

---

## ✅ Best Practices

### When to Use Vibecode Agents

**Use Vibecode (Partnership Model) for:**
- ✅ New projects from scratch
- ✅ Building complete features
- ✅ Complex problem-solving
- ✅ Quality assurance planning
- ✅ Comprehensive documentation

**Use Traditional (Contractor Model) for:**
- ✅ Quick bug fixes
- ✅ Well-defined tasks
- ✅ Following precise instructions
- ✅ Running tests

### Tips for Success

1. **Be Specific with Context**
   - Good: "It's for remote teams, blue colors, B2B"
   - Bad: "Make it look good"

2. **Review Before Approving**
   - Check blueprint carefully
   - Ask questions if unclear
   - Can't change major things after approval

3. **Use Right Tool for Job**
   - Simple bug → `/fix`
   - Complex bug → `/investigate`
   - Quick test → `/test`
   - QA planning → `/qa`

4. **Leverage Templates**
   - Landing pages → vibecode-landing-page skill
   - SaaS apps → vibecode-saas-app skill
   - Dashboards → vibecode-dashboard skill

---

## 🔗 See Also

- **Main Agents**: `AGENTS.md` (for fullstack-dev, infra-expert, code-reviewer, security-expert)
- **Philosophy**: `instructions/vibecode-philosophy.md` (for Partnership model explanation)
- **Workflows**: `instructions/vibecode-workflows.md` (for complete workflow guide)
- **Core Protocol**: `.vibecode/workflows/VIBECODE-MASTER.md` (for universal workflow)

---

**Vibecode Kit v4.0 - The Partnership Edition**

*From "AI follows orders" to "AI proposes solutions"* 🚀
