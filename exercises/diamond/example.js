function spaceTimes(times) {
  return ' '.repeat(times);
}

function printAlphabets(index) {
  const character = 65 + index;
  if (index === 0) {
    return 'A';
  }
  return String.fromCharCode(character)
    + spaceTimes((index - 1) * 2 + 1)
    + String.fromCharCode(character);
}

function getLine(inputIndex, index) {
  const difference = inputIndex - index;
  return `${spaceTimes(difference) + printAlphabets(index) + spaceTimes(difference)}\n`;
}
export default class Diamond {
  static makeDiamond(input) {
    const inputIndex = input.charCodeAt() - 65;
    let output = '';
    let i = 0;
    for (i = 0; i <= inputIndex; i += 1) {
      output += getLine(inputIndex, i);
    }
    for (i = inputIndex - 1; i >= 0; i -= 1) {
      output += getLine(inputIndex, i);
    }
    return output;
  }
}
