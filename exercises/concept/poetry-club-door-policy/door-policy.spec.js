// @ts-check

import {
  frontDoorResponse as frontDoorPatron,
  backDoorResponse as backDoorPatron,
  frontDoorPassword,
  backDoorPassword,
} from './door-policy';

class Poem {
  constructor(poem) {
    const [lines, author] = poem.split('\n\n');
    this.lines = lines.split('\n');
    this.author = author;
  }

  get length() {
    return this.lines.length;
  }

  // purposefully using array methods as to not give away string solution
  get acrostic() {
    return this.lines.map((line) => [...line].shift()).join('');
  }

  get telestich() {
    return this.lines.map((line) => [...line.trim()].pop()).join('');
  }

  *[Symbol.iterator]() {
    yield* this.lines[Symbol.iterator]();
  }
}

class FrontDoorGuard {
  /**
   * @param {Poem} poem
   */
  constructor(poem) {
    this.poem = poem;
  }

  /**
   * Recites a poem at the door, asking the patron for a response
   *
   * @returns {string} key
   */
  recite() {
    const patron = frontDoorPatron;
    const key = [];

    for (const line of this.poem) {
      key.push(patron(line));
    }

    return key.join('');
  }

  assert() {
    const password = frontDoorPassword(this.recite());

    expect(password).toBe(stringify(generateCapitalized(this.poem.acrostic)));
  }
}

class BackDoorGuard {
  constructor(poem) {
    this.poem = poem;
  }

  /**
   * Recites a poem at the door, asking the patron for a response
   *
   * @returns {string} key
   */
  recite() {
    const patron = backDoorPatron;
    const key = [];

    for (const line of this.poem) {
      key.push(patron(line));
    }

    return key.join('');
  }

  assert() {
    const password = backDoorPassword(this.recite());

    expect(password).toBe(
      stringify(generateCapitalized(this.poem.telestich)).concat(', please')
    );
  }
}

const SHIRE_HORSE = new Poem(
  `
Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave

Michael Lockwood
`.trim()
);

const SHIRE_HORSE_WITH_SPACES = new Poem(
  `
Stands so high  
Huge hooves too      
Impatiently waits for 
Reins and harness  
Eager to leave

Michael Lockwood
`
);

const SUMMER = new Poem(`
Sunshine warming my toes,
Underwater fun with my friends.
Making homemade ice cream on the porch,
Many long nights catching fireflies.
Early morning walks to the creek,
Reveling in the freedom of lazy days.

John Albert Caballero
`);

const SOPHIA = new Poem(
  `
Serene, calming quality
Organized, you always have it together
Picturesque, strikingly beautiful
Honest, so genuine
Imaginative, a creative mind
Alluring, so attractive

John Albert Caballero
`.trim()
);

const CODE_WORK = new Poem(
  `
Compilers intensily bestow
On commencing without ego
Different processes ajar
Exit with zero quick

Derk-Jan Karrenbeld
`.trim()
);

describe('strings', () => {
  describe('front door', () => {
    const ShireGuard = new FrontDoorGuard(SHIRE_HORSE);

    test('it outputs a character per line', () => {
      const key = ShireGuard.recite();
      expect(key.length).toBe(SHIRE_HORSE.length);
    });

    test('it outputs takes the first characters', () => {
      const key = ShireGuard.recite();
      expect(key.toUpperCase()).toBe(SHIRE_HORSE.acrostic.toUpperCase());
    });

    test('it generates the correct password', () => {
      ShireGuard.assert();
    });

    const FRONT_DOOR_CASES = {
      SUMMER,
      SOPHIA,
      CODE_WORK,
    };

    Object.keys(FRONT_DOOR_CASES).forEach((name) => {
      const poem = FRONT_DOOR_CASES[name];
      const guard = new FrontDoorGuard(poem);

      test(`frontDoorPassword(${name})`, () => {
        guard.assert();
      });
    });
  });

  describe('back door', () => {
    const ShireGuard = new BackDoorGuard(SHIRE_HORSE);

    test('it outputs a character per line', () => {
      const key = ShireGuard.recite();
      expect(key.length).toBe(SHIRE_HORSE.length);
    });

    test('it outputs takes the first characters', () => {
      const key = ShireGuard.recite();
      expect(key.toUpperCase()).toBe(SHIRE_HORSE.telestich.toUpperCase());
    });

    test('it generates the correct password', () => {
      ShireGuard.assert();
    });

    const BACK_DOOR_CASES = {
      CODE_WORK,
      SHIRE_HORSE_WITH_SPACES,
    };

    Object.keys(BACK_DOOR_CASES).forEach((name) => {
      const poem = BACK_DOOR_CASES[name];
      const guard = new BackDoorGuard(poem);

      test(`backDoorGuard(${name})`, () => {
        guard.assert();
      });
    });
  });
});

/**
 * @param {string} input
 */
function* generateCapitalized(input) {
  const stream = [...input.toLowerCase()];
  yield String.fromCharCode(stream.shift().charCodeAt(0) - 32);
  yield* stream;
}

/**
 * @param {Generator<string, void, string>} generator
 */
function stringify(generator) {
  const result = [];
  let done = false;

  while (!done) {
    const { value, done: thisDone } = generator.next();
    done = thisDone;
    result.push(value);
  }

  return result.join('');
}
