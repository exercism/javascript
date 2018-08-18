var reverseString = require('./reverse-string');

describe('ReverseString', function () {
  it('empty string', function () {
    var expected = '';
    var actual = reverseString('');
    expect(actual).toEqual(expected);
  });

  xit('a word', function () {
    var expected = 'tobor';
    var actual = reverseString('robot');
    expect(actual).toEqual(expected);
  });

  xit('a capitalized word', function () {
    var expected = 'nemaR';
    var actual = reverseString('Ramen');
    expect(actual).toEqual(expected);
  });

  xit('a sentence with punctuation', function () {
    var expected = '!yrgnuh ma I';
    var actual = reverseString('I am hungry!');
    expect(actual).toEqual(expected);
  });

  xit('a palindrome', function () {
    var expected = 'racecar';
    var actual = reverseString('racecar');
    expect(actual).toEqual(expected);
  });
});
