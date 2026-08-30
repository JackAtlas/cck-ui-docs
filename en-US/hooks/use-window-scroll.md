---
title: use-window-scroll
lang: en-US
---

Tracks window scroll position

## Usage

The `use-window-scroll` hook returns the current scroll position and a function to scroll smoothly to a given position:

<c-group justify="center">
  <c-text>Scroll position x: {{ x }}, y: {{ y }}</c-text>
  <c-button @click="() => scrollTo({ y: 0 })">Scroll to top</c-button>
</c-group>

```vue
<template>
  <c-group justify="center">
    <c-text>Scroll position x: {{ x }}, y: {{ y }}</c-text>
    <c-button @click="() => scrollTo({ y: 0 })">Scroll to top</c-button>
  </c-group>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@cck-ui/hooks'

const { x, y, scrollTo } = useWindowScroll()
</script>
```

## Definition

```typescript
interface UseWindowScrollPosition {
  x: number
  y: number
}

type UseWindowScrollTo = (position: Partial<UseWindowScrollPosition>) => void

type UseWindowScrollReturnValue = {
  x: Ref<number>
  y: Ref<number>
  scrollTo: UseWindowScrollTo
}
```

## Exported types

The `UseWindowScrollTo`, `UseWindowScrollPosition`, and `UseWindowScrollReturnValue` types are exported from `@cck-ui/hooks`:

```typescript
import type { UseWindowScrollTo, UseWindowScrollPosition, UseWindowScrollReturnValue} from '@cck-ui/hooks'
```

<script setup lang="ts">
import { useWindowScroll } from '@cck-ui/hooks'

const { x, y, scrollTo } = useWindowScroll()
</script>