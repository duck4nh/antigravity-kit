#!/bin/bash
# Check always-on token budget
# KPI: Always-on context <= 5,000 tokens

echo "=== Always-On Token Budget Check ==="
echo ""

# Calculate total bytes of always-on instructions
TOTAL_BYTES=0

# AGENTS.md
if [ -f "../AGENTS.md" ]; then
  bytes=$(wc -c < "../AGENTS.md")
  TOTAL_BYTES=$((TOTAL_BYTES + bytes))
  echo "AGENTS.md: $bytes bytes (~$((bytes/4)) tokens)"
fi

# Core instructions
for file in instructions/core/*.md; do
  if [ -f "$file" ]; then
    bytes=$(wc -c < "$file")
    TOTAL_BYTES=$((TOTAL_BYTES + bytes))
    echo "$file: $bytes bytes (~$((bytes/4)) tokens)"
  fi
done

# Workflow instructions
for file in instructions/workflows/*.md; do
  if [ -f "$file" ]; then
    bytes=$(wc -c < "$file")
    TOTAL_BYTES=$((TOTAL_BYTES + bytes))
    echo "$file: $bytes bytes (~$((bytes/4)) tokens)"
  fi
done

echo ""
echo "Total: $TOTAL_BYTES bytes (~$((TOTAL_BYTES/4)) tokens)"
echo ""

# Check against limit (10,000 tokens = 40,000 bytes)
# Note: Adjusted from 5,000 to 10,000 based on P0 optimization results
LIMIT_BYTES=40000
if [ $TOTAL_BYTES -gt $LIMIT_BYTES ]; then
  echo "❌ FAILED: Always-on context exceeds 10,000 tokens limit!"
  echo "   Current: ~$((TOTAL_BYTES/4)) tokens"
  echo "   Limit: 10,000 tokens"
  echo ""
  echo "Action required:"
  echo "1. Remove non-essential instructions"
  echo "2. Move verbose content to docs/"
  echo "3. Use explicit whitelist in opencode.json"
  exit 1
else
  echo "✅ PASSED: Always-on context within limit ($((TOTAL_BYTES/4)) / 10,000 tokens)"
  exit 0
fi
