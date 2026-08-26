---
title: Portal
lang: en-US
---

# Portal

Renders component outside of parent element tree

## Usage

Portal is a wrapper component, it renders any component or element at the end of `document.body` or at a given element. The Modal(WIP) and Drawer(WIP) components are wrapped in Portal by default.

Use Portal to render a component or an element at a different place (defaults to the end of `document.body`). Portal is useful when you want to prevent parent styles from interfering with children. Usually all these styles are related to `position` and `z-index` properties, and portals are used for components with fixed position, for example, modals.

```vue
<template>
  <main style="position: relative; z-index: 1;">
    <template v-if="opened">
      <c-portal :reuse-target-node="true">
        <div>Your modal content</div>
      </c-portal>
    </template>
    <button @click="open" type="button">Open modal</button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opened = ref<boolean>(false)
const open = () => opened.value = true
</script>
```

In the example above, the dive element is rendered outside of the parent main (before the closing body tag), but still receives the `opened` and `onClose` props. The element will not be affected by the parent z-index.

## Reuse target node

By default, Portal reuses the same target node for all instances (`:reuseTargetNode="true"`)(**Note**: see [Boolean default value issues](./boolean-props-and-default-values)). To create a new target node for each instance, set `:reuseTargetNode="false"`. In the following example, all three paragraphs will be rendered in seperate target nodes:

```vue
<template>
  <c-portal :reuse-target-node="false">
    <p>First</p>
  </c-portal>
  <c-portal :reuse-target-node="false">
    <p>Second</p>
  </c-portal>
  <c-portal :reuse-target-node="false">
    <p>Third</p>
  </c-portal>
</template>
```

## Specify target DOM node

You can specify the DOM node where the portal will be rendered by passing the `target` prop:

```vue
<template>
  <c-portal :target="container">My portal</c-portal>
</template>

<script setup lang="ts">
const container = document.createElement('div')
document.body.appendChild(container)
</script>
```

Alternatively, you can specify a selector to render the portal in an existing element:

```vue
<template>
  <c-portal target="#portal-container">My portal</c-portal>
</template>
```

If you dont't specify the target element, a new one will be created and appended to the `document.body` for each Portal component.

## Server side rendering

`Portal` component is not supported during server-side rendering. All components inside Portal are rendered only after the application was mounted to the DOM.

## Props

### Portal props

|Name|Type|Description|Default value|
|---|---|---|---|
|reuseTargetNode|boolean|When true and target is not specified, all Portal instances share a single container node appended to document.body. When false, each Portal creates its own container node. Has no effect when target is specified.|`true`|
|target|string \| HTMLElement|Target element where portal should be rendered.Accepts:<ul><li>HTMLElement: Renders portal inside this element</li><li>string: CSS selector - renders inside first matching element</li><li>undefined: Uses shared portal node or creates new one based on `reuseTargetNode`</li></ul>Note: If selector doesn't match any element, portal will not render. ||

### Portal slots

|Name|Description|
|---|---|
|default|Content to render inside the portal|