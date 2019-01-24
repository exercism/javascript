const defaultChildren = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const plantCodes = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

function getPlants(pots, index) {
  const plants = [];
  const position = 2 * index;
  plants.push(pots[0][position]);
  plants.push(pots[0][position + 1]);
  plants.push(pots[1][position]);
  plants.push(pots[1][position + 1]);
  return plants;
}

function parse(diagram) {
  return diagram.split('\n').map(row => [...row].map(sign => plantCodes[sign]));
}

export class Garden {
  constructor(diagram, students) {
    this.students = students || defaultChildren;
    this.students.sort();

    this.students.forEach((student, index) => {
      this[student.toLowerCase()] = getPlants(parse(diagram), index);
    });
  }
}
