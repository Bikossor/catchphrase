# `createTranslation`

## Example

```ts
const translations = createTranslation<Translations>(() => ({
  en: {
    Greeting: () => "Hello world!",
  },
  de: {
    Greeing: () => "Hallo Welt!",
  },
}));
```

## Type declaration

```ts
const createTranslation: <L extends LanguageCode>({
  languageSelector,
}: CreateTranslationConfig<L>) => <K extends object>(
  translationThunk: TranslationThunk<L, K>,
) => CreateTranslationReturn<L, K>;
```
