import { WordProblem, ArgumentError } from './wordy';

describe('Word Problem', () => {
  it('add 1', () => {
    const question = 'What is 1 plus 1?';
    expect(new WordProblem(question).answer()).toEqual(2);
  });

  xit('add 2', () => {
    const question = 'What is 53 plus 2?';
    expect(new WordProblem(question).answer()).toEqual(55);
  });

  xit('add negative numbers', () => {
    const question = 'What is -1 plus -10?';
    expect(new WordProblem(question).answer()).toEqual(-11);
  });

  xit('add more digits', () => {
    const question = 'What is 123 plus 45678?';
    expect(new WordProblem(question).answer()).toEqual(45801);
  });

  xit('subtract', () => {
    const question = 'What is 4 minus -12?';
    expect(new WordProblem(question).answer()).toEqual(16);
  });

  xit('multiply', () => {
    const question = 'What is -3 multiplied by 25?';
    expect(new WordProblem(question).answer()).toEqual(-75);
  });

  xit('divide', () => {
    const question = 'What is 33 divided by -3?';
    expect(new WordProblem(question).answer()).toEqual(-11);
  });

  xit('add twice', () => {
    const question = 'What is 1 plus 1 plus 1?';
    expect(new WordProblem(question).answer()).toEqual(3);
  });

  xit('add then subtract', () => {
    const question = 'What is 1 plus 5 minus -2?';
    expect(new WordProblem(question).answer()).toEqual(8);
  });

  xit('subtract twice', () => {
    const question = 'What is 20 minus 4 minus 13?';
    expect(new WordProblem(question).answer()).toEqual(3);
  });

  xit('subtract then add', () => {
    const question = 'What is 17 minus 6 plus 3?';
    expect(new WordProblem(question).answer()).toEqual(14);
  });

  xit('multiply twice', () => {
    const question = 'What is 2 multiplied by -2 multiplied by 3?';
    expect(new WordProblem(question).answer()).toEqual(-12);
  });

  xit('add then multiply', () => {
    const question = 'What is -3 plus 7 multiplied by -2?';
    expect(new WordProblem(question).answer()).toEqual(-8);
  });

  xit('divide twice', () => {
    const question = 'What is -12 divided by 2 divided by -3?';
    expect(new WordProblem(question).answer()).toEqual(2);
  });

  xit('too advanced', () => {
    const question = 'What is 53 cubed?';
    const problem = new WordProblem(question);

    expect(problem.answer.bind(problem)).toThrow(new ArgumentError());
  });

  xit('irrelevant', () => {
    const question = 'Who is the president of the United States?';
    const problem = new WordProblem(question);

    expect(problem.answer.bind(problem)).toThrow(new ArgumentError());
  });
});
