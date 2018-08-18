'use strict';

function FoodChain() {}

/**
 * Return portion of song corresponding to requested verse number range (inclusive).
 *
 * @param  {Number} first
 * starting verse number
 *
 * @param  {Number} last
 * ending verse number
 *
 * @return {String}
 * corresponding portion of song
 */
FoodChain.prototype.verses = function (first, last) {
  var idx = first - 1;
  var end = last;
  var str = [];

  while (++idx <= end) {
    str.push(this.verse(idx));
  }

  return str.join('\n') + '\n';
};

/**
 * Return song verse by number.
 *
 * @param {Number} number
 * verse number
 *
 * @return {String}
 * song verse
 */
FoodChain.prototype.verse = function (number) {
  var verse;

  switch (number) {
  case 1:
    verse = 'I know an old lady who swallowed a fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 2:
    verse = 'I know an old lady who swallowed a spider.\n' + 'It wriggled and jiggled and tickled inside her.\n' +
            'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 3:
    verse = 'I know an old lady who swallowed a bird.\n' + 'How absurd to swallow a bird!\n' +
            'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
            'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 4:
    verse = 'I know an old lady who swallowed a cat.\n' + 'Imagine that, to swallow a cat!\n' + 'She swallowed the cat to catch the bird.\n' +
            'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' +
            'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 5:
    verse = 'I know an old lady who swallowed a dog.\n' + 'What a hog, to swallow a dog!\n' + 'She swallowed the dog to catch the cat.\n' +
            'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
            'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 6:
    verse = 'I know an old lady who swallowed a goat.\n' + 'Just opened her throat and swallowed a goat!\n' + 'She swallowed the goat to catch the dog.\n' +
            'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' +
            'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
            'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 7:
    verse = 'I know an old lady who swallowed a cow.\n' + 'I don\'t know how she swallowed a cow!\n' + 'She swallowed the cow to catch the goat.\n' +
            'She swallowed the goat to catch the dog.\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' +
            'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' +
            'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    break;

  case 8: verse = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
    break;

  default: verse = '';
  }

  return verse;
};

FoodChain.prototype.sing = FoodChain.prototype.verses.bind(null, 1, 8);

module.exports = FoodChain;
