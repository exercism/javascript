import { Robot, InvalidInputError } from './robot-simulator';

function turnRight(robot) {
  robot.evaluate('R');
}

function turnLeft(robot) {
  robot.evaluate('L');
}

function advance(robot) {
  robot.evaluate('A');
}

describe('Robot', () => {
  describe('Create robot', () => {
    test('facing north by default', () => {
      const robot = new Robot();
      expect(robot.bearing).toEqual('north');
    });

    xtest('facing east', () => {
      const robot = new Robot();
      robot.place({ direction: 'east', x: 0, y: 0 });

      expect(robot.bearing).toEqual('east');
    });

    xtest('facing west, at origin', () => {
      const robot = new Robot();
      robot.place({ direction: 'west', x: 0, y: 0 });

      expect(robot.bearing).toEqual('west');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('at negative position facing south', () => {
      const robot = new Robot();
      robot.place({ direction: 'south', x: -1, y: -1 });

      expect(robot.bearing).toEqual('south');
      expect(robot.coordinates).toEqual([-1, -1]);
    });

    xtest('invalid robot bearing', () => {
      const robot = new Robot();

      expect(InvalidInputError.prototype).toBeInstanceOf(Error);
      expect(() => robot.place({ direction: 'crood', x: 0, y: 0 })).toThrow(
        InvalidInputError
      );
    });
  });

  describe('Rotating clockwise', () => {
    const robot = new Robot();

    xtest('changes north to east', () => {
      robot.place({ direction: 'north', x: 0, y: 0 });

      turnRight(robot);

      expect(robot.bearing).toEqual('east');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('changes east to south', () => {
      robot.place({ direction: 'east', x: 0, y: 0 });

      turnRight(robot);

      expect(robot.bearing).toEqual('south');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('changes south to west', () => {
      robot.place({ direction: 'south', x: 0, y: 0 });

      turnRight(robot);

      expect(robot.bearing).toEqual('west');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('changes west to north', () => {
      robot.place({ direction: 'west', x: 0, y: 0 });

      turnRight(robot);

      expect(robot.bearing).toEqual('north');
      expect(robot.coordinates).toEqual([0, 0]);
    });
  });

  describe('Rotating counter-clockwise', () => {
    const robot = new Robot();

    xtest('changes north to west', () => {
      robot.place({ direction: 'north', x: 0, y: 0 });

      turnLeft(robot);

      expect(robot.bearing).toEqual('west');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('changes west to south', () => {
      robot.place({ direction: 'west', x: 0, y: 0 });

      turnLeft(robot);

      expect(robot.bearing).toEqual('south');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('changes south to east', () => {
      robot.place({ direction: 'south', x: 0, y: 0 });

      turnLeft(robot);

      expect(robot.bearing).toEqual('east');
      expect(robot.coordinates).toEqual([0, 0]);
    });

    xtest('changes east to north', () => {
      robot.place({ direction: 'east', x: 0, y: 0 });

      turnLeft(robot);

      expect(robot.bearing).toEqual('north');
      expect(robot.coordinates).toEqual([0, 0]);
    });
  });

  describe('Moving forward one', () => {
    const robot = new Robot();

    xtest('advance when facing north', () => {
      robot.place({ direction: 'north', x: 0, y: 0 });

      advance(robot);

      expect(robot.coordinates).toEqual([0, 1]);
      expect(robot.bearing).toEqual('north');
    });

    xtest('advance when facing south', () => {
      robot.place({ direction: 'south', x: 0, y: 0 });

      advance(robot);

      expect(robot.coordinates).toEqual([0, -1]);
      expect(robot.bearing).toEqual('south');
    });

    xtest('advance when facing east', () => {
      robot.place({ direction: 'east', x: 0, y: 0 });

      advance(robot);

      expect(robot.coordinates).toEqual([1, 0]);
      expect(robot.bearing).toEqual('east');
    });

    xtest('advance when facing west', () => {
      robot.place({ direction: 'west', x: 0, y: 0 });

      advance(robot);

      expect(robot.coordinates).toEqual([-1, 0]);
      expect(robot.bearing).toEqual('west');
    });
  });

  describe('Follow series of instructions', () => {
    const robot = new Robot();

    xtest('moving east and north from README', () => {
      robot.place({ x: 7, y: 3, direction: 'north' });

      robot.evaluate('RAALAL');

      expect(robot.coordinates).toEqual([9, 4]);
      expect(robot.bearing).toEqual('west');
    });

    xtest('moving west and north', () => {
      robot.place({ x: 0, y: 0, direction: 'north' });

      robot.evaluate('LAAARALA');

      expect(robot.coordinates).toEqual([-4, 1]);
      expect(robot.bearing).toEqual('west');
    });

    xtest('moving west and south', () => {
      robot.place({ x: 2, y: -7, direction: 'east' });

      robot.evaluate('RRAAAAALA');

      expect(robot.coordinates).toEqual([-3, -8]);
      expect(robot.bearing).toEqual('south');
    });

    xtest('moving east and north', () => {
      robot.place({ x: 8, y: 4, direction: 'south' });

      robot.evaluate('LAAARRRALLLL');

      expect(robot.coordinates).toEqual([11, 5]);
      expect(robot.bearing).toEqual('north');
    });

    xtest('instruct many robots', () => {
      const robot1 = new Robot();
      const robot2 = new Robot();
      const robot3 = new Robot();
      robot1.place({ x: 0, y: 0, direction: 'north' });
      robot2.place({ x: 2, y: -7, direction: 'east' });
      robot3.place({ x: 8, y: 4, direction: 'south' });

      robot1.evaluate('LAAARALA');
      robot2.evaluate('RRAAAAALA');
      robot3.evaluate('LAAARRRALLLL');

      expect(robot1.coordinates).toEqual([-4, 1]);
      expect(robot1.bearing).toEqual('west');

      expect(robot2.coordinates).toEqual([-3, -8]);
      expect(robot2.bearing).toEqual('south');

      expect(robot3.coordinates).toEqual([11, 5]);
      expect(robot3.bearing).toEqual('north');
    });
  });
});
