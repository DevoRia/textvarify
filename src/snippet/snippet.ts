import {
  BraceBorder,
  MirrorBorder,
  OwnBorder,
  RoundBracketBorder,
  SnippetBorder,
  SquareBracketBorder
} from "../models/borders";

export class Snippet {

  private readonly mirrorBorder: MirrorBorder;

  constructor(
    private readonly border: SnippetBorder | OwnBorder,
    private readonly borderLength: number = 1
  ) {
    this.mirrorBorder = this.setMirrorBorder(border)
    this.setBorderLength(borderLength)
  }

  getPattern(isGlobal = false): RegExp {
    const pattern = `\\${this.mirrorBorder.startSymbol.split('').join('\\')}(.*?)\\${this.mirrorBorder.endSymbol.split('').join('\\')}`;
    if (isGlobal) {
      return new RegExp(pattern, 'g')
    }
    return new RegExp(pattern)
  }

  private setBorderLength(borderLength: number) {
    this.mirrorBorder.startSymbol = this.mirrorBorder.startSymbol.repeat(borderLength);
    this.mirrorBorder.endSymbol = this.mirrorBorder.endSymbol.repeat(borderLength);
  }

  private setMirrorBorder(border: SnippetBorder | OwnBorder): MirrorBorder {
    switch (border) {
      case SnippetBorder.BRACE: return new BraceBorder();
      case SnippetBorder.ROUND_BRACKET: return new RoundBracketBorder();
      case SnippetBorder.SQUARE_BRACKET: return new SquareBracketBorder();
      default:
        if (border instanceof OwnBorder) {
          return border;
        } else {
          return new OwnBorder(border, border);
        }
    }
  }



}