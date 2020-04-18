// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

/**
 * Calculates the rate per month
 *
 * @param {number} ratePerHour
 * @param {string} discount for example 20%
 * @returns {number} the rounded up monthly rate
 */
export function monthRate(ratePerHour, discount) {
  const monthly = dayRate(ratePerHour) * 22
  const discounted = applyDiscount(monthly, discount)
  return Math.ceil(discounted)
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
  const discounted = applyDiscount(dayRate(ratePerHour), discount)
  return (budget / discounted).toFixed(1)
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {string} percentage a percentage such as '20%'
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  return (100 - parseFloat(percentage)) / 100 * value
}
