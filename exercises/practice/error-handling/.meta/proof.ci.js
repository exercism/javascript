export const processString = (input) => {
  try {
    if (typeof input !== 'string') {
      throw new TypeError('input must be a string');
    }
    if (input === '') {
      throw new Error('EmptyStringError');
    }
    return input.toUpperCase();
  } finally {
    console.log('Resource cleaned up');
  }
}

