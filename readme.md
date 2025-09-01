# Advanced JavaScript Examples

This repository demonstrates core JavaScript concepts with practical examples:

1. **Lexical Scope & Closure**  
   - Functions can access variables from their parent scope.  
   - Closures allow a function to "remember" these variables even after the parent scope is gone.  

2. **IIFE (Immediately Invoked Function Expression)**  
   - Functions that run immediately after being defined.  
   - Useful for creating private variables and avoiding global scope pollution.  

3. **Closure with Parameters**  
   - Demonstrates how closures can manage dynamic values (like credits, counters, API limits).  
   - Useful for state management and resource control.  

---

## 🔥 New Topics Added

4. **Prototype Inheritance** (`prototype-inheritance.js`)  
   - Demonstrates how objects can inherit properties and methods from other objects using `Object.setPrototypeOf`.  
   - Explains the differences between `__proto__` and modern methods like `getPrototypeOf` and `setPrototypeOf`.  
   - Shows how multiple objects can form a prototype chain.  

5. **Getters & Setters** (`getters-setters.js`)  
   - Shows how to use `get` and `set` for encapsulating object properties.  
   - Demonstrates property overriding and prototype chain behavior.  
   - Compares `Object.keys()` vs `for...in` when iterating over properties.  

6. **Object Constructors** (`object-constructors.js`)  
   - Uses constructor functions to create reusable object blueprints.  
   - Adds shared methods via `prototype` to optimize memory usage.  
   - Explains how instances access properties/methods through the prototype chain.  

7. **ES6 Classes & Inheritance** (`classes-inheritance.js`)  
   - Demonstrates modern class-based syntax for inheritance.  
   - Uses `extends` and `super()` to inherit properties and methods.  
   - Compares class inheritance with traditional prototype-based inheritance.  

---

## 📚 Further Reading

- [MDN Web Docs – Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)  
- [JavaScript.info – Prototypal Inheritance](https://javascript.info/prototype-inheritance)  
- [MDN Web Docs – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)  

---

## 8. Recursion (Recursive Functions)
- **Concept:** A function that calls itself until a **base case** is met. Great for problems that can be decomposed into smaller subproblems.
- **Where it shines:** Working with **tree-like data** (DOM, JSON, directory structures), **pagination** (continuation tokens), and elegant definitions (Fibonacci, permutations, search).
- **Why learn it (Developer gains):**
  - You learn to **decompose problems** and reason about base/recursive cases.
  - You can **traverse nested data** and **fetch paginated APIs** more naturally.
  - You become able to **compare iterative vs recursive** approaches and pick the right trade-off.

**Pros**
- Often **less code**, more **declarative** and **readable** for hierarchical problems.

**Cons & caveats**
- Potential **performance** issues (e.g., naive Fibonacci is exponential).
- **Stack depth** limits (no guaranteed TCO in most JS runtimes).
- Sometimes **harder to debug** than loops.

## 9. Currying (`currying.js`)

- **🔹 Concept:**  
  A technique from functional programming where a function with multiple parameters is transformed into a sequence of functions, each taking a single parameter.  

- **🔹 Where it shines:**  
  Useful for **partial application** (pre-filling some arguments), building **customized utility functions**, and creating **reusable pipelines** in functional programming.  

- **🔹 Why learn it (Developer gains):**  
  - You learn how to **break down complex functions** into smaller, reusable ones.  
  - You can use **partial application** to simplify repetitive code patterns.  
  - It builds strong foundations for **functional programming** concepts like composition and higher-order functions.  

**✅ Pros**  
- Increases **code reusability** and **flexibility**.  
- Helps in building **configurable functions** without rewriting logic.  
- Makes function composition and modular code easier.  

**⚠️ Cons & caveats**  
- Can become **hard to read** when deeply nested.  
- Works best when the function’s **arity** (number of parameters) is fixed and predictable.  

---

