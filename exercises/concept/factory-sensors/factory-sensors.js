// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  throw new Error('Remove this line and implement the function');
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  throw new Error('Remove this line and implement the function');
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  throw new Error('Remove this line and implement the function');
}
