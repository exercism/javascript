/** @format */

// @ts-check

import {
  frontDoorResponse as frontDoorPatron,
  backDoorResponse as backDoorPatron,
  frontDoorPassword,
  backDoorPassword,
} from './door-policy';

const recite = (poem, patron) => {
  return poem.map((line) => patron(line));
};

//Shire Horse, by Michael Lockwood
const SHIRE_HORSE = `
Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave
`
  .trim()
  .split('\n');

//Shire Horse, by Michael Lockwood
const SHIRE_HORSE_WITH_SPACES = `
Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave
`.split('\n');

//Summer, by John Albert Caballero
const SUMMER = `
Sunshine warming my toes,
Underwater fun with my friends.
Making homemade ice cream on the porch,
Many long nights catching fireflies.
Early morning walks to the creek,
Reveling in the freedom of lazy days.
`.split('\n');

//Sophia, by John Albert Caballero
const SOPHIA = `
Serene, calming quality
Organized, you always have it together
Picturesque, strikingly beautiful
Honest, so genuine
Imaginative, a creative mind
Alluring, so attractive
`
  .trim()
  .split('\n');

//Code Work, by Derk-Jan Karrenbeld
const CODE_WORK = `
Compilers intensily bestow
On commencing without ego
Different processes ajar
Exit with zero quick
`
  .trim()
  .split('\n');

describe('strings', () => {
  describe('front door response', () => {
    test('should output a character per line', () => {
      const key = recite(SHIRE_HORSE, frontDoorPatron);
      expect(key.length).toBe(SHIRE_HORSE.length);
    });

    test('should take the first character of each line', () => {
      const key = recite(SHIRE_HORSE, frontDoorPatron);
      const expectedFirstLetters = ['S', 'H', 'I', 'R', 'E'];
      expect(key).toEqual(expectedFirstLetters);
    });

    test('should generate the correct password', () => {
      expect(frontDoorPassword('SHIRE')).toBe('Shire');
    });

    test.each([
      { poem: SUMMER, firstLetters: 'SUMMER', password: 'Summer' },
      { poem: SOPHIA, firstLetters: 'SOPHIA', password: 'Sophia' },
      { poem: CODE_WORK, firstLetters: 'CODE', password: 'Code' },
    ])(
      'should be correct for $password',
      ({ poem, firstLetters, password }) => {
        expect(recite(poem, frontDoorPatron).join('')).toBe(firstLetters);
        expect(frontDoorPassword(firstLetters)).toBe(password);
      }
    );
  });

  describe('back door response', () => {
    test('should output a character per line', () => {
      const key = recite(SHIRE_HORSE, backDoorPatron);
      expect(key.length).toBe(SHIRE_HORSE.length);
    });

    test('should take the last letter character of each line', () => {
      const key = recite(SHIRE_HORSE, backDoorPatron);
      expect(key).toEqual(['h', 'o', 'r', 's', 'e']);
    });

    test('should generate the correct password', () => {
      expect(backDoorPassword('horse')).toBe('Horse, please');
    });

    test.each([
      { poem: CODE_WORK, lastLetters: 'work', password: 'Work, please' },
      {
        poem: SHIRE_HORSE_WITH_SPACES,
        lastLetters: 'horse',
        password: 'Horse, please',
      },
    ])('should be correct for $password', ({ poem, lastLetters, password }) => {
      expect(recite(poem, backDoorPatron).join('')).toBe(lastLetters);
      expect(backDoorPassword(lastLetters)).toBe(password);
    });
  });
});
