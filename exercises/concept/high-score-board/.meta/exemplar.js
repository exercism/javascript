// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Object.<string, number>} new score board
 */
export function createScoreBoard () {
  return {
    'The best Ever': 1000000
  }
}

/**
 * Adds a player to a score board.
 *
 * @param {Object.<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Object.<string, number>} updated score board
 */
export function addPlayer (scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}

/**
 * Removes a player from a score board.
 *
 * @param {Object.<string, number>} scoreBoard
 * @param {string} player
 * @returns {Object.<string, number>} updated score board
 */
export function removePlayer (scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Object.<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Object.<string, number>} updated score board
 */
export function addToScore (scoreBoard, player, points) {
  scoreBoard[player] += points
  return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Object.<string, number>} scoreBoard
 * @returns {Object.<string, number>} updated score board
 */
export function applyMondayBonus (scoreBoard) {
  for (const player in scoreBoard) {
    scoreBoard[player] += 100
  }

  return scoreBoard
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Object} params
 * @param {number} params.score
 * @param {function} params.normalizeFn
 * @returns {number} normalized score
 */
export function normalizeScore (params) {
  return params.normalizeFn(params.score)
}