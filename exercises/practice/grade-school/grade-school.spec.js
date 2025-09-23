import { beforeEach, describe, expect, test, xtest } from '@jest/globals';
import { GradeSchool } from './grade-school';

describe('Grade School', () => {
  let school;

  beforeEach(() => {
    school = new GradeSchool();
  });

  test('Roster is empty when no student is added', () => {
    expect(school.roster()).toEqual([]);
  });

  xtest('Add a student', () => {
    expect(school.add('Aimee', 2)).toEqual(true);
  });

  xtest('Student is added to the roster', () => {
    school.add('Aimee', 2);

    const expectedDb = ['Aimee'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Adding multiple students in the same grade in the roster', () => {
    expect(school.add('Blair', 2)).toEqual(true);
    expect(school.add('James', 2)).toEqual(true);
    expect(school.add('Paul', 2)).toEqual(true);
  });

  xtest('Multiple students in the same grade are added to the roster', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('Paul', 2);

    const expectedDb = ['Blair', 'James', 'Paul'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Cannot add student to same grade in the roster more than once', () => {
    expect(school.add('Blair', 2)).toEqual(true);
    expect(school.add('James', 2)).toEqual(true);
    expect(school.add('James', 2)).toEqual(false);
    expect(school.add('Paul', 2)).toEqual(true);
  });

  xtest('Student not added to same grade in the roster more than once', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('James', 2);
    school.add('Paul', 2);

    const expectedDb = ['Blair', 'James', 'Paul'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Adding students in multiple grades', () => {
    expect(school.add('Chelsea', 3)).toEqual(true);
    expect(school.add('Logan', 7)).toEqual(true);
  });

  xtest('Students in multiple grades are added to the roster', () => {
    school.add('Chelsea', 3);
    school.add('Logan', 7);

    const expectedDb = ['Chelsea', 'Logan'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Cannot add same student to multiple grades in the roster', () => {
    expect(school.add('Blair', 2)).toEqual(true);
    expect(school.add('James', 2)).toEqual(true);
    expect(school.add('James', 3)).toEqual(false);
    expect(school.add('Paul', 3)).toEqual(true);
  });

  xtest('Student not added to multiple grades in the roster', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('James', 3);
    school.add('Paul', 3);

    const expectedDb = ['Blair', 'James', 'Paul'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Students are sorted by grades in the roster', () => {
    school.add('Jim', 3);
    school.add('Peter', 2);
    school.add('Anna', 1);

    const expectedDb = ['Anna', 'Peter', 'Jim'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Students are sorted by name in the roster', () => {
    school.add('Peter', 2);
    school.add('Zoe', 2);
    school.add('Alex', 2);

    const expectedDb = ['Alex', 'Peter', 'Zoe'];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Students are sorted by grades and then by name in the roster', () => {
    school.add('Peter', 2);
    school.add('Anna', 1);
    school.add('Barb', 1);
    school.add('Zoe', 2);
    school.add('Alex', 2);
    school.add('Jim', 3);
    school.add('Charlie', 1);

    const expectedDb = [
      'Anna',
      'Barb',
      'Charlie',
      'Alex',
      'Peter',
      'Zoe',
      'Jim',
    ];
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('Grade is empty if no students in the roster', () => {
    expect(school.grade(1)).toEqual([]);
  });

  xtest('Grade is empty if no students in that grade', () => {
    school.add('Peter', 2);
    school.add('Zoe', 2);
    school.add('Alex', 2);
    school.add('Jim', 3);

    expect(school.grade(1)).toEqual([]);
  });

  xtest('Student not added to same grade more than once', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('James', 2);
    school.add('Paul', 2);

    const expectedDb = ['Blair', 'James', 'Paul'];
    expect(school.grade(2)).toEqual(expectedDb);
  });

  xtest('Student not added to multiple grades', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('James', 3);
    school.add('Paul', 3);

    const expectedDb = ['Blair', 'James'];
    expect(school.grade(2)).toEqual(expectedDb);
  });

  xtest('Student not added to other grade for multiple grades', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('James', 3);
    school.add('Paul', 3);

    const expectedDb = ['Paul'];
    expect(school.grade(3)).toEqual(expectedDb);
  });

  xtest('Students are sorted by name in a grade', () => {
    school.add('Franklin', 5);
    school.add('Bradley', 5);
    school.add('Jeff', 1);

    const expectedDb = ['Bradley', 'Franklin'];
    expect(school.grade(5)).toEqual(expectedDb);
  });
});
