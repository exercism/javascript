var TwelveDays = require('./twelve-days');


describe('TwelveDays', function () {
  var twelveDaysObject = new TwelveDays();

  it('test verse one', function () {
    var expectedVerseOne =
      'On the first day of Christmas my true love gave to me, a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([1])).toEqual(expectedVerseOne);
  });

  xit('test verse two', function () {
    var expectedVerseTwo =
      'On the second day of Christmas my true love gave to me, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([2])).toEqual(expectedVerseTwo);
  });

  xit('test verse three', function () {
    var expectedVerseThree =
      'On the third day of Christmas my true love gave to me, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([3])).toEqual(expectedVerseThree);
  });

  xit('test verse four', function () {
    var expectedVerseFour =
      'On the fourth day of Christmas my true love gave to me, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([4])).toEqual(expectedVerseFour);
  });

  xit('test verse five', function () {
    var expectedVerseFive =
      'On the fifth day of Christmas my true love gave to me, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([5])).toEqual(expectedVerseFive);
  });

  xit('test verse six', function () {
    var expectedVerseSix =
      'On the sixth day of Christmas my true love gave to me, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([6])).toEqual(expectedVerseSix);
  });

  xit('test verse seven', function () {
    var expectedVerseSeven =
      'On the seventh day of Christmas my true love gave to me, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([7])).toEqual(expectedVerseSeven);
  });

  xit('test verse eight', function () {
    var expectedVerseEight =
      'On the eighth day of Christmas my true love gave to me, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([8])).toEqual(expectedVerseEight);
  });

  xit('test verse nine', function () {
    var expectedVerseNine =
      'On the ninth day of Christmas my true love gave to me, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([9])).toEqual(expectedVerseNine);
  });

  xit('test verse ten', function () {
    var expectedVerseTen =
      'On the tenth day of Christmas my true love gave to me, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([10])).toEqual(expectedVerseTen);
  });

  xit('test verse eleven', function () {
    var expectedVerseEleven =
      'On the eleventh day of Christmas my true love gave to me, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([11])).toEqual(expectedVerseEleven);
  });

  xit('test verse twelve', function () {
    var expectedVerseTwelve =
      'On the twelfth day of Christmas my true love gave to me, twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([12])).toEqual(expectedVerseTwelve);
  });

  xit('test multiple verse', function () {
    var expectedVerseOneToThree =
      'On the first day of Christmas my true love gave to me, a Partridge in a Pear Tree.\n\n' +
      'On the second day of Christmas my true love gave to me, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the third day of Christmas my true love gave to me, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.verse([1, 3])).toEqual(expectedVerseOneToThree);
  });

  xit('test sing whole song', function () {
    var expectedSong =
      'On the first day of Christmas my true love gave to me, a Partridge in a Pear Tree.\n\n' +
      'On the second day of Christmas my true love gave to me, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the third day of Christmas my true love gave to me, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the fourth day of Christmas my true love gave to me, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the fifth day of Christmas my true love gave to me, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the sixth day of Christmas my true love gave to me, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the seventh day of Christmas my true love gave to me, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the eighth day of Christmas my true love gave to me, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the ninth day of Christmas my true love gave to me, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the tenth day of Christmas my true love gave to me, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the eleventh day of Christmas my true love gave to me, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n\n' +
      'On the twelfth day of Christmas my true love gave to me, twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n';
    expect(twelveDaysObject.sing()).toEqual(expectedSong);
  });
});
