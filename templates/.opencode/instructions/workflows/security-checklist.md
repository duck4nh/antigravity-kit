# Security Checklist for Development

## Pre-Implementation (TRƯỚC khi code)

### Threat Modeling Questions
- [ ] What data does this handle? (PII/sensitive/public)
- [ ] Who can access this? (authn/authz)
- [ ] What if malicious input?
- [ ] What if DoS attack?

## During Implementation (TRONG khi code)

### Input Validation
- [ ] All user inputs validated
- [ ] Type checking enforced
- [ ] Length limits enforced
- [ ] Allowlist over blocklist

### Output Encoding
- [ ] HTML output escaped (XSS prevention)
- [ ] JSON output sanitized
- [ ] SQL parameterized (SQLi prevention)

### Authentication & Authorization
- [ ] Authentication required where needed
- [ ] Authorization checks on all operations
- [ ] Principle of least privilege
- [ ] No hardcoded credentials

### Data Protection
- [ ] Secrets in environment variables
- [ ] Sensitive data encrypted at rest
- [ ] HTTPS enforced in transit
- [ ] No sensitive data in logs

### Error Handling
- [ ] Don't leak sensitive info in errors
- [ ] Generic errors to users
- [ ] Detailed errors to logs

## Post-Implementation (SAU khi code)

### Security Review
- [ ] Review for OWASP Top 10
- [ ] Check for common vulnerabilities
- [ ] Dependency scan (`npm audit`, `snyk test`)

### Testing
- [ ] Test with malicious inputs
- [ ] Test auth bypass scenarios
- [ ] Test authorization edge cases
- [ ] fuzz testing (if critical)

## Quick Security Reference

| Vulnerability | Prevention            | Check |
| ------------- | --------------------- | ----- |
| XSS           | Output encoding, CSP  | [ ]   |
| SQLi          | Parameterized queries | [ ]   |
| CSRF          | Tokens, SameSite      | [ ]   |
| SSRF          | Allowlist validation  | [ ]   |
| IDOR          | Authz checks          | [ ]   |
| Auth bypass   | Proper session mgmt   | [ ]   |

## Security Commands

```bash
# Dependency vulnerability scan
npm audit
npm audit fix

# Snyk (if available)
snyk test
snyk monitor

# OWASP dependency check (if available)
dependency-check --scan ./
```

## OWASP Top 10 Quick Check

### A01: Broken Access Control
- [ ] Users can only access their own data
- [ ] Admin actions require admin role
- [ ] No direct object references without authz

### A02: Cryptographic Failures
- [ ] Sensitive data encrypted at rest
- [ ] TLS/HTTPS in transit
- [ ] Strong encryption algorithms
- [ ] No hardcoded keys/secrets

### A03: Injection
- [ ] Parameterized queries
- [ ] Input validation & sanitization
- [ ] ORM usage (prevents SQLi)
- [ ] Output encoding (prevents XSS)

### A04: Insecure Design
- [ ] Threat modeling conducted
- [ ] Secure by default
- [ ] Defense in depth

### A05: Security Misconfiguration
- [ ] Default credentials changed
- [ ] Error messages don't leak info
- [ ] Debug mode off in production
- [ ] Security headers configured

### A06: Vulnerable Components
- [ ] Dependencies up-to-date
- [ ] No known vulnerabilities
- [ ] Regular dependency audits

### A07: Authentication Failures
- [ ] Strong password policy
- [ ] Account lockout after failures
- [ ] Secure session management
- [ ] Multi-factor auth (if sensitive)

### A08: Data Integrity Failures
- [ ] Data validation on input & output
- [ ] Signed data/APIs
- [ ] Immutable logs

### A09: Security Logging Failures
- [ ] Security events logged
- [ ] Logs tamper-evident
- [ ] Alerting configured

### A10: Server-Side Request Forgery (SSRF)
- [ ] Allowlist for external URLs
- [ ] Network segmentation
- [ ] No raw user input in requests
