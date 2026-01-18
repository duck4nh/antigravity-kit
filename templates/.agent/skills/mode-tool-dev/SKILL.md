---
name: mode-tool-dev
description: >-
  Security tool development workflow. Use when: write script, automate task,
  CLI tool, scanner, fuzzer, utility, automation.
---

# Tool Development Mode

## Project Structure

```
tool-name/
├── tool.py           # Main script
├── requirements.txt  # Dependencies
├── README.md         # Usage documentation
└── lib/              # Helper modules (optional)
```

## CLI Template (Python)

```python
#!/usr/bin/env python3
"""
Tool: [Name]
Description: [What it does]
Author: [Name]
"""

import argparse
import sys

def main():
    parser = argparse.ArgumentParser(
        description="Tool description",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s target.com
  %(prog)s target.com -o results.txt
        """
    )
    parser.add_argument("target", help="Target URL/IP")
    parser.add_argument("-o", "--output", help="Output file")
    parser.add_argument("-t", "--threads", type=int, default=10)
    parser.add_argument("-v", "--verbose", action="store_true")
    args = parser.parse_args()
    
    # Tool logic here
    
if __name__ == "__main__":
    main()
```

## Bash Template

```bash
#!/bin/bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

usage() {
    echo "Usage: $0 <target> [options]"
    echo "  -o OUTPUT  Output file"
    echo "  -v         Verbose mode"
    exit 1
}

[[ $# -lt 1 ]] && usage
TARGET=$1

echo -e "${GREEN}[+] Processing $TARGET${NC}"
# Tool logic here
```

## Checklist

- [ ] Argparse with help text
- [ ] Error handling (try/except)
- [ ] Verbose/quiet modes
- [ ] Output options (stdout/file)
- [ ] README with examples
- [ ] Requirements.txt if Python
