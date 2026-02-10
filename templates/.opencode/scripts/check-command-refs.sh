#!/bin/bash
# Check command references in documentation

echo "=== Command Reference Check ==="
echo ""

# Get list of actual commands
ACTUAL_COMMANDS=$(find command -name "*.md" -type f -exec basename {} \; | sed 's/\.md$//')
ERRORS=0

# Files to check
DOCS="AGENTS.md README.md CHANGELOG.md docs/*.md instructions/*.md"

for file in $DOCS; do
  if [ -f "$file" ]; then
    # Find command references like /fix, /test, etc.
    refs=$(grep -oE "/[a-z-]+" "$file" 2>/dev/null | sort -u)
    
    for ref in $refs; do
      # Check if command exists
      if echo "$ACTUAL_COMMANDS" | grep -q "^${ref//\//}$"; then
        : # Command exists, OK
      else
        # Check if it's a known special case (e.g., /build, /refine)
        case "$ref" in
          /build|/refine|/contract)
            # These are documented but may not exist yet
            echo "⚠️  DOCUMENTED BUT MISSING: $ref in $file"
            ERRORS=$((ERRORS + 1))
            ;;
          *)
            # Other refs might be OK (e.g., standard bash commands)
            :
            ;;
        esac
      fi
    done
  fi
done

echo ""
if [ $ERRORS -gt 0 ]; then
  echo "❌ FAILED: $ERRORS documented command(s) missing"
  echo ""
  echo "Action required:"
  echo "1. Create missing commands"
  echo "2. Or remove references from documentation"
  exit 1
else
  echo "✅ PASSED: All command references valid"
  exit 0
fi
