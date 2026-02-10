# Skills Usage Guide (Detailed)

Tai lieu nay huong dan chi tiet: dung skill nao, khi nao dung, va cach goi cho dung flow.

## 1) Setup va kiem tra

### Skill locations

- Current local runtime: `C:\Users\ducan\.codex\skills`
- Newer discovery path (docs): `C:\Users\ducan\.agents\skills`

Khuyen nghi: chi dung 1 nguon chinh de tranh duplicate skill trong `/skills`.

### Kiem tra skill da load

```text
/skills
```

Neu thay du 17 skill (core/mode/template/quality) la OK.

## 2) Cach goi skill

### Cach 1 - Explicit (nen dung)

```text
$mode-vision Tao vision cho ung dung CRM B2B.
```

### Cach 2 - Implicit

Mo ta task tu nhien, Codex tu map theo `description`. Cach nay nhanh nhung de map sai hon explicit.

## 3) So do quyet dinh nhanh (dung skill nao)

- Ban dang bat dau y tuong moi -> `mode-vision`
- Da co vision, can spec ky thuat chi tiet -> `mode-blueprint`
- Can khoa scope, chot in/out scope -> `mode-contract`
- Da chot contract va bat dau code -> `mode-build`
- Can sua nho sau build (copy/ui nhe) -> `mode-refine`
- Co loi, can tim root cause -> `mode-debug`
- Loi mo ho, chua chac nguyen nhan -> `mode-investigate`
- Can test release readiness -> `mode-qa`
- Can gate cuoi truoc release -> `quality-gates`
- Can ban giao/onboarding codebase -> `mode-xray`
- Can pattern theo loai du an -> chon 1 `template-*`
- Can ky luat gate/lifecycle xuyen suot -> `core-governance`, `core-lifecycle`

## 4) Huong dan tung skill

### `core-governance`

- Khi dung:
  - Bat dau project moi
  - Team de bi scope creep
  - Can Definition of Done ro rang
- Muc tieu:
  - Dat gate ky luat: no build truoc blueprint/contract
  - Chot tieu chi done
- Prompt mau:

```text
$core-governance Dat governance va DoD cho project nay.
```

### `core-lifecycle`

- Khi dung:
  - Can ep dung flow `VISION -> CONTEXT -> BLUEPRINT -> CONTRACT -> BUILD -> REFINE`
  - Team hay nhay buoc
- Muc tieu:
  - Kiem soat transition moi stage
- Prompt mau:

```text
$core-lifecycle Kiem tra current stage va next allowed action.
```

### `mode-vision`

- Khi dung:
  - Chua co huong di
  - Moi co bai toan business
- Dau vao can co:
  - Muc tieu, doi tuong user, constraints
- Dau ra ky vong:
  - Vision block (huong giao dien + stack + gia tri)
- Prompt mau:

```text
$mode-vision Tao vision cho dashboard quan ly KPI cho sales manager.
```

### `mode-blueprint`

- Khi dung:
  - Vision da duoc dong y
  - Can spec truoc khi code
- Dau ra ky vong:
  - `BLUEPRINT.md` (IA, file structure, components, data flow, responsive/a11y)
- Luu y:
  - Sau approve blueprint, major change phai quay lai vision
- Prompt mau:

```text
$mode-blueprint Lap BLUEPRINT chi tiet cho vision da chot.
```

### `mode-contract`

- Khi dung:
  - Truoc khi implement
  - Can lock in-scope/out-of-scope
- Dau ra ky vong:
  - `CONTRACT.md` (deliverables, out-of-scope, tech lock, DoD)
- Prompt mau:

```text
$mode-contract Tao CONTRACT lock scope cho v1 trong 2 tuan.
```

### `mode-build`

- Khi dung:
  - Da co blueprint + contract approved
- Muc tieu:
  - Implement dung scope, khong improvise architecture
- Prompt mau:

```text
$mode-build Implement theo blueprint va contract, bao cao progress theo milestone.
```

### `mode-refine`

- Khi dung:
  - Sau build, can polish nho
- Duoc phep:
  - Copy text, spacing, color tuning nhe, UX polish nho
- Khong duoc phep:
  - Them feature lon, doi architecture
- Prompt mau:

```text
$mode-refine Tinh chinh copy va spacing cho trang home, khong doi cau truc.
```

### `mode-investigate`

