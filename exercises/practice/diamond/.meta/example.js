export const rows = (input) => {
  const inputIndex = input.charCodeAt() - 65;
  let output = [];
  let i = 0;
  for (i = 0; i <= inputIndex; i++) {
    output.push(getLine(inputIndex, i));
  }
  for (i = inputIndex - 1; i >= 0; i--) {
    output.push(getLine(inputIndex, i));
  }
  return output;
};

function getLine(inputIndex, index) {
  const difference = inputIndex - index;
  return `${
    spaceTimes(difference) + printAlphabets(index) + spaceTimes(difference)
  }`;
}

function printAlphabets(index) {
  const character = 65 + index;
  if (index === 0) {
    return 'A';
  }
  return (
    String.fromCharCode(character) +
    spaceTimes((index - 1) * 2 + 1) +
    String.fromCharCode(character)
  );
}

function spaceTimes(times) {
  return ' '.repeat(times);
}
