export default class Song {
  /**
   * @param {Number} number
   * verse number
   *
   * @return {String}
   * song verse by number
   */
  static verse(number) {
    let verseContent = '';
    switch (number) {
      case 1:
        verseContent = `I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;
      case 2:
        verseContent = `I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;
      case 3:
        verseContent = `I know an old lady who swallowed a bird.
How absurd to swallow a bird!
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;
      case 4:
        verseContent = `I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;

      case 5:
        verseContent = `I know an old lady who swallowed a dog.
What a hog, to swallow a dog!
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;

      case 6:
        verseContent = `I know an old lady who swallowed a goat.
Just opened her throat and swallowed a goat!
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;
      case 7:
        verseContent = `I know an old lady who swallowed a cow.
I don't know how she swallowed a cow!
She swallowed the cow to catch the goat.
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`;
        break;
      case 8:
        verseContent = `I know an old lady who swallowed a horse.
She's dead, of course!
`;
        break;
      default:
        verseContent = '';
        break;
    }
    return verseContent;
  }

  /**
   * @param  {Number} first
   * starting verse number
   *
   * @param  {Number} last
   * ending verse number
   *
   * @return {String}
   * portion of song corresponding to requested verse number range (inclusive).
   */
  verses(first, last) {
    const rangeLength = last - first + 1;
    const sequence = Array.from({ length: rangeLength },
      (v, k) => first + k); // integers from first to last

    // build the final string
    const str = sequence.map(x => this.verse(x));
    str.push('');
    return str.join('\n');
  }
}
