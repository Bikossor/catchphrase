---
sidebar_position: 3
---

# Create translations

## Structure your translations

```ts
type ExampleTranslations = {
  Greeting: () => string;
};
```

## Fill your translations

```ts
const exampleTranslations = createTranslation<ExampleTranslations>(() => ({
  en: {
    Greeting: () => "Hello World!",
  },
  de: {
    Greeting: () => "Hallo Welt!",
  },
}));
```
