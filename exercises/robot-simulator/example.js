'use strict';

var VALID_DIRECTIONS = ['north', 'east', 'south', 'west'];
var INSTRUCTION_KEYS = {
  A: 'advance',
  L: 'turnLeft',
  R: 'turnRight'
};

function Robot() {
  this.coordinates = [0, 0];
  this.bearing = 'north';
}

Robot.prototype.at = function (x, y) {
  this.coordinates = [x, y];
};

Robot.prototype.orient = function (direction) {
  if (VALID_DIRECTIONS.indexOf(direction) === -1) {
    throw new Error('Invalid Robot Bearing');
  }

  this.bearing = direction;
};

Robot.prototype.advance = function () {
  switch (this.bearing) {
  case 'north':
    this.coordinates[1]++;
    break;
  case 'east':
    this.coordinates[0]++;
    break;
  case 'south':
    this.coordinates[1]--;
    break;
  case 'west':
    this.coordinates[0]--;
    break;
  default:
    break;
  }
};

Robot.prototype.turnLeft = function () {
  var directionPosition = VALID_DIRECTIONS.indexOf(this.bearing);

  if (directionPosition > 0) {
    this.orient(VALID_DIRECTIONS[--directionPosition]);
  } else {
    this.orient(VALID_DIRECTIONS[VALID_DIRECTIONS.length - 1]);
  }
};

Robot.prototype.turnRight = function () {
  var directionPosition = VALID_DIRECTIONS.indexOf(this.bearing);

  if (directionPosition < (VALID_DIRECTIONS.length - 1)) {
    this.orient(VALID_DIRECTIONS[++directionPosition]);
  } else {
    this.orient(VALID_DIRECTIONS[0]);
  }
};

Robot.prototype.instructions = function (instructionKeys) {
  return instructionKeys.split('')
    .map(function (key) {
      return INSTRUCTION_KEYS[key];
    });
};

Robot.prototype.place = function (args) {
  this.coordinates = [args.x, args.y];
  this.bearing = args.direction;
};

Robot.prototype.evaluate = function (instructionKeys) {
  this.instructions(instructionKeys)
    .forEach(function (instruction) {
      this[instruction]();
    }, this);
};

module.exports = Robot;
