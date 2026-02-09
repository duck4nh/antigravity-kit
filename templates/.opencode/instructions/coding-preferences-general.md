# Coding Preferences - General

## Principles

### SOLID
- **S**ingle Responsibility - One purpose per module
- **O**pen/Closed - Open for extension, closed for modification
- **L**iskov Substitution - Subtypes must be substitutable
- **I**nterface Segregation - Many specific interfaces
- **D**ependency Inversion - Depend on abstractions

### DRY & KISS
- Don't Repeat Yourself
- Keep It Simple, Stupid

## Environment & Security

### Never Hardcode
```typescript
// ❌ Bad
const API_KEY = "sk-abc123";

// ✅ Good
const API_KEY = process.env.API_KEY;
```

### .env Files
- `.env.example` - Template with empty values (commit)
- `.env.local` - Local overrides (gitignore)
- `.env` - Default values (gitignore)

### Secrets
- Use environment variables
- Use secret managers (Vault, AWS Secrets)
- Never commit to git

## Error Handling

```typescript
// ✅ Explicit error handling
try {
  const result = await riskyOperation();
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle validation
  } else if (error instanceof NetworkError) {
    // Handle network
  } else {
    // Unknown error - log and rethrow
    logger.error('Unexpected error', error);
    throw error;
  }
}
```

## File Organization

```
src/
├── components/    # UI components
├── hooks/         # Custom hooks
├── services/      # Business logic
├── utils/         # Helper functions
├── types/         # Type definitions
├── constants/     # Constants and enums
└── config/        # Configuration
```

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files (components) | PascalCase | `UserProfile.tsx` |
| Files (utils) | camelCase | `formatDate.ts` |
| Variables | camelCase | `userName` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |
| Types/Interfaces | PascalCase | `UserProfile` |
| Functions | camelCase | `getUserById` |
