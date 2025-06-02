import { describe, expect, test, xtest } from '@jest/globals';
import { recite } from './twelve-days';

describe('TwelveDays', () => {
  test('verse first day a partridge in a pear tree', () => {
    const expectedVerseOne =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n';
    expect(recite(1)).toEqual(expectedVerseOne);
  });

  xtest('verse second day two turtle doves', () => {
    const expectedVerseTwo =
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(2)).toEqual(expectedVerseTwo);
  });

  xtest('verse third day three french hens', () => {
    const expectedVerseThree =
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(3)).toEqual(expectedVerseThree);
  });

  xtest('verse fourth day four calling birds', () => {
    const expectedVerseFour =
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(4)).toEqual(expectedVerseFour);
  });

  xtest('verse fifth day five gold rings', () => {
    const expectedVerseFive =
      'On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(5)).toEqual(expectedVerseFive);
  });

  xtest('verse sixth day six geese-a-laying', () => {
    const expectedVerseSix =
      'On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(6)).toEqual(expectedVerseSix);
  });

  xtest('verse seventh day seven swans-a-swimming', () => {
    const expectedVerseSeven =
      'On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(7)).toEqual(expectedVerseSeven);
  });

  xtest('verse eighth day eight maids-a-milking', () => {
    const expectedVerseEight =
      'On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(8)).toEqual(expectedVerseEight);
  });

  xtest('verse ninth day nine ladies dancing', () => {
    const expectedVerseNine =
      'On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(9)).toEqual(expectedVerseNine);
  });

  xtest('verse tenth day ten lords-a-leaping', () => {
    const expectedVerseTen =
      'On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(10)).toEqual(expectedVerseTen);
  });

  xtest('verse eleventh day eleven pipers piping', () => {
    const expectedVerseEleven =
      'On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(11)).toEqual(expectedVerseEleven);
  });

  xtest('verse twelfth day twelve drummers drumming', () => {
    const expectedVerseTwelve =
      'On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(12)).toEqual(expectedVerseTwelve);
  });

  xtest('lyrics recites first three verses of the song', () => {
    const expectedVerseOneToThree =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n\n' +
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(1, 3)).toEqual(expectedVerseOneToThree);
  });

  xtest('lyrics recites three verses from the middle of the song', () => {
    const expectedVerseFourToSix =
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(4, 6)).toEqual(expectedVerseFourToSix);
  });

  xtest('lyrics recites the whole song', () => {
    const expectedSong =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n\n' +
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(recite(1, 12)).toEqual(expectedSong);
  });
});
