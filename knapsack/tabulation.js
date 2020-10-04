 // _____     _           _       _   _             
// |_   _|_ _| |__  _   _| | __ _| |_(_) ___  _ __  
 //  | |/ _` | '_ \| | | | |/ _` | __| |/ _ \| '_ \ 
 //  | | (_| | |_) | |_| | | (_| | |_| | (_) | | | |
 //  |_|\__,_|_.__/ \__,_|_|\__,_|\__|_|\___/|_| |_|
                                                 
function knapsack (value, weight, C, n) {

  if (n == 0 || C == 0) {
    return 0
  }

  let table = [] // 2d array [C+1][n+1]
  // Initialization
  for (let i=0; i<=C+1; i++) {
    table[i] = []
    for (let j=0; j<=n+1; j++) {
      if (i == 0 || j == 0) {
        table[i][j] = 0
      } else {
        table[i][j] = -1
      }
    }
  }

  for (let i=1; i<=C; i++) {
    for (let j=1; j<=n; j++) {

      // i = C
      // j = n
      if (weight[j-1] <= i) { // weight <= i
        table[i][j] = Math.max(
          ( value[j-1] + table[i - weight[j-1]][j-1] ),
          table[i][j-1]
        ) 
      } else {
        table[i][j] = table[i][j-1]
      }

    }
  }

  return table[C][n]
}

// Test Cases

let value = [6, 100, 120]
let weight = [10, 20, 30]

console.log(knapsack(value, weight, 50, 3) == 220) // true

// Edge cases
console.log(knapsack([], [], 10, 0) == 0) // true
console.log(knapsack([2, 3], [4, 5], 0, 2) == 0) // true
