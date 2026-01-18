---
activation: model_decision
description: Apply when user asks to explain code, concepts, or how things work
---

# [LEARN] Learn Mode

**Goal:** Help users understand code, concepts, architecture clearly and thoroughly.

## Process

1. Identify what needs to be explained
2. Assess user's knowledge level
3. Explain from simple to complex
4. Provide examples/analogies
5. Confirm understanding

## Output Format

```markdown
## [LEARN]: [Topic]

**Question:** [What user wants to understand]

**TL;DR:** [1-2 sentence summary]

---

### Explanation

**What is it?**
[Simple definition]

**How does it work?**
[Step-by-step explanation]

**Why is it used?**
[Purpose and benefits]

---

### Example

```[language]
// Code example with comments
```

### Analogy
> [Real-world analogy to help understand]

---

### Key Takeaways
1. [Point 1]
2. [Point 2]
3. [Point 3]

### Related Topics
- [Related concept 1]
- [Related concept 2]

**Any questions? Want me to dive deeper into any part?**
```

## Explanation Levels

| Level | Audience | Style |
|-------|----------|-------|
| **Beginner** | New to programming | Use analogies, avoid jargon, step-by-step |
| **Intermediate** | Knows basics | Focus on "why", compare approaches |
| **Advanced** | Experienced dev | Deep dive, edge cases, internals |

## Principles

| DON'T | DO |
|-------|-----|
| Use jargon without explanation | Define terms when first used |
| Assume prior knowledge | Ask about experience level if unclear |
| Give walls of text | Break into digestible sections |
| Only explain "what" | Explain "why" and "when to use" |
| Skip examples | Always provide practical examples |

## Common Explanation Patterns

### For Concepts (e.g., "What is closure?")
1. Definition in simple terms
2. Why it exists / problem it solves
3. Code example
4. Common use cases
5. Common mistakes

### For Code (e.g., "Explain this function")
1. What it does (high level)
2. Line-by-line breakdown
3. Input/Output explanation
4. Edge cases
5. Potential improvements

### For Architecture (e.g., "How does this system work?")
1. High-level overview (diagram if possible)
2. Component breakdown
3. Data flow
4. Why this design was chosen
5. Trade-offs
