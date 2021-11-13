export function rotate(text, shift) {
  return [...text]
    .map((c) => {
      const isUpper = c.match(/[A-Z]/);
      const isAlpha = c.match(/[a-z]/i);
      const charShift = (isUpper ? 'A' : 'a').charCodeAt(0);

      return isAlpha
        ? String.fromCharCode(
            ((c.charCodeAt(0) - charShift + shift) % 26) + charShift
          )
        : c;
    })
    .join('');
}
