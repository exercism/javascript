import Bob from './bob';

describe('Bob', () => {
  const bob = new Bob();

  test('stating something', () => {
    const result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  xtest('shouting', () => {
    const result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xtest('shouting gibberish', () => {
    const result = bob.hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  xtest('asking a question', () => {
    const result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  xtest('asking a numeric question', () => {
    const result = bob.hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  xtest('asking gibberish', () => {
    const result = bob.hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  xtest('talking forcefully', () => {
    const result = bob.hey("Let's go make out behind the gym!");
    expect(result).toEqual('Whatever.');
  });

  xtest('using acronyms in regular speech', () => {
    const result = bob.hey("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual('Whatever.');
  });

  xtest('forceful question', () => {
    const result = bob.hey("WHAT THE HELL WERE YOU THINKING?");
    expect(result).toEqual('Calm down, I know what I\'m doing!');
  });

  xtest('shouting numbers', () => {
    const result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xtest('only numbers', () => {
    const result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  xtest('question with only numbers', () => {
    const result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  xtest('shouting with special characters', () => {
    const result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xtest('shouting with no exclamation mark', () => {
    const result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  xtest('statement containing question mark', () => {
    const result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  xtest('non-letters with question', () => {
    const result = bob.hey(':) ?');
    expect(result).toEqual('Sure.');
  });

  xtest('prattling on', () => {
    const result = bob.hey('Wait! Hang on. Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  xtest('silence', () => {
    const result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  xtest('prolonged silence', () => {
    const result = bob.hey('          ');
    expect(result).toEqual('Fine. Be that way!');
  });

  xtest('alternate silence', () => {
    const result = bob.hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

  xtest('multiple line question', () => {
    const result = bob.hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).toEqual('Whatever.');
  });

  xtest('starting with whitespace', () => {
    const result = bob.hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });

  xtest('ending with whitespace', () => {
    const result = bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });

  xtest('other whitespace', () => {
    const result = bob.hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });

  xtest('non-question ending with whitespace', () => {
    const result = bob.hey('This is a statement ending with whitespace      ');
    expect(result).toEqual('Whatever.');
  });
});

