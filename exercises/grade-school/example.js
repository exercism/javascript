module.exports = function School() {
  var db = {};

  function add(student, gradeLevel) {
    if (db[gradeLevel]) {
      db[gradeLevel].push(student);
    } else {
      db[gradeLevel] = [student];
    }
  }

  function grade(level) {
    return db[level] ? clone(db[level]).sort() : [];
  }

  function roster() {
    return sortedGrades().reduce(function (sorted, gradeLevel) {
      sorted[gradeLevel] = clone(db[gradeLevel]).sort();
      return sorted;
    }, {});
  }

  function sortedGrades() {
    return Object.keys(db).sort();
  }

  return {
    roster: roster,
    add: add,
    grade: grade
  };
};

function clone(array) {
  return array.slice();
}
