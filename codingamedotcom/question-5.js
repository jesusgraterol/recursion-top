function productOfArray(arr) {
  if (!arr.length) {
    return 1;
  }
  const current = arr.shift();
  return current * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([1, 2, 3, 10, 10])); // 600
