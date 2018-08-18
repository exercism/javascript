'use strict';

function BinarySearch(array) {
  // check if array is sorted
  var arrayIsSorted = true;
  for (var i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) arrayIsSorted = false;
  }

  // instantiate the array if sorted
  if (arrayIsSorted) this.array = array;

  // use binary search for indexOf
  this.indexOf = function (value) {
    return recursiveSearch(this.array, value, 0, this.array.length);
  };
}


function recursiveSearch(array, value, start, end) {
  if (start === end) return -1;

  var mid = Math.floor((start + end) / 2);

  if (array[mid] > value) {
    return recursiveSearch(array, value, start, mid);
  }
  if (array[mid] < value) {
    return recursiveSearch(array, value, mid + 1, end);
  }
  return mid;
}

module.exports = BinarySearch;
