import { Snippet } from '../snippet';
import { OwnBorder, SnippetBorder } from '../models/borders';

export class Scraper {
  constructor(private readonly snippet: Snippet) {}

  public getAllValuesWithBorder(text: string) {
    const pattern = this.snippet.getPattern(true);
    const snippetValues = text.match(pattern);
    if (snippetValues && snippetValues.length) {
      return snippetValues;
    }
    return [];
  }

  public getAllValues(text: string) {
    const valuesWithBorder = this.getAllValuesWithBorder(text);
    if (valuesWithBorder && valuesWithBorder.length) {
      return valuesWithBorder.map((snippet) => this.removeBorder(snippet));
    }
    return [];
  }

  public isMatch(text: string) {
    return !!text.match(this.snippet.getPattern());
  }

  private removeBorder(text: string) {
    return text.replace(this.snippet.getStartBorder(), '').replace(this.snippet.getEndBorder(), '');
  }
}

export function createScraperFromSnippet(snippet: Snippet): Scraper {
  return new Scraper(snippet);
}

export function scraper(border: SnippetBorder | OwnBorder, borderLength: number): Scraper {
  return new Scraper(new Snippet(border, borderLength));
}