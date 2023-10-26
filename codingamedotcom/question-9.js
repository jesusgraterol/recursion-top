function replicate(repeatCount, value) {
  if (repeatCount <= 0) {
    return [];
  }
  return [value].concat(replicate(repeatCount - 1, value));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
