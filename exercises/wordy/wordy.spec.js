var WordProblem   = require('./wordy').WordProblem;
var ArgumentError = require('./wordy').ArgumentError;

describe('Word Problem', function () {
  it('add 1', function () {
    var question = 'What is 1 plus 1?';
    expect(new WordProblem(question).answer()).toEqual(2);
  });

  xit('add 2', function () {
    var question = 'What is 53 plus 2?';
    expect(new WordProblem(question).answer()).toEqual(55);
  });

  xit('add negative numbers', function () {
    var question = 'What is -1 plus -10?';
    expect(new WordProblem(question).answer()).toEqual(-11);
  });

  xit('add more digits', function () {
    var question = 'What is 123 plus 45678?';
    expect(new WordProblem(question).answer()).toEqual(45801);
  });

  xit('subtract', function () {
    var question = 'What is 4 minus -12?';
    expect(new WordProblem(question).answer()).toEqual(16);
  });

  xit('multiply', function () {
    var question = 'What is -3 multiplied by 25?';
    expect(new WordProblem(question).answer()).toEqual(-75);
  });

  xit('divide', function () {
    var question = 'What is 33 divided by -3?';
    expect(new WordProblem(question).answer()).toEqual(-11);
  });

  xit('add twice', function () {
    var question = 'What is 1 plus 1 plus 1?';
    expect(new WordProblem(question).answer()).toEqual(3);
  });

  xit('add then subtract', function () {
    var question = 'What is 1 plus 5 minus -2?';
    expect(new WordProblem(question).answer()).toEqual(8);
  });

  xit('subtract twice', function () {
    var question = 'What is 20 minus 4 minus 13?';
    expect(new WordProblem(question).answer()).toEqual(3);
  });

  xit('subtract then add', function () {
    var question = 'What is 17 minus 6 plus 3?';
    expect(new WordProblem(question).answer()).toEqual(14);
  });

  xit('multiply twice', function () {
    var question = 'What is 2 multiplied by -2 multiplied by 3?';
    expect(new WordProblem(question).answer()).toEqual(-12);
  });

  xit('add then multiply', function () {
    var question = 'What is -3 plus 7 multiplied by -2?';
    expect(new WordProblem(question).answer()).toEqual(-8);
  });

  xit('divide twice', function () {
    var question = 'What is -12 divided by 2 divided by -3?';
    expect(new WordProblem(question).answer()).toEqual(2);
  });

  xit('too advanced', function () {
    var question = 'What is 53 cubed?';
    var problem  = new WordProblem(question);

    expect(problem.answer.bind(problem)).toThrow(new ArgumentError());
  });

  xit('irrelevant', function () {
    var question = 'Who is the president of the United States?';
    var problem  = new WordProblem(question);

    expect(problem.answer.bind(problem)).toThrow(new ArgumentError());
  });
});
