const DEFAULT_STUDENTS = [
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

const PLANT_CODES = {
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
  return diagram
    .split('\n')
    .map((row) => [...row].map((sign) => PLANT_CODES[sign]));
}

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.students = students;
    this.students.sort();

    this.plots = {};

    this.students.forEach((student, index) => {
      this.plots[student] = getPlants(parse(diagram), index);
    });
  }

  plants(student) {
    return this.plots[student];
  }
}
