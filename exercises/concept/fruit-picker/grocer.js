/**
 * STORE STATUS API
 */

let storeStatus = 'OFFLINE';

/**
 * For testing purposes, set the store status
 * @param  {string} status
 */
export function setStatus(status) {
  storeStatus = status;
}

/**
 * For testing purposes, reset the store status
 */
export function resetStatus() {
  storeStatus = 'OFFLINE';
}

/**
 * Invokes the callback with the store's status to simulate an API call
 * @param  {StatusCallback} callback
 */
export function checkStatus(callback) {
  return callback(storeStatus);
}

/**
 * INVENTORY API
 */

let lastInventoryQuery = undefined;
let inventoryResponse = undefined;

/**
 * For testing purposes, set the response to return when queried
 * @param  {any} ...nextResponse
 */
export function setResponse(...nextResponse) {
  inventoryResponse = nextResponse;
}

/**
 * For testing purposes, get the last query
 * @return {string}
 */
export function getLastQuery() {
  return lastInventoryQuery;
}

/**
 * For testing purposes, reset the last query
 */
export function resetQuery() {
  lastInventoryQuery = undefined;
  inventoryResponse = ['undefined response'];
}

/**
 * Checks the inventory (inventoryResponse) then invokes the callback with the result
 * @param  {GrocerQuery} query
 * @param  {InventoryCallback} callback
 * @return {AvailabilityAction} return the result of the callback
 */
export function checkInventory(query, callback) {
  lastInventoryQuery = query;
  return callback.apply(null, inventoryResponse);
}
