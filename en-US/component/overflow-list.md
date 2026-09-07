---
title: OverflowList
lang: en-US
---

# OverflowList

Hide items that do not fit in a container and display them as a single collapsed item

## Usage

<div style="resize: horizontal; overflow: auto; max-width: 100%;">
  <c-overflow-list :data="data" :gap="4">
    <template #item="{ item, index }">
      <c-badge variant="filled" :key="index">{{ item }}</c-badge>
    </template>
    <template #overflow="{ items }">
      <c-badge variant="filled">+{{ items.length }} more</c-badge>
    </template>
  </c-overflow-list>
</div>

```vue
<template>
  <div style="resize: horizontal; overflow: auto; max-width: 100%;">
    <c-overflow-list :data="data" :gap="4">
      <template #item="{ item, index }">
        <c-badge variant="filled" :key="index">{{ item }}</c-badge>
      </template>
      <template #overflow="{ items }">
        <c-badge variant="filled">+{{ items.length }} more</c-badge>
      </template>
    </c-overflow-list>
  </div>
</template>

<script setup lang="ts">
const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
</script>
```

## Data type

`OverflowList` data prop supports an array of any type. By default, `OverflowList` infers data type from the data array automatically. To specify data type explicitly, pass generic type argument to the component:

```vue
<template>
  <c-overflow-list :data="[{value: '1', label: 'Item 1'}]" :gap="4">
    <template #item="{ item, index }">
      <c-badge variant="filled" :key="index">{{ item.label }}</c-badge>
    </template>
    <template #overflow="{ items }">
      <c-badge variant="filled">+{{ items.length }} more</c-badge>
    </template>
  </c-overflow-list>
</template>
```

## Max rows

Use `maxRows` to limit visible rows count. By default, 1 row is visible.

<div style="resize: horizontal; overflow: auto; max-width: 500px;">
  <c-overflow-list :data="data" :gap="4" :max-rows="2">
    <template #item="{ item, index }">
      <c-badge variant="filled" :key="index">{{ item }}</c-badge>
    </template>
    <template #overflow="{ items }">
      <c-badge variant="filled">+{{ items.length }} more</c-badge>
    </template>
  </c-overflow-list>
</div>

```vue
<template>
  <div style="resize: horizontal; overflow: auto; max-width: 500px;">
    <c-overflow-list :data="data" :gap="4" :max-rows="2">
      <template #item="{ item, index }">
        <c-badge variant="filled" :key="index">{{ item }}</c-badge>
      </template>
      <template #overflow="{ items }">
        <c-badge variant="filled">+{{ items.length }} more</c-badge>
      </template>
    </c-overflow-list>
  </div>
</template>

<script setup lang="ts">
const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
</script>
```

## Max visible items

Use `maxVisibleItems` to limit visible items count. By default, there is no limit.

<div style="resize: horizontal; overflow: auto; max-width: 100%;">
  <c-overflow-list :data="data" :gap="4" :max-visible-items="5">
    <template #item="{ item, index }">
      <c-badge variant="filled" :key="index">{{ item }}</c-badge>
    </template>
    <template #overflow="{ items }">
      <c-badge variant="filled">+{{ items.length }} more</c-badge>
    </template>
  </c-overflow-list>
</div>

```vue
<template>
  <div style="resize: horizontal; overflow: auto; max-width: 100%;">
    <c-overflow-list :data="data" :gap="4" :max-visible-items="5">
      <template #item="{ item, index }">
        <c-badge variant="filled" :key="index">{{ item }}</c-badge>
      </template>
      <template #overflow="{ items }">
        <c-badge variant="filled">+{{ items.length }} more</c-badge>
      </template>
    </c-overflow-list>
  </div>
</template>

<script setup lang="ts">
const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
</script>
```

## Collapse from

Use `collapseFrom` prop to control from which direction items are collapsed when they overflow. By default, items are collapsed from the end. Set `collapseFrom="start"` to collapse items from the beginning - this is useful for breadcrumb - like patterns where the last items should remain visible.

<div style="resize: horizontal; overflow: auto; max-width: 100%;">
  <c-overflow-list collapse-from="start" :data="data" :gap="4">
    <template #item="{ item, index }">
      <c-badge variant="filled" :key="index">{{ item }}</c-badge>
    </template>
    <template #overflow="{ items }">
      <c-badge variant="filled">+{{ items.length }} more</c-badge>
    </template>
  </c-overflow-list>
</div>

```vue
<template>
  <div style="resize: horizontal; overflow: auto; max-width: 100%;">
    <c-overflow-list collapse-from="start" :data="data" :gap="4">
      <template #item="{ item, index }">
        <c-badge variant="filled" :key="index">{{ item }}</c-badge>
      </template>
      <template #overflow="{ items }">
        <c-badge variant="filled">+{{ items.length }} more</c-badge>
      </template>
    </c-overflow-list>
  </div>
</template>

<script setup lang="ts">
const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
</script>
```

<script setup lang="ts">
const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];
</script>

## Props

### OverflowList props

|Name|Type|Description|Default value|
|---|---|---|---|
|collapseFrom|"end" \| "start"|Direction from which items are collapsed when they overflow, `'end'` collapses last items, `'start'` sollapses first items|`'end'`|
|data<span style="color: var(--c-color-red-filled)">*</span>|T[]|Array of items to display||
|gap|CSpacing|Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem|`'xs'`|
|getItemKey|(item: T, index: number) => Key|A function to resolve a unique key for each item. Used to detect when the contents of `data` change (for example when items are reordered while the length stays the same) so the visible/overflow split can be recomputed. Required to detect reordering when `data` contains objects; for primitive items (strings, numbers) the item value is used by default.||
|maxRows|number|Number of rows to display|`1`|
|maxVisibleItems|number|Maximum number of visible items|Infinity|

### OverflowList slots

|Name|Description|Arguments|
|---|---|---|
|item|Slot to render item|item, index|
|overflow|Slot to render hidden items|items|

## Styles API

`OverflowList` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### OverflowList Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-OverflowList-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--ol-gap|Controls gap between items|
