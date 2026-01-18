---
name: python-security-tools
description: >-
  Python for security tools. Libraries: requests, pwntools, scapy, socket.
  Use for exploit dev, automation, network tools, web security scripts.
---

# Python Security Tools

## Essential Libraries

```python
# Web
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, quote

# Network
import socket
from scapy.all import *

# Binary/Exploit
from pwn import *

# Async
import asyncio
import aiohttp

# Utils
import argparse
import concurrent.futures
```

## HTTP Requests

```python
s = requests.Session()
s.verify = False  # Ignore SSL
s.proxies = {"http": "http://127.0.0.1:8080"}  # Burp

# GET with params
r = s.get(url, params={"id": "1"})

# POST with data
r = s.post(url, data={"user": "admin", "pass": "test"})

# POST JSON
r = s.post(url, json={"key": "value"})

# Custom headers
r = s.get(url, headers={"Authorization": "Bearer token"})

# Handle response
print(r.status_code, r.text, r.json())
```

## Socket Programming

```python
# TCP client
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))
s.sendall(b"data\n")
response = s.recv(4096)
s.close()

# UDP
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.sendto(b"data", (HOST, PORT))
```

## Multithreading

```python
from concurrent.futures import ThreadPoolExecutor

def scan(target):
    # scan logic
    pass

targets = ["url1", "url2", "url3"]
with ThreadPoolExecutor(max_workers=10) as executor:
    results = executor.map(scan, targets)
```

## Common Patterns

```python
# URL fuzzing
for word in wordlist:
    url = f"{base_url}/{word}"
    r = requests.get(url)
    if r.status_code == 200:
        print(f"[+] Found: {url}")

# Parameter brute
for payload in payloads:
    r = requests.get(url, params={"id": payload})
    if "error" not in r.text:
        print(f"[+] Possible: {payload}")
```
