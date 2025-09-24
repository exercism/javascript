// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = Date.now()) {
  const date = new Date(now);
  date.setDate(date.getDate() + days);

  return date;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const appointmentDate = new Date(timestamp);

  return {
    year: appointmentDate.getFullYear(),
    month: appointmentDate.getMonth(),
    date: appointmentDate.getDate(),
    hour: appointmentDate.getHours(),
    minute: appointmentDate.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let appointmentDate = new Date(timestamp);

  if (options.year !== undefined) appointmentDate.setFullYear(options.year);
  if (options.month !== undefined) appointmentDate.setMonth(options.month);
  if (options.date !== undefined) appointmentDate.setDate(options.date);
  if (options.hour !== undefined) appointmentDate.setHours(options.hour);
  if (options.minute !== undefined) appointmentDate.setMinutes(options.minute);

  return getAppointmentDetails(appointmentDate.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.round(
    (new Date(timestampB).getTime() - new Date(timestampA).getTime()) / 1000,
    );
}

/**
 * Checks if the appointment is in the past
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp) > new Date(currentTimestamp);
}
