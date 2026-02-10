# OpenCode Configuration Template

Cấu hình tối ưu cho OpenCode AI Assistant với agents, commands, skills, và instructions.

**Version**: 4.0.0

---

## 🎉 What's New: v4.0

### Optimized Structure (P0 Complete)
- **51% Context Reduction**: Always-on context reduced from 20,250 → 9,925 tokens
- **Explicit Whitelist**: Changed from wildcard to explicit instruction loading
- **Layered Instructions**: Separated into core/ (always-on) and workflows/ (on-demand)
- **Security Fix**: Removed hardcoded tokens, using {env:*} variables
- **Dead Paths Removed**: Eliminated non-existent .vibecode references

### New in v4.0: Vibecode Integration

**The Partnership Edition** - AI proposes complete vision first, then you provide context.

- **6 New Commands**: `/vision`, `/investigate`, `/qa`, `/xray`, `/blueprint`, `/handover`
- **8 New Skills**: Mode skills + Project templates
- **Partnership Model**: 80% patterns + 20% your context

---

## 📁 Cấu Trúc Thư Mục

```
.opencode/
├── opencode.json          # Cấu hình chính
├── agent/                 # Specialized agents (4 agents)
├── command/               # Slash commands (14 commands)
├── instructions/          # Coding guidelines
│   ├── core/             # Core behavior (5 files, always-on)
│   └── workflows/        # Task workflows (5 files, on-demand)
├── skill/                 # Knowledge skills (68 skills, lazy-loaded)
├── docs/                  # Documentation (7 files, not injected)
│   ├── AGENTS-REFERENCE.md
│   ├── vibecode/         # Vibecode documentation
│   ├── SKILL_SIZE_LIMITS.md
│   └── ...
└── scripts/               # Utility scripts
    └── check-skill-sizes.sh
```

---

## 📊 Statistics

| Category | Count | Load Type | Avg Size |
|----------|-------|-----------|----------|
| **Commands** | 14 | On-demand | ~2KB each |
| **Skills** | 68 | Lazy-loaded | ~734 lines (optimizing to ≤400) |
| **Core Instructions** | 5 | Always-on | ~8KB total |
| **Workflow Instructions** | 5 | Always-on | ~25KB total |
| **Documentation** | 7 | Not injected | ~40KB total |

---

## 🚀 Quick Start

### Installation
```bash
npx @duck4nh/antigravity-kit init --ide opencode
```

### Verify Installation
```bash
npx @duck4nh/antigravity-kit status
```

### Context Usage
- **Always-on**: ~10K tokens (P0 optimized)
- **Per skill**: ~5-10K tokens (varies by skill)
- **Typical task**: 15-25K tokens total

---

## 🎓 Key Features

### Optimized Context (NEW)
- ✅ 51% reduction in always-on context
- ✅ Explicit whitelist for predictable loading
- ✅ Layered instruction structure
- ✅ Documentation separated from runtime

### Enhanced Workflow
- ✅ Pre-delivery verification checklist
- ✅ Security-first development
- ✅ TDD workflow guide
- ✅ Advanced error handling

### Vibecode Integration (v4.0)
- ✅ Partnership model agents
- ✅ Vision-first workflow
- ✅ Deep debugging protocol
- ✅ Quality assurance planning

---

## 📖 Documentation

- **Root README**: Project overview
- **CHANGELOG**: Version history
- **docs/SKILL_SIZE_LIMITS.md**: Skill optimization guide
- **docs/AGENTS-REFERENCE.md**: Agent catalog
- **docs/vibecode/**: Vibecode documentation

---

*Last Updated: 2026-02-10*
