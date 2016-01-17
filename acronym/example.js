export default class Acronyms {
  static parse(phrase) {
    return phrase.match(/[A-Z]+[a-z]*|[a-z]+/g)
      .reduce((acronym, word) => acronym += word[0].toUpperCase(), '');
  }
}
