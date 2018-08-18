(function () {
  'use strict';

  function bottles(number) {
    var str = '';

    if (number === 0) {
      str = 'No more bottles';
    } else if (number === 1) {
      str = '1 bottle';
    } else {
      str = number + ' bottles';
    }

    return str;
  }

  function action(currentVerse) {
    var sbj;
    var str = '';

    if (currentVerse === 0) {
      str = 'Go to the store and buy some more, ';
    } else {
      sbj = (currentVerse === 1 ? 'it' : 'one');
      str = 'Take ' + sbj + ' down and pass it around, ';
    }

    return str;
  }

  function nextBottle(currentVerse) {
    return bottles(nextVerse(currentVerse)).toLowerCase() + ' of beer on the wall.\n';
  }

  function nextVerse(currentVerse) {
    return currentVerse === 0 ? 99 : (currentVerse - 1);
  }

  function BeerSong() {}

  BeerSong.prototype.sing = function (first, last) {
    var firstVerseBottleCount = first;
    var lastVerseBottleCount = last;

    if (typeof (firstVerseBottleCount) === 'undefined') {
      firstVerseBottleCount = 99;
    }
    if (typeof (lastVerseBottleCount) === 'undefined') {
      lastVerseBottleCount = 0;
    }

    var verses = [];
    for (var i = firstVerseBottleCount; i >= lastVerseBottleCount; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  };

  BeerSong.prototype.verse = function (number) {
    var line1 = bottles(number) + ' of beer on the wall, ';
    var line2 = bottles(number).toLowerCase() + ' of beer.\n';
    var line3 = action(number);
    var line4 = nextBottle(number);

    return [line1, line2, line3, line4].join('');
  };

  module.exports = BeerSong;
})();
