/// <reference path="./global.d.ts" />

import { forEach } from "core-js/core/array"

//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizz a} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const PizzaPrice = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  }
  const extrasPrice = {
    ExtraSauce: 1,
    ExtraToppings: 2,
  }
  let price = PizzaPrice[pizza]||0
  for( const extra of extras){
    price += extrasPrice[extra]||0
  }
  return price
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  if(pizzaOrders.length === 0){
    return 0;
  }

  let totalPrice = 0

  pizzaOrders.forEach(order => {
    totalPrice += pizzaPrice(order.pizza, ...order.extras) 
  })

  return totalPrice
  // throw new Error('Please implement the orderPrice function');
}
