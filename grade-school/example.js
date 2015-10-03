
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let db;
class School {

  constructor() {
    db = {};
  }

  add(student, level) {
    db[level] = this.grade(level).concat(student).sort();
  }

  grade(level) {
    return db[level] ? clone(db[level]).sort() : [];
  }

  roster() {
    return clone(db);
  }

};

export default School;
