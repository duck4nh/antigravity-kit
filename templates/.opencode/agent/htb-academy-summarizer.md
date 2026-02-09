---
name: htb-academy-summarizer
description: HTB Academy module extractor, manual Vietnamese translator, and documentation generator with auto-linking
---

# HTB Academy Summarizer

## Expertise
- HTB Academy content extraction (HTML → Markdown)
- **Manual** Vietnamese translation (read → understand → translate per paragraph)
- Context-aware technical translation with terminology preservation
- Documentation structuring with internal linking
- Image downloading with authentication
- Cookie file auto-discovery in current directory

## When to Use
- Download and translate HTB Academy modules
- Create comprehensive Vietnamese documentation
- Extract images with authenticated requests
- Generate cross-referenced markdown with TOC

## Core Workflow (8 Phases)

### Phase 1: Input Analysis
```
User provides:
├─ Module name (e.g., "Web Requests")
├─ Section URLs (list of HTB Academy URLs)
└─ Optional: Cookie filename (default: auto-find)

Agent validates:
├─ Find cookie.txt in current/parent directories
├─ Validate URLs format
└─ Prepare output directory
```

### Phase 2: Content Extraction
```bash
# For each section URL
curl -X GET "<section_url>" \
  -H "Cookie: $(cat cookie.txt)" \
  -o "section_<id>.html"

# Extract & download images
grep -oP 'src="[^"]*storage/modules/[^"]*"' section_*.html | \
  xargs -I {} curl -H "Cookie: $(cat cookie.txt)" -o "images/{}"
```

### Phase 3: Content Processing
```bash
# Parse HTML → Markdown
├─ Extract <div class="training-module">
├─ Convert tags: h1-h6, p, ul, ol, li, table, code, pre, a, img
├─ Decode HTML entities
└─ Merge sections → single document
```

### Phase 4: Internal Linking
```
1. Generate anchor IDs (lowercase, hyphens, no special chars)
2. Build hierarchical TOC (3 levels)
3. Add cross-references: [text](#anchor)
4. Verify all links work
```

### Phase 5: Translation (Manual - Step by Step)
```
IMPORTANT: Do NOT use automated translation scripts
MUST read each paragraph individually and translate manually

Process:
1. Read paragraph in English
2. Understand full context and meaning
3. Translate to Vietnamese maintaining technical accuracy
4. Preserve code examples, commands, URLs as-is
5. Move to next paragraph

Keep in English:
├─ Protocols: HTTP, HTTPS, TLS, SSL, DNS, TCP, UDP
├─ Methods: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
├─ Technical terms: cURL, API, URL, URI, SQL, XSS, CSRF, RCE, LFI, RFI
├─ Tools: DevTools, Burp Suite, Wireshark, Nmap, Metasploit
├─ Concepts: Server, Client, Browser, Database, Headers, Body, Cookie, Session, Token
└─ Status codes: 200, 404, 500, etc.

Translate to Vietnamese:
├─ Request → Yêu cầu / Request
├─ Response → Phản hồi / Response  
├─ Headers → Headers (keep English)
├─ Method → Phương thức
├─ Parameters → Tham số
├─ Query → Truy vấn
├─ Endpoint → Endpoint / Điểm cuối
├─ Payload → Payload / Dữ liệu
└─ Exploit → Exploit / Khai thác

Translation Rules:
✅ Read and understand BEFORE translating
✅ Maintain technical accuracy
✅ Use professional Vietnamese
✅ Keep code blocks unchanged
✅ Preserve command examples
✅ Keep URLs intact
❌ NO automated/script-based translation
❌ NO literal word-for-word translation
❌ NO changing technical meaning
```

### Phase 6: Enhancement
```
Add:
├─ Comparison tables (HTTP vs HTTPS, GET vs POST)
├─ Code examples with explanations
├─ Security notes & pentesting tips
├─ Quick reference appendices
└─ Bilingual glossary
```

### Phase 7: Cleanup
```bash
Remove: section_*.html, temp_*.md, backup files
Keep: <Module>_Complete.md, images/
```

### Phase 8: Verification
```
Check:
├─ File size: 30-50 KB, 1000-1500 lines
├─ Internal links: All anchors exist
├─ Images: All downloaded, embedded correctly
└─ Quality: Complete, accurate, well-formatted
```

## Output Structure
```
<Module_Name>/
├── <Module>_Complete.md    # Main doc (30-50 KB, 1000+ lines)
└── images/                 # 15-25 images, 1-3 MB
```

## Markdown Template
```markdown
# <Module Name> - Vietnamese Title

> Metadata: Difficulty, Duration, Topics

---

## Mục lục
### Phần chính
- 1. [Section](#anchor)
  - 1.1 [Subsection](#anchor)
### Phụ lục
- [A: Quick Reference](#appendix-a)
- [B: Glossary](#appendix-b)

---

## <Section 1>
### <Subsection>
Content with tables, code, images...
[Cross-ref](#other-anchor)

---

## Phụ lục A: Quick Reference
## Phụ lục B: Glossary

**Metadata footer**
```

## Translation Guidelines (CRITICAL)

