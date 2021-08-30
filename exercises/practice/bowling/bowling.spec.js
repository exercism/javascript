import { Bowling } from './bowling';

describe('Bowling', () => {
  describe('Check game can be scored correctly.', () => {
    test('should be able to score a game with all zeros', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(0);
    });

    xtest('should be able to score a game with no strikes or spares', () => {
      const rolls = [
        3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(90);
    });

    xtest('a spare followed by zeros is worth ten points', () => {
      const rolls = [
        6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(10);
    });

    xtest('points scored in the roll after a spare are counted twice', () => {
      const rolls = [
        6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(16);
    });

    xtest('consecutive spares each get a one roll bonus', () => {
      const rolls = [
        5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(31);
    });

    xtest('a spare in the last frame gets a one roll bonus that is counted once', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(17);
    });

    xtest('a strike earns ten points in a frame with a single roll', () => {
      const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(10);
    });

    xtest('points scored in the two rolls after a strike are counted twice as a bonus', () => {
      const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(26);
    });

    xtest('consecutive strikes each get the two roll bonus', () => {
      const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(81);
    });

    xtest('a strike in the last frame gets a two roll bonuses that is counted once', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(18);
    });

    xtest('rolling a spare with the two roll bonus does not get a bonus roll', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(20);
    });

    xtest('strikes with the two roll bonus do not get bonus rolls', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(30);
    });

    xtest('a strike with the one roll bonus after a spare in the last frame does not get a bonus', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(20);
    });

    xtest('all strikes is a perfect game', () => {
      const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(300);
    });
  });

  describe('Check game rules.', () => {
    xtest('rolls cannot score negative points', () => {
      const bowling = new Bowling();
      expect(() => {
        bowling.roll(-1);
      }).toThrow(new Error('Negative roll is invalid'));
    });

    xtest('a roll cannot score more than 10 points', () => {
      const bowling = new Bowling();
      expect(() => {
        bowling.roll(11);
      }).toThrow(new Error('Pin count exceeds pins on the lane'));
    });

    xtest('two rolls in a frame cannot score more than 10 points', () => {
      const bowling = new Bowling();
      bowling.roll(5);
      expect(() => {
        bowling.roll(6);
      }).toThrow(new Error('Pin count exceeds pins on the lane'));
    });

    xtest('bonus roll after a strike in the last frame cannot score more than 10 points', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(11);
      }).toThrow(new Error('Pin count exceeds pins on the lane'));
    });

    xtest('two bonus rolls after a strike in the last frame cannot score more than 10 points', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(6);
      }).toThrow(new Error('Pin count exceeds pins on the lane'));
    });

    xtest('two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(bowling.score()).toEqual(26);
    });

    xtest('the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(10);
      }).toThrow(new Error('Pin count exceeds pins on the lane'));
    });

    xtest('second bonus roll after a strike in the last frame cannot score more than 10 points', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(11);
      }).toThrow(new Error('Pin count exceeds pins on the lane'));
    });

    xtest('an unstarted game cannot be scored', () => {
      const bowling = new Bowling();
      expect(() => {
        bowling.score();
      }).toThrow(new Error('Score cannot be taken until the end of the game'));
    });

    xtest('an incomplete game cannot be scored', () => {
      const rolls = [0, 0];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error('Score cannot be taken until the end of the game'));
    });

    xtest('cannot roll if game already has ten frames', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(0);
      }).toThrow(new Error('Cannot roll after game is over'));
    });

    xtest('bonus rolls for a strike in the last frame must be rolled before score can be calculated', () => {
      const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error('Score cannot be taken until the end of the game'));
    });

    xtest('both bonus rolls for a strike in the last frame must be rolled before score can be calculated', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error('Score cannot be taken until the end of the game'));
    });

    xtest('bonus roll for a spare in the last frame must be rolled before score can be calculated', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.score();
      }).toThrow(new Error('Score cannot be taken until the end of the game'));
    });

    xtest('cannot roll after bonus roll for spare', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 2,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(2);
      }).toThrow(new Error('Cannot roll after game is over'));
    });

    xtest('cannot roll after bonus rolls for strike', () => {
      const rolls = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 2,
      ];
      const bowling = new Bowling();
      rolls.forEach((roll) => {
        bowling.roll(roll);
      });
      expect(() => {
        bowling.roll(2);
      }).toThrow(new Error('Cannot roll after game is over'));
    });
  });
});
