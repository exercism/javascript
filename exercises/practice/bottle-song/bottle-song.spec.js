import { recite } from './bottle-song';

describe('Bottle Song', () => {
  describe('verse', () => {
    describe('single verse', () => {
      test('first generic verse', () => {
        let expected = [
          `Ten green bottles hanging on the wall,`,
          `Ten green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be nine green bottles hanging on the wall.`,
        ];
        expect(recite(10, 1)).toEqual(expected);
      });

      xtest('last generic verse', () => {
        let expected = [
          `Three green bottles hanging on the wall,`,
          `Three green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be two green bottles hanging on the wall.`,
        ];
        expect(recite(3, 1)).toEqual(expected);
      });

      xtest('verse with 2 bottles', () => {
        let expected = [
          `Two green bottles hanging on the wall,`,
          `Two green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be one green bottle hanging on the wall.`,
        ];
        expect(recite(2, 1)).toEqual(expected);
      });

      xtest('verse with 1 bottle', () => {
        let expected = [
          `One green bottle hanging on the wall,`,
          `One green bottle hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be no green bottles hanging on the wall.`,
        ];
        expect(recite(1, 1)).toEqual(expected);
      });
    });
  });

  describe('lyrics', () => {
    describe('multiple verses', () => {
      xtest('first two verses', () => {
        let expected = [
          `Ten green bottles hanging on the wall,`,
          `Ten green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be nine green bottles hanging on the wall.`,
          ``,
          `Nine green bottles hanging on the wall,`,
          `Nine green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be eight green bottles hanging on the wall.`,
        ];
        expect(recite(10, 2)).toEqual(expected);
      });

      xtest('last three verses', () => {
        let expected = [
          `Three green bottles hanging on the wall,`,
          `Three green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be two green bottles hanging on the wall.`,
          ``,
          `Two green bottles hanging on the wall,`,
          `Two green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be one green bottle hanging on the wall.`,
          ``,
          `One green bottle hanging on the wall,`,
          `One green bottle hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be no green bottles hanging on the wall.`,
        ];
        expect(recite(3, 3)).toEqual(expected);
      });

      xtest('all verses', () => {
        let expected = [
          `Ten green bottles hanging on the wall,`,
          `Ten green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be nine green bottles hanging on the wall.`,
          ``,
          `Nine green bottles hanging on the wall,`,
          `Nine green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be eight green bottles hanging on the wall.`,
          ``,
          `Eight green bottles hanging on the wall,`,
          `Eight green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be seven green bottles hanging on the wall.`,
          ``,
          `Seven green bottles hanging on the wall,`,
          `Seven green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be six green bottles hanging on the wall.`,
          ``,
          `Six green bottles hanging on the wall,`,
          `Six green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be five green bottles hanging on the wall.`,
          ``,
          `Five green bottles hanging on the wall,`,
          `Five green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be four green bottles hanging on the wall.`,
          ``,
          `Four green bottles hanging on the wall,`,
          `Four green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be three green bottles hanging on the wall.`,
          ``,
          `Three green bottles hanging on the wall,`,
          `Three green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be two green bottles hanging on the wall.`,
          ``,
          `Two green bottles hanging on the wall,`,
          `Two green bottles hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be one green bottle hanging on the wall.`,
          ``,
          `One green bottle hanging on the wall,`,
          `One green bottle hanging on the wall,`,
          `And if one green bottle should accidentally fall,`,
          `There'll be no green bottles hanging on the wall.`,
        ];
        expect(recite(10, 10)).toEqual(expected);
      });
    });
  });
});
