// 0 1 1 2 3 5 8 13 21

/**
 * Returns nth fibonacci number
 *
 * @param {Number} n
 * @returns {Number}
  * */
function fibRecursive (n) {

  if (n <= 1) {
    return n
  }

  return fibRecursive(n-1) + fibRecursive(n-2)
}

console.log(fibRecursive(8))
