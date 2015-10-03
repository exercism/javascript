import School from './grade-school';

describe('School', () => {
  let school;

  beforeEach(() => {
    school = new School();
  });

  it('a new school has an empty roster', () => {
    expect(school.roster()).toEqual({});
  });

  xit('adding a student adds them to the roster for the given grade', () => {
    school.add('Aimee', 2);

    let expectedDb = { 2 : [ 'Aimee' ] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xit('adding more students to the same grade adds them to the roster', () => {
    school.add('Blair',2);
    school.add('James',2);
    school.add('Paul',2);

    let expectedDb = { 2 : [ 'Blair', 'James', 'Paul' ] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xit('adding students to different grades adds them to the roster', () => {
    school.add('Chelsea',3);
    school.add('Logan',7);

    let expectedDb = { 3 : [ 'Chelsea' ], 7 : [ 'Logan'] };
    expect(school.roster()).toEqual(expectedDb);
  });

  xit('grade returns the students in that grade in alphabetical order', () => {
    school.add('Franklin',5);
    school.add('Bradley',5);
    school.add('Jeff',1);

    let expectedStudents = [ 'Bradley', 'Franklin' ];
    expect(school.grade(5)).toEqual(expectedStudents);
  });

  xit('grade returns an empty array if there are no students in that grade', () => {
    expect(school.grade(1)).toEqual([]);
  });

  xit('the students names in each grade in the roster are sorted', () => {
    school.add('Jennifer', 4);
    school.add('Kareem', 6);
    school.add('Christopher', 4);
    school.add('Kyle', 3);

    let expectedSortedStudents = {
      3 : ['Kyle'],
      4 : ['Christopher', 'Jennifer'],
      6 : ['Kareem']
    };
    expect(school.roster()).toEqual(expectedSortedStudents);
  });

});
