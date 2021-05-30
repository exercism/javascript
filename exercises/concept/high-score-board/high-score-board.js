// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Object.<string, number>} new score board
 */
export function createScoreBoard() {
  throw new Error('Please implement the createScoreBoard function');
}

/**
 * Adds a player to a score board.
 *
 * @param {Object.<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Object.<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  throw new Error('Please implement the addPlayer function');
}

/**
 * Removes a player from a score board.
 *
 * @param {Object.<string, number>} scoreBoard
 * @param {string} player
 * @returns {Object.<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  throw new Error('Please implement the removePlayer function');
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Object.<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Object.<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  throw new Error('Please implement the addToScore function');
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Object.<string, number>} scoreBoard
 * @returns {Object.<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  throw new Error('Please implement the applyMondayBonus function');
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Object} params
 * @param {number} params.score
 * @param {function} params.normalizeFn
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  throw new Error('Please implement the normalizeScore function');
}
