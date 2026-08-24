---
title: VisuallyHidden
lang: en-US
---

# VisuallyHidden

Hide element visually but keep it accessible for screen readers

## Usage

`VisuallyHidden` is a utility component that hides content visually but leaves it available to screen readers.

For example, it can be used with [ActionIcon](./action-icon) component:

```vue
<template>
  <c-action-icon>
    <heart-icon />
    <c-visually-hidden>Like post</c-visually-hidden>
  </c-action-icon>
</template>
```