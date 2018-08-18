var RotationalCipher = function () {};

RotationalCipher.prototype.rotate = function (text, shiftKey) {
  if (text.length === 1) {
    if (text.charCodeAt(0) >= 97 && text.charCodeAt(0) <= 122) return this.rotateLowerCase(text, shiftKey);
    if (text.charCodeAt(0) >= 65 && text.charCodeAt(0) <= 90) return this.rotateUpperCase(text, shiftKey);
    return text;
  }
  return this.rotate(text.charAt(0), shiftKey) + this.rotate(text.slice(1), shiftKey);
};

RotationalCipher.prototype.rotateLowerCase = function (letter, shiftKey) {
  var rotatedLowerCase = String.fromCharCode(letter.charCodeAt(0) + shiftKey);
  if (rotatedLowerCase.charCodeAt(0) > 122) rotatedLowerCase = String.fromCharCode(rotatedLowerCase.charCodeAt(0) - 26);
  return rotatedLowerCase;
};

RotationalCipher.prototype.rotateUpperCase = function (letter, shiftKey) {
  var rotatedUpperCase = String.fromCharCode(letter.charCodeAt(0) + shiftKey);
  if (rotatedUpperCase.charCodeAt(0) > 90) rotatedUpperCase = String.fromCharCode(rotatedUpperCase.charCodeAt(0) - 26);
  return rotatedUpperCase;
};

module.exports = RotationalCipher;
