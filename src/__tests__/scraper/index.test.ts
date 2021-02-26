import { Snippet } from '../../snippet';
import { SnippetBorder } from '../../models/borders';
import { Scraper } from '../../scraper';

const textExample =
  'Hello, {{user}}, i am a test case. I want to {{doing}} show you this test in action. {snippets} is not #snippet#';
const textExampleOneSnippet = 'Hello, {{user}}, i am a test case.';
const textExampleWithoutSnippet = 'Hello, User, i am a test case.';

describe('Scrape snippets', () => {
  let snippet: Snippet;
  let scraper: Scraper;

  beforeEach(() => {
    snippet = new Snippet(SnippetBorder.BRACE, 2);
    scraper = new Scraper(snippet);
  });

  test('getAllValues', () => {
    const twoSnippets = scraper.getAllValues(textExample);
    const oneSnippet = scraper.getAllValues(textExampleOneSnippet);
    const noSnippet = scraper.getAllValues(textExampleWithoutSnippet);

    expect(twoSnippets.length).toBe(2);
    expect(oneSnippet.length).toBe(1);
    expect(noSnippet.length).toBe(0);

    expect(oneSnippet[0]).not.toMatch(snippet.getPattern());
  });

  test('getAllSnippets', () => {
    const twoSnippets = scraper.getAllValuesWithBorder(textExample);
    const oneSnippet = scraper.getAllValuesWithBorder(textExampleOneSnippet);
    const noSnippet = scraper.getAllValuesWithBorder(textExampleWithoutSnippet);

    expect(twoSnippets.length).toBe(2);
    expect(oneSnippet.length).toBe(1);
    expect(noSnippet.length).toBe(0);

    expect(oneSnippet[0]).toMatch(snippet.getPattern());
  });

  test('isMatch', () => {
    const oneSnippet = scraper.isMatch(textExample);
    const noSnippet = scraper.isMatch(textExampleWithoutSnippet);
    expect(oneSnippet).toBe(true);
    expect(noSnippet).toBe(false);
  });
});
