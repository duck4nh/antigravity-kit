# Proof of Concept: [Vulnerability Name]

## Overview

| Field | Value |
|-------|-------|
| **CVE ID** | CVE-XXXX-XXXX |
| **Vulnerability Type** | RCE / SQLi / XSS / SSRF / etc |
| **Severity** | Critical / High / Medium / Low |
| **CVSS Score** | X.X |
| **Affected Software** | [Software Name vX.X.X - vY.Y.Y] |
| **Discovered By** | [Your Name] |
| **Discovery Date** | YYYY-MM-DD |

## Description

Brief description of the vulnerability. What is the root cause? What component is affected?

## Impact

What can an attacker do by exploiting this vulnerability?

- [ ] Remote Code Execution
- [ ] Data Disclosure
- [ ] Privilege Escalation
- [ ] Denial of Service
- [ ] Authentication Bypass

## Affected Versions

- Version X.X.X - VULNERABLE
- Version Y.Y.Y - FIXED

## Prerequisites

- What access/conditions are required to exploit?
- Authentication required? Network access?

## Steps to Reproduce

### Environment Setup

```bash
# Setup vulnerable environment
docker run -d -p 8080:80 vulnerable-app:x.x.x
```

### Exploitation

**Step 1:** [Description]
```bash
# Command or request
curl -X POST http://target/endpoint \
  -H "Content-Type: application/json" \
  -d '{"param": "payload"}'
```

**Step 2:** [Description]
```
[Expected output or response]
```

**Step 3:** [Description]
```
[Final proof of exploitation]
```

## Proof

[Screenshot or output showing successful exploitation]

```
[Command output showing impact, e.g., "id" output for RCE]
```

## Remediation

### Immediate Mitigation

- Temporary workaround if available

### Permanent Fix

- Upgrade to version Y.Y.Y or later
- Or apply patch: [link to patch]

### Detection

```
# Log pattern or IOC to detect exploitation
grep "pattern" /var/log/app.log
```

## Timeline

| Date | Action |
|------|--------|
| YYYY-MM-DD | Vulnerability discovered |
| YYYY-MM-DD | Vendor notified |
| YYYY-MM-DD | Vendor confirmed |
| YYYY-MM-DD | Patch released |
| YYYY-MM-DD | Public disclosure |

## References

- [Link to vendor advisory]
- [Link to CVE details]
- [Link to related research]
