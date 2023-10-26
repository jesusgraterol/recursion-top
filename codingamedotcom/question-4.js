function all(arr, func) {
  if (!arr.length) {
    return true;
  }
  const current = arr.shift();
  return func(current) && all(arr, func);
}

console.log(all([1, 2, 9], (num) => num < 7));
console.log(all([1, 2, 6], (num) => num < 7));
console.log(all([9, 2, 6], (num) => num < 7));
console.log(all([1, 1, 1, 1], (num) => num < 7));
