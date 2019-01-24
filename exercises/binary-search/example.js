function isSortedArray(array) {
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }

  return true;
}

function recursiveSearch(array, value, start, end) {
  if (start === end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
  if (array[mid] > value) {
    return recursiveSearch(array, value, start, mid);
  }

  if (array[mid] < value) {
    return recursiveSearch(array, value, mid + 1, end);
  }

  return mid;
}

export class BinarySearch {
  constructor(array) {
    if (isSortedArray(array)) {
      this.array = array;
    }
  }

  indexOf(value) {
    return recursiveSearch(this.array, value, 0, this.array.length);
  }
}
