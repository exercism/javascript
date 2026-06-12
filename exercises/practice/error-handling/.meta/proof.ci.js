export const processString = (input) => {
  try {
    if (typeof input !== 'string') {
      throw new TypeError('Input must be a string');
    }
    if (input === '') {
      return null;
    }
    if (input.length > 100) {
      throw new RangeError('Input is too long');
    }
    if (input.length < 10) {
      throw new RangeError('Input is too short');
    }
    if (/[a-zA-Z]/.test(input) && /\d/.test(input)) {
      throw new SyntaxError(
        'Input cannot contain a mix of letters and numbers',
      );
    }

    return input.toUpperCase();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
