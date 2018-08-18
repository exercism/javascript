/**
 * README
 *
 * Generates the custom-set exercise spec from the test metadata in x-common
 *
 * Prerequisites:
 *
 *     - Node.js v6 or higher (for destructuring and template literals)
 *
 *     - x-common and xjavascript checked out into the same parent directory
 *
 *     - x-common up to date
 *
 * Run with:
 *
 *     node example-gen.js
 */

var fs = require('fs');
var path = require('path');

var EXERCISE_METADATA_ROOT = '../../../x-common/exercises';
var METADATA_FILE_NAME = 'canonical-data.json';
var METADATA_COMMENT_KEY = '#';
var EXERCISE_DIR_NAME = 'custom-set';
var SPEC_FILE_NAME = 'custom-set.spec.js';

var TEST_BODY_TEMPLATES = {
  empty: function ({set, expected}) {
    return (
      `var actual = new CustomSet(${array(set)}).empty();
    expect(actual).toBe(${expected});`);
  },

  contains: function ({set, element, expected}) {
    return (
      `var actual = new CustomSet(${array(set)}).contains(${element});
    expect(actual).toBe(${expected});`);
  },

  subset: function ({set1, set2, expected}) {
    return (
      `var actual = new CustomSet(${array(set2)}).subset(new CustomSet(${array(set1)}));
    expect(actual).toBe(${expected});`);
  },

  disjoint: function ({set1, set2, expected}) {
    return (
      `var actual = new CustomSet(${array(set1)}).disjoint(new CustomSet(${array(set2)}));
    expect(actual).toBe(${expected});`);
  },

  equal: function ({set1, set2, expected}) {
    return (
      `var actual = new CustomSet(${array(set1)}).eql(new CustomSet(${array(set2)}));
    expect(actual).toBe(${expected});`);
  },

  add: function ({set, element, expected}) {
    return (
      `var actual = new CustomSet(${array(set)}).add(${element});
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },

  intersection: function ({set1, set2, expected}) {
    return (
      `var actual = new CustomSet(${array(set1)}).intersection(new CustomSet(${array(set2)}));
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },

  difference: function ({set1, set2, expected}) {
    return (
      `var actual = new CustomSet(${array(set1)}).difference(new CustomSet(${array(set2)}));
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  },

  union: function ({set1, set2, expected}) {
    return (
      `var actual = new CustomSet(${array(set1)}).union(new CustomSet(${array(set2)}));
    var expected = new CustomSet(${array(expected)});
    expect(actual.eql(expected)).toBe(true);`);
  }
};

var NON_CANONICAL_TESTS = `
  xit('can be emptied', function() {
    var actual = new CustomSet([1, 2]).clear();
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
    var actual2 = new CustomSet().clear();
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);
  });

  xit('knows its size', function() {
    var actual = new CustomSet().size();
    expect(actual).toBe(0);
    var actual2 = new CustomSet([1, 2, 3]).size();
    expect(actual2).toBe(3);
    var actual3 = new CustomSet([1, 2, 3, 2]).size();
    expect(actual3).toBe(3);
  });

  xit('can give back a list', function() {
    var actual = new CustomSet().toList();
    var expected = [];
    expect(actual.sort()).toEqual(expected);
    var actual2 = new CustomSet([3, 1, 2]).toList();
    var expected2 = [1, 2, 3];
    expect(actual2.sort()).toEqual(expected2);
    var actual3 = new CustomSet([3, 1, 2, 1]).toList();
    var expected3 = [1, 2, 3];
    expect(actual3.sort()).toEqual(expected3);
  });
`;

function render({suiteData, testBodyTemplates, extraTests, suiteTemplate}) {
  var testCases = extractTestCases(suiteData, testBodyTemplates);
  var tests = renderTests(testCases);

  return renderSuite(tests, extraTests, suiteTemplate);
}

function extractTestCases(suiteData, testBodyTemplates) {
  var testCases = [];

  Object.keys(suiteData)
    .filter(function (key) {
      return key !== METADATA_COMMENT_KEY;
    })
    .forEach(function (sectionName) {
      suiteData[sectionName].cases
        .forEach(function (caseData) {
          testCases.push(new TestCase(caseData, testBodyTemplates[sectionName]));
        });
    });

  return testCases;
}

function TestCase(caseData, bodyTemplate) {
  this.caseData = caseData;
  this.bodyTemplate = bodyTemplate;
}

TestCase.prototype.render = function (isEnabled) {
  return testTemplate(isEnabled, this.caseData.description, this.bodyTemplate(this.caseData));
};

function renderTests(testCases) {
  return testCases.reduce(function (output, testCase, index) {
    return output + testCase.render(index === 0);
  }, '');
}

function renderSuite(tests, otherTests, suiteTemplate) {
  return suiteTemplate(tests.concat(otherTests));
}

function suiteTemplateFn(tests) {
  return (
    `var CustomSet = require('./custom-set');

describe('CustomSet', function() {
${tests}
});
`);
}

function testTemplate(isEnabled, description, body) {
  return (
    `
  ${isEnabled ? 'it' : 'xit'}('${description}', function() {
    ${body}
  });
`);
}

function array(arr) {
  return arr.length === 0 ? '' : `[${arr.join(', ')}]`;
}

function generate() {
  var exerciseFilePath = path.join(EXERCISE_METADATA_ROOT, EXERCISE_DIR_NAME, METADATA_FILE_NAME);
  var suiteData = JSON.parse(fs.readFileSync(exerciseFilePath));

  return fs.writeFileSync(
    SPEC_FILE_NAME,
    render({
      suiteData: suiteData,
      testBodyTemplates: TEST_BODY_TEMPLATES,
      extraTests: NON_CANONICAL_TESTS,
      suiteTemplate: suiteTemplateFn
    }));
}

generate();
