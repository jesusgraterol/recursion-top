function totalIntegers(arr) {
  if (!arr.length) {
    return 0;
  }

  const current = arr.shift();
  let total = 0;

  if (Array.isArray(current)) {
    current.forEach((item) => {
      if (Array.isArray(item)) {
        total += totalIntegers(item);
      } else if (typeof item === 'number') {
        total += 1;
      }
    });
  } else if (typeof current === 'number') {
    total += 1;
  }

  return total + totalIntegers(arr);
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7
