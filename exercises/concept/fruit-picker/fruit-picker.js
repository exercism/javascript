/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { order } from './grocer';

/**
 * @return {FruitPickerSuccess}
 */
export function onSuccess() {
  return { message: 'SUCCESS' }
}

/**
 * @return {FruitPickerError}
 */
export function onError() {
  return { message: 'ERROR'}
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccess
 * @param {FruitPickerErrorCallback} onError
 * @return void
 */
export function orderFromGrocer(
  query,
  onSuccess,
  onError
) {
  order(query, onSuccess, onError)
}
