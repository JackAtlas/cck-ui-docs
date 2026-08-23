---
title: use-clipboard
lang: en-US
---

# use-clipboard

Copy to clipboard with feedback timeout

## Usage

The `use-clipboard` hook provides a simple way to copy text to the clipboard, track the copied state, handle errors, and reset the state after a given timeout. It uses the [navigator.clipboard.writeText](https://caniuse.com/mdn-api_clipboard_writetext) API under the hood.

<c-button variant="filled" :color="clipboard.copied.value ? 'teal' : 'blue'" @click="() => clipboard.copy('Hello, world!')">{{ clipboard.copied.value ? 'Copied' : 'Copy' }}</c-button>

```vue
<template>
  <c-button variant="filled" :color="clipboard.copied.value ? 'teal' : 'blue'" @click="() => clipboard.copy('Hello, world!')">{{ clipboard.copied.value ? 'Copied' : 'Copy' }}</c-button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClipboard } from '@cck-ui/hooks'

const clipboard = useClipboard({ copiedDuring: 500 })
</script>
```

## Limitations

Due to security reasons, the `use-clipboard` hook will not work in iframes and may not work with local files opened with the `file://` protocol (the hook will work fine with local websites that are using the `http://` protocol). You can learn more about `navigator.clipboard` [here](https://web.dev/async-clipboard/).

<script setup lang="ts">
import { computed } from 'vue'
import { useClipboard } from '@cck-ui/hooks'

const clipboard = useClipboard({ copiedDuring: 500 })
</script>

## Definition

```typescript
interface UseClipboardInput {
  /**
   * @description Time in ms after which the copied state will reset
   * @default 2000
   */
  copiedDuring?: number
}

interface UseClipboardReturnValue {
  /**
   * @description Function to copy value to clipboard
   */
  copy: (value: string) => void

  /**
   * @description Function to reset copied state and error
   */
  reset: () => void

  /**
   * @description Error if copying failed
   */
  error: Ref<Error | null>

  /**
   * @description Boolean indicating if the value was copied successfully
   */
  copied: Ref<boolean>

  /**
   * @description Current clipboard content (when `read: true`)
   */
  text: Ref<string>
}

function useClipboard(options?: UseClipboardInput): UseClipboardReturnValue
```

## Exported types

The `UseClipboardInput` and `UseClipboardReturnValue` types are exported from the `@cck-ui/hooks` package; you can import them in your application:

```typescript
import type { UseClipboardInput, UseClipboardReturnValue } from '@cck-ui/hooks'
```