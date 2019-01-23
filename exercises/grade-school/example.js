
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export class GradeSchool {
  constructor() {
    this.db = {};
  }

  add(student, level) {
    this.db[level] = this.grade(level).concat(student).sort();
  }

  grade(level) {
    return this.db[level] ? clone(this.db[level]).sort() : [];
  }

  roster() {
    return clone(this.db);
  }
}
