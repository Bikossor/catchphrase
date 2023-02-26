# `withTranslation`

## Type declaration

```ts
const withTranslations: <L extends LanguageCode, K extends object>(
  translationProps: CreateTranslationReturn<L, K>,
) => (Component: FC<CreateTranslationReturn<L, K>>) => JSX.Element;
```
