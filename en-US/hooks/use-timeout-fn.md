---
title: use-timeout-fn
lang: en-US
---

# use-timeout-fn

Calls function in given timeout

## Usage

<c-group>
  <c-button variant="filled" @click="start">Start</c-button>
  <c-button color="red" variant="filled" @click="clear">Clear</c-button>
  <c-text>Random value: {{ value }}</c-text>
</c-group>

```vue
<template>
  <c-group>
    <c-button variant="filled" @click="start">Start</c-button>
    <c-button color="red" variant="filled" @click="clear">Clear</c-button>
    <c-text>Random value: {{ value }}</c-text>
  </c-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { randomId, useTimeoutFn } from '@cck-ui/hooks'

const value = ref('')
const setValue = (val) => {
  value.value = val
}

const { start, clear } = useTimeoutFn(() => setValue(randomId()), 1000)
</script>
```

<script setup lang="ts">
import { ref } from 'vue'
import { randomId, useTimeoutFn } from '@cck-ui/hooks'

const value = ref('')
const setValue = (val) => {
  value.value = val
}

const { start, clear } = useTimeoutFn(() => setValue(randomId()), 1000)
</script>

## API

```typescript
import { useTimeoutFn } from '@cck-ui/hooks'

const { start, stop, clear, isPending } = useTimeoutFn(callback, delay, {
  immediate: true,
  immediateCallback: false
})
```

Arguments:

- `callback` - function that will be called after the timer elapses
- `delay` - number of milliseconds the timer should wait before the specified function is executed
- `options.immediate`: - determines whether the timer should be started on mount; defaults to false
- `options.immediateCallback`: - determines whether to execute the callback function at the beginning once; defaults to false

Return object:

- `start` - starts the timer
- `clear` - cancels the timer
- `stop` - stop the timer
- `isPending` - a ref indicate whether a stoppable instance is executing

## Definition

```typescript
interface UseTimeoutFnOptions {
  /**
   * @description Start the timer immediately
   * @default false
   */
  immediate?: boolean

  /**
   * @description Execute the callback function at the beginning once
   * @default false
   */
  immediateCallback?: boolean
}

interface UseTimeoutFnReturnValue {
  /**
   * @description A ref indicate whether a stoppable instance is executing
   */
  readonly isPending: Readonly<Ref<boolean>>

  /**
   * @description Clear the timer
   */
  clear: () => void

  /**
   * @description Stop the effect from executing
   */
  stop: () => void

  /**
   * @description Start the effects
   */
  start: (...args: any[]) => void
}

function useTimeoutFn(
  callback: (...args: any[]) => void,
  delay: MaybeRefOrGetter<number>,
  options?: UseTimeoutFnOptions
): UseTimeoutFnReturnValue
```

## Exported types

The `UseTimeoutFnOptions` and `UseTimeoutFnReturnValue` types are exported from `@cck-ui/hooks`;

```typescript
import type { UseTimeoutFnOptions, UseTimeoutFnReturnValue } from '@cck-ui/hooks'
```