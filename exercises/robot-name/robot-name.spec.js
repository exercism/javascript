import Robot from './robot-name';

describe('Robot', () => {
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });

  test('has a name', () => {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  xtest('name is the same each time', () => {
    expect(robot.name).toEqual(robot.name);
  });

  xtest('different robots have different names', () => {
    const differentRobot = new Robot();
    expect(differentRobot.name).not.toEqual(robot.name);
  });

  xtest('is able to reset the name', () => {
    const originalName = robot.name;

    robot.reset();
    const newName = robot.name;

    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });

  xtest('should set a unique name after reset', () => {
    const NUMBER_OF_ROBOTS = 10000;
    const usedNames = new Set();

    usedNames.add(robot.name);
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.reset();
      usedNames.add(robot.name);
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS + 1);
  });

  xtest('internal name cannot be modified', () => {
    const modifyInternal = () => robot.name += 'a modification';
    expect(modifyInternal).toThrow();
  });


  xtest('new names should not be sequential', () => {
    const name1 = robot.name;
    const name2 = (new Robot()).name;
    const name3 = (new Robot()).name;
    expect(areSequential(name1, name1)).toBe(true);
    expect(areSequential(name1, name2)).toBe(false);
    expect(areSequential(name2, name3)).toBe(false);
  });

  xtest('names from reset should not be sequential', () => {
    const name1 = robot.name;
    robot.reset();
    const name2 = robot.name;
    robot.reset();
    const name3 = robot.name;
    expect(areSequential(name1, name2)).toBe(false);
    expect(areSequential(name2, name3)).toBe(false);
    expect(areSequential(name3, name3)).toBe(true);
  });

  // This test is optional.
  xtest('there can be lots of robots with different names each', () => {
    const NUMBER_OF_ROBOTS = 10000;
    const usedNames = new Set();

    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      const newRobot = new Robot();
      usedNames.add(newRobot.name);
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS);
  });
});

const areSequential = (name1, name2) => {
  const alpha1 = name1.substr(0, 2);
  const alpha2 = name2.substr(0, 2);
  const num1 = +name1.substr(2, 3);
  const num2 = +name2.substr(2, 3);

  const numDiff = num2 - num1;
  const alphaDiff = (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26
    + (alpha2.charCodeAt(1) - alpha1.charCodeAt(1));

  const totalDiff = alphaDiff * 1000 + numDiff;

  return Math.abs(totalDiff) <= 1;
};
