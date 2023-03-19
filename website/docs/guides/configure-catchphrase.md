---
sidebar_position: 2
---

# Configure `catchphrase`

Next we have to call the `createCatchphrase` function and give it our previously defined `Languages` like this:

```ts
const { createTranslation } = createCatchphrase<Languages>({...});
```

Then you can configure `catchphrase` to your needs. Have a look at the [`createCatchphrase` API reference](/docs/api/core/createCatchphrase).
