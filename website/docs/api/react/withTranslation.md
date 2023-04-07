# `withTranslation`

`withTranslation` is a [higher-order component](https://legacy.reactjs.org/docs/higher-order-components.html). It's used to wrap the components you want to translate.

## Type declaration

```ts
const withTranslations: <L extends LanguageCode, K extends object>(
  translationProps: CreateTranslationReturn<L, K>,
) => (Component: FC<CreateTranslationReturn<L, K>>) => JSX.Element;
```
