---
title: CopyButton
lang: en-US
---

# CopyButton

Copies given text to clipboard

`CopyButton` is based on the use-clipboard hook. Its default slot receives an object with the following properties:

- `copied` - boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 1000ms)
- `copy` - function that should be called to copy the given value to the clipboard

<c-copy-button value="https://cck-ui.jackatlas.xyz">
  <template #default="{ copied, copy }">
    <c-button :color="copied ? 'teal' : 'blue'" variant="filled" @click="copy">
      {{ copied ? 'Copied url' : 'Copy url' }}
    </c-button>
  </template>
</c-copy-button>

```vue
<template>
  <c-copy-button value="https://cck-ui.jackatlas.xyz">
    <template #default="{ copied, copy }">
      <c-button :color="copied ? 'teal' : 'blue'" variant="filled" @click="copy">
        {{ copied ? 'Copied url' : 'Copy url' }}
      </c-button>
    </template>
  </c-copy-button>
</template>
```

## Security

Due to security reasons, the `CopyButton` component will not work in iframes and may not work with local files opened with the `file://` protocol (the component will work fine with local websites that are using the `http://` protocol.) You can learn more about `navigator.clipboard` [here](https://web.dev/async-clipboard/).

## Timeout

You can provide a custom `copied` reset `timeout`:

<c-copy-button value="https://cck-ui.jackatlas.xyz" :timeout="2000">
  <template #default="{ copied, copy }">
    <c-action-icon :color="copied ? 'teal' : 'gray'" variant="subtle" @click="copy">
      <check-icon v-if="copied" :size="16" />
      <copy-icon v-else :size="16" />
    </c-action-icon>
  </template>
</c-copy-button>

```vue
<template>
  <c-copy-button value="https://cck-ui.jackatlas.xyz" :timeout="2000">
    <template #default="{ copied, copy }">
      <c-action-icon :color="copied ? 'teal' : 'gray'" variant="subtle" @click="copy">
        <check-icon v-if="copied" :size="16" />
        <copy-icon v-else :size="16" />
      </c-action-icon>
    </template>
  </c-copy-button>
</template>

<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
</script>
```

## Props

### CopyButton props

|Name|Type|Description|Default value|
|---|---|---|---|
|timeout|number|Copied status timeout in ms|`1000`|
|value <span style="color: var(--c-color-red-filled)">*</span>|string|Value that is copied to the clipboard when the button is clicked|

<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
</script>