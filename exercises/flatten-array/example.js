var Flattener = function () { };

Flattener.prototype.flatten = function (unflattenedArray, inputFlattenedArray) {
  var self = this;
  var flattenedArray = inputFlattenedArray || [];
  unflattenedArray.forEach(function (element) {
    if (Array.isArray(element)) {
      self.flatten(element, flattenedArray);
    } else if (element !== null) {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

module.exports = Flattener;
