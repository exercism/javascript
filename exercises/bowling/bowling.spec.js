import Bowling from './bowling';

describe('Bowling', () => {
  describe('Check game can be scored correctly.', () => {
    test('should be able to score a game with all gutterballs', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(0);
    });

    xtest('should be able to score a game with all open frames', () => {
      const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(new Bowling(rolls).score()).toEqual(90);
    });

    xtest('a spare followed by zeros is worth ten points', () => {
      const rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(10);
    });

    xtest('points scored in the roll after a spare are counted twice', () => {
      const rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(16);
    });

    xtest('consecutive spares each get a one roll bonus', () => {
      const rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(31);
    });

    xtest('should allow fill ball when the last frame is a spare', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
      expect(new Bowling(rolls).score()).toEqual(17);
    });

    xtest('a strike earns ten points in a frame with a single roll', () => {
      const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(10);
    });

    xtest('points scored in the two rolls after a strike are counted twice as a bonus', () => {
      const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(26);
    });

    xtest('should be able to score multiple strikes in a row', () => {
      const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(81);
    });

    xtest('should allow fill balls when the last frame is a strike', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];
      expect(new Bowling(rolls).score()).toEqual(18);
    });

    xtest('rolling a spare with the two roll bonus does not get a bonus roll', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3];
      expect(new Bowling(rolls).score()).toEqual(20);
    });

    xtest('strikes with the two roll bonus do not get bonus rolls', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
      expect(new Bowling(rolls).score()).toEqual(30);
    });

    xtest('a strike with the one roll bonus after a spare in the last frame does not get a bonus', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
      expect(new Bowling(rolls).score()).toEqual(20);
    });

    xtest('should be able to score a perfect game', () => {
      const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      expect(new Bowling(rolls).score()).toEqual(300);
    });
  });

  describe('Check game rules.', () => {
    xtest('rolls can not score negative points', () => {
      const rolls = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Pins must have a value from 0 to 10'),
      );
    });

    xtest('a roll can not score more than 10 points', () => {
      const rolls = [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Pins must have a value from 0 to 10'),
      );
    });

    xtest('two rolls in a frame can not score more than 10 points', () => {
      const rolls = [5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Pin count exceeds pins on the lane'),
      );
    });

    xtest('two bonus rolls after a strike in the last frame can not score more than 10 points', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 6];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Pin count exceeds pins on the lane'),
      );
    });

    xtest('two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6];
      expect(new Bowling(rolls).score()).toEqual(26);
    });

    xtest('the second bonus rolls after a strike in the last frame can not be a strike if the first one is not a strike', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6, 10];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Pin count exceeds pins on the lane'),
      );
    });

    xtest('an unstarted game can not be scored', () => {
      const rolls = [];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game'),
      );
    });

    xtest('an incomplete game can not be scored', () => {
      const rolls = [0, 0];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game'),
      );
    });

    xtest('a game with more than ten frames and no last frame spare or strike can not be scored', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Should not be able to roll after game is over'),
      );
    });

    xtest('bonus rolls for a strike in the last frame must be rolled before score can be calculated', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game'),
      );
    });

    xtest('both bonus rolls for a strike in the last frame must be rolled before score can be calculated', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game'),
      );
    });

    xtest('bonus roll for a spare in the last frame must be rolled before score can be calculated', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3];
      expect(() => { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game'),
      );
    });
  });
});
