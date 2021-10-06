// @ts-check

import {
  frontDoorResponse,
  backDoorResponse,
  frontDoorPassword,
  backDoorPassword,
} from './door-policy';

const recite = (poem, responseFn) => {
  return poem.map((line) => responseFn(line));
};

//Shire Horse, by Michael Lockwood
const SHIRE_HORSE = [
  'Stands so high',
  'Huge hooves too',
  'Impatiently waits for',
  'Reins and harness',
  'Eager to leave',
];

//Shire Horse, by Michael Lockwood
//with leading and trailing whitespace
const SHIRE_HORSE_WITH_SPACES = [
  'Stands so high   ',
  'Huge hooves too  ',
  'Impatiently waits for      ',
  'Reins and harness    ',
  'Eager to leave   ',
];

//Summer, by John Albert Caballero
const SUMMER = [
  'Sunshine warming my toes,',
  'Underwater fun with my friends.',
  'Making homemade ice cream on the porch,',
  'Many long nights catching fireflies.',
  'Early morning walks to the creek,',
  'Reveling in the freedom of lazy days.',
];

//Sophia, by John Albert Caballero
const SOPHIA = [
  'Serene, calming quality',
  'Organized, you always have it together',
  'Picturesque, strikingly beautiful',
  'Honest, so genuine',
  'Imaginative, a creative mind',
  'Alluring, so attractive',
];

//Code Work, by Derk-Jan Karrenbeld
const CODE_WORK = [
  'Compilers intensily bestow',
  'On commencing without ego',
  'Different processes ajar',
  'Exit with zero quick',
];

describe('front door response', () => {
  test('should output a character per line', () => {
    const expectedLetters = recite(SHIRE_HORSE, frontDoorResponse);
    expect(expectedLetters.length).toBe(SHIRE_HORSE.length);
  });

  test('should take the first character of each line', () => {
    const expectedLetters = ['S', 'H', 'I', 'R', 'E'];
    expect(recite(SHIRE_HORSE, frontDoorResponse)).toStrictEqual(
      expectedLetters
    );
  });

  test('should take the first characters from SUMMER', () => {
    const expectedLetters = ['S', 'U', 'M', 'M', 'E', 'R'];
    expect(recite(SUMMER, frontDoorResponse)).toStrictEqual(expectedLetters);
  });

  test('should take the first characters from SOPHIA', () => {
    const expectedLetters = ['S', 'O', 'P', 'H', 'I', 'A'];
    expect(recite(SOPHIA, frontDoorResponse)).toStrictEqual(expectedLetters);
  });

  test('should take the first characters from CODE', () => {
    const expectedLetters = ['C', 'O', 'D', 'E'];
    expect(recite(CODE_WORK, frontDoorResponse)).toStrictEqual(expectedLetters);
  });
});

describe('front door password', () => {
  test('should title case SHIRE', () => {
    expect(frontDoorPassword('SHIRE')).toBe('Shire');
  });

  test('should title case SUMMER', () => {
    expect(frontDoorPassword('SUMMER')).toBe('Summer');
  });

  test('should title case SOPHIA', () => {
    expect(frontDoorPassword('SOPHIA')).toBe('Sophia');
  });

  test('should title case CODE', () => {
    expect(frontDoorPassword('CODE')).toBe('Code');
  });
});

describe('back door response', () => {
  test('should output a character per line', () => {
    const actualLetters = recite(SHIRE_HORSE, backDoorResponse);
    expect(actualLetters.length).toBe(SHIRE_HORSE.length);
  });

  test('should take the last letter character of each line of SHIRE_HORSE', () => {
    const actualLetters = recite(SHIRE_HORSE, backDoorResponse);
    const expectedLetters = ['h', 'o', 'r', 's', 'e'];
    expect(actualLetters).toStrictEqual(expectedLetters);
  });

  test('should ignore whitespace when taking the last letter character of each line of SHIRE_HORSE_WITH_SPACES', () => {
    const actualLetters = recite(SHIRE_HORSE_WITH_SPACES, backDoorResponse);
    const expectedLetters = ['h', 'o', 'r', 's', 'e'];
    expect(actualLetters).toStrictEqual(expectedLetters);
  });

  test('should take the last letter character of each line of CODE_WORK', () => {
    const actualLetters = recite(CODE_WORK, backDoorResponse);
    const expectedLetters = ['w', 'o', 'r', 'k'];
    expect(actualLetters).toStrictEqual(expectedLetters);
  });
});

describe('back door password', () => {
  test("should generate the correct pass phrase from 'horse'", () => {
    expect(backDoorPassword('horse')).toBe('Horse, please');
  });

  test("should generate the correct pass phrase from 'work'", () => {
    expect(backDoorPassword('work')).toBe('Work, please');
  });
});
