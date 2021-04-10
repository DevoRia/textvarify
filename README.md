# textvarify

[![npm version](https://badge.fury.io/js/textvarify.svg)](https://www.npmjs.com/package/textvarify)
[![Downloads](https://img.shields.io/npm/dm/textvarify.svg)](https://www.npmjs.com/package/textvarify)

## The library to scrape and manage snippets from some text.

### Install

```bash
    npm i textvarify
```

### How to use

```typescript
import {Snippet} from "textvarify/lib/snippet";
import {SnippetBorder} from "textvarify/lib/models/borders";

const text = 'Hello, {{user}}, i am a demo case.';

snippet = new Snippet(SnippetBorder.BRACE, 2); // init snippet as {{snippet}}
scraper = new Scraper(snippet); // init scraper

const values = scraper.getAllValues(text); // values = ['user'];
const borderValues = scraper.getAllValuesWithBorder(text); // borderValues = ['{{user}}'];

const maching = scraper.isMatch(text); // maching = true; there is at least one snippet in the text.
```