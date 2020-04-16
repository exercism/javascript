export function getItem(array, index) {
  return array[index];
}

export function setItem(array, index, newValue) {
  array[index] = newValue;
  return array;
}

export function prefilledArray(value, length) {
  if (length < 1) {
    return [];
  }

  const prefilledArray = [];
  for (let i = 0; i < length; i++) {
    prefilledArray.push(value);
  }

  return prefilledArray;
}

export function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}

export function removeItemFromTop(array) {
  array.pop();
  return array;
}

export function checkLengthOfStack(array, stackLength) {
  return array.length === stackLength;
}