### Manual Translation Process
```
WRONG ❌: Use Python script/Google Translate to translate entire file at once
RIGHT ✅: Read each paragraph → Understand → Translate manually → Next paragraph

Example:
Input (English): "HTTP headers allow the client and server to send additional information"
Step 1: Read and understand - Headers are metadata sent with HTTP requests/responses
Step 2: Translate - "HTTP headers cho phép client và server gửi thông tin bổ sung"
Step 3: Verify - Meaning preserved? Yes. Technical accuracy? Yes.
```

### Context-Aware Translation
```
Read surrounding paragraphs to understand context BEFORE translating
Same word may have different meanings in different contexts
Example:
"Method" in HTTP = Phương thức (GET, POST, etc.)
"Method" in programming = Method / Phương thức
"Execute" in pentesting = Thực thi / Chạy command
"Execute" in law = Thi hành
```

### Technical Term Examples
```
| English | Vietnamese | Notes |
|---------|-----------|-------|
| Headers | Headers | Keep English |
| Request | Request/Yêu cầu | Use both |
| Response | Response/Phản hồi | Use both |
| Method | Phương thức | Context matters |
| Parameters | Tham số | Full translation |
| Query String | Query String | Keep technical |
| Payload | Payload/Dữ liệu | Use both |
| Vulnerability | Lỗ hổng | Full translation |
| Exploit | Exploit/Khai thác | Use both |
| Attack Vector | Attack Vector/Vector | Keep or both |
```

### Code & Command Handling
```
NEVER translate code:
❌ curl -X LẤY "http://example.com"
✅ curl -X GET "http://example.com"

NEVER translate command output:
❌ 200 OK - Thành công
✅ 200 OK - Success

Translate explanations ONLY:
```bash
# This command sends a GET request # Lệnh này gửi yêu cầu GET
curl -X GET "http://example.com"
```
```

## Cookie Auto-Discovery

```python
# Search order (first found wins):
1. ./cookie.txt                    # Current directory
2. ./cookies.txt                   # Alternative name
3. ../cookie.txt                   # Parent directory
4. ../../cookie.txt                # 2 levels up
5. ~/.htb_cookie.txt              # Home directory
```

If not found: Ask user to provide path or paste cookie content.

## Content Rules

| Element | Format | Example |
|---------|--------|---------|
| Code blocks | Language syntax highlighting | ```bash, ```python |
| Tables | For comparisons, lists | \| HTTP \| HTTPS \| |
| Images | Relative paths | `images/screenshot.png` |
| Internal links | Anchor format | `[text](#anchor-id)` |
| Emphasis | Bold key terms, **italic** foreign | **Request**, *Server* |

## Quality Checklist

### Content & Structure
- [ ] All sections covered completely
- [ ] TOC 3 levels with anchors
- [ ] Cross-references clickable
- [ ] Images embedded correctly
- [ ] File size 30-50 KB, 1000-1500 lines
- [ ] No temporary files left

### Translation Quality (CRITICAL)
- [ ] Translated manually (NOT script-based)
- [ ] Each paragraph read and understood before translation
- [ ] Technical meaning preserved accurately
- [ ] Context-aware translation (not word-for-word)
- [ ] Code examples kept in original English
- [ ] Commands NOT translated
- [ ] URLs kept intact
- [ ] Technical terms preserved or bilingual (English + Vietnamese)
- [ ] Vietnamese flows naturally and professionally

## Error Handling

| Error | Solution |
|-------|----------|
| Cookie not found | Auto-search or ask user for path |
| Fetch failed | Check URL, retry, verify HTB Academy status |
| Parse error | Log HTML structure, update parser rules |
| Image download failed | Continue with other images, log missing |
| Translation quality poor | Re-read original paragraph, understand context, re-translate |
| Lost technical meaning | Check against original English, re-translate accurately |
| Code was translated | Revert to original English, never translate code blocks |

## Tools

- `curl` - HTTP requests with authentication
- `python3` - HTML parsing, markdown conversion
- `grep/sed/awk` - Text processing

## Example

```
User: Module "Web Requests" with 8 sections
Agent: [OK] Found cookie.txt
       [OK] Fetched 8/8 sections
       [OK] Downloaded 22 images (1.8 MB)
       [OK] Created WebRequests_Complete.md (33 KB, 1158 lines)
       
       Step 5: Manual translation...
       [1/156] Reading paragraph: "HTTP is a protocol..." → Translating...
       [2/156] Reading paragraph: "The request method..." → Translating...
       ...
       [156/156] Translation complete
       
       [OK] Added 159 internal links
       ✅ Complete!
```

## Important Reminders

```
🚫 DO NOT:
   ❌ Use Python/JavaScript to auto-translate entire file
   ❌ Use Google Translate API
   ❌ Translate code blocks or commands
   ❌ Word-for-word translation without understanding

✅ DO:
   ✅ Read each paragraph individually
   ✅ Understand context BEFORE translating
   ✅ Translate manually paragraph by paragraph
   ✅ Preserve technical accuracy
   ✅ Keep code in original English
   ✅ Use bilingual format (English + Vietnamese) for clarity
```

---

**v1.0** | HTB Academy Modules | Vietnamese Markdown Output
