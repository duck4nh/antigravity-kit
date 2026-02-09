# Test-Driven Development Workflow

## Red-Green-Refactor Cycle

### 1. RED: Write failing test
```typescript
// Step 1: Write test FIRST
describe('UserService.create', () => {
  it('should throw error when email already exists', async () => {
    // Arrange
    const existingUser = await createTestUser();
    const dto = { email: existingUser.email, name: 'Test' };

    // Act & Assert
    await expect(userService.create(dto))
      .rejects.toThrow('Email already exists');
  });
});
```

### 2. GREEN: Make it pass (minimal code)
```typescript
// Step 2: Write JUST enough code to pass
class UserService {
  async create(dto: CreateUserDto): Promise<User> {
    const existing = await this.repo.findByEmail(dto.email);
    if (existing) {
      throw new Error('Email already exists');
    }
    return this.repo.create(dto);
  }
}
```

### 3. REFACTOR: Improve quality
```typescript
// Step 3: Refactor with confidence (tests protect you)
class UserService {
  async create(dto: CreateUserDto): Promise<User> {
    await this.ensureEmailUnique(dto.email);
    return this.repo.create(dto);
  }

  private async ensureEmailUnique(email: string): Promise<void> {
    if (await this.repo.findByEmail(email)) {
      throw new ConflictError('Email already exists');
    }
  }
}
```

## Test Case Generation Checklist

TRƯỚC khi coding, generate test cases cho:

### Happy Paths
- [ ] Standard success case
- [ ] Success with optional data
- [ ] Success with minimal data

### Sad Paths
- [ ] Invalid input (type, format)
- [ ] Missing required fields
- [ ] Business rule violations
- [ ] Resource not found
- [ ] Permission denied

### Edge Cases
- [ ] Empty/null/undefined values
- [ ] Boundary values (0, -1, max)
- [ ] Duplicate scenarios
- [ ] Concurrent operations

### Integration Cases
- [ ] Database errors
- [ ] External API failures
- [ ] Network timeouts

## Test-First Benefits

| Benefit       | How                                      |
| ------------- | ---------------------------------------- |
| **Better design** | Tests force you to think about API first |
| **Safety net**    | Refactor without fear                    |
| **Documentation** | Tests show expected behavior             |
| **Fewer bugs**    | Edge cases caught early                  |

## TDD Workflow Integration

### When Building Features

1. **Understand Requirements**
   - Read user story/spec
   - Identify acceptance criteria

2. **Design API Surface**
   - Define function signatures
   - Plan data structures

3. **Generate Test Cases**
   - Use checklist above
   - Document all scenarios

4. **Write Tests (RED)**
   - Start with happy path
   - Add edge case tests
   - Run → All fail ✗

5. **Implement (GREEN)**
   - Write minimal implementation
   - Run → Tests pass ✓

6. **Refactor**
   - Improve code quality
   - Run → Tests still pass ✓

7. **Repeat** for next feature

### Example TDD Session

```typescript
// ========== STEP 1: UNDERSTAND ==========
// Requirement: Create user with unique email

// ========== STEP 2: DESIGN ==========
interface CreateUserDto {
  email: string;
  name: string;
}

interface User {
  id: string;
  email: string;
  name: string;
}

// ========== STEP 3: GENERATE TEST CASES ==========
/*
Happy Paths:
✓ Valid email + name → user created
✓ Email already exists → error

Sad Paths:
✓ Invalid email format → error
✓ Missing email → error
✓ Missing name → error

Edge Cases:
✓ Empty strings → error
✓ Very long email → handle
✓ Special characters in name → allow
*/

// ========== STEP 4: WRITE TESTS (RED) ==========
describe('UserService.create', () => {
  it('should create user with valid email and name', async () => {
    const dto = { email: 'test@example.com', name: 'Test User' };
    const user = await userService.create(dto);
    expect(user).toHaveProperty('id');
    expect(user.email).toBe(dto.email);
  });

  it('should throw error when email already exists', async () => {
    const existingUser = await createTestUser();
    const dto = { email: existingUser.email, name: 'Another User' };
    await expect(userService.create(dto)).rejects.toThrow('Email already exists');
  });

  it('should throw error for invalid email format', async () => {
    const dto = { email: 'invalid-email', name: 'Test' };
    await expect(userService.create(dto)).rejects.toThrow('Invalid email format');
  });

  it('should throw error when email is missing', async () => {
    const dto = { email: '', name: 'Test' };
    await expect(userService.create(dto)).rejects.toThrow('Email is required');
  });
});
// Run → All fail ✗

// ========== STEP 5: IMPLEMENT (GREEN) ===========
class UserService {
  constructor(private repo: UserRepository) {}

  async create(dto: CreateUserDto): Promise<User> {
    // Validation
    if (!dto.email) throw new ValidationError('Email is required');
    if (!this.isValidEmail(dto.email)) throw new ValidationError('Invalid email format');

    // Business rule
    const existing = await this.repo.findByEmail(dto.email);
    if (existing) throw new ConflictError('Email already exists');

    // Create
    return this.repo.create(dto);
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
// Run → Tests pass ✓

// ========== STEP 6: REFACTOR ===========
class UserService {
  constructor(
    private repo: UserRepository,
    private validator: EmailValidator
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    this.validateInput(dto);
    await this.ensureEmailUnique(dto.email);
    return this.repo.create(dto);
  }

  private validateInput(dto: CreateUserDto): void {
    if (!dto.email) throw new ValidationError('Email is required');
    if (!this.validator.isValid(dto.email)) {
      throw new ValidationError('Invalid email format');
    }
  }

  private async ensureEmailUnique(email: string): Promise<void> {
    if (await this.repo.findByEmail(email)) {
      throw new ConflictError('Email already exists');
    }
  }
}
// Run → Tests still pass ✓
```

## Integration with mode-build

1. **Requirements** → Generate test cases
2. **Types/Models** → Define test data
3. **Tests FIRST** → Write failing tests
4. **Logic** → Make tests pass
5. **Refactor** → Improve with confidence
6. **Verify** → All tests pass

## Testing Commands

```bash
# Watch mode for TDD
npm test -- --watch

# Run specific test file
npm test -- userService.test

# Run tests matching pattern
npm test -- --testNamePattern="should throw error"

# Coverage report
npm test -- --coverage

# Update snapshots
npm test -- -u
```

## TDD Anti-Patterns to Avoid

| Anti-Pattern        | Why Bad                          | Instead                          |
| ------------------- | -------------------------------- | -------------------------------- |
| Writing tests after | Defeats purpose of TDD           | Write tests FIRST                |
| Testing internals   | Brittle tests, implementation    | Test behavior/outputs            |
| Mocking everything  | False confidence, slow           | Mock only external dependencies  |
| Skipping refactor   | Accumulates technical debt       | Always refactor after green      |
| Too many assertions | Hard to debug failures           | One assertion per test (mostly)  |
| Ignoring failing    | Broken test suite                | Fix immediately                  |
