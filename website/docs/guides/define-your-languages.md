---
sidebar_position: 1
---

# Define your languages

You need to specify languages that you'll be able to translate to. This can be done in a couple of different ways:

## Using [string literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

### Example

```ts
type Languages = "de" | "en";
```

## Using enums

### Example

```ts
enum Languages {
  "de",
  "en",
}
```
