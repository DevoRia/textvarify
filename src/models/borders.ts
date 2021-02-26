/* tslint:disable:max-classes-per-file */
export enum SnippetBorder {
  BRACE = '{',
  ROUND_BRACKET = '(',
  SQUARE_BRACKET = '[',
  HASH = '#',
  PERCENTAGE = '%',
}

export interface MirrorBorder {
  startSymbol: string;
  endSymbol: string;
}

export class OwnBorder implements MirrorBorder {
  constructor(public startSymbol: string, public endSymbol: string) {}
}

export class BraceBorder implements MirrorBorder {
  startSymbol: string = '{';
  endSymbol: string = '}';
}

export class SquareBracketBorder implements MirrorBorder {
  startSymbol: string = '[';
  endSymbol: string = ']';
}

export class RoundBracketBorder implements MirrorBorder {
  startSymbol: string = '(';
  endSymbol: string = ')';
}