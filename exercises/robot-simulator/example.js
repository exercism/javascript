class Robot {
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
      throw 'Invalid Robot Bearing';
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

  instructions(s) {
    return [...s].map((character) => {
      if (character === 'L') {
        return 'turnLeft';
      } else if (character === 'R') {
        return 'turnRight';
      } else if (character === 'A') {
        return 'advance';
      }
    });
  }

  place(args) {
    this.coordinates = [args.x, args.y];
    this.bearing = args.direction;
  }

  evaluate(s) {
    this.instructions(s).forEach((instruction) => {
      this[instruction]();
    });
  }

}


export default Robot;

