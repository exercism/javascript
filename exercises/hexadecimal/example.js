export const toDecimal = (hex) => {
  const hexCharacters = [...hex];

  for (let i = 0; i < hexCharacters.length; i += 1) {
    if (/[^0-9a-fA-F]/.exec(hexCharacters[i])) {
      return 0;
    }
  }

  return parseInt(hex, 16);
};
