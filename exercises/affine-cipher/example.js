const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const m = ALPHABET.length;

const areCoprimes = (a, b) => {
  for (let i = Math.min(a, b); i > 1; i--) {
    if (a % i == 0 && b % i == 0) {
      return false;
    }
  }

  return true;
}

const checkCoprime = (a, b) => {
  if (!areCoprimes(a, b)) {
    throw new Error('a and m must be coprime.');
  }
}

const isNumber = (candidate) => {
  if (candidate === '') {
    return false;
  }

  return !isNaN(Number(candidate));
}

export const encode = (phrase, { a, b }) => {
  checkCoprime(a, m);

  return phrase.toLowerCase().split('').filter(letter => letter !== ' ').map(letter => {
    const index = ALPHABET.indexOf(letter);

    if (index !== -1) {
      return ALPHABET[(a * index + b) % m];
    } else {
      return isNumber(letter) ? letter : null;
    }
  }).filter(item => item !== null).map(((letter, idx) => {
    if (idx > 0 && idx % 5 === 0) {
      return ' ' + letter;
    } else {
      return letter;
    }
  })).join('')
};

const findMMI = (a) => {
  let i = 1;
  let found = false;

  while (!found) {
    i++;

    if ((a * i - 1) % m === 0) {
      found = true;
    }
  }

  return i;
}

export const decode = (phrase, { a, b }) => {
  checkCoprime(a, m);

  const mmi = findMMI(a);

  return phrase.split('').filter(letter => letter !== ' ').map(letter => {
    const index = ALPHABET.indexOf(letter);

    if (index !== -1) {
      return ALPHABET[(((mmi * (index - b)) % m) + m) % m];
    } else {
      return letter;
    }
  }).join('');
}
