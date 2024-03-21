/* eslint-disable no-unused-vars */
import { Person } from '../src/Person';
import { Name } from '../src/Name';
import { Born } from '../src/Born';
import { Address } from '../src/Address';

import { Lens } from './src/Lens';


// Implement the nameLens with the getter and setter
export const nameLens = new Lens(
  () => {
    //implement getter for namelens
  },
  () => {
    //Implement setter for nameLens
  },
);

// Implement the bornAtLens with the getter and setter
export const bornAtLens = new Lens(
  () => {
    //implement getter for bornAtLens
  },
  () => {
    //Implement setter for bornAtLens
  },
);

// Implement the streetLens with the getter and setter
export const streetLens = new Lens(
  () => {
    //implement getter for streetLens
  },
  () => {
    //Implement setter for streetLens
  },
);
