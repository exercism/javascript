// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi there!
//
// On the JavaScript track we provide you with stubs. These stubs provide a
// starting point to solving the exercise.
//
// In general, each variable/constant and each declared function will have a
// JSDoc comment block above it, explaining what the variable/constant holds or
// the function is supposed to accomplish.
//
// 💡 Often, the JSDoc comment blocks have annotations, such as @param and
// @returns which are usually highlighted with a different color if the IDE
// you're in recognizes them. It's these annotations that are used when
// referring to the constant, variable, or function from somewhere else that
// IDEs display.
//
// You don't need to write these yourself; it is not expected in idiomatic
// JavaScript, but some companies and style-guides do enforce them.
//
// 💡 You're allowed to completely clear a stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./regular-chatbot.spec.js
//
// Good luck helping the chatbot!

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  throw new Error('Please implement the isValidCommand function');
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption throught the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  throw new Error('Please implement the removeEmoji function');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  throw new Error('Please implement the checkPhoneNumber function');
}

/**
 * Given a certain response from the user, help the chatbot get only the URL
 *
 * @param {string} userInput
 * @returns {Array} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  throw new Error('Please implement the userInput function');
}

/**
 * Greet the user using its full name data from the profile
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  throw new Error('Please implement the fullName function');
}
