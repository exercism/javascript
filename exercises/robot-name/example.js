const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const BASE = 10;
const usedNames = {};

const random = max => Math.floor(Math.random() * max);

const generateName = () => {
  let name = ALPHA.charAt(random(ALPHA.length))
    + ALPHA.charAt(random(ALPHA.length))
    + random(BASE) + random(BASE) + random(BASE);
  if (usedNames[name]) name = generateName();
  else usedNames[name] = true;
  return name;
};

export class Robot {
  constructor() {
    this.robotName = generateName();
  }

  get name() {
    return this.robotName;
  }

  reset() {
    this.robotName = generateName();
  }
}
