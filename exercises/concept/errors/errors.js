// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is high enough
 *
 * @param {number|null} humidityPercentage
 *
 */
export function checkHumidityLevel(humidityPercentage) {
  throw new Error('Implement the checkHumidity function');
}

/**
 * Check if the temperature is not too high
 *
 * @param {number|null} temperature
 *
 */
export function reportOverheating(temperature) {
  throw new Error('Implement the reportOverheating function');
}

/**
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 */
export function monitorTheMachine(actions) {
  throw new Error('Implement the monitorTheMachine function');
}
