// example: fibonacci sequence

// RECURSIVE
// Fib(n) = Fib(n - 1) + Fib(n - 2)
// Fib(2) = 1
// Fib(1) = 1

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// BIG O: O(2^n) --> exponential time

// DYNAMIC PROGRAMMING
// problem is that we are REPEATING things over and over again

// MEMOIZATION: storing the results of expensive function calls and returning the cached result when the same inputs occur again

function dynamicFib(n, memo = {}) {
  if (memo[n] !== undefined) return memo[n];

  if (n <= 2) return 1;

  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// BIG O: O(n) --> linear time | recursion, worse space complexity

// TABULATION, A BOTTOM UP APPROACH
// Storing the result of a previous result in a "table", usually done using iteration
// better space complexity can be achieved using tabulation

function tabulatedFib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

// BIG O: O(n) --> linear time | has better space complexity than memo
