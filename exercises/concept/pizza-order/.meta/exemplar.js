/// <reference path="../global.d.ts" />
// @ts-check

/**
 * @type {Record<Pizza, number>}
 */
const PIZZA_PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...[extra, ...otherExtras]) {
  switch (extra) {
    case 'ExtraSauce': {
      return 1 + pizzaPrice(pizza, ...otherExtras);
    }
    case 'ExtraToppings': {
      return 2 + pizzaPrice(pizza, ...otherExtras);
    }
    default: {
      return PIZZA_PRICES[pizza];
    }
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    0
  );
}
