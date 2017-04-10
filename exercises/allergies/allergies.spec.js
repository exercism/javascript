import Allergies from './allergies';

describe('Allergies', () => {

  it('no allergies at all', () => {
    const allergies = new Allergies(0);
    expect(allergies.list()).toEqual([]);
  });

  xit('allergies to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.list()).toEqual([ 'eggs' ]);
  });

  xit('allergies to peanuts', () => {
    const allergies = new Allergies(2);
    expect(allergies.list()).toEqual([ 'peanuts' ]);
  });

  xit('allergies to strawberries', () => {
    const allergies = new Allergies(8);
    expect(allergies.list()).toEqual([ 'strawberries' ]);
  });

  xit('allergies to eggs and peanuts', () => {
    const allergies = new Allergies(3);
    expect(allergies.list()).toEqual([ 'eggs', 'peanuts' ]);
  });

  xit('allergies to more than eggs but not peanuts', () => {
    const allergies = new Allergies(5);
    expect(allergies.list()).toEqual([ 'eggs', 'shellfish' ]);
  });

  xit('allergic to lots of stuff', () => {
    const allergies = new Allergies(248);
    expect(allergies.list()).toEqual([ 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ]);
  });

  xit('allergic to everything', () => {
    const allergies = new Allergies(255);
    expect(allergies.list()).toEqual([ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ]);
  });

  xit('no allergic means not allergic', () => {
    const allergies = new Allergies(0);
    expect(allergies.allergicTo('peanuts')).toEqual(false);
    expect(allergies.allergicTo('cats')).toEqual(false);
    expect(allergies.allergicTo('strawberries')).toEqual(false);
  });

  xit('allergic to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  xit('allergic to eggs and other things', () => {
    const allergies = new Allergies(5);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  xit('ignore non allergen score parts', () => {
    const allergies = new Allergies(509);
    expect(allergies.list()).toEqual([ 'eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ]);
  });

});
