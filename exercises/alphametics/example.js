export function solve(puzzle) {
  const parts = puzzle
    .split(/[+|==]/g)
    .map(o => o.trim())
    .filter(o => o !== '');

  if (parts.length < 3) {
    return null;
  }

  const uniqueLetters = new Set(parts.join('').split(''));
  const firstLetters = new Set(parts.map(p => p[0]));

  const numberCombinations = getNumberCombinations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueLetters.size);

  while (numberCombinations.length) {
    const permutations = generate(Array(uniqueLetters.size).fill().map((_, i) => i));
    const numberCombination = numberCombinations.pop();
    for (const permutation of permutations) {
      const newNumbers = assignNumbers(numberCombination, uniqueLetters, permutation);
      if (testNumbers(newNumbers, parts, firstLetters)) {
        return newNumbers;
      }
    }
  }
  return null;
}

function assignNumbers(numberCombination, uniqueLetters, permutation) {
  const output = {};
  let i = 0;
  for (const letter of uniqueLetters.values()) {
    output[letter] = numberCombination[permutation[i++]];
  }
  return output;
}

function testNumbers(numbers, puzzleParts, firstLetters) {
  const keys = Object.keys(numbers);
  for (const key of keys) {
    if (numbers[key] === 0 && firstLetters.has(key)) {
      return false;
    }
  }
  const replaceRegex = new RegExp(`[${keys.join('')}]`, 'g');

  puzzleParts = puzzleParts.join(',')
    .replace(replaceRegex, input => numbers[input])
    .split(',')
    .map(t => parseInt(t));

  const total = puzzleParts.slice(puzzleParts.length - 1)[0];
  return total === puzzleParts
    .slice(0, puzzleParts.length - 1)
    .reduce((acc, val) => acc + val, 0);
}
function* generate(A) {
  const c = [];
  const n = A.length;
  yield A;
  for (let i = 0; i < n; i++) {
    c[i] = 0;
  }
  let i = 0;
  while (i < n) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        swap(A, 0, i);
      } else {
        swap(A, c[i], i);
      }
      yield A;
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }
}
function swap(list, x, y) {
  const tmp = list[x];
  list[x] = list[y];
  list[y] = tmp;
  return list;
}

function getNumberCombinations(arr, size) {
  const len = arr.length;

  if (size == len) return [arr];

  return arr.reduce((acc, val, i) => {
    const res = getNumberCombinations(arr.slice(i + 1), size - 1)
      .map(comb => [val].concat(comb));

    return acc.concat(res);
  }, []);
}
