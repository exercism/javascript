export const encode = (plainText) => {
  const consecutiveChars = /([\w\s])\1*/g;
  return plainText.replace(consecutiveChars, (match) =>
    match.length > 1 ? match.length + match[0] : match[0]
  );
};

export const decode = (encodedText) => {
  const countAndChar = /(\d+)(\w|\s)/g;
  return encodedText.replace(countAndChar, (match, repeats, char) =>
    new Array(Number(repeats) + 1).join(char)
  );
};
