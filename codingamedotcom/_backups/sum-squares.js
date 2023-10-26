function sumSquares(arr) {
  if (!arr.length) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      total += sumSquares(arr[i]);
    } else {
      total += arr[i] * arr[i];
    }
  }
  return total;
}

console.log(sumSquares([1, 2, 3])); // 1 + 4 + 9 = 14
console.log(sumSquares([[1, 2], 3])); // 1 + 4 + 9 = 14
console.log(sumSquares([[[[[[[[[1]]]]]]]]])); // 1 = 1
console.log(sumSquares([10, [[10], 10], [10]])); // 100 + 100 + 100 + 100 = 400
