---
activation: always_on
---

# Task Classification

When receiving a request, you **MUST** classify it into one of these types:

## Primary Types

| Symbol | Type | Description |
|:------:|:-----|:------------|
| [CONSULT] | **CONSULT** | Ask for opinions, compare approaches, propose solutions |
| [BUILD] | **BUILD** | Create new feature, component, module, page |
| [DEBUG] | **DEBUG** | Fix bug, error, unexpected behavior |
| [OPTIMIZE] | **OPTIMIZE** | Improve performance, refactor, clean code |

## Secondary Types

| Symbol | Type | Description |
|:------:|:-----|:------------|
| [LEARN] | **LEARN** | Explain code, concept, architecture, how things work |
| [REVIEW] | **REVIEW** | Code review, security audit, best practices check |
| [MIGRATE] | **MIGRATE** | Upgrade dependencies, migrate to new version/stack |

## Recognition Rules

### English Keywords
```plaintext
CONSULT  → "should", "is there a way", "compare", "suggest", "advise", "opinion", "recommend"
BUILD    → "create", "make", "build", "add", "write code", "implement", "develop"
DEBUG    → "error", "bug", "not working", "wrong", "fix", "crash", "broken", "fails"
OPTIMIZE → "slow", "refactor", "clean", "improve", "optimize", "performance", "speed up"
LEARN    → "explain", "how does", "what is", "why", "understand", "teach", "walk through"
REVIEW   → "review", "check", "audit", "evaluate", "assess", "look at my code"
MIGRATE  → "upgrade", "migrate", "update version", "move to", "convert", "transition"
```

### Vietnamese Keywords
```plaintext
CONSULT  → "nên", "có cách nào", "so sánh", "gợi ý", "tư vấn", "ý kiến", "đề xuất"
BUILD    → "tạo", "làm", "xây dựng", "thêm", "viết code", "implement", "phát triển"
DEBUG    → "lỗi", "bug", "không chạy", "sai", "sửa", "crash", "hỏng", "fail"
OPTIMIZE → "chậm", "refactor", "clean", "cải thiện", "tối ưu", "hiệu năng", "tăng tốc"
LEARN    → "giải thích", "hoạt động như thế nào", "là gì", "tại sao", "hướng dẫn"
REVIEW   → "review", "kiểm tra", "audit", "đánh giá", "xem code"
MIGRATE  → "nâng cấp", "migrate", "cập nhật version", "chuyển sang", "convert"
```

## When Type Is Unclear

Ask the user:
> "I want to confirm the task type:
> A. Consult (compare, suggest) - Tư vấn
> B. Build (create new code) - Xây dựng
> C. Debug (fix bug) - Sửa lỗi
> D. Optimize (refactor, improve) - Tối ưu
> E. Learn (explain, understand) - Giải thích
> F. Review (check, audit) - Đánh giá
> G. Migrate (upgrade, convert) - Nâng cấp"

## Complex Tasks

Process sequentially based on nature:

| Combination | Order |
|-------------|-------|
| Consult + Build | Consult → Build |
| Debug + Optimize | Debug → Optimize |
| Learn + Build | Learn → Build |
| Review + Debug | Review → Debug → Optimize |
| Migrate + Debug | Migrate → Debug → Optimize |

## Examples

| User Request | Type | Reason |
|--------------|------|--------|
| "Should I use Redux or Zustand?" | [CONSULT] | Comparing options |
| "Tạo form đăng ký user" | [BUILD] | Create new feature |
| "Button không click được" | [DEBUG] | Fix broken behavior |
| "Code chậm quá, tối ưu giúp tôi" | [OPTIMIZE] | Performance issue |
| "Giải thích useEffect hoạt động thế nào?" | [LEARN] | Explain concept |
| "Review code PR này giúp tôi" | [REVIEW] | Code review |
| "Upgrade React 18 lên React 19" | [MIGRATE] | Version upgrade |
