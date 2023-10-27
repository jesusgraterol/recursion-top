function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }

  // Add any remaining elements from the left or right arrays.
  result.push(...left.slice(i));
  result.push(...right.slice(j));

  return result;
}

function mergeSort(array) {
  // An array with 1 element is considered to be already sorted
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves.
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively sort the left and right halves.
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge the sorted left and right halves into a single sorted array.
  return merge(leftSorted, rightSorted);
}

console.log(mergeSort([8, 6, 4, 1, 2, 9, 12, 7, 26]));
