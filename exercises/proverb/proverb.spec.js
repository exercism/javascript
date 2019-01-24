import { proverb } from './proverb';

describe('Proverb Test Suite', () => {
  test('a single consequence', () => {
    const result = proverb('nail', 'shoe');

    expect(result).toEqual(
      `For want of a nail the shoe was lost.
And all for the want of a nail.`,
    );
  });

  xtest('a short chain of consequences', () => {
    const result = proverb('nail', 'shoe', 'horse');

    expect(result).toEqual(
      `For want of a nail the shoe was lost.
For want of a shoe the horse was lost.
And all for the want of a nail.`,
    );
  });

  xtest('a longer chain of consequences', () => {
    const result = proverb('nail', 'shoe', 'horse', 'rider');
    expect(result).toEqual(
      `For want of a nail the shoe was lost.
For want of a shoe the horse was lost.
For want of a horse the rider was lost.
And all for the want of a nail.`,
    );
  });

  xtest('proverb function does not hard code the rhyme dictionary', () => {
    const result = proverb('key', 'value');

    expect(result).toEqual(
      `For want of a key the value was lost.
And all for the want of a key.`,
    );
  });

  xtest('the whole proveb', () => {
    const result = proverb('nail', 'shoe', 'horse', 'rider',
      'message', 'battle', 'kingdom');

    expect(result).toEqual(
      `For want of a nail the shoe was lost.
For want of a shoe the horse was lost.
For want of a horse the rider was lost.
For want of a rider the message was lost.
For want of a message the battle was lost.
For want of a battle the kingdom was lost.
And all for the want of a nail.`,
    );
  });

  xtest('proverb is the same each time', () => {
    expect(proverb('nail', 'shoe')).toEqual(proverb('nail', 'shoe'));
  });

  xtest('the use of an optional qualifier in the final consequence', () => {
    const result = proverb('nail', 'shoe', 'horse', 'rider',
      'message', 'battle', 'kingdom',
      { qualifier: 'horseshoe' });

    expect(result).toEqual(
      `For want of a nail the shoe was lost.
For want of a shoe the horse was lost.
For want of a horse the rider was lost.
For want of a rider the message was lost.
For want of a message the battle was lost.
For want of a battle the kingdom was lost.
And all for the want of a horseshoe nail.`,
    );
  });
});
