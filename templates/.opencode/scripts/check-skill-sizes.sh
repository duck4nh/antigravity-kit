#!/bin/bash
# Check skill sizes against limits

echo "=== Skill Size Check ==="
echo ""

VIOLATIONS=0
TOTAL=0

for skill in skill/*/SKILL.md; do
  if [ -f "$skill" ]; then
    lines=$(wc -l < "$skill")
    TOTAL=$((TOTAL + 1))
    
    if [ $lines -gt 500 ]; then
      echo "❌ OVERSIZED: $skill ($lines lines)"
      VIOLATIONS=$((VIOLATIONS + 1))
    elif [ $lines -gt 400 ]; then
      echo "⚠️  WARNING: $skill ($lines lines)"
    else
      echo "✅ OK: $skill ($lines lines)"
    fi
  fi
done

echo ""
echo "=== Summary ==="
echo "Total skills: $TOTAL"
echo "Violations (>500 lines): $VIOLATIONS"

if [ $VIOLATIONS -gt 0 ]; then
  echo ""
  echo "⚠️  $VIOLATIONS skill(s) exceed size limit!"
  echo "See docs/SKILL_SIZE_LIMITS.md for optimization guide."
  exit 1
else
  echo "✅ All skills within limits!"
  exit 0
fi
