# `createCatchphrase`

`createCatchphrase` is a function that allows you to create and configure `catchphrase`.

## Example

```ts
const { createTranslation } = createCatchphrase<Languages>({
  languageSelector: () => {
    switch (navigator.language) {
      case "de":
      case "de-DE":
        return "de";
      case "en":
      case "en-US":
      default:
        return "en";
    }
  },
});
```

## Type declaration

```ts
const createCatchphrase: <L extends LanguageCode>({
  languageSelector,
}: CatchphraseConfig<L>) => Catchphrase<L>;
```
