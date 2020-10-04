 // __  __                      _          _   _             
// |  \/  | ___ _ __ ___   ___ (_)______ _| |_(_) ___  _ __  
// | |\/| |/ _ \ '_ ` _ \ / _ \| |_  / _` | __| |/ _ \| '_ \ 
// | |  | |  __/ | | | | | (_) | |/ / (_| | |_| | (_) | | | |
// |_|  |_|\___|_| |_| |_|\___/|_/___\__,_|\__|_|\___/|_| |_|
                                                          
function knapsackMain(value, weight, C, n) {
  let memo = [] // 2d array [C+1][n+1]

  // Initialization
  for (let i=0; i<=C; i++) {
    memo[i] = []
    for (let j=0; j<=n; j++) {
      memo[i][j] = -1
    }
  }

  return knapsack(value, weight, C, n, memo)
}

function knapsack (value, weight, C, n, memo) {
  // Base Case
  if (n == 0 || C == 0) {
    memo[C][n] = 0
    return memo[C][n]
  }

  if (memo[C][n] !== -1) {
    return memo[C][n]
  }

  if (weight[n-1] <= C) { // weight <= C
    memo[C][n] = Math.max(
      value[n-1] + knapsack(value, weight, C - weight[n-1], n-1, memo),
      knapsack(value, weight, C, n-1, memo)
    )
  } else { // weight > C
    memo[C][n] = knapsack(value, weight, C, n-1, memo)
  }

  return memo[C][n]
}

// Test Cases

let value = [6, 100, 120]
let weight = [10, 20, 30]

console.log(knapsackMain(value, weight, 50, 3) == 220) // true

// // Edge cases
console.log(knapsackMain([], [], 10, 0) == 0) // true
console.log(knapsackMain([2, 3], [4, 5], 0, 2) == 0) // true
