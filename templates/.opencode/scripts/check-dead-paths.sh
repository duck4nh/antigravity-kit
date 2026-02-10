#!/bin/bash
# Check for dead instruction paths in opencode.json

echo "=== Dead Instruction Paths Check ==="
echo ""

ERRORS=0

# Extract instruction paths from opencode.json
PATHS=$(grep -o '"\.\/[^"]*"' opencode.json | sed 's/"//g' | sed 's/\\/\//g')

for path in $PATHS; do
  # Expand wildcards
  if [[ "$path" == *"*"* ]]; then
    echo "Checking wildcard: $path"
    # Check if any files match
    matching_files=$(find . -path "./$path" 2>/dev/null | wc -l)
    if [ $matching_files -eq 0 ]; then
      echo "❌ DEAD PATH: $path (no files found)"
      ERRORS=$((ERRORS + 1))
    else
      echo "✅ OK: $path ($matching_files files found)"
    fi
  else
    # Check exact file
    if [ -f "$path" ]; then
      echo "✅ OK: $path"
    elif [ -f "../$path" ]; then
      echo "✅ OK: ../$path"
    else
      echo "❌ DEAD PATH: $path (file not found)"
      ERRORS=$((ERRORS + 1))
    fi
  fi
done

echo ""
if [ $ERRORS -gt 0 ]; then
  echo "❌ FAILED: $ERRORS dead path(s) found"
  echo ""
  echo "Action required:"
  echo "1. Remove dead paths from opencode.json instructions array"
  echo "2. Or create missing files"
  exit 1
else
  echo "✅ PASSED: All instruction paths valid"
  exit 0
fi
