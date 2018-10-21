const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const REVERSED_LETTERS = [...LETTERS].reverse().join('');

function insertSpacing(s, interval) {
  const matcher = new RegExp(`.{1,${interval}}`, 'g');
  return s.match(matcher).join(' ');
}

function invert(character) {
  if (character.match(/\d/)) {
    this.push(character);
  } else {
    this.push(LETTERS[REVERSED_LETTERS.indexOf(character)]);
  }
}

export const encode = (s) => {
  const characters = [];
  [...s.toLowerCase()].forEach(invert, characters);
  const encoded = insertSpacing(characters.join(''), 5);
  return encoded;
};
