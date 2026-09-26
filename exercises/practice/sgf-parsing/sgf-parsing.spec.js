import { describe, expect, test, xtest } from '@jest/globals';
import { parse } from './sgf-parsing';

describe('Sgf Parsing', () => {
  test('empty input', () => {
    expect(() => parse('')).toThrow('tree missing');
  });

  xtest('tree with no nodes', () => {
    expect(() => parse('()')).toThrow('tree with no nodes');
  });

  xtest('node without tree', () => {
    expect(() => parse(';')).toThrow('tree missing');
  });

  xtest('node without properties', () => {
    expect(parse('(;)')).toEqual({ properties: {}, children: [] });
  });

  xtest('single node tree', () => {
    expect(parse('(;A[B])')).toEqual({
      properties: { A: ['B'] },
      children: [],
    });
  });

  xtest('multiple properties', () => {
    expect(parse('(;A[b]C[d])')).toEqual({
      properties: { A: ['b'], C: ['d'] },
      children: [],
    });
  });

  xtest('properties without delimiter', () => {
    expect(() => parse('(;A)')).toThrow('properties without delimiter');
  });

  xtest('all lowercase property', () => {
    expect(() => parse('(;a[b])')).toThrow('property must be in uppercase');
  });

  xtest('upper and lowercase property', () => {
    expect(() => parse('(;Aa[b])')).toThrow('property must be in uppercase');
  });

  xtest('two nodes', () => {
    expect(parse('(;A[B];B[C])')).toEqual({
      properties: { A: ['B'] },
      children: [
        {
          properties: { B: ['C'] },
          children: [],
        },
      ],
    });
  });

  xtest('two child trees', () => {
    expect(parse('(;A[B](;B[C])(;C[D]))')).toEqual({
      properties: { A: ['B'] },
      children: [
        {
          properties: { B: ['C'] },
          children: [],
        },
        {
          properties: { C: ['D'] },
          children: [],
        },
      ],
    });
  });

  xtest('multiple property values', () => {
    expect(parse('(;A[b][c][d])')).toEqual({
      properties: { A: ['b', 'c', 'd'] },
      children: [],
    });
  });

  xtest('within property values, whitespace characters such as tab are converted to spaces', () => {
    expect(parse('(;A[hello\t\tworld])')).toEqual({
      properties: { A: ['hello  world'] },
      children: [],
    });
  });

  xtest('within property values, newlines remain as newlines', () => {
    expect(parse('(;A[hello\n\nworld])')).toEqual({
      properties: { A: ['hello\n\nworld'] },
      children: [],
    });
  });

  xtest('escaped closing bracket within property value becomes just a closing bracket', () => {
    expect(parse('(;A[\\]])')).toEqual({
      properties: { A: [']'] },
      children: [],
    });
  });

  xtest('escaped backslash in property value becomes just a backslash', () => {
    expect(parse('(;A[\\\\])')).toEqual({
      properties: { A: ['\\'] },
      children: [],
    });
  });

  xtest("opening bracket within property value doesn't need to be escaped", () => {
    expect(parse('(;A[b[c])')).toEqual({
      properties: { A: ['b[c'] },
      children: [],
    });
  });

  xtest("semicolon in property value doesn't need to be escaped", () => {
    expect(parse('(;A[a;b])')).toEqual({
      properties: { A: ['a;b'] },
      children: [],
    });
  });

  xtest("parentheses in property value don't need to be escaped", () => {
    expect(parse('(;A[a(b])')).toEqual({
      properties: { A: ['a(b'] },
      children: [],
    });
  });

  xtest('escaped tab in property value is converted to space', () => {
    expect(parse('(;A[\\\t])')).toEqual({
      properties: { A: [' '] },
      children: [],
    });
  });

  xtest('escaped newline in property value is converted to nothing at all', () => {
    expect(parse('(;A[\\\n])')).toEqual({
      properties: { A: [''] },
      children: [],
    });
  });

  xtest('escaped t and n in property value are just letters, not whitespace', () => {
    expect(parse('(;A[\\t][\\n])')).toEqual({
      properties: { A: ['t', 'n'] },
      children: [],
    });
  });

  xtest('mixing various kinds of whitespace and escaped characters in property value', () => {
    expect(parse('(;A[\\]b\nc\\\nd\t\te\\\\ \\\n\\]])')).toEqual({
      properties: { A: [']b\ncd  e\\ ]'] },
      children: [],
    });
  });
});
