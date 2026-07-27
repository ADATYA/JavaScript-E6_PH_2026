# JavaScript Common Mistakes (freeCodeCamp)

## Comparison Table

| ❌ Your Code | ✅ Correct Code | 💡 Why It Was Wrong |
|--------------|----------------|---------------------|
| `console.log("My name is (botName) and I live on (botLocation).");` | `console.log("My name is " + botName + " and I live on " + botLocation + ".");` | `(botName)` and `(botLocation)` were written as plain text inside a string. JavaScript printed them literally instead of using the variable values. |
| `console.log("My favorite programming language is (favoriteLanguage).");` | `console.log("My favorite programming language is " + favoriteLanguage + ".");` | `favoriteLanguage` should be used as a variable, not as text inside quotes. |
| `let codingFact = "favoriteLanguage";` | `let codingFact = favoriteLanguage + " is used to build websites.";` | `"favoriteLanguage"` is just a string. `favoriteLanguage` is a variable whose value is `"JavaScript"`. |
| `console.log(codingFact);` | `console.log(codingFact);` | ✅ This line was already correct. The problem was the value stored in `codingFact`. |
| *(Didn't reassign `codingFact` a second and third time.)* | `codingFact = "...";` *(Assign a new value twice more.)* | The exercise requires `codingFact` to be assigned **three different values**, logging each one. |
| `console.log("It was fun sharing these facts with you. Goodbye!-" + botName + " from " + botLocation + ".");` | `console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");` | There must be a **space before and after the hyphen (`-`)**. freeCodeCamp checks the exact output. |

---

# Biggest Mistake

### ❌ Incorrect

```javascript
console.log("My name is (botName)");
```

**Output**

```text
My name is (botName)
```

Because everything inside quotes is treated as **plain text**.

---

### ✅ Correct

```javascript
console.log("My name is " + botName);
```

If

```javascript
let botName = "ProfessorBot";
```

**Output**

```text
My name is ProfessorBot
```

---

# String vs Variable

## ❌ String

```javascript
"favoriteLanguage"
```

**Output**

```text
favoriteLanguage
```

---

## ✅ Variable

```javascript
favoriteLanguage
```

If

```javascript
let favoriteLanguage = "JavaScript";
```

**Output**

```text
JavaScript
```

---

# Visual Comparison

| You Wrote | JavaScript Understood | Expected Output |
|------------|----------------------|-----------------|
| `"botName"` | `botName` | `ProfessorBot` |
| `"favoriteLanguage"` | `favoriteLanguage` | `JavaScript` |
| `"(botLocation)"` | `(botLocation)` | `the universe` |

---

# Golden Rule ⭐

> **Everything inside quotes (`" "` or `' '`) is treated as plain text.**

### Example

```javascript
console.log("botName");
```

**Output**

```text
botName
```

---

To use a variable, write it **outside** the quotes.

```javascript
let botName = "ProfessorBot";

console.log(botName);
```

**Output**

```text
ProfessorBot
```

---

# Summary

✅ Use **variables** instead of writing their names inside quotes.

```javascript
"My name is " + botName
```

❌ Don't do this:

```javascript
"My name is (botName)"
```

Remember:

- `"botName"` → String
- `botName` → Variable
- `"favoriteLanguage"` → String
- `favoriteLanguage` → Variable
- Quotes = Text
- No Quotes = Variable