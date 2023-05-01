---
sidebar_position: 3
---

# Create translations

## Structure your translations

You need to define the structure of your translations individually. This is done by creating a type that describes the structure like this:

```ts
type ExampleTranslations = {
  Greeting: () => string;
};
```

:::info Lazy evaluable translations
Note that the type is a _function returning a string_. This is so that the translations are lazy evaluable.
:::

## Fill your translations

Then you need to populate the `ExampleTranslations` structure with the actual translations for each language. This is done by using the `createTranslation` function as follows:

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

The `createTranslation` function takes a function that will return the translations for each of the `Languages`.
