---
title: use-uncontrolled
lang: en-US
---

# use-uncontrolled

Manage state of both controlled and uncontrolled components

## Usage

The `use-uncontrolled` hook manages state for both controlled and uncontrolled components:

```vue
<template>
  <input type="text" :value="_value" @change="(event) => handleChange(event.currentTarget.value)" />
</template>

<script setup lang="ts">
import { useUncontrolled } from '@cck-ui/hooks'

defineOptions({
  name: 'CustomInput'
})

interface CustomInputProps {
  value?: string
  defaultValue: string
  onChange?: (value: string) => void
}

const { value, defaultValue, onChange } = defineProps<CustomInputProps>()

const [_value, handleChange] = useUncontrolled({
  value,
  defaultValue,
  finalValue: 'Final',
  onChange
})
</script>
```

## Set value type

By default, the hook will set the type automatically, but you can provide your own type:

```typescript
import { useUncontrolled } from '@cck-ui/hooks'

const [_value, handleChange] = useUncontrolled<number>({
  value: 10,
  defaultValue: 5,
  finalValue: 20,
  onChange: (val) => console.log(val > 10)
})
```

## Definition

```typescript
interface UseUncontrolledOptions<T> {
  /** Value for controlled state */
  value?: MaybeRefOrGetter<T | undefined>

  /** Initial value for uncontrolled state */
  defaultValue?: T

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T

  /** Controlled state onChange handler */
  onChange?: (value: T, ...payload: any[]) => void
}

type UseUncontrolledReturnValue<T> = [
  /** Current value */
  ComputedRef<T>,

  /** Handler to update the state, passes `value` and `payload` to `onChange` */
  (value: T, ...payload: any[]) => void,

  /** True if the state is controlled, false if uncontrolled */
  ComputedRef<boolean>
]

function useUncontrolled<T>(input: UseUncontrolledOptions<T>): UseUncontrolledReturnValue<T>
```

## Exported types

The `UseUncontrolledOptions` and `UseUncontrolledReturnValue` types are exported from `@cck-ui/hooks`;

```typescript
import type { UseUncontrolledOptions, UseUncontrolledReturnValue } from '@cck-ui/hooks'
```