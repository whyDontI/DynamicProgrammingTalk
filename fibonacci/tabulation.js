// Tabulation / Bottom Up
// 0 to n

function fibTabulation (n) { // Bottom up
  let table = [0, 1, 1]
  let i = 2
  while (i <= n) {
    table[i] = table[i-1] + table[i-2]
    i++
  }

  return table[n]
}

console.log(fibTabulation(8))
