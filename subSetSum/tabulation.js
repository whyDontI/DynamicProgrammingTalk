let array = [2, 3, 7, 8, 10]
let sum = 11

// TEST CASES
console.log( mainKS(array, sum) )

function mainKS (nums, sum) {
  // Initialization
  let table = []
  for (let i=0; i<sum+1; i++) {
    table.push([])
    for (let j=0; j<nums.length+1; j++) {
      if (j == 0) {
        table[i][j] = false
      } else if (i == 0) {
        table[i][j] = true
      } else {
        table[i][j] = -1
      }
    }
  }

  return subsetSum(nums, sum, nums.length, table)
}

/**
 *Returns true if there is a subset which can be added to sum
 *@param {array} nums
 *@param {number} sum
 *@param {number} n - length
 *
 *@returns {boolean}
  * */
function subsetSum(nums, sum, n, table) {
  if (table[sum][n] != -1) {
    return table[sum][n]
  }

  if (n <= 0) {
    table[sum][n] = false
    return table[sum][n]
  }

  if (sum <= 0) {
    table[sum][n] = true
    return table[sum][n]
  }

  // i = sum
  // j = n
  for (let i=1; i<sum+1; i++) {
    for (let j=1; j<nums.length+1; j++) {
      if (nums[j-1] <= i) {
        table[i][j] = (table[i][j-1] || table[(i - nums[j-1])][j-1])
      } else {
        table[i][j] = table[i][j-1]
      }
    }
  }

  return table[sum][n]
}

