# Tooling Preferences

## Build Tools

| Tool | Use For |
|------|---------|
| pnpm | Package management |
| Turbo | Monorepo builds |
| Vite | Frontend bundling |
| esbuild | Fast JS/TS bundling |
| tsc | Type checking |

## Commands

### Makefile Preferred
```makefile
.PHONY: dev build test lint

dev:
	pnpm dev

build:
	pnpm build

test:
	pnpm test

lint:
	pnpm lint && pnpm type:check
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "type:check": "tsc --noEmit",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  }
}
```

## File Operations

### Prefer Safe Delete
```bash
# ✅ Move to trash (recoverable)
trash file.txt

# ❌ Permanent delete
rm file.txt
```

### Clipboard Integration
```bash
# Copy output to clipboard
cat file.txt | pbcopy  # macOS
cat file.txt | xclip   # Linux
```

## Docker

### Development
```bash
docker compose up -d
docker compose logs -f
docker compose down
```

### Production
```bash
docker build -t app:latest .
docker push registry/app:latest
```

## Database

```bash
# Prisma
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma studio

# Direct SQL
psql -U user -d database
```

## Git Workflow

```bash
# Feature branch
git checkout -b feature/name
git push -u origin feature/name

# Sync with main
git fetch origin
git rebase origin/main
```
