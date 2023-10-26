function totalIntegers(arr) {
  if (!arr.length) {
    return 0;
  }
  let integers = 0;
  const current = arr.shift();

  if (Array.isArray(current)) {
    integers += totalIntegers(current);
  } else if (typeof current === 'number') {
    integers += 1;
  }
  return integers + totalIntegers(arr);
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7
