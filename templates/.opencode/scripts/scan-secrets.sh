#!/bin/bash
# Scan for hardcoded secrets in templates

echo "=== Hardcoded Secret Scan ==="
echo ""

ERRORS=0
SECRETS_FOUND=0

# Patterns to search for
PATTERNS=(
  "Bearer [a-zA-Z0-9_\-\.]{20,}"
  "Authorization: [a-zA-Z0-9_\-\.]{20,}"
  "api[_-]?key[\"']?\s*[:=][\"']?\s*[a-zA-Z0-9_\-\.]{20,}"
  "token[\"']?\s*[:=][\"']?\s*[a-zA-Z0-9_\-\.]{20,}"
  "password[\"']?\s*[:=][\"']?\s*[^\s\"']{8,}"
  "secret[\"']?\s*[:=][\"']?\s*[^\s\"']{8,}"
)

echo "Scanning files for hardcoded secrets..."
echo ""

# Files to scan (exclude node_modules, .git)
FILES=$(find . -type f \( -name "*.md" -o -name "*.json" -o -name "*.yml" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.git/*" \
  ! -path "*/.github/workflows/*")

for file in $FILES; do
  for pattern in "${PATTERNS[@]}"; do
    if grep -qiE "$pattern" "$file" 2>/dev/null; then
      # Check if it's using env variable (safe)
      if grep -qE '\{env:[A-Z_]+\}' "$file"; then
        continue # Safe, using env variable
      fi
      
      echo "⚠️  POSSIBLE SECRET: $file"
      grep -iE --color=never "$pattern" "$file" | head -1
      SECRETS_FOUND=$((SECRETS_FOUND + 1))
    fi
  done
done

echo ""
echo "=== Summary ==="
echo "Files scanned: $(echo "$FILES" | wc -l)"
echo "Possible secrets found: $SECRETS_FOUND"
echo ""

if [ $SECRETS_FOUND -gt 0 ]; then
  echo "❌ FAILED: Hardcoded secrets detected!"
  echo ""
  echo "Action required:"
  echo "1. Replace hardcoded values with {env:VAR_NAME}"
  echo "2. Add to .env.example"
  echo "3. Update documentation"
  exit 1
else
  echo "✅ PASSED: No hardcoded secrets detected"
  exit 0
fi
