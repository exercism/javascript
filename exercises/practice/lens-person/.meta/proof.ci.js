/* eslint-disable no-unused-vars */
import { Person } from '../src/Person';
import { Name } from '../src/Name';
import { Born } from '../src/Born';
import { Address } from '../src/Address';

import { Lens } from '../src/Lens';

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