- Khi dung:
  - Loi chua ro tai sao
  - Can thu thap chung cu truoc khi sua
- Dau ra ky vong:
  - Investigation log, hypothesis ranking
- Prompt mau:

```text
$mode-investigate Dieu tra ly do API timeout khong on dinh tren staging.
```

### `mode-debug`

- Khi dung:
  - Da co symptom ro, can root cause + fix
- Muc tieu:
  - Evidence -> hypothesis -> validate -> root cause -> fix
- Prompt mau:

```text
$mode-debug Fix bug login redirect loop va mo ta root cause.
```

### `mode-qa`

- Khi dung:
  - Truoc release
  - Sau mot wave fix lon
- Dau ra ky vong:
  - `QA_REPORT.md` voi pass/fail theo tier
- Prompt mau:

```text
$mode-qa Tao QA_REPORT cho release candidate nay.
```

### `mode-xray`

- Khi dung:
  - Ban giao cho team khac
  - Onboarding dev moi
- Dau ra ky vong:
  - `PROJECT_XRAY.md` (overview, architecture, runbook, risks)
- Prompt mau:

```text
$mode-xray Tao tai lieu ban giao cho du an hien tai.
```

### `quality-gates`

- Khi dung:
  - Gate cuoi truoc release
- Muc tieu:
  - Verdict ro rang: `APPROVED`, `NEEDS_WORK`, `BLOCKED`
- Prompt mau:

```text
$quality-gates Danh gia release gate cuoi dua tren QA va pre-delivery checks.
```

### `template-landing-page`

- Khi dung:
  - Du an 1-page marketing, lead generation
- Gia tri:
  - Cung cap section default + conversion flow

### `template-saas-app`

- Khi dung:
  - App co auth + dashboard + user settings

### `template-dashboard`

- Khi dung:
  - Data-heavy app, KPI/charts/tables la trung tam

### `template-blog-docs`

- Khi dung:
  - Blog, knowledge base, docs site

### `template-portfolio`

- Khi dung:
  - Personal/studio showcase website

## 5) Combo de dung ngay

### A. New project (an toan nhat)

```text
$core-governance Dat rules va DoD.
$core-lifecycle Kiem soat stage.
$template-saas-app
$mode-vision Tao vision.
$mode-blueprint Tao spec chi tiet.
$mode-contract Lock scope v1.
```

### B. Build + release

```text
$mode-build Implement theo contract.
$mode-qa Tao QA_REPORT va liet ke fail items.
$quality-gates Ket luan release verdict.
```

### C. Bug production

```text
$mode-investigate Thu thap chung cu loi production.
$mode-debug Chot root cause va fix toi thieu.
$mode-qa Retest scope bi anh huong.
```

### D. Handover

```text
$mode-xray Tao PROJECT_XRAY.md day du cho team tiep nhan.
```

## 6) Rule thuc te de tranh dung sai skill

- Khong dung `mode-build` neu chua co `mode-contract`.
- Khong dung `mode-refine` cho thay doi major.
- Loi mo ho -> `mode-investigate` truoc `mode-debug`.
- Truoc release phai co `mode-qa` + `quality-gates`.

## 7) Bat/tat skill trong config

File: `C:\Users\ducan\.codex\config.toml`

```toml
[[skills.config]]
path = "C:/Users/ducan/.codex/skills/mode-xray/SKILL.md"
enabled = false
```

Sau khi sua config, restart Codex.

## 8) Troubleshooting

- Skill khong hien trong `/skills`
  - Kiem tra dung ten file `SKILL.md`
  - Kiem tra frontmatter co `name` va `description`
  - Restart Codex
- Bi duplicate skill
  - De 1 nguon duy nhat (`.codex/skills` hoac `.agents/skills`)
- Auto trigger sai
  - Goi explicit bang `$skill-name`

## 9) Cheat sheet 1 dong per case

- Bat dau du an: `$core-governance $core-lifecycle $template-saas-app $mode-vision`
- Chot spec: `$mode-blueprint`
- Khoa scope: `$mode-contract`
- Code: `$mode-build`
- Polish nhe: `$mode-refine`
- Dieu tra loi: `$mode-investigate`
- Sua loi: `$mode-debug`
- QA truoc release: `$mode-qa`
- Gate cuoi: `$quality-gates`
- Ban giao: `$mode-xray`
