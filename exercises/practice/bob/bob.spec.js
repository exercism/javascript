import { hey } from './bob';

describe('Bob', () => {
  test('stating something', () => {
    const result = hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  test('shouting', () => {
    const result = hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  test('shouting gibberish', () => {
    const result = hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  test('asking a question', () => {
    const result = hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  test('asking a numeric question', () => {
    const result = hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  test('asking gibberish', () => {
    const result = hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  test('talking forcefully', () => {
    const result = hey("Let's go make out behind the gym!");
    expect(result).toEqual('Whatever.');
  });

  test('using acronyms in regular speech', () => {
    const result = hey("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual('Whatever.');
  });

  test('forceful question', () => {
    const result = hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual("Calm down, I know what I'm doing!");
  });

  test('shouting numbers', () => {
    const result = hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  test('no letters', () => {
    const result = hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  test('question with no letters', () => {
    const result = hey('4?');
    expect(result).toEqual('Sure.');
  });

  test('shouting with special characters', () => {
    const result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  test('shouting with no exclamation mark', () => {
    const result = hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  test('statement containing question mark', () => {
    const result = hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  test('non-letters with question', () => {
    const result = hey(':) ?');
    expect(result).toEqual('Sure.');
  });

  test('prattling on', () => {
    const result = hey('Wait! Hang on. Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  test('silence', () => {
    const result = hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  test('prolonged silence', () => {
    const result = hey('          ');
    expect(result).toEqual('Fine. Be that way!');
  });

  test('alternate silence', () => {
    const result = hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

  test('multiple line question', () => {
    const result = hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).toEqual('Whatever.');
  });

  test('starting with whitespace', () => {
    const result = hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });

  test('ending with whitespace', () => {
    const result = hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });

  test('other whitespace', () => {
    const result = hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });

  test('non-question ending with whitespace', () => {
    const result = hey('This is a statement ending with whitespace      ');
    expect(result).toEqual('Whatever.');
  });
});
