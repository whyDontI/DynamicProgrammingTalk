 // ____                          _           
// |  _ \ ___  ___ _   _ _ __ ___(_)_   _____ 
// | |_) / _ \/ __| | | | '__/ __| \ \ / / _ \
// |  _ <  __/ (__| |_| | |  \__ \ |\ V /  __/
// |_| \_\___|\___|\__,_|_|  |___/_| \_/ \___|
                                           
function knapsack (value, weight, C, n) {
  // Base Case
  if (n == 0 || C == 0) {
    return 0
  }

  if (weight[n-1] <= C) {
    return Math.max(
      value[n-1] + knapsack(value, weight, C - weight[n-1], n-1),
      knapsack(value, weight, C, n-1)
    )
  } else {
    return knapsack(value, weight, C, n-1)
  }
}


























// Test Cases
let value = [6, 100, 120]
let weight = [10, 20, 30]
let C = 50

console.log(knapsack(value, weight, C, 3) == 220) // true

// Edge cases
console.log(knapsack([], [], 10, 0) == 0) // true
console.log(knapsack([2, 3], [4, 5], 0, 2) == 0) // true
