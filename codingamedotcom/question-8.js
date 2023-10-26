function sumSquares(arr) {
  if (!arr.length) {
    return 0;
  }

  let total = 0;

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      total += sumSquares(item);
    } else {
      total += item * item;
    }
  });

  return total;

/*   let total = 0;
  const current = arr.shift();

  if (Array.isArray(current)) {
    return sumSquares(current);
  } else if (typeof current === 'number') {
    total += current;
  }

  console.log(current)
  //console.log(total)

  return (total * total) + sumSquares(arr); */
}

console.log(sumSquares([1, 2, 3])); // 1 + 4 + 9 = 14
console.log(sumSquares([[1, 2], 3])); // 1 + 4 + 9 = 14
console.log(sumSquares([[[[[[[[[1]]]]]]]]])); // 1 = 1
console.log(sumSquares([10, [[10], 10], [10]])); // 100 + 100 + 100 + 100 = 400
