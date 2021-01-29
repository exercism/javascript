import { Allergies } from './allergies';

describe('Allergies', () => {
  describe('testing for eggs allergy', () => {
    test('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('eggs')).toEqual(false);
    });

    xtest('allergic only to eggs', () => {
      const allergies = new Allergies(1);
      expect(allergies.allergicTo('eggs')).toEqual(true);
    });

    xtest('allergic to eggs and something else', () => {
      const allergies = new Allergies(3);
      expect(allergies.allergicTo('eggs')).toEqual(true);
    });

    xtest('allergic to something, but not eggs', () => {
      const allergies = new Allergies(2);
      expect(allergies.allergicTo('eggs')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('eggs')).toEqual(true);
    });
  });

  describe('testing for peanuts allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('peanuts')).toEqual(false);
    });

    xtest('allergic only to peanuts', () => {
      const allergies = new Allergies(2);
      expect(allergies.allergicTo('peanuts')).toEqual(true);
    });

    xtest('allergic to peanuts and something else', () => {
      const allergies = new Allergies(7);
      expect(allergies.allergicTo('peanuts')).toEqual(true);
    });

    xtest('allergic to something, but not peanuts', () => {
      const allergies = new Allergies(5);
      expect(allergies.allergicTo('peanuts')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('peanuts')).toEqual(true);
    });
  });

  describe('testing for shellfish allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('shellfish')).toEqual(false);
    });

    xtest('allergic only to shellfish', () => {
      const allergies = new Allergies(4);
      expect(allergies.allergicTo('shellfish')).toEqual(true);
    });

    xtest('allergic to shellfish and something else', () => {
      const allergies = new Allergies(14);
      expect(allergies.allergicTo('shellfish')).toEqual(true);
    });

    xtest('allergic to something, but not shellfish', () => {
      const allergies = new Allergies(10);
      expect(allergies.allergicTo('shellfish')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('shellfish')).toEqual(true);
    });
  });

  describe('testing for strawberries allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('strawberries')).toEqual(false);
    });

    xtest('allergic only to strawberries', () => {
      const allergies = new Allergies(8);
      expect(allergies.allergicTo('strawberries')).toEqual(true);
    });

    xtest('allergic to strawberries and something else', () => {
      const allergies = new Allergies(28);
      expect(allergies.allergicTo('strawberries')).toEqual(true);
    });

    xtest('allergic to something, but not strawberries', () => {
      const allergies = new Allergies(20);
      expect(allergies.allergicTo('strawberries')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('strawberries')).toEqual(true);
    });
  });

  describe('testing for tomatoes allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('tomatoes')).toEqual(false);
    });

    xtest('allergic only to tomatoes', () => {
      const allergies = new Allergies(16);
      expect(allergies.allergicTo('tomatoes')).toEqual(true);
    });

    xtest('allergic to tomatoes and something else', () => {
      const allergies = new Allergies(56);
      expect(allergies.allergicTo('tomatoes')).toEqual(true);
    });

    xtest('allergic to something, but not tomatoes', () => {
      const allergies = new Allergies(40);
      expect(allergies.allergicTo('tomatoes')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('tomatoes')).toEqual(true);
    });
  });

  describe('testing for chocolate allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('chocolate')).toEqual(false);
    });

    xtest('allergic only to chocolate', () => {
      const allergies = new Allergies(32);
      expect(allergies.allergicTo('chocolate')).toEqual(true);
    });

    xtest('allergic to chocolate and something else', () => {
      const allergies = new Allergies(112);
      expect(allergies.allergicTo('chocolate')).toEqual(true);
    });

    xtest('allergic to something, but not chocolate', () => {
      const allergies = new Allergies(80);
      expect(allergies.allergicTo('chocolate')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('chocolate')).toEqual(true);
    });
  });

  describe('testing for pollen allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('pollen')).toEqual(false);
    });

    xtest('allergic only to pollen', () => {
      const allergies = new Allergies(64);
      expect(allergies.allergicTo('pollen')).toEqual(true);
    });

    xtest('allergic to pollen and something else', () => {
      const allergies = new Allergies(224);
      expect(allergies.allergicTo('pollen')).toEqual(true);
    });

    xtest('allergic to something, but not pollen', () => {
      const allergies = new Allergies(160);
      expect(allergies.allergicTo('pollen')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('pollen')).toEqual(true);
    });
  });

  describe('testing for cats allergy', () => {
    xtest('not allergic to anything', () => {
      const allergies = new Allergies(0);
      expect(allergies.allergicTo('cats')).toEqual(false);
    });

    xtest('allergic only to cats', () => {
      const allergies = new Allergies(128);
      expect(allergies.allergicTo('cats')).toEqual(true);
    });

    xtest('allergic to cats and something else', () => {
      const allergies = new Allergies(192);
      expect(allergies.allergicTo('cats')).toEqual(true);
    });

    xtest('allergic to something, but not cats', () => {
      const allergies = new Allergies(64);
      expect(allergies.allergicTo('cats')).toEqual(false);
    });

    xtest('allergic to everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.allergicTo('cats')).toEqual(true);
    });
  });

  describe('list when:', () => {
    xtest('no allergies', () => {
      const allergies = new Allergies(0);
      expect(allergies.list()).toEqual([]);
    });

    xtest('just eggs', () => {
      const allergies = new Allergies(1);
      expect(allergies.list()).toEqual(['eggs']);
    });

    xtest('just peanuts', () => {
      const allergies = new Allergies(2);
      expect(allergies.list()).toEqual(['peanuts']);
    });

    xtest('just strawberries', () => {
      const allergies = new Allergies(8);
      expect(allergies.list()).toEqual(['strawberries']);
    });

    xtest('eggs and peanuts', () => {
      const allergies = new Allergies(3);
      expect(allergies.list()).toEqual(['eggs', 'peanuts']);
    });

    xtest('more than eggs but not peanuts', () => {
      const allergies = new Allergies(5);
      expect(allergies.list()).toEqual(['eggs', 'shellfish']);
    });

    xtest('lots of stuff', () => {
      const allergies = new Allergies(248);
      expect(allergies.list()).toEqual([
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats',
      ]);
    });

    xtest('everything', () => {
      const allergies = new Allergies(255);
      expect(allergies.list()).toEqual([
        'eggs',
        'peanuts',
        'shellfish',
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats',
      ]);
    });

    xtest('no allergen score parts', () => {
      const allergies = new Allergies(509);
      expect(allergies.list()).toEqual([
        'eggs',
        'shellfish',
        'strawberries',
        'tomatoes',
        'chocolate',
        'pollen',
        'cats',
      ]);
    });
  });
});
