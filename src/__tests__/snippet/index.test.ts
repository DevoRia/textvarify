import { Snippet } from '../../snippet';
import { OwnBorder, SnippetBorder } from '../../models/borders';

describe('Snippet patterns variations', () => {
  test('Own Border', () => {
    const start = '/';
    const end = '/';
    const ownBorder = new OwnBorder(start, end);
    const regex: RegExp = new Snippet(ownBorder).getPattern();
    expect(`Text outside snippet ${start}Text inside snippet${end}`).toMatch(regex);
  });

  test('Length Border', () => {
    const start = '!';
    const end = '?';
    const ownBorder = new OwnBorder(start, end);
    const regex: RegExp = new Snippet(ownBorder, 3).getPattern();
    expect(`Text outside snippet ${start}${start}${start}Text inside snippet${end}${end}${end}`).toMatch(regex);
  });

  test('Get all borders', () => {
    const start = '<';
    const end = '>';
    const ownBorder = new OwnBorder(start, end);
    const snippet: Snippet = new Snippet(ownBorder, 2);
    expect(snippet.getStartBorder()).toBe('<<');
    expect(snippet.getEndBorder()).toBe('>>');
  });

  test('Custom Mirror Border', () => {
    const regex: RegExp = new Snippet(SnippetBorder.BRACE, 2).getPattern();
    expect(`Text outside snippet {{Text inside}} snippet`).toMatch(regex);
  });

  test('Custom non-Mirror Border', () => {
    const regex: RegExp = new Snippet(SnippetBorder.PERCENTAGE, 2).getPattern();
    expect(`Text outside snippet %%Text inside%% snippet`).toMatch(regex);
  });

  test('a few snippets', () => {
    const regex: RegExp = new Snippet(SnippetBorder.BRACE, 2).getPattern();
    expect(`Text {{Text inside}} outside snippet {{Text inside}} snippet {{Text inside}}`).toMatch(regex);
  });

  test('No snippets', () => {
    const regex: RegExp = new Snippet(SnippetBorder.BRACE, 2).getPattern();
    expect(`Text outside snippet There is no snippet`).not.toMatch(regex);
  });
});
