/**
 * Recursion Basics
 * ----------------
 * Official: Solving a problem by solving smaller instances of the same problem.
 * Unofficial: "Do something; if not done, do it again with a smaller piece."
 *
 * A recursive function MUST have:
 * 1) A base case (the stop condition)
 * 2) A recursive case (the smaller sub-call)
 */

// Iterative counting: clear, explicit loop
const countToTenIterative = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

// Recursive counting: same result, different style
const countToTenRecursive = (num = 1) => {
  if (num > 10) return;      // base case
  console.log(num);
  return countToTenRecursive(num + 1); // recursive case
};

// countToTenIterative();
// countToTenRecursive();

/**
 * Generic recursion template:
 *
 * function recurse(input) {
 *   if (isBaseCase(input)) return baseResult;        // base case
 *   const smaller = transform(input);                // make the problem smaller
 *   const partial = recurse(smaller);                // recursive call
 *   return combine(input, partial);                  // combine results
 * }
 */

/**
 * Debug tip:
 * Pass "depth" or "path" parameters to visualize the call stack/indentation,
 * especially when teaching or debugging.
 */
const demoDepth = (n, depth = 0) => {
  console.log(" ".repeat(depth * 2) + `enter n=${n}`);
  if (n <= 0) {
    console.log(" ".repeat(depth * 2) + "base");
    return 0;
  }
  const res = 1 + demoDepth(n - 1, depth + 1);
  console.log(" ".repeat(depth * 2) + `exit n=${n} -> ${res}`);
  return res;
};

// demoDepth(3);

/**
 * When to prefer recursion:
 * - Natural tree/graph traversal
 * - Elegant definitions (divide & conquer)
 * - When loop state becomes messy
 *
 * When to avoid:
 * - Very deep recursion (risk of stack overflow)
 * - Performance-critical hotspots (prefer loops or memoization)
 */
