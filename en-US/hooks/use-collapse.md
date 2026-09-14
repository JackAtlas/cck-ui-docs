---
title: use-collapse
lang: en-US
---

# use-collapse

Animate height from 0 to auto and vice versa

## Usage

`use-collapse` is the hook version of [Collapse](../component/collapse) component. It allows animation of height from `0` to `auto` and vice versa.

<div>
  <c-button mb="md" @click="handlers.toggle">{{ expanded ? 'Collapse' : 'Expand' }}</c-button>
  <div ref="elementRef" v-bind="getCollapseProps()">
    <c-typography bg="var(--c-color-blue-light)" bdrs="md" p="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</c-typography>
  </div>
</div>

```vue
<template>
  <div>
    <c-button mb="md" @click="handlers.toggle">{{ expanded ? 'Collapse' : 'Expand' }}</c-button>
    <div ref="elementRef" v-bind="getCollapseProps()">
      <c-typography bg="var(--c-color-blue-light)" bdrs="md" p="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</c-typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCollapse, useDisclosure } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
const { elementRef, getCollapseProps } = useCollapse({ expanded })
</script>
```

## Horizontal collapse

`use-horizontal-collapse` works the same way as `use-collapse` but animates width instead of height:

<c-stack :h="240">
  <c-button w="fit-content" @click="hHandlers.toggle">{{ hExpanded ? 'Collapse' : 'Expand' }}</c-button>

  <div ref="hElementRef" v-bind="hGetCollapseProps()">
    <c-typography bg="var(--c-color-blue-light)" bdrs="md" p="xs" :w="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</c-typography>
  </div>
</c-stack>

```vue
<template>
  <c-stack :h="240">
    <c-button w="fit-content" @click="handlers.toggle">{{ expanded ? 'Collapse' : 'Expand' }}</c-button>

    <div ref="elementRef" v-bind="getCollapseProps()">
      <c-typography bg="var(--c-color-blue-light)" bdrs="md" p="xs" :w="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</c-typography>
    </div>
  </c-stack>
</template>

<script setup lang="ts">
import { useDisclosure, useHorizontalCollapse } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
const { elementRef, getCollapseProps } = useHorizontalCollapse({ expanded })
</script>
```

<script setup lang="ts">
import { useCollapse, useDisclosure, useHorizontalCollapse } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
const { elementRef, getCollapseProps } = useCollapse({ expanded })

const { state: hExpanded, handlers: hHandlers } = useDisclosure(false)
const { elementRef: hElementRef, getCollapseProps: hGetCollapseProps } = useHorizontalCollapse({ expanded: hExpanded })
</script>

## Definition

```typescript
interface UseCollapseInput {
  /** Expanded state */
  expanded: MaybeRefOrGetter<boolean>

  /** Transition duration in milliseconds, by default calculated based on content height */
  transitionDuration?: MaybeRefOrGetter<number | undefined>

  /**
   * Transition timing function
   * @default 'ease'
   */
  transitionTimingFunction?: MaybeRefOrGetter<string | undefined>

  /** Called when transition ends */
  onTransitionEnd?: () => void

  /** Called when transition starts */
  onTransitionStart?: () => void

  /** If true, collpased content is kept in the DOM and hidden with `display: none` styles */
  keepMounted?: boolean
}

interface GetCollapsePropsReturnValue {
  'aria-hidden': boolean
  inert: boolean
  style: CSSProperties
  onTransitionend: (event: TransitionEvent) => void
}

type UseCollapseState = 'entering' | 'entered' | 'exiting' | 'exited'

interface UseCollapseReturnValue {
  /** Current transition state */
  state: Ref<UseCollapseState>

  elementRef: Ref<HTMLElement | null>

  getCollapseProps: (input?: { style?: CSSProperties }) => GetCollapsePropsReturnValue
}

function useCollapse(input: UseCollapseInput): UseCollapseReturnValue

function useHorizontalCollapse(input: UseCollapseInput): UseCollapseReturnValue
```

## Exported types

The `UseCollapseInput`, `UseCollapseState`, and `UseCollapseReturnValue` types are exported from the `@cck-ui/hooks` package; you can import them in your application:

```typescript
import { UseCollapseInput, UseCollapseState, UseCollapseReturnValue } from '@cck-ui/hooks'
```