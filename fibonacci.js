/**
 * Fibonacci Examples
 * ------------------
 * Goal 1: Produce the sequence up to n elements.
 * Goal 2: Get the nth Fibonacci number.
 *
 * WARNING:
 * - Naive recursive fib(n) is O(φ^n) (exponential). Great teaching tool, bad performance.
 * - Prefer iterative or memoized recursion for nth value in production.
 */

// 1) Build the sequence (iterative)
const fibonacciSeqIter = (n, seq = [0, 1]) => {
  if (n <= 2) return seq.slice(0, n);
  while (seq.length < n) {
    const [a, b] = seq.slice(-2);
    seq.push(a + b);
  }
  return seq;
};

// 2) Build the sequence (recursive)
const fibonacciSeqRec = (n, seq = [0, 1]) => {
  if (n <= 2) return seq.slice(0, n);
  const [a, b] = seq.slice(-2);
  return fibonacciSeqRec(n - 1, [...seq, a + b]);
};

// console.log(fibonacciSeqIter(12));
// console.log(fibonacciSeqRec(12));

// 3) Nth Fibonacci (iterative) — O(n), fast and stack-safe
const fibNthIter = (pos) => {
  if (pos < 2) return pos;
  let a = 0, b = 1;
  for (let i = 2; i <= pos; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

// 4) Nth Fibonacci (naive recursion) — O(φ^n), DO NOT USE in production
const fibNthNaive = (pos) => (pos < 2 ? pos : fibNthNaive(pos - 1) + fibNthNaive(pos - 2));

// 5) Nth Fibonacci (memoized recursion) — O(n)
const fibNthMemo = (pos, memo = {}) => {
  if (pos in memo) return memo[pos];
  if (pos < 2) return (memo[pos] = pos);
  return (memo[pos] = fibNthMemo(pos - 1, memo) + fibNthMemo(pos - 2, memo));
};

// Examples:
// console.log(fibNthIter(8));     // 21
// console.log(fibNthNaive(8));    // 21 (slow for large n)
// console.log(fibNthMemo(40));    // fast

/**
 * Takeaways:
 * - Know multiple strategies and their complexity.
 * - Prefer iterative or memoized approaches for large n.
 * - Recursive sequence builder can be elegant when performance is acceptable.
 */
