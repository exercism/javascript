// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  throw new Error('Implement the dayRate function')
}

/**
 * Calculates the rate per month
 *
 * @param {number} ratePerHour
 * @param {string} discount for example 20%
 * @returns {number} the rounded up monthly rate
 */
export function monthRate(ratePerHour, discount) {
  throw new Error('Implement the monthRate function')
}

/**
 * Calculates the number of days in a budget, rounded on one decimal
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {string} discount the discount to apply
 * @returns {string} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount) {
  throw new Error('Implement the daysInBudget function')
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {string} percentage a percentage such as '20%'
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  throw new Error('Implement the applyDiscount function')
}
