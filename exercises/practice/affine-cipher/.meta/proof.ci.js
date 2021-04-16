const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_LENGTH = ALPHABET.length;

const areCoprimes = (a, b) => {
  for (let i = Math.min(a, b); i > 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return false;
    }
  }

  return true;
};

const checkCoprime = (a, b) => {
  if (!areCoprimes(a, b)) {
    throw new Error('a and m must be coprime.');
  }
};

const isNumber = (candidate) => {
  return !isNaN(Number(candidate));
};

const findMMI = (a) => {
  let i = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    i++;

    if ((a * i - 1) % ALPHABET_LENGTH === 0) {
      return i;
    }
  }
};

const positiveModulo = (a, b) => {
  return ((a % b) + b) % b;
};

const groupBy = (elements, groupLength) => {
  const result = [[]];
  let i = 0;

  elements.forEach((el) => {
    if (result[i] && result[i].length < groupLength) {
      result[i].push(el);
    } else {
      i++;
      result[i] = [el];
    }
  });

  return result;
};

export const encode = (phrase, { a, b }) => {
  checkCoprime(a, ALPHABET_LENGTH);

  let encodedText = '';

  phrase
    .toLowerCase()
    .split('')
    .filter((char) => char !== ' ')
    .forEach((char) => {
      if (ALPHABET.includes(char)) {
        const x = ALPHABET.indexOf(char);
        const encodedIndex = (a * x + b) % ALPHABET_LENGTH;

        encodedText += ALPHABET[encodedIndex];
      } else if (isNumber(char)) {
        encodedText += char;
      }
    });

  return groupBy(encodedText.split(''), 5)
    .map((group) => group.join(''))
    .join(' ');
};

export const decode = (phrase, { a, b }) => {
  checkCoprime(a, ALPHABET_LENGTH);

  const mmi = findMMI(a);

  return phrase
    .split('')
    .filter((char) => char !== ' ')
    .map((char) => {
      if (isNumber(char)) {
        return char;
      }

      const y = ALPHABET.indexOf(char);
      const decodedIndex = positiveModulo(mmi * (y - b), ALPHABET_LENGTH);

      return ALPHABET[decodedIndex];
    })
    .join('');
};
