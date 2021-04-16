/**
 * Determines the text to print on a badge
 *
 * @param {number | null} id id of the employee, or null if they're new hires
 * @param {string} name the name of the employee
 * @param {string | null} department the department or null if they're the owner
 *
 * @returns {string} the text to print on the badge
 */
export function printBadge(id, name, department) {
  const worksAt = department?.toLocaleUpperCase() || 'OWNER';

  // prettier-ignore
  return id === null
    ? `${name} - ${worksAt}`
    : `[${id}] ${name} - ${worksAt}`;
}
