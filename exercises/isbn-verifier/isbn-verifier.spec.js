var ISBN = require('./isbn-verifier');

describe('ISBN', function () {
  it('valid isbn number', function () {
    var isbn = new ISBN('3-598-21508-8');
    expect(isbn.isValid()).toBe(true);
  });

  it('invalid isbn check digit', function () {
    var isbn = new ISBN('3-598-21508-9');
    expect(isbn.isValid()).toBe(false);
  });

  it('valid isbn number with a check digit of 10', function () {
    var isbn = new ISBN('3-598-21507-X');
    expect(isbn.isValid()).toBe(true);
  });

  it('check digit is a character other than X', function () {
    var isbn = new ISBN('3-598-21507-A');
    expect(isbn.isValid()).toBe(false);
  });

  it('invalid character in isbn', function () {
    var isbn = new ISBN('3-598-2K507-0');
    expect(isbn.isValid()).toBe(false);
  });

  it('X is only valid as a check digit', function () {
    var isbn = new ISBN('3-598-2X507-0');
    expect(isbn.isValid()).toBe(false);
  });

  it('valid isbn without separating dashes', function () {
    var isbn = new ISBN('3598215088');
    expect(isbn.isValid()).toBe(true);
  });

  it('isbn without separating dashes and X as check digit', function () {
    var isbn = new ISBN('359821507X');
    expect(isbn.isValid()).toBe(true);
  });

  it('isbn without check digit and dashes', function () {
    var isbn = new ISBN('359821507');
    expect(isbn.isValid()).toBe(false);
  });

  it('too long isbn and no dashes', function () {
    var isbn = new ISBN('3598215078X');
    expect(isbn.isValid()).toBe(false);
  });

  it('isbn without check digit', function () {
    var isbn = new ISBN('3-598-21507');
    expect(isbn.isValid()).toBe(false);
  });

  it('too long isbn', function () {
    var isbn = new ISBN('3-598-21507-XA');
    expect(isbn.isValid()).toBe(false);
  });

  it('check digit of X should not be used for 0', function () {
    var isbn = new ISBN('3-598-21515-X');
    expect(isbn.isValid()).toBe(false);
  });
});
