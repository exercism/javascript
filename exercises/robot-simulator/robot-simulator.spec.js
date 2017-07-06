import Robot from './robot-simulator';

describe('Robot', function() {
  let robot = new Robot();

  test('robot bearing', function() {
    const directions = [ 'east', 'west', 'north', 'south' ];

    directions.forEach(currentDirection => {
      robot.orient(currentDirection);
      expect(robot.bearing).toEqual(currentDirection);
    });
  });

  xtest('invalid robot bearing', function() {
    try {
      robot.orient('crood');
    } catch(exception) {
      expect(exception).toEqual('Invalid Robot Bearing');
    }
  });

  xtest('turn right from north', function() {
    robot.orient('north');
    robot.turnRight();
    expect(robot.bearing).toEqual('east');
  });

  xtest('turn right from east', function() {
    robot.orient('east');
    robot.turnRight();
    expect(robot.bearing).toEqual('south');
  });

  xtest('turn right from south', function() {
    robot.orient('south');
    robot.turnRight();
    expect(robot.bearing).toEqual('west');
  });

  xtest('turn right from west', function() {
    robot.orient('west');
    robot.turnRight();
    expect(robot.bearing).toEqual('north');
  });

  xtest('turn left from north', function() {
    robot.orient('north');
    robot.turnLeft();
    expect(robot.bearing).toEqual('west');
  });

  xtest('turn left from east', function() {
    robot.orient('east');
    robot.turnLeft();
    expect(robot.bearing).toEqual('north');
  });

  xtest('turn left from south', function() {
    robot.orient('south');
    robot.turnLeft();
    expect(robot.bearing).toEqual('east');
  });

  xtest('turn left from west', function() {
    robot.orient('west');
    robot.turnLeft();
    expect(robot.bearing).toEqual('south');
  });

  xtest('robot coordinates', function() {
    robot.at(3, 0);
    expect(robot.coordinates).toEqual([3, 0]);
  });

  xtest('other robot coordinates', function() {
    robot.at(-2, 5);
    expect(robot.coordinates).toEqual([-2, 5]);
  });

  xtest('advance when facing north', function() {
    robot.at(0, 0);
    robot.orient('north');
    robot.advance();
    expect(robot.coordinates).toEqual([0, 1]);
  });

  xtest('advance when facing east', function() {
    robot.at(0, 0);
    robot.orient('east');
    robot.advance();
    expect(robot.coordinates).toEqual([1, 0]);
  });

  xtest('advance when facing south', function() {
    robot.at(0, 0);
    robot.orient('south');
    robot.advance();
    expect(robot.coordinates).toEqual([0, -1]);
  });

  xtest('advance when facing west', function() {
    robot.at(0, 0);
    robot.orient('west');
    robot.advance();
    expect(robot.coordinates).toEqual([-1, 0]);
  });

  xtest('instructions for turning left', function() {
    expect(robot.instructions('L')).toEqual([ 'turnLeft' ]);
  });

  xtest('instructions for turning right', function() {
    expect(robot.instructions('R')).toEqual([ 'turnRight' ]);
  });

  xtest('instructions for advancing', function() {
    expect(robot.instructions('A')).toEqual([ 'advance' ]);
  });

  xtest('series of instructions', function() {
    expect(robot.instructions('RAAL'))
      .toEqual([ 'turnRight', 'advance', 'advance', 'turnLeft' ]);
  });

  xtest('instruct robot', function() {
    robot.place({ x: -2, y: 1, direction: 'east' });
    robot.evaluate('RLAALAL');
    expect(robot.coordinates).toEqual([0, 2]);
    expect(robot.bearing).toEqual('west');
  });

  xtest('instruct many robots', function() {
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
