'use strict';

var defaultChildren = [
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
  'Larry'
];

var plants = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover'
};

function getPlants(pots, index) {
  var plantsArr = [];
  var position = 2 * index;
  plantsArr.push(pots[0][position]);
  plantsArr.push(pots[0][position + 1]);
  plantsArr.push(pots[1][position]);
  plantsArr.push(pots[1][position + 1]);
  return plantsArr;
}

function parse(diagram) {
  return diagram.split('\n').map(function (row) {
    return row.split('').map(function (sign) {
      return plants[sign];
    });
  });
}

function Garden(diagram, students) {
  var instance = {};
  var kids = students || defaultChildren;
  kids.sort();

  kids.forEach(function (student, index) {
    instance[student.toLowerCase()] = getPlants(parse(diagram), index);
  });

  return instance;
}

module.exports = Garden;
