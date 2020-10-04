// Memoization / Top Down
// n to 0
let memo = [0, 1]

function fibMemoization (n) {
  if (memo[n]) {
    return memo[n]
  }

  if (n <= 1) {
    memo[n] = n
  } else {
    memo[n] = fibMemoization(n-1) + fibMemoization(n-2)
  }

  return memo[n]
}

console.log(fibMemoization(8))

