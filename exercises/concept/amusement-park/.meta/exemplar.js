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
  return { name, age, ticketId };
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
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return 'unknown ticket id';
  }

  if (tickets[ticketId] === null) {
    return 'not sold';
  }

  return 'sold to ' + tickets[ticketId];
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
  return tickets[ticketId] ?? 'invalid ticket !!!';
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
  return visitor.gtc?.version;
}
