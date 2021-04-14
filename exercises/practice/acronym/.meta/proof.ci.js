export const parse = (phrase) =>
  phrase
    .replace("'", '')
    .match(/^[A-Z]|(?<=[^A-Z])[A-Z]|\b[a-z]/g)
    .join('')
    .toUpperCase();
