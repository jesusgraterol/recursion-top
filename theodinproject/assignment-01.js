function fibs(value) {
  const arr = [];
  for (let i = 0; i < value; i += 1) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}

console.log(fibs(8));

// eslint-disable-next-line no-multiple-empty-lines

function fibsRec(value, seq = [0, 1]) {
  if (seq.length >= value) {
    return seq.slice(0, value);
  }

  const newNumber = seq.at(-1) + seq.at(-2);
  seq.push(newNumber);
  return fibsRec(value, seq);
}

console.log(fibsRec(8));
