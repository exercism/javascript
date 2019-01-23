import { GradeSchool } from './grade-school';

describe('School', () => {
  let school;

  beforeEach(() => {
    school = new GradeSchool();
  });

  test('a new school has an empty roster', () => {
    expect(school.roster()).toEqual({});
  });

  xtest('adding a student adds them to the roster for the given grade', () => {
    school.add('Aimee', 2);

    const expectedDb = { 2: ['Aimee'] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('adding more students to the same grade adds them to the roster', () => {
    school.add('Blair', 2);
    school.add('James', 2);
    school.add('Paul', 2);

    const expectedDb = { 2: ['Blair', 'James', 'Paul'] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('adding students to different grades adds them to the roster', () => {
    school.add('Chelsea', 3);
    school.add('Logan', 7);

    const expectedDb = { 3: ['Chelsea'], 7: ['Logan'] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('grade returns the students in that grade in alphabetical order', () => {
    school.add('Franklin', 5);
    school.add('Bradley', 5);
    school.add('Jeff', 1);

    const expectedStudents = ['Bradley', 'Franklin'];
    expect(school.grade(5)).toEqual(expectedStudents);
  });

  xtest('grade returns an empty array if there are no students in that grade', () => {
    expect(school.grade(1)).toEqual([]);
  });

  xtest('the students names in each grade in the roster are sorted', () => {
    school.add('Jennifer', 4);
    school.add('Kareem', 6);
    school.add('Christopher', 4);
    school.add('Kyle', 3);

    const expectedSortedStudents = {
      3: ['Kyle'],
      4: ['Christopher', 'Jennifer'],
      6: ['Kareem'],
    };
    expect(school.roster()).toEqual(expectedSortedStudents);
  });

  xtest('roster cannot be modified outside of module', () => {
    school.add('Aimee', 2);
    const roster = school.roster();
    roster[2].push('Oops.');
    const expectedDb = { 2: ['Aimee'] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xtest('roster cannot be modified outside of module using grade()', () => {
    school.add('Aimee', 2);
    school.grade(2).push('Oops.');
    const expectedDb = { 2: ['Aimee'] };
    expect(school.roster()).toEqual(expectedDb);
  });
});
