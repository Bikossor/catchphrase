---
sidebar_position: 2
---

# Configure Catchphrase

Next, we need to call the `createCatchphrase` function and pass it our previously defined `Languages` like this

```ts
const { createTranslation } = createCatchphrase<Languages>({...});
```

Then you can configure Catchphrase to meet your needs. For more information, see the [`createCatchphrase` API Reference](/docs/api/core/createCatchphrase).
