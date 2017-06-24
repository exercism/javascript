import Garden from './kindergarten-garden';

describe('Garden', () => {
  it('for Alice', () => {
    expect(new Garden('RC\nGG').alice)
      .toEqual(['radishes', 'clover', 'grass', 'grass']);
  });

  xit('another for Alice', () => {
    expect(new Garden('VC\nRC').alice)
      .toEqual(['violets', 'clover', 'radishes', 'clover']);
  });

  xit('for Bob', () => {
    expect(new Garden('VVCG\nVVRC').bob)
      .toEqual(['clover', 'grass', 'radishes', 'clover']);
  });

  xit('for Bob and Charlie', () => {
    const garden = new Garden('VVCCGG\nVVCCGG');
    expect(garden.bob).toEqual(['clover', 'clover', 'clover', 'clover']);
    expect(garden.charlie).toEqual(['grass', 'grass', 'grass', 'grass']);
  });
});

describe('Full garden', () => {
  const diagram = 'VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV';
  const garden = new Garden(diagram);

  xit('for Alice', () => {
    expect(garden.alice)
      .toEqual(['violets', 'radishes', 'violets', 'radishes']);
  });

  xit('for Bob', () => {
    expect(garden.bob)
      .toEqual(['clover', 'grass', 'clover', 'clover']);
  });

  xit('for Charlie', () => {
    expect(garden.charlie)
      .toEqual(['violets', 'violets', 'clover', 'grass']);
  });

  xit('for David', () => {
    expect(garden.david)
      .toEqual(['radishes', 'violets', 'clover', 'radishes']);
  });

  xit('for Eve', () => {
    expect(garden.eve)
      .toEqual(['clover', 'grass', 'radishes', 'grass']);
  });

  xit('for Fred', () => {
    expect(garden.fred)
      .toEqual(['grass', 'clover', 'violets', 'clover']);
  });

  xit('for Ginny', () => {
    expect(garden.ginny)
      .toEqual(['clover', 'grass', 'grass', 'clover']);
  });

  xit('for Harriet', () => {
    expect(garden.harriet)
      .toEqual(['violets', 'radishes', 'radishes', 'violets']);
  });

  xit('for Ileana', () => {
    expect(garden.ileana)
      .toEqual(['grass', 'clover', 'violets', 'clover']);
  });

  xit('for Joseph', () => {
    expect(garden.joseph)
      .toEqual(['violets', 'clover', 'violets', 'grass']);
  });

  xit('for Kincaid', () => {
    expect(garden.kincaid)
      .toEqual(['grass', 'clover', 'clover', 'grass']);
  });

  xit('for Larry', () => {
    expect(garden.larry)
      .toEqual(['grass', 'violets', 'clover', 'violets']);
  });
});

describe('Disordered class', () => {
  const diagram = 'VCRRGVRG\nRVGCCGCV';
  const students = ['Samantha', 'Patricia', 'Xander', 'Roger'];
  const garden = new Garden(diagram, students);

  xit('Patricia', () => {
    expect(garden.patricia)
      .toEqual(['violets', 'clover', 'radishes', 'violets']);
  });

  xit('Roger', () => {
    expect(garden.roger)
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
  });

  xit('Samantha', () => {
    expect(garden.samantha)
      .toEqual(['grass', 'violets', 'clover', 'grass']);
  });

  xit('Xander', () => {
    expect(garden.xander)
      .toEqual(['radishes', 'grass', 'clover', 'violets']);
  });
});

describe('Two gardens, different students', () => {
  const diagram = 'VCRRGVRG\nRVGCCGCV';
  const garden1 = new Garden(diagram, ['Alice', 'Bob', 'Charlie', 'Dan']);
  const garden2 = new Garden(diagram, ['Bob', 'Charlie', 'Dan', 'Erin']);

  xit('Bob and Charlie for each garden', () => {
    expect(garden1.bob)
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
    expect(garden2.bob)
      .toEqual(['violets', 'clover', 'radishes', 'violets']);
    expect(garden1.charlie)
      .toEqual(['grass', 'violets', 'clover', 'grass']);
    expect(garden2.charlie)
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
  });
});
