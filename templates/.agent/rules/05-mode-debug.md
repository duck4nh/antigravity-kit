---
activation: model_decision
description: Apply when user reports bugs, errors that need fixing
---

# [DEBUG] Debug Mode

**Goal:** Find the correct cause, fix the right place, prevent recurrence.

## Process

1. Gather information (5W1H)
2. Reproduce the bug
3. Analyze root cause
4. Propose fix + explanation
5. Propose prevention measures

## Required Questions If Information Is Missing

1. Exact error message? (Copy verbatim)
2. Which screen/feature does it occur on?
3. Can it be reproduced? Specific steps?
4. Any recent code changes?
5. Anything unusual in logs?
6. Which language/framework are you using?

## Common Bug Patterns

### Null/None Reference Errors
| Language | Error Message | Typical Cause |
|----------|---------------|---------------|
| JS/TS | `Cannot read property of undefined` | Missing null check |
| Python | `AttributeError: 'NoneType' has no attribute` | Variable is None |
| Java | `NullPointerException` | Object not initialized |
| Go | `panic: runtime error: invalid memory address or nil pointer dereference` | Nil pointer |
| PHP | `Trying to access property of non-object` | Variable is null |
| Ruby | `NoMethodError: undefined method for nil:NilClass` | Variable is nil |

### Type/Cast Errors
| Language | Error Message | Typical Cause |
|----------|---------------|---------------|
| JS/TS | `TypeError: X is not a function` | Wrong type assignment |
| Python | `TypeError: unsupported operand type` | Type mismatch |
| Java | `ClassCastException` | Invalid casting |
| Go | Compile error | Go is strongly typed |
| PHP | `TypeError: Argument must be of type` | Type hint violation |
| Ruby | `TypeError: no implicit conversion` | Type mismatch |

### Index/Key Errors
| Language | Error Message | Typical Cause |
|----------|---------------|---------------|
| JS/TS | `undefined` (silent) | Array index out of bounds |
| Python | `IndexError` / `KeyError` | Invalid index or key |
| Java | `ArrayIndexOutOfBoundsException` | Index >= array.length |
| Go | `panic: index out of range` | Slice bounds error |
| PHP | `Undefined offset` / `Undefined index` | Missing array key |
| Ruby | `nil` (silent) or `IndexError` | Invalid index |

### Common Logic Bugs
| Bug Type | Symptom | All Languages |
|----------|---------|---------------|
| Off-by-one | Wrong loop bounds | `<` vs `<=`, index starts at 0 or 1 |
| Race condition | Inconsistent data | Async/threading without sync |
| Memory leak | Performance degrades | Missing cleanup, circular refs |
| Infinite loop | App hangs/freezes | Missing break condition |
| Deadlock | App freezes | Circular lock dependency |

## Debugging Tools

| Language | Quick Debug | Interactive Debugger | Logging |
|----------|-------------|----------------------|---------|
| JS/TS | `console.log()` | Chrome DevTools, VS Code | `winston`, `pino` |
| Python | `print()`, `pprint()` | `pdb`, `breakpoint()`, PyCharm | `logging` module |
| Java | `System.out.println()` | IntelliJ/Eclipse Debugger | `Log4j`, `SLF4J` |
| Go | `fmt.Println()` | `dlv` (Delve), VS Code | `log`, `zap`, `zerolog` |
| PHP | `var_dump()`, `print_r()` | Xdebug, PhpStorm | `Monolog` |
| Ruby | `puts`, `p`, `pp` | `byebug`, `pry`, RubyMine | `Logger` |

### Quick Debug Commands

```bash
# JavaScript/TypeScript
console.log('DEBUG:', variable);
console.table(arrayOrObject);
debugger; // Browser breakpoint

# Python
print(f"DEBUG: {variable=}")
breakpoint()  # Python 3.7+
import pdb; pdb.set_trace()  # Older Python

# Java
System.out.println("DEBUG: " + variable);
// Or use IDE breakpoints

# Go
fmt.Printf("DEBUG: %+v\n", variable)
// Use dlv for interactive debugging

# PHP
var_dump($variable);
dd($variable);  // Laravel - dump and die

# Ruby
puts variable.inspect
binding.pry  # With pry gem
byebug       # With byebug gem
```

## Output Format

```markdown
## [DEBUG]

**Symptom:** [error description]
**Language:** [JS/Python/Java/Go/PHP/Ruby]

**Reproduction:**
1. [Step 1]
2. [Step 2]
3. [Error appears]

---

### Analysis:
**Root Cause:** [root cause]
**Location:** `[file:line]`

### Fix:
```diff
- [old code]
+ [new code]
```

**Reason:** [explanation]

### Prevention:
| Suggestion | Priority |
|------------|----------|
| [Add validation] | [!] High |
| [Write unit test] | [*] Medium |
```

## Examples

### JavaScript Example
**Error:** `TypeError: Cannot read property 'name' of undefined`

```diff
- const userName = user.name;
+ const userName = user?.name ?? 'Unknown';
```

### Python Example
**Error:** `KeyError: 'email'`

```diff
- email = data['email']
+ email = data.get('email', '')
```

### Java Example
**Error:** `NullPointerException`

```diff
- String name = user.getName().toUpperCase();
+ String name = Optional.ofNullable(user)
+     .map(User::getName)
+     .map(String::toUpperCase)
+     .orElse("");
```

### Go Example
**Error:** `panic: runtime error: index out of range`

```diff
- value := items[index]
+ if index < len(items) {
+     value := items[index]
+ }
```

### PHP Example
**Error:** `Undefined index: email`

```diff
- $email = $data['email'];
+ $email = $data['email'] ?? '';
```

### Ruby Example
**Error:** `NoMethodError: undefined method 'upcase' for nil:NilClass`

```diff
- name = user.name.upcase
+ name = user&.name&.upcase || ''
```

## Edge Cases

| Situation | Response |
|-----------|----------|
| Cannot reproduce | "Can you share logs, screenshot, or recording?" |
| Multiple possible causes | "I found 2 potential causes. Let's test A first..." |
| Bug in dependency | "This appears to be in [library]. Workaround: [X], or upgrade to [version]" |
| Environment-specific | "This might be environment-related. Can you check [config/env vars]?" |

## Principles

| DON'T | DO |
|-------|-----|
| Guess randomly | Request log/screenshot |
| Refactor randomly | Fix the right place, minimal change |
| Stop after fixing | Propose prevention |
| Fix symptoms | Find and fix root cause |
| Assume language | Ask which language/framework |
| Skip testing fix | Verify fix works before delivering |
