function sumAllNumbers(n, accum = 0) {
  if (n > 0) {
    return sumAllNumbers(n - 1, accum + n);
  }
  return accum;
}
console.log(sumAllNumbers(3));
