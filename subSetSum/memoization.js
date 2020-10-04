let array = [2, 3, 7, 8, 10]
let sum = 11

// TEST CASES
console.log( mainSS(array, sum) )

function mainSS (nums, sum) {
  // Initialization
  // i = sum
  // j = nums.lenth
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

let nums = [2, 3, 7, 8, 10]
let sum = 11
let n = 5 // nums.length

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

  if (nums[n-1] <= sum) {
    table[sum][n] = ( subsetSum(nums, sum, n-1, table) || subsetSum(nums, ( sum-nums[n-1] ), n-1, table))
  } else {
    table[sum][n] = subsetSum(nums, sum, n-1, table)
  }

  return table[sum][n]
}

