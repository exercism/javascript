export const parse = phrase => phrase.match(/[A-Z]+[a-z]*|[a-z]+/g).reduce((acronym, word) => `${acronym}${word[0]}`, '').toUpperCase();
