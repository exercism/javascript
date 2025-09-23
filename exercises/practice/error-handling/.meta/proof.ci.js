export const processString = (input) => {
  try {
    if (typeof input !== 'string') {
      throw new TypeError('Input must be a string');
    }
    if (input === '') {
      throw new Error('Input cannot be empty');
    }
    return input.toUpperCase();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
