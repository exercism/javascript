// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 */
export function createAppointment(days) {
  return new Date(Date.now() + days * 24 * 3600 * 1000);
}

/**
 * Get details of an appointment
 *
 * @param {string} appointmentTime
 */
export function getAppointment(appointmentTime) {
  const appointmentDate = new Date(appointmentTime);
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
 * @param {string} appointmentTime
 * @param {object} options
 */
export function updateAppointment(appointmentTime, options) {
  let appointmentDate = new Date(appointmentTime);
  if (options.year !== undefined) appointmentDate.setFullYear(options.year);
  if (options.month !== undefined) appointmentDate.setMonth(options.month);
  if (options.date !== undefined) appointmentDate.setDate(options.date);
  if (options.hour !== undefined) appointmentDate.setHours(options.hour);
  if (options.minute !== undefined) appointmentDate.setMinutes(options.minute);

  return {
    year: appointmentDate.getFullYear(),
    month: appointmentDate.getMonth(),
    date: appointmentDate.getDate(),
    hour: appointmentDate.getHours(),
    minute: appointmentDate.getMinutes(),
  };
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentATime
 * @param {string} appointmentBTime
 */
export function availableTimes(appointmentATime, appointmentBTime) {
  return new Date(appointmentBTime) - new Date(appointmentATime);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTime
 * @param {string} currentTime
 */
export function isValid(appointmentTime, currentTime) {
  if (new Date(appointmentTime) < new Date(currentTime)) {
    return 'The appointment is not valid anymore.';
  } else {
    return 'The appointment is valid.';
  }
}
