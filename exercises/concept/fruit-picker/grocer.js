/**
 * STORE API
 */

/**
 * @param {GrocerQuery} query
 * @param {GrocerOnSuccess} onSuccess
 * @param {GrocerOnError} onError
 * @return void
 */
export function order(query, onSuccess, onError) {
  const quantityAvailable = Math.random() * query.quantityAvailable * 2

  if (quantityAvailable >= query.quantity) {
    onSuccess(query.quantity)
  } else {
    onError(`desired quantity of '${query.fruit}' is not available`)
  }
}
