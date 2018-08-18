var Bob = require('./bob.js');

describe('Bob', function () {
  var bob = new Bob();

  it('stating something', function () {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  xit('shouting', function () {
    var result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting gibberish', function () {
    var result = bob.hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('asking a question', function () {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  xit('asking a numeric question', function () {
    var result = bob.hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  xit('asking gibberish', function () {
    var result = bob.hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  xit('talking forcefully', function () {
    var result = bob.hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  xit('using acronyms in regular speech', function () {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  xit('forceful questions', function () {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual("Calm down, I know what I'm doing!");
  });

  xit('shouting numbers', function () {
    var result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('only numbers', function () {
    var result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  xit('question with only numbers', function () {
    var result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  xit('shouting with special characters', function () {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting with no exclamation mark', function () {
    var result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('statement containing question mark', function () {
    var result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  xit('prattling on', function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  xit('silence', function () {
    var result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  xit('prolonged silence', function () {
    var result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });

  xit('alternate silence', function () {
    var result = bob.hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

  xit('multiple line question', function () {
    var result = bob.hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).toEqual('Whatever.');
  });

  xit('starting with whitespace', function () {
    var result = bob.hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });

  xit('ending with whitespace', function () {
    var result = bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });

  xit('other whitespace', function () {
    var result = bob.hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });

  xit('non-question ending with whitespace', function () {
    var result = bob.hey('This is a statement ending with whitespace      ');
    expect(result).toEqual('Whatever.');
  });
});
