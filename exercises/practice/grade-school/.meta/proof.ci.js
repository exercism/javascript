export class GradeSchool {
  constructor() {
    this.students = new Map();
  }

  add(student, level) {
    for (const names of this.students.values()) {
      if (names.has(student)) {
        return false;
      }
    }

    if (!this.students.has(level)) {
      this.students.set(level, new Set());
    }

    this.students.get(level).add(student);
    return true;
  }

  grade(level) {
    if (!this.students.has(level)) {
      return [];
    }
    return [...this.students.get(level)].sort();
  }

  roster() {
    const result = [];
    for (const level of [...this.students.keys()].sort((a, b) => a - b)) {
      result.push(...[...this.students.get(level)].sort());
    }
    return result;
  }
}
