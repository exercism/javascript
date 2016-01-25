const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      BASE = 10,
      usedNames ={};

const random = (max) => Math.floor(Math.random()*max);

const generateName = () => {
  let name = ALPHA.charAt(random(ALPHA.length))
    +ALPHA.charAt(random(ALPHA.length))
    +random(BASE)+random(BASE)+random(BASE);
  usedNames[name] ? name = generateName() : usedNames[name] = true;
  return name;
};

export default class Robot {
  constructor(){
    this.robotName = generateName();
  }

  get name() {
    return this.robotName;
  }

  reset() {
    this.robotName = generateName();
  }
}
