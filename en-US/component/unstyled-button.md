---
title: UnstyledButton
lang: en-US
---

# UnstyledButton

Unstyled polymorphic button

## Usage

`UnstyledButton` resets default button styles, it is used as a base for all other button components. You can use it to as a base for custom polymorphic buttons.

<unstyled-button>Button without styles</unstyled-button>

```vue
<template>
  <unstyled-button>Button without styles</unstyled-button>
</template>
```

## Polymorphic component

`UnstyledButton` is a polymorphic component - its default root element is `button`, but it can be changed to any other element or component with the `tag` prop:

```vue
<template>
  <unstyled-button tag="a">Button without styles</unstyled-button>
</template>
```

## Get element ref

```vue
<template>
  <unstyled-button ref="btn">Button without styles</unstyled-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const ref = ref<HTMLButtonElement | null>(null)
</script>
```