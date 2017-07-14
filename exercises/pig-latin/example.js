const LANGUAGE_RULES_REGEXP = /^([^aeiou]?qu|[^aeiou]*)(.+)/;

function translateWord(word) {
  const [, beginning, ending] = word.match(LANGUAGE_RULES_REGEXP);

  if (beginning.length === 0) {
    return `${word}ay`;
  }
  return `${ending + beginning}ay`;
}

class PigLatin {
  translate(english) {
    return english
      .split(' ')
      .map(translateWord)
      .join(' ');
  }
}

export default PigLatin;
