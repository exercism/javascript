import { describe, expect, test, xtest } from '@jest/globals';
import { Address } from './address';
import { Born } from './born';
import { Name } from './name';
import { Person } from './person';

import { bornAtLens, nameLens, streetLens } from './lens-person';

// test data
const person = new Person(
  new Name('Saravanan', 'Lakshmanan'),
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

  xtest('should ensure immutability when setting a new name', () => {
    const originalName = new Name('Saravanan', 'Lakshmanan');
    nameLens.set(person, new Name('Subhash', 'Forst'));
    expect(person.name).toStrictEqual(originalName);
  });
});

// Test suite for bornAtLens
describe('bornAtLens', () => {
  xtest('should get the address for where the person was born', () => {
    expect(bornAtLens.get(person)).toEqual(person.born.bornAt);
  });

  xtest('should set a new address for where the person was born', () => {
    const updatedPerson = bornAtLens.set(
      person,
      new Address(2, 'Exercism street', 'Tamil Nadu', 'India'),
    );
    expect(bornAtLens.get(updatedPerson)).toEqual(updatedPerson.born.bornAt);
  });

  xtest('should ensure immutability when setting a new birth address', () => {
    const originalBirthAddress = new Address(
      100,
      'Hospital street',
      'Tamil Nadu',
      'India',
    );
    bornAtLens.set(person, new Address(15, 'Clinic street', 'Kerala', 'India'));
    expect(person.born.bornAt).toStrictEqual(originalBirthAddress);
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

  xtest('should ensure immutability when setting a new street', () => {
    const originalAddress = new Address(
      1,
      'Coder street',
      'Tamil Nadu',
      'India',
    );
    streetLens.set(person, 'Mimic street');
    expect(person.address).toStrictEqual(originalAddress);
  });
});
