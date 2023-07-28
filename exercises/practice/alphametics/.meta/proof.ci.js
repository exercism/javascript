const DIGITS = [...Array(10).keys()];

export function solve(puzzle) {
  const parts = puzzle
    .split(/[+|==]/g)
    .map((o) => o.trim())
    .filter((o) => o !== '');

  if (parts.length < 3) {
    return null;
  }

  const firstLetters = new Set(parts.map((p) => p[0]));
  const letterCounts = countLetters(parts, parts.pop());

  return tryPermutations(letterCounts, firstLetters);
}

function countLetters(terms, total) {
  const counts = {};

  terms.forEach((term) => {
    [...term].forEach((letter, i, { length }) => {
      counts[letter] = (counts[letter] ?? 0) + 10 ** (length - 1 - i);
    });
  });

  [...total].forEach((letter, i, { length }) => {
    counts[letter] = (counts[letter] ?? 0) - 10 ** (length - 1 - i);
  });

  return counts;
}

function testPermutation(letterCounts, numbers) {
  const letters = Object.keys(letterCounts);
  const counts = Object.values(letterCounts);
  return counts.reduce((sum, count, i) => sum + count * numbers[i], 0) === 0
    ? letters.reduce(
        (solution, letter, i) => ({ ...solution, [letter]: numbers[i] }),
        {},
      )
    : null;
}

function tryPermutations(letterCounts, firstLetters, numbers = []) {
  const letters = Object.keys(letterCounts);
  if (numbers.length === letters.length) {
    return testPermutation(letterCounts, numbers);
  }

  for (const digit of DIGITS) {
    if (
      numbers.includes(digit) ||
      (digit === 0 && firstLetters.has(letters[numbers.length]))
    ) {
      continue;
    }

    const result = tryPermutations(letterCounts, firstLetters, [
      ...numbers,
      digit,
    ]);

    if (result) {
      return result;
    }
  }

  return null;
}
