---
title: use-disclosure
lang: en-US
---

# use-disclosure

Managers boolean state, provides open, close and toggle handlers, usually used with modals, drawers and popovers.

## Usage

The `use-disclosure` hook manages boolean state. It provides `open`, `close`, `toggle`, and `set` handlers and accepts optional `onOpen` and `onClose` callbacks. You can use it to manage controlled modals, popovers, and other similar components:

```typescript
import { useDisclosure } from '@cck-ui/hooks'

function Demo() {
  const { state, handlers } = useDisclosure(false)

  // Sets state to true
  handlers.open()

  // Sets state to false
  handlers.close()

  // Sets state to true if it was false and vice versa
  handlers.toggle()

  // Sets state to the given value
  handlers.set(true)
}
```

## Callbacks

The `onOpen` and `onClose` callbacks execute when the state changes:

```typescript
import { useDisclosure } from '@cck-ui/hooks'

function Demo() {
  const { state, handlers } = useDisclosure(false, {
    onOpen: () => console.log('Opened')
    onClose: () => console.log('Closed')
  })

  // Calls `onOpen` callbacks and sets state to true
  handlers.open()

  // Calls `onClose` callbacks and sets state to false
  handlers.close()

  // Does nothing, state is already false
  handlers.close()

  // Calls `onOpen` or `onClose` depending on the current state
  handlers.toggle()
}
```

## Definition

```typescript
export interface UseDisclosureOptions {
  onOpen?: () => void
  onClose?: () => void
}

export interface UseDisclosureHandlers {
  set: (value: boolean) => void
  open: () => void
  close: () => void
  toggle: () => void
}

export type UseDisclosureReturnValue = { state: Ref<boolean>; handlers: UseDisclosureHandlers }

export function useDisclosure(
  initialState: MaybeRefOrGetter<boolean> = false,
  options: MaybeRefOrGetter<UseDisclosureOptions> = {}
): UseDisclosureReturnValue
```

## Exported types

`UseDisclosureOptions`, `UseDisclosureHandlers` and `UseDisclosureReturnValue` types are exported from the `@cck-ui/hooks` package; you can import them in your application:

```typescript
import type { UseDisclosureOptions, UseDisclosureHandlers, UseDisclosureReturnValue } from '@cck-ui/hooks'
```