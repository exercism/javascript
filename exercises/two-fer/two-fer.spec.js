
var TwoFer = require('./two-fer');

describe('Two Fer', function () {
  var twoFer = new TwoFer();

  it('gives one to you if no parameter given', function () {
    expect(twoFer.twoFer()).toEqual('One for you, one for me.');
  });

  xit('gives one to Alice if \'Alice\' is given', function () {
    expect(twoFer.twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  xit('gives one to Bob if \'Bob\' is given', function () {
    expect(twoFer.twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});
