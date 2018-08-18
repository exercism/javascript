function solve(puzzle) {
  var parts = puzzle
    .split(/[+|==]/g)
    .map(function (o) { return o.trim(); })
    .filter(function (o) { return o !== ''; });

  if (parts.length < 3) {
    return null;
  }

  var uniqueLetters = getUniqueLetters(parts.join(''));
  var firstLetters = getFirstLetters(parts);

  var numberCombinations = getNumberCombinations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueLetters.length);
  var permutations = getPermutations(Array(uniqueLetters.length).fill().map(function (_, i) {return i; }));

  while (numberCombinations.length) {
    var numberCombination = numberCombinations.pop();
    for (var k = 0; k < permutations.length; k++) {
      var newNumbers = assignNumbers(numberCombination, uniqueLetters, permutations[k]);
      if (testNumbers(newNumbers, parts, firstLetters)) {
        return newNumbers;
      }
    }
  }
  return null;
}

function getFirstLetters(words) {
  return words
    .map(function (word) { return word[0]; })
    .filter(function (val, i, arr) { return arr.indexOf(val) === i; });
}

function assignNumbers(numbers, letters, orders) {
  var output = {};
  for (var i = 0; i < letters.length; i++) {
    output[letters[i]] = numbers[orders[i]];
  }
  return output;
}

function getUniqueLetters(string) {
  return string.split('').filter(function (val, i, arr) { return arr.indexOf(val) === i; });
}

function testNumbers(numbers, puzzleParts, firstLetters) {
  var keys = Object.keys(numbers);
  for (var i = 0; i < keys.length; i++) {
    if (numbers[keys[i]] === 0 && firstLetters.indexOf(keys[i]) !== -1) {
      return false;
    }
  }
  var replaceRegex = new RegExp('[' + keys.join('') + ']', 'g');

  var puzzlePartsJoined = puzzleParts.join(',')
    .replace(replaceRegex, function (input) { return numbers[input]; })
    .split(',')
    .map(function (t) {return parseInt(t, 10);});

  var total = puzzlePartsJoined.slice(puzzlePartsJoined.length - 1)[0];
  return total === puzzlePartsJoined
    .slice(0, puzzlePartsJoined.length - 1)
    .reduce(function (acc, val) { return acc + val; }, 0);
}

function getPermutations(inputArr) {
  var results = [];
  function permute(arr, memo) {
    var cur = memo;
    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr, []);
}

function getNumberCombinations(set, k) {
  var i;
  var j;
  var combs;
  var head;
  var tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k === 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = getNumberCombinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

module.exports = solve;
