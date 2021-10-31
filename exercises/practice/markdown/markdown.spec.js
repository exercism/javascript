import { parse } from './markdown';

describe('Markdown', () => {
  test('test parses normal text as a paragraph', () => {
    const markdown = 'This will be a paragraph';
    expect(parse(markdown)).toMatch('<p>This will be a paragraph</p>');
  });

  xtest('test parsing italics', () => {
    const markdown = '_This will be italic_';
    expect(parse(markdown)).toMatch('<p><em>This will be italic</em></p>');
  });

  xtest('test parsing bold text', () => {
    const markdown = '__This will be bold__';
    expect(parse(markdown)).toMatch(
      '<p><strong>This will be bold</strong></p>'
    );
  });

  xtest('test mixed normal italics and bold text', () => {
    const markdown = 'This will _be_ __mixed__';
    expect(parse(markdown)).toMatch(
      '<p>This will <em>be</em> <strong>mixed</strong></p>'
    );
  });

  xtest('test with h1 header level', () => {
    const markdown = '# This will be an h1';
    expect(parse(markdown)).toMatch('<h1>This will be an h1</h1>');
  });

  xtest('test with h2 header level', () => {
    const markdown = '## This will be an h2';
    expect(parse(markdown)).toMatch('<h2>This will be an h2</h2>');
  });

  xtest('test with h6 header level', () => {
    const markdown = '###### This will be an h6';
    expect(parse(markdown)).toMatch('<h6>This will be an h6</h6>');
  });

  xtest('test unordered lists', () => {
    const markdown = '* Item 1\n* Item 2';
    expect(parse(markdown)).toMatch('<ul><li>Item 1</li><li>Item 2</li></ul>');
  });

  xtest('test with a little bit of everything', () => {
    const markdown = '# Header!\n* __Bold Item__\n* _Italic Item_';
    expect(parse(markdown)).toMatch(
      '<h1>Header!</h1><ul><li><strong>Bold Item</strong></li><li><em>Italic Item</em></li></ul>'
    );
  });

  xtest('test with markdown symbols in the header text that should not be interpreted', () => {
    const markdown = '# This is a header with # and * in the text';
    expect(parse(markdown)).toMatch(
      '<h1>This is a header with # and * in the text</h1>'
    );
  });

  xtest('test with markdown symbols in the list item text that should not be interpreted', () => {
    const markdown =
      '* Item 1 with a # in the text\n* Item 2 with * in the text';
    expect(parse(markdown)).toMatch(
      '<ul><li>Item 1 with a # in the text</li><li>Item 2 with * in the text</li></ul>'
    );
  });

  xtest('test with markdown symbols in the paragraph text that should not be interpreted', () => {
    const markdown = 'This is a paragraph with # and * in the text';
    expect(parse(markdown)).toMatch(
      '<p>This is a paragraph with # and * in the text</p>'
    );
  });

  xtest('test unordered lists close properly with preceding and following lines', () => {
    const markdown = '# Start a list\n* Item 1\n* Item 2\nEnd a list';
    expect(parse(markdown)).toMatch(
      '<h1>Start a list</h1><ul><li>Item 1</li><li>Item 2</li></ul><p>End a list</p>'
    );
  });
});
