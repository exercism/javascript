export const matchingBrackets = (input) => {
  if (input.length === 0) {
    return true;
  }

  let bracketArray = input;
  if (typeof input === 'string') {
    bracketArray = [...input];
  }

  const iArr = [];
  const openArray = ['{', '[', '('];
  const closeArray = ['}', ']', ')'];

  for (let i = 0; i < bracketArray.length; i += 1) {
    for (let j = 0; j < openArray.length; j += 1) {
      if (bracketArray[i] === openArray[j]) {
        iArr.push(i);
      }
    }
  }

  const topNumber = Math.max(...iArr);

  for (let k = 0; k < 3; k += 1) {
    if (bracketArray[topNumber] === openArray[k]) {
      if (typeof bracketArray[topNumber + 1] !== 'undefined') {
        if (bracketArray[topNumber + 1] === closeArray[k]) {
          bracketArray.splice(topNumber, 2);
          return matchingBrackets(bracketArray);
        }
      }
    }
  }
  return false;
};
