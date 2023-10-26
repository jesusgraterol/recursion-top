function sumRange(value) {
  if (value === 0) {
    return 0;
  }
  return value + sumRange(value - 1);
}

console.log(sumRange(3)); // 6
