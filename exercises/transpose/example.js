export default function transpose(text) {
  const result = [];
  text.forEach((line, lineNo) => {
    [...line].forEach((value, key) => {
      if (typeof result[key] === 'undefined') {
        result[key] = ' '.repeat(lineNo);
      }
      result[key] += value;
    });
  });
  return result;
}
