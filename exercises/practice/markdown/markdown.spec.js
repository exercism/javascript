import { describe, expect, test, xtest } from '@jest/globals';
import { parse } from './markdown';

describe('Markdown', () => {
  test('parses normal text as a paragraph', () => {
    const markdown = 'This will be a paragraph';
    const expected = '<p>This will be a paragraph</p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('parsing italics', () => {
    const markdown = '_This will be italic_';
    const expected = '<p><em>This will be italic</em></p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('parsing bold text', () => {
    const markdown = '__This will be bold__';
    const expected = '<p><strong>This will be bold</strong></p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('mixed normal, italics and bold text', () => {
    const markdown = 'This will _be_ __mixed__';
    const expected = '<p>This will <em>be</em> <strong>mixed</strong></p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h1 header level', () => {
    const markdown = '# This will be an h1';
    const expected = '<h1>This will be an h1</h1>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h2 header level', () => {
    const markdown = '## This will be an h2';
    const expected = '<h2>This will be an h2</h2>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h3 header level', () => {
    const markdown = '### This will be an h3';
    const expected = '<h3>This will be an h3</h3>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h4 header level', () => {
    const markdown = '#### This will be an h4';
    const expected = '<h4>This will be an h4</h4>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h5 header level', () => {
    const markdown = '##### This will be an h5';
    const expected = '<h5>This will be an h5</h5>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h6 header level', () => {
    const markdown = '###### This will be an h6';
    const expected = '<h6>This will be an h6</h6>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with h7 header level', () => {
    const markdown = '####### This will not be an h7';
    const expected = '<p>####### This will not be an h7</p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('unordered lists', () => {
    const markdown = '* Item 1\n' + '* Item 2';
    const expected = '<ul><li>Item 1</li><li>Item 2</li></ul>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with a little bit of everything', () => {
    const markdown = '# Header!\n' + '* __Bold Item__\n' + '* _Italic Item_';
    const expected =
      '<h1>Header!</h1><ul><li><strong>Bold Item</strong></li><li><em>Italic Item</em></li></ul>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with markdown symbols in the header text that should not be interpreted', () => {
    const markdown = '# This is a header with # and * in the text';
    const expected = '<h1>This is a header with # and * in the text</h1>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with markdown symbols in the list item text that should not be interpreted', () => {
    const markdown =
      '* Item 1 with a # in the text\n' + '* Item 2 with * in the text';
    const expected =
      '<ul><li>Item 1 with a # in the text</li><li>Item 2 with * in the text</li></ul>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('with markdown symbols in the paragraph text that should not be interpreted', () => {
    const markdown = 'This is a paragraph with # and * in the text';
    const expected = '<p>This is a paragraph with # and * in the text</p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });

  xtest('unordered lists close properly with preceding and following lines', () => {
    const markdown =
      '# Start a list\n' + '* Item 1\n' + '* Item 2\n' + 'End a list';
    const expected =
      '<h1>Start a list</h1><ul><li>Item 1</li><li>Item 2</li></ul><p>End a list</p>';
    const actual = parse(markdown);
    expect(actual).toEqual(expected);
  });
});
