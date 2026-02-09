# Testing Guidelines

## Test Structure

```typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should do something when condition', () => {
      // Arrange
      const input = createTestInput();
      
      // Act
      const result = methodUnderTest(input);
      
      // Assert
      expect(result).toBe(expected);
    });
  });
});
```

## Naming Convention

```typescript
// Pattern: should [expected behavior] when [condition]
it('should return empty array when no items match')
it('should throw error when user is not authenticated')
it('should update state when form is submitted')
```

## Test Types

| Type | Purpose | Speed |
|------|---------|-------|
| Unit | Single function/component | Fast |
| Integration | Multiple units together | Medium |
| E2E | Full user flow | Slow |

## What to Test

### ✅ Test
- Public APIs
- Edge cases
- Error handling
- State changes
- User interactions

### ❌ Don't Test
- Implementation details
- Third-party libraries
- Trivial getters/setters
- Framework internals

## Mocking

```typescript
// Mock external dependencies
jest.mock('./api', () => ({
  fetchUser: jest.fn(),
}));

// Setup mock implementation
beforeEach(() => {
  (fetchUser as jest.Mock).mockResolvedValue(mockUser);
});
```

## Coverage Goals

| Metric | Target |
|--------|--------|
| Statements | 80% |
| Branches | 75% |
| Functions | 80% |
| Lines | 80% |

## Commands

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test -- --watch

# Coverage report
pnpm test -- --coverage

# Single file
pnpm test -- path/to/file.test.ts
```
