#!/bin/bash
# Check for duplicate sections in markdown files

echo "=== Duplicate Section Check ==="
echo ""

ERRORS=0

# Get all markdown files
FILES=$(find . -name "*.md" -type f ! -path "*/node_modules/*")

for file in $FILES; do
  # Extract all section headers
  sections=$(grep -n "^#" "$file" | awk -F: '{print $1":"$2}')
  
  # Check for duplicates
  duplicates=$(echo "$sections" | cut -d: -f2 | sort | uniq -d)
  
  if [ -n "$duplicates" ]; then
    echo "⚠️  DUPLICATES in $file:"
    echo "$duplicates" | while read section; do
      echo "  - $section"
      grep -n "^#.*$section" "$file" | cut -d: -f1 | while read line; do
        echo "    Line $line"
      done
    done
    ERRS=$((ERRORS + 1))
  fi
done

echo ""
if [ $ERRORS -gt 0 ]; then
  echo "❌ FAILED: Duplicate sections found in $ERRORS file(s)"
  echo ""
  echo "Action required:"
  echo "1. Merge or renumber duplicate sections"
  echo "2. Ensure unique section identifiers"
  exit 1
else
  echo "✅ PASSED: No duplicate sections found"
  exit 0
fi
