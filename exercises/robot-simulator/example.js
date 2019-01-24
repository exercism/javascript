export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  at(xcoord, ycoord) {
    this.coordinates = [xcoord, ycoord];
  }

  orient(direction) {
    const validDirections = ['north', 'south', 'east', 'west'];
    if (!validDirections.includes(direction)) {
      throw new InvalidInputError('Invalid Robot Bearing');
    }

    this.bearing = direction;
    return `The robot is pointed ${direction}`;
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1;
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1;
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1;
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1;
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.orient('west');
    } else if (this.bearing === 'south') {
      this.orient('east');
    } else if (this.bearing === 'east') {
      this.orient('north');
    } else if (this.bearing === 'west') {
      this.orient('south');
    }
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.orient('east');
    } else if (this.bearing === 'south') {
      this.orient('west');
    } else if (this.bearing === 'east') {
      this.orient('south');
    } else if (this.bearing === 'west') {
      this.orient('north');
    }
  }

  static instructions(s) {
    return [...s].map((character) => {
      switch (character) {
        case 'L':
          return 'turnLeft';
        case 'R':
          return 'turnRight';
        case 'A':
          return 'advance';
        default:
          throw new InvalidInputError(`${character} is not a valid instruction character.`);
      }
    });
  }

  place(args) {
    this.coordinates = [args.x, args.y];
    this.bearing = args.direction;
  }

  evaluate(s) {
    Robot.instructions(s).forEach((instruction) => {
      this[instruction]();
    });
  }
}
