var TwelveDays = function () {
  this.verseList = [
    'On the first day of Christmas my true love gave to me, a Partridge in a Pear Tree.',
    'On the second day of Christmas my true love gave to me, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the third day of Christmas my true love gave to me, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the fourth day of Christmas my true love gave to me, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the fifth day of Christmas my true love gave to me, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the sixth day of Christmas my true love gave to me, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the seventh day of Christmas my true love gave to me, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the eighth day of Christmas my true love gave to me, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the ninth day of Christmas my true love gave to me, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the tenth day of Christmas my true love gave to me, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the eleventh day of Christmas my true love gave to me, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    'On the twelfth day of Christmas my true love gave to me, twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.'
  ];
};

TwelveDays.prototype.startFromZero = function (oneIndexArray) {
  var newArray = oneIndexArray.map(function (item) { return item - 1; });
  return newArray;
};

TwelveDays.prototype.singleVerse = function (verseIndex) {
  var verse = this.verseList[verseIndex].concat('\n');
  return verse;
};

TwelveDays.prototype.multiVerse = function (startIndex, endIndex) {
  return this.verseList
    .filter(function (verse, index) { return index >= startIndex; })
    .filter(function (verse, index) { return index <= endIndex; })
    .join('\n\n').concat('\n');
};

TwelveDays.prototype.verse = function (args) {
  var indexArray = this.startFromZero(args);

  if (args.length === 2) {
    return this.multiVerse(indexArray[0], indexArray[1]);
  }
  return this.singleVerse(indexArray[0]);
};

TwelveDays.prototype.sing = function () {
  var song = this.verseList.join('\n\n').concat('\n');
  return song;
};

module.exports = TwelveDays;
