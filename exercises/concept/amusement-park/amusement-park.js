// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Object} visitor
 * @returns {string} visitor.name
 * @returns {number} visitor.age
 * @returns {string} visitor.ticketId
 */
 export function createVisitor(name, age, ticketId) {
  throw new Error('Please implement the createVisitor function.');
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Object} visitor
 * @param {string} visitor.name
 * @param {number} visitor.age
 * @param {string} visitor.ticketId
 * @returns {Object} visitor
 * @returns {string} visitor.name
 * @returns {number} visitor.age
 * @returns {string} visitor.ticketId
 */
export function revokeTicket(visitor) {
  throw new Error('Please implement the revokeTicket function.');
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  throw new Error('Please implement the ticketStatus function.');
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  throw new Error('Please implement the simpleTicketStatus function.');
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {Object} visitor
 * @param {Object | undefined} visitor.gtc
 * @param {string} visitor.gtc.version
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  throw new Error('Please implement the gtcVersion function.');
}
