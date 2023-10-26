function contains(obj, query) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      return contains(obj[key], query);
    // eslint-disable-next-line no-else-return
    } else if (obj[key] === query) {
      return true;
    }
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, 'foo')); // false
console.log(contains(nestedObject, 'foo2')); // true
