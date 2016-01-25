import Bob from './bob.js';

describe('Bob', () => {

  const bob = new Bob();

  it('stating something', () => {
    const result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  xit('shouting', () => {
    const result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('asking a question', () => {
    const result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  xit('talking forcefully', () => {
    const result = bob.hey("Let's go make out behind the gym!");
    expect(result).toEqual('Whatever.');
  });

  xit('using acronyms in regular speech', () => {
    const result = bob.hey("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual('Whatever.');
  });

  xit('forceful questions', () => {
    const result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting numbers', () => {
    const result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('only numbers', () => {
    const result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  xit('question with only numbers', () => {
    const result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  xit('shouting with special characters', () => {
    const result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting with umlauts', () => {
    const result = bob.hey('\xdcML\xc4\xdcTS!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('calmly speaking about umlauts', () => {
    const result = bob.hey('\xfcML\xe4\xdcTS');
    expect(result).toEqual('Whatever.');
  });

  xit('shouting with no exclamation mark', () => {
    const result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('statement containing question mark', () => {
    const result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  xit('prattling on', () => {
    const result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  xit('silence', () => {
    const result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

   xit('prolonged silence', () => {
    const result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });

});

