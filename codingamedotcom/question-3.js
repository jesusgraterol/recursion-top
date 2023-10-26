function factorial(value) {
  if (value === 1) {
    return 1;
  }
  return value * factorial(value - 1);
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120
