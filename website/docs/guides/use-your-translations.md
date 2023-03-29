---
sidebar_position: 4
---

# Use your translations

```ts
const withExampleTranslations = withTranslations(exampleTranslations);
```

```tsx
const TranslatedComponent = () =>
  withExampleTranslations(({ getTranslations }) => {
    const { Greeting } = getTranslations();

    return <p>{Greeting()}</p>;
  });
```
