exports.encode = function encode(plaintext) {
  return plaintext.replace(/([\w\s])\1*/g, function (match) {
    return match.length > 1 ? match.length + match[0] : match[0];
  });
};

exports.decode = function decode(cypher) {
  return cypher.replace(/(\d+)(\w|\s)/g, function (match, repeats, char) {
    return new Array(+repeats + 1).join(char);
  });
};
