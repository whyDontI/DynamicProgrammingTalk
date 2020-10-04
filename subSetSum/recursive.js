
let array = [2, 3, 7, 8, 10]
let sum = 11

function subSetSum(array, n, sum) {
  if (sum == 0) {
    return true // empty set {}
  }

  if (n == 0) {
    return false
  } 

  if (array[n-1] <= sum) {
    return subSetSum(array, n-1, sum) || subSetSum(array, n-1, ( sum - array[n-1] ))
  } else {
    return subSetSum(array, n-1, sum)
  }

}

console.log(
  subSetSum(array, 5, sum)
)
