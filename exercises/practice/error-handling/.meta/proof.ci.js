export const processString = (input) => {
  try {
    if (typeof input !== 'string') {
      throw new TypeError('Input must be a string');
    }
    if (input === '') {
      return null
    }
    return input.toUpperCase();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
