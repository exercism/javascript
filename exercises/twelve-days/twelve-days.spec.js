import { TwelveDays } from './twelve-days.js';

describe('TwelveDays', () => {
  let twelveDaysObject;

  beforeEach(() => {
    twelveDaysObject = new TwelveDays();
  });

  test('test verse one', () => {
    const expectedVerseOne =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(1)).toEqual(expectedVerseOne);
  });

  xtest('test verse two', () => {
    const expectedVerseTwo =
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(2)).toEqual(expectedVerseTwo);
  });

  xtest('test verse three', () => {
    const expectedVerseThree =
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(3)).toEqual(expectedVerseThree);
  });

  xtest('test verse four', () => {
    const expectedVerseFour =
      'On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(4)).toEqual(expectedVerseFour);
  });

  xtest('test verse five', () => {
    const expectedVerseFive =
      'On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(5)).toEqual(expectedVerseFive);
  });

  xtest('test verse six', () => {
    const expectedVerseSix =
      'On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(6)).toEqual(expectedVerseSix);
  });

  xtest('test verse seven', () => {
    const expectedVerseSeven =
      'On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(7)).toEqual(expectedVerseSeven);
  });

  xtest('test verse eight', () => {
    const expectedVerseEight =
      'On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(8)).toEqual(expectedVerseEight);
  });

  xtest('test verse nine', () => {
    const expectedVerseNine =
      'On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(9)).toEqual(expectedVerseNine);
  });

  xtest('test verse ten', () => {
    const expectedVerseTen =
      'On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(10)).toEqual(expectedVerseTen);
  });

  xtest('test verse eleven', () => {
    const expectedVerseEleven =
      'On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(11)).toEqual(expectedVerseEleven);
  });

  xtest('test verse twelve', () => {
    const expectedVerseTwelve =
      'On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(12)).toEqual(expectedVerseTwelve);
  });

  xtest('test multiple verse', () => {
    const expectedVerseOneToThree =
      'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n\n' +
      'On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse(1, 3)).toEqual(expectedVerseOneToThree);
  });

  xtest('test sing whole song', () => {
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
    expect(twelveDaysObject.sing()).toEqual(expectedSong);
  });
});
