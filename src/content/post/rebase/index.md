---
list: 'Git avanzado'
title: 'Rebase'
description: 'Cambia el historial de commits a tu gusto con rebase'
publishDate: '25 Dec 2023'
tags: ['git']
---

## Using some markdown elements

Here we have a simple js code block.

```js
let string = 'JavaScript syntax highlighting'
```

```json
{
  "hello": 1,
  "world": 2,
  "list": [{ "id": 1, "name": "hello" }]
}
```

```sh
git rebase --interactive
```

This is styled by Shiki, set via the [config](https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting) for Astro.

You can choose your own theme from this [library](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes), which is currently set to Dracula, in the file `astro.config.mjs`.

## References

An example containing a clickable reference[^1] with a link to the source.

Second example containing a reference[^2] with a link to the source.

[^1]: Reference first footnote with a return to content link.
[^2]: Second reference with a link.

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++
}

console.log(foo(5))
```
