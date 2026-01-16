---
activation: model_decision
description: Apply when user requests creating new feature, component, or module
---

# 🏗️ Build Mode

**Goal:** Create new code that meets standards and is maintainable.

## Process

1. Confirm scope & Acceptance Criteria
2. Propose file/component structure
3. Code in order: **Types/Models → Logic/Services → Interface → Styles**
4. Run checklist before delivery
5. Explain complex logic

## Clarifying Questions

When scope is unclear:
- **What exactly should it do?** (core functionality)
- **What should it NOT do?** (boundaries)
- **Any existing patterns to follow?** (consistency)
- **Who will use this?** (end user vs developer)
- **Which language/framework?** (tech stack)

## File Structure Patterns

### JavaScript/TypeScript (React/Node.js)
```plaintext
src/
├── components/          # UI components
├── hooks/               # Custom hooks
├── services/            # Business logic
├── utils/               # Helper functions
├── types/               # TypeScript types
└── index.ts             # Public exports
```

### Python (Django/FastAPI/Flask)
```plaintext
src/
├── models/              # Database models
├── services/            # Business logic
├── routes/ (or views/)  # API endpoints
├── schemas/             # Pydantic/serializers
├── utils/               # Helpers
└── __init__.py
```

### Java (Spring Boot)
```plaintext
src/main/java/com/project/
├── controller/          # REST controllers
├── service/             # Business logic
├── repository/          # Data access (JPA)
├── model/               # Entities
├── dto/                 # Data transfer objects
└── config/              # Configuration
```

### Go
```plaintext
cmd/                     # Entry points
internal/                # Private packages
├── handler/             # HTTP handlers
├── service/             # Business logic
├── repository/          # Data access
└── model/               # Structs
pkg/                     # Public packages
```

### PHP (Laravel)
```plaintext
app/
├── Http/Controllers/    # Controllers
├── Models/              # Eloquent models
├── Services/            # Business logic
├── Repositories/        # Data access
└── Providers/           # Service providers
```

### Ruby (Rails)
```plaintext
app/
├── controllers/         # Controllers
├── models/              # ActiveRecord models
├── services/            # Business logic (POROs)
├── serializers/         # JSON serializers
└── views/               # Templates
```

## Output Format

```markdown
## 🏗️ BUILD: [Feature name]

**Scope:** [description]
**Language:** [JS/Python/Java/Go/PHP/Ruby]

**Acceptance Criteria:**
- [ ] AC1: [criterion 1]
- [ ] AC2: [criterion 2]

---

### Code:
**File: `[path]`**
```[language]
// Code here
```

---

### ✅ Checklist:
- [x] Type-safe / properly typed
- [x] Complete error handling
- [x] No hardcoded values
- [x] Comments for complex logic
```

## Examples

### JavaScript/TypeScript
```typescript
// src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
```

### Python
```python
# src/services/user_service.py
from typing import Optional
from models.user import User
from repositories.user_repository import UserRepository

class UserService:
    def __init__(self, repository: UserRepository):
        self._repository = repository

    def get_user_by_id(self, user_id: int) -> Optional[User]:
        return self._repository.find_by_id(user_id)
```

### Java
```java
// src/main/java/com/project/service/UserService.java
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}
```

### Go
```go
// internal/service/user_service.go
package service

type UserService struct {
    repo UserRepository
}

func NewUserService(repo UserRepository) *UserService {
    return &UserService{repo: repo}
}

func (s *UserService) GetUserByID(id int64) (*User, error) {
    return s.repo.FindByID(id)
}
```

### PHP
```php
// app/Services/UserService.php
class UserService
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getUserById(int $id): ?User
    {
        return $this->userRepository->find($id);
    }
}
```

### Ruby
```ruby
# app/services/user_service.rb
class UserService
  def initialize(repository = UserRepository.new)
    @repository = repository
  end

  def get_user_by_id(id)
    @repository.find_by_id(id)
  end
end
```

## Naming Conventions

| Type | JS/TS | Python | Java | Go | PHP | Ruby |
|------|-------|--------|------|-----|-----|------|
| Variable | `camelCase` | `snake_case` | `camelCase` | `camelCase` | `$camelCase` | `snake_case` |
| Function | `camelCase` | `snake_case` | `camelCase` | `PascalCase`* | `camelCase` | `snake_case` |
| Class | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` |
| Constant | `UPPER_CASE` | `UPPER_CASE` | `UPPER_CASE` | `PascalCase` | `UPPER_CASE` | `UPPER_CASE` |
| File | `camelCase.ts` | `snake_case.py` | `PascalCase.java` | `snake_case.go` | `PascalCase.php` | `snake_case.rb` |

*Go: Exported functions use PascalCase, private use camelCase

## Testing Guidance

| Language | Test Framework | File Naming | Run Command |
|----------|----------------|-------------|-------------|
| JS/TS | Jest, Vitest | `*.test.ts` | `npm test` |
| Python | pytest | `test_*.py` | `pytest` |
| Java | JUnit | `*Test.java` | `mvn test` |
| Go | testing | `*_test.go` | `go test` |
| PHP | PHPUnit | `*Test.php` | `./vendor/bin/phpunit` |
| Ruby | RSpec | `*_spec.rb` | `rspec` |

**Minimum:** Create test file structure, even if tests are added later.

## Principles

| ❌ DON'T | ✅ DO |
|----------|-------|
| Add features outside scope | Do exactly what's requested |
| Use loose typing (`any`, `Object`, `interface{}`) | Declare types completely |
| Hardcode values | Use constants/config/env |
| Skip error handling | Handle errors and edge cases |
| Write one large block | Split into small functions |
| Skip test structure | At least create test file placeholder |
| Mix languages conventions | Follow language-specific standards |

## Edge Cases

**Scope too large:**
> "This is a large feature. Let me break it into phases:
> Phase 1: [core] → Phase 2: [enhancements] → Phase 3: [polish]"

**Conflicts with existing code:**
> "This might conflict with [existing]. Should I: A) Extend it, or B) Create separate?"

**Unknown language/framework:**
> "I'll follow general best practices. Please let me know if there are specific conventions for your project."
