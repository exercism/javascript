/* eslint-disable no-unused-vars */
import { Address } from '../address';
import { Born } from '../born';
import { Lens } from '../lens';
import { Name } from '../name';
import { Person } from '../person';

// Implement the nameLens with the getter and setter
export const nameLens = new Lens(
  (person) => person.name,
  (person, name) => new Person(name, person.born, person.address),
);

// Implement the bornAtLens with the getter and setter
export const bornAtLens = new Lens(
  (person) => person.born.bornAt,
  (person, bornAt) =>
    new Person(
      person.name,
      new Born(bornAt, person.born.bornOn),
      person.address,
    ),
);

// Implement the streetLens with the getter and setter
export const streetLens = new Lens(
  (person) => person.address.street,
  (person, street) =>
    new Person(
      person.name,
      person.born,
      new Address(
        person.address.houseNumber,
        street,
        person.address.place,
        person.address.country,
      ),
    ),
);
