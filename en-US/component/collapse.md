---
title: Collpase
lang: en-US
---

# Collapse

Animate presence with slide down/up transition

## Usage

<c-box mx="auto" :maw="400">
  <c-group justify="center" :mb="5">
    <c-button @click="handlers.toggle">Toggle content</c-button>
  </c-group>

  <c-collapse :expanded="expanded">
    <c-text>From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.</c-text>
  </c-collapse>
</c-box>

```vue
<template>
  <c-box mx="auto" :maw="400">
    <c-group justify="center" :mb="5">
      <c-button @click="handlers.toggle">Toggle content</c-button>
    </c-group>

    <c-collapse :expanded="expanded">
      <c-text>
        <!-- content -->
      </c-text>
    </c-collapse>
  </c-box>
</template>

<script setup lang="ts">
import { useDisclosure } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
</script>
```

## Horizontal orientation

<c-stack align="flex-start" :h="240">
  <c-button w="fit-content" @click="hHandlers.toggle">{{ hExpanded ? 'Collapse' : 'Expand' }}</c-button>

  <c-collapse orientation="horizontal" :expanded="hExpanded">
    <c-typography bg="var(--c-color-blue-light)" p="xs" bdrs="md" :w="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</c-typography>
  </c-collapse>
</c-stack>

```vue
<template>
  <c-stack align="flex-start" :h="240">
    <c-button w="fit-content" @click="handlers.toggle">{{ expanded ? 'Collapse' : 'Expand' }}</c-button>

    <c-collapse orientation="horizontal" :expanded="expanded">
      <c-typography bg="var(--c-color-blue-light)" p="xs" bdrs="md" :w="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</c-typography>
    </c-collapse>
  </c-stack>
</template>

<script setup lang="ts">
import { useDisclosure } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
</script>
```

## Change transition

Set the following props to control the transition:

- `transitionDuration` - duration in ms
- `transitionTimingFunction` - timing function (ease, linear, etc.), defaults to `ease`
- `onTransitionEnd` - called when transition ends (both open and close)

<c-box mx="auto" :maw="400">
  <c-group justify="center" :mb="5">
    <c-button @click="tHandlers.toggle">Toggle with linear transition</c-button>
  </c-group>

  <c-collapse transitionTimingFunction="linear" :expanded="tExpanded" :transition-duration="1000">
    <c-text>From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.</c-text>
  </c-collapse>
</c-box>

```vue
<template>
  <c-box mx="auto" :maw="400">
    <c-group justify="center" :mb="5">
      <c-button @click="handlers.toggle">Toggle with linear transition</c-button>
    </c-group>

    <c-collapse transitionTimingFunction="linear" :expanded="expanded" :transition-duration="1000">
      <c-text>From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.</c-text>
    </c-collapse>
  </c-box>
</template>

<script setup lang="ts">
import { useDisclosure } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
</script>
```

## Example: nested Collapse components

<c-box mx="auto" :maw="400">
  <c-group :mb="5">
    <c-button variant="filled" @click="rootHandlers.toggle">Root collapse</c-button>
  </c-group>

  <c-collapse :expanded="rootExpanded">
    <c-text size="lg">This collapse contains another collapse</c-text>
    <c-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.</c-text>
    <c-button variant="outline" @click="innerHandlers.toggle">Inner collapse</c-button>
    <c-collapse :expanded="innerExpanded">
      <c-text size="lg">This collapse is inside another collapse</c-text>
      <c-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.</c-text>
    </c-collapse>
  </c-collapse>
</c-box>

## use-collapse hook

[use-collapse](../hooks/use-collapse) is the hook version of the `Collapse` component. It allows more flexible usage and control over the collapse behavior.

<div>
  <c-button mb="md" @click="hookHandlers.toggle">{{ hookExpanded ? 'Collapse': 'Expand' }}</c-button>
  <div ref="elementRef" v-bind="getCollapseProps()">
    <c-typography bg="var(--c-color-blue-light)" bdrs="md" p="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</c-typography>
  </div>
</div>

<script setup lang="ts">
import { useCollapse, useDisclosure } from '@cck-ui/hooks'

const { state: expanded, handlers } = useDisclosure(false)
const { state: hExpanded, handlers: hHandlers } = useDisclosure(false)
const { state: tExpanded, handlers: tHandlers } = useDisclosure(false)
const { state: rootExpanded, handlers: rootHandlers } = useDisclosure(false)
const { state: innerExpanded, handlers: innerHandlers } = useDisclosure(false)

const { state: hookExpanded, handlers: hookHandlers } = useDisclosure(false)
const { elementRef, getCollapseProps } = useCollapse({ expanded: hookExpanded })
</script>