---
activation: always_on
---

# Technical Standards

Technical standards applied to all source code, across all languages.

## 1. Naming Conventions

### Universal Rules
- **Language:** 100% English for variable names, functions, classes
- **Meaningful names:** `customerAddress` not `addr`, `isValid` not `flag`
- **Boolean:** prefix with `is`, `has`, `can`, `should`, `will`
- **Avoid:** single letters (except loops), abbreviations, numbered names (`func1`)

### By Language

| Type | JS/TS | Python | Java | Go | PHP | Ruby |
|------|-------|--------|------|-----|-----|------|
| Variable | `camelCase` | `snake_case` | `camelCase` | `camelCase` | `$camelCase` | `snake_case` |
| Constant | `UPPER_CASE` | `UPPER_CASE` | `UPPER_CASE` | `PascalCase` | `UPPER_CASE` | `UPPER_CASE` |
| Function | `camelCase` | `snake_case` | `camelCase` | `PascalCase`* | `camelCase` | `snake_case` |
| Class | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` |
| Interface | `IName` or `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` | `PascalCase` | N/A (modules) |
| Private | `_prefix` or `#` | `_prefix` | `private` | `camelCase` | `private` | `@var`, `_method` |
| File | `camelCase.ts` | `snake_case.py` | `PascalCase.java` | `snake_case.go` | `PascalCase.php` | `snake_case.rb` |

*Go: Exported = PascalCase, unexported = camelCase

### Examples

```javascript
// JavaScript/TypeScript
const userId = 123;
const MAX_RETRY_COUNT = 3;
function calculateTotal(items) {}
class UserService {}
```

```python
# Python
user_id = 123
MAX_RETRY_COUNT = 3
def calculate_total(items):
    pass
class UserService:
    pass
```

```java
// Java
int userId = 123;
static final int MAX_RETRY_COUNT = 3;
public double calculateTotal(List<Item> items) {}
public class UserService {}
```

```go
// Go
userID := 123
const MaxRetryCount = 3
func CalculateTotal(items []Item) float64 {} // Exported
func calculateTotal(items []Item) float64 {} // Unexported
type UserService struct {}
```

```php
// PHP
$userId = 123;
const MAX_RETRY_COUNT = 3;
function calculateTotal(array $items) {}
class UserService {}
```

```ruby
# Ruby
user_id = 123
MAX_RETRY_COUNT = 3
def calculate_total(items)
end
class UserService
end
```

## 2. Function & Logic Flow

### Universal Principles
- **Early Return:** Avoid deep if/else nesting
- **Single Responsibility:** 1 function = 1 task
- **Max 30-50 lines/function**
- **Max 3-4 parameters**, use Object/struct if more needed

### Early Return Pattern

| Language | Example |
|----------|---------|
| JS/TS | `if (!user) return null;` |
| Python | `if not user: return None` |
| Java | `if (user == null) return null;` |
| Go | `if user == nil { return nil, err }` |
| PHP | `if (!$user) return null;` |
| Ruby | `return nil unless user` |

### Bad vs Good Example

```
❌ Bad - Arrow/Pyramid Code (All Languages)
if (condition1) {
    if (condition2) {
        if (condition3) {
            // deep nesting
        }
    }
}

✅ Good - Early Return
if (!condition1) return;
if (!condition2) return;
if (!condition3) return;
// main logic here
```

## 3. Type Safety

### Universal Rules
- **No Magic Numbers:** Use constants or enums
- **Strict Typing:** Declare types for params and return values
- **Immutability:** Prefer creating copies over mutating data

### Type Declaration by Language

| Language | Variable | Function | Strictness |
|----------|----------|----------|------------|
| TypeScript | `const x: number = 1` | `function f(x: number): string` | Strong |
| Python | `x: int = 1` (type hint) | `def f(x: int) -> str:` | Optional |
| Java | `int x = 1` | `String f(int x)` | Strong |
| Go | `var x int = 1` | `func f(x int) string` | Strong |
| PHP | `int $x = 1` (PHP 7+) | `function f(int $x): string` | Optional |
| Ruby | N/A | N/A (duck typing) | Dynamic |

### Avoid Magic Numbers

```
❌ Bad (All Languages)
if (status == 1) { ... }

✅ Good (All Languages)
if (status == OrderStatus.PENDING) { ... }
// or
if (status == ORDER_STATUS_PENDING) { ... }
```

## 4. Error Handling

### Universal Principles
- **Don't swallow errors:** Always log in catch blocks
- **Structured Logging:** Include context
- **Fail Fast:** Report errors immediately
- **Specific exceptions:** Catch specific, not generic errors

### Error Handling by Language

| Language | Try-Catch Syntax | Logging |
|----------|------------------|---------|
| JS/TS | `try {} catch (e) {}` | `console.error()`, `winston` |
| Python | `try: ... except Exception as e:` | `logging.error()` |
| Java | `try {} catch (Exception e) {}` | `logger.error()` |
| Go | `if err != nil { return err }` | `log.Error()` |
| PHP | `try {} catch (Exception $e) {}` | `Log::error()` |
| Ruby | `begin ... rescue => e ... end` | `Rails.logger.error` |

### Examples

```javascript
// JavaScript/TypeScript
try {
  await fetchData();
} catch (error) {
  logger.error('Failed to fetch data', { error, userId });
  throw error; // Re-throw or handle appropriately
}
```

```python
# Python
try:
    fetch_data()
except RequestException as e:
    logger.error('Failed to fetch data', extra={'error': str(e), 'user_id': user_id})
    raise
```

```go
// Go - Explicit error handling
result, err := fetchData()
if err != nil {
    log.Error("Failed to fetch data", "error", err, "userID", userID)
    return nil, fmt.Errorf("fetch failed: %w", err)
}
```

## 5. Comments

### Universal Rules
- **Why > What:** Comments explain the REASON, not the WHAT
- **Self-documenting code:** Good names reduce need for comments
- **TODO/FIXME:** Mark incomplete work with ticket reference

### Documentation by Language

| Language | Doc Format | Example |
|----------|------------|---------|
| JS/TS | JSDoc | `/** @param {string} name */` |
| Python | Docstrings | `"""Description."""` |
| Java | Javadoc | `/** @param name description */` |
| Go | Go Doc | `// FunctionName does X.` |
| PHP | PHPDoc | `/** @param string $name */` |
| Ruby | YARD/RDoc | `# @param name [String]` |

### Good vs Bad Comments

```
❌ Bad - Explains WHAT (obvious from code)
// Add 1 to counter
counter++;

✅ Good - Explains WHY
// Compensate for 0-indexed array when displaying to user
counter++;

✅ Good - TODO with context
// TODO(#123): Refactor to use batch API once available
```

## 6. Code Organization

### Import Order (All Languages)
1. Standard library / built-in modules
2. Third-party packages
3. Internal / project modules
4. Relative imports

### File Length Guidelines
| Type | Recommended Max |
|------|-----------------|
| Source file | 200-400 lines |
| Function | 30-50 lines |
| Class | 200-300 lines |

## 7. Security Basics

### Universal Security Rules
| Rule | Description |
|------|-------------|
| No hardcoded secrets | Use environment variables |
| Validate inputs | Never trust user input |
| Parameterized queries | Prevent SQL injection |
| Escape output | Prevent XSS |
| Least privilege | Minimal permissions |

### Environment Variables

| Language | Access |
|----------|--------|
| JS/TS | `process.env.API_KEY` |
| Python | `os.environ.get('API_KEY')` |
| Java | `System.getenv("API_KEY")` |
| Go | `os.Getenv("API_KEY")` |
| PHP | `getenv('API_KEY')` or `$_ENV['API_KEY']` |
| Ruby | `ENV['API_KEY']` |
