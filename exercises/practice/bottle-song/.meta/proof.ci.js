const NUMBERS = {
  10: 'ten',
  9: 'nine',
  8: 'eight',
  7: 'seven',
  6: 'six',
  5: 'five',
  4: 'four',
  3: 'three',
  2: 'two',
  1: 'one',
  0: 'no',
};

export const recite = (initialBottlesCount, takeDownCount = 1) => {
  let out = [];
  for (
    let i = initialBottlesCount;
    i > initialBottlesCount - takeDownCount;
    i--
  ) {
    let plural = i === 1 ? '' : 's';
    let secondPlural = i - 1 === 1 ? '' : 's';
    out.push(
      textsTemplate(cap(NUMBERS[i]), NUMBERS[i - 1], plural, secondPlural),
    );
    if (initialBottlesCount - takeDownCount !== i - 1) out.push('');
  }
  return out.flat();
};

const textsTemplate = (curCount, prevCount, pluralOne, pluralTwo) => [
  ...Array(2).fill(`${curCount} green bottle${pluralOne} hanging on the wall,`),
  `And if one green bottle should accidentally fall,`,
  `There'll be ${prevCount} green bottle${pluralTwo} hanging on the wall.`,
];

const cap = (str) => str.replace(/./i, (char) => char.toUpperCase());
