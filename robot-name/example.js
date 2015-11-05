const HOW_MANY_CHARS = 26;
const HOW_MANY_NUMBERS = 1000;
const CHAR_CODE_A = 'A'.charCodeAt(0);

let generatedNames = {};

function generateName() {
  let name = '';
  name += generateRandomChar();
  name += generateRandomChar();
  name += pad(generateRandomNumber());

  return getNotGeneratedName(name);
}

function generateRandomChar() {
  const random = Math.floor(Math.random() * HOW_MANY_CHARS);
  return String.fromCharCode(CHAR_CODE_A + random);
}

function pad(number) {
  return ('000' + number).slice(-3);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * HOW_MANY_NUMBERS);
}

function getNotGeneratedName(name) {
  if (generatedNames[name]) {
    return generateName();
  }

  generatedNames[name] = true;
  return name;
}

export default class Robot {
  constructor() {
    this.name = generateName();
  }

  reset() {
    this.name = generateName();
  }
};

