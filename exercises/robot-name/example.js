function randomLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function Robot() {
  'use strict';

  this._name = this.generateName();
}

Robot.usedNames = {};

Robot.prototype = {
  constructor: Robot,

  generateName: function () {
    // This awesome err msg will never see the light of day. ;_; Checking the
    // length was slowing down the program too much.
    //
    //     if (Object.keys(this.constructor.usedNames).length >= 676000) {
    //       throw new Error("All possible names have been taken. " +
    //                       "Our robots are taking over the world! : D");
    //     }

    var name = randomLetter().toUpperCase();
    name += randomLetter().toUpperCase();
    name += (Math.random() + '').substr(2, 3);

    if (this.constructor.usedNames[name]) {
      return this.generateName();
    }

    this.constructor.usedNames[name] = true;

    return name;
  },

  get name() { return this._name; },

  set name(newName) {
    if (!(/^[A-Z]{2}\d{3}$/).test(newName)) {
      throw new Error('Name must be 2 capital letters followed by 3 ints.');
    }

    this._name = newName;
  },

  reset: function () { this.name = this.generateName(); }
};

module.exports = Robot;
