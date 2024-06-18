import { Address } from './address';
import { Born } from './born';
import { Name } from './name';
import { Person } from './person';

import { bornAtLens, nameLens, streetLens } from './lens-person';

// test data
const person = new Person(
  new Name('Saravanan', 'Lakshamanan'),
  new Born(
    new Address(100, 'Hospital street', 'Tamil Nadu', 'India'),
    new Date(),
  ),
  new Address(1, 'Coder street', 'Tamil Nadu', 'India'),
);

// test suite for nameLens
describe('nameLens', () => {
  test('should get the name of the person', () => {
    expect(nameLens.get(person)).toEqual(person.name);
  });

  xtest('should set a new forename for the person', () => {
    const updatedPerson = nameLens.set(person, new Name('Sara', 'Lakshmanan'));
    expect(nameLens.get(updatedPerson)).toEqual(updatedPerson.name);
  });

  xtest('should set a new surname for the person', () => {
    const updatedPerson = nameLens.set(person, new Name('Saravanan', 'Laksh'));
    expect(nameLens.get(updatedPerson)).toEqual(updatedPerson.name);
  });

  xtest('should ensure immutability by checking the original person object', () => {
    expect(person).not.toStrictEqual(
      new Person(new Name('Sara', 'Lakshamanan'), person.born, person.address),
    );
  });
});

// Test suite for bornAtLens
describe('bornAtLens', () => {
  xtest('should get the address where the person was born', () => {
    expect(bornAtLens.get(person)).toEqual(person.born.bornAt);
  });

  xtest('should set a new street for the place where the person was born', () => {
    const updatedPerson = bornAtLens.set(
      person,
      new Address(2, 'Exercism street', 'Tamil Nadu', 'India'),
    );
    expect(bornAtLens.get(updatedPerson)).toEqual(updatedPerson.born.bornAt);
  });

  xtest('should ensure immutability by checking the original person object', () => {
    expect(person).not.toEqual(
      new Person(
        person.name,
        new Born(
          new Address(2, 'Exercism street', 'Tamil Nadu', 'India'),
          person.born.bornOn,
        ),
        person.address,
      ),
    );
  });
});

// Test suite for streetLens
describe('streetLens', () => {
  xtest('should get the current street of the person', () => {
    expect(streetLens.get(person)).toEqual(person.address.street);
  });

  xtest('should set a new street for the current address of the person', () => {
    const updatedPerson = streetLens.set(person, 'Exercism street');
    expect(streetLens.get(updatedPerson)).toEqual(updatedPerson.address.street);
  });

  xtest('should ensure immutability by checking the original person object', () => {
    expect(person).not.toEqual(
      new Person(
        person.name,
        person.born,
        new Address(
          person.address.houseNumber,
          'Exercism Street',
          person.address.place,
          person.address.country,
        ),
      ),
    );
  });
});
