import { Robot } from './robot-name';

const areSequential = (name1, name2) => {
  const alpha1 = name1.substr(0, 2);
  const alpha2 = name2.substr(0, 2);
  const num1 = Number(name1.substr(2, 3));
  const num2 = Number(name2.substr(2, 3));

  const numDiff = num2 - num1;
  const alphaDiff =
    (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26 +
    (alpha2.charCodeAt(1) - alpha1.charCodeAt(1));

  const totalDiff = alphaDiff * 1000 + numDiff;

  return Math.abs(totalDiff) <= 1;
};

const TOTAL_NUMBER_OF_NAMES =
  26 * // A-Z
  26 * // A-Z
  10 * // 0-9
  10 * // 0-9
  10; // 0-9

describe('Robot', () => {
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });
  afterEach(() => {
    Robot.releaseNames();
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
    for (let i = 0; i < NUMBER_OF_ROBOTS; i += 1) {
      robot.reset();
      usedNames.add(robot.name);
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS + 1);
  });

  xtest('internal name cannot be modified', () => {
    const modifyInternal = () => {
      robot.name += 'a modification';
    };
    expect(modifyInternal).toThrow();
  });

  xtest('new names should not be sequential', () => {
    const name1 = robot.name;
    const name2 = new Robot().name;
    const name3 = new Robot().name;
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
  //
  // This test doesn't run on our online test runner because it will time-out
  // with most implementations. It's up to you to test your solution locally.
  test.skip(
    'all the names can be generated',
    () => {
      const usedNames = new Set();
      usedNames.add(robot.name);

      for (let i = 0; i < TOTAL_NUMBER_OF_NAMES - 1; i += 1) {
        const newRobot = new Robot();
        usedNames.add(newRobot.name);
      }

      expect(usedNames.size).toEqual(TOTAL_NUMBER_OF_NAMES);
    },
    8 * 1000
  );
});
