export class TwelveDays {
  constructor() {
    this.verseList = [
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.',
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
      'On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.',
    ];
  }

  startFromZero(oneIndexArray) {
    const newArray = oneIndexArray.map(item => item - 1);
    return newArray;
  }

  singleVerse(verseIndex) {
    const verse = this.verseList[verseIndex].concat('\n');
    return verse;
  }

  multiVerse(startIndex, endIndex) {
    const filteredList = this.verseList.filter((verse, index) => {
      if (index >= startIndex && index <= endIndex) {
        return verse;
      }
    });
    return filteredList.join('\n\n').concat('\n');
  }

  verse(...args) {
    const indexArray = this.startFromZero(args);

    if (args.length === 2) {
      return this.multiVerse(indexArray[0], indexArray[1]);
    }
    return this.singleVerse(indexArray[0]);
  }

  sing() {
    const song = this.verseList.join('\n\n').concat('\n');
    return song;
  }
}
