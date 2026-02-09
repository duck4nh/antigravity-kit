# Coding Preferences - TypeScript

## Core Rules

### No `any`
```typescript
// ❌ Bad
function process(data: any) { }

// ✅ Good
function process(data: unknown) {
  if (isUserData(data)) {
    // narrowed type
  }
}

// ✅ Better - explicit types
function process(data: UserData) { }
```

### Async/Await over Promises
```typescript
// ❌ Avoid
fetchUser().then(user => {
  fetchOrders(user.id).then(orders => {});
});

// ✅ Prefer
const user = await fetchUser();
const orders = await fetchOrders(user.id);
```

### Named Imports
```typescript
// ❌ Avoid
import * as utils from './utils';

// ✅ Prefer
import { formatDate, parseNumber } from './utils';
```

### Const Assertions
```typescript
// ❌ Mutable
const ROLES = ['admin', 'user'];

// ✅ Immutable
const ROLES = ['admin', 'user'] as const;
type Role = typeof ROLES[number]; // 'admin' | 'user'
```

## Type Patterns

### Prefer Interfaces for Objects
```typescript
// Objects - use interface
interface User {
  id: string;
  name: string;
}

// Unions/intersections - use type
type Status = 'pending' | 'active' | 'inactive';
type AdminUser = User & { permissions: string[] };
```

### Utility Types
```typescript
Partial<T>      // All optional
Required<T>     // All required
Pick<T, K>      // Select properties
Omit<T, K>      // Exclude properties
Record<K, V>    // Key-value map
```

### Strict Null Checks
```typescript
// Handle null/undefined explicitly
function getName(user: User | null): string {
  return user?.name ?? 'Unknown';
}
```

## Functions

### Return Types
```typescript
// ✅ Explicit return types for public APIs
export function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

### Destructuring
```typescript
// ✅ Clean destructuring
function createUser({ name, email }: CreateUserDto): User {
  return { id: generateId(), name, email };
}
```

## Avoid

- ❌ `any` type
- ❌ Type assertions (`as`) without validation
- ❌ Non-null assertions (`!`) unless guaranteed
- ❌ Implicit `any` in function parameters
- ❌ Magic numbers (use named constants)
