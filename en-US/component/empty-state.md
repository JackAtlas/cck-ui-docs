---
title: EmptyState
lang: en-US
---

# EmptyState

## Usage

`EmptyState` displays a placeholder for "no data" situations: empty search results, empty tables and lists, first-run states or error illustrations with an optional call to action. The simplest way to use it is with `icon`, `title` and `description` slots:

<c-empty-state>
  <template #icon>
    <search-icon />
  </template>
  <template #title>No results found</template>
  <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
  <template #actions>
    <c-button>Reset filters</c-button>
  </template>
</c-empty-state>

```vue
<template>
  <c-empty-state>
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
</template>

<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
</script>
```

## Alignment

Set the `align` prop to control how the content is arranged:

- `center` (default) - indicator, title, description and actions are stacked in a centered column
- `left` - indicator is placed on the left, the content is aligned next to it on the right
- `right` - indicator is placed on the right, the content is aligned next to it on the left

<c-stack>
  <c-empty-state align="left">
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
  <c-empty-state align="right">
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
</c-stack>

## Variant

Set the `variant` prop to `filled` or `light` to display the icon inside a colored circular indicator. Use the `color` prop to change the indicator color. If `variant` is not set, the icon is displayed with a dimmed color:

<c-stack>
  <c-empty-state variant="filled" color="blue">
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
  <c-empty-state variant="light" color="teal">
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
</c-stack>

```vue
<template>
  <c-empty-state variant="filled" color="blue">
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
  <c-empty-state variant="light" color="teal">
    <template #icon>
      <search-icon />
    </template>
    <template #title>No results found</template>
    <template #description>We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.</template>
    <template #actions>
      <c-button>Reset filters</c-button>
    </template>
  </c-empty-state>
</template>
```

## Indicator background

Set `withIndicatorBackground` prop to display a neutral circular background behind the indicator without setting a `variant`:

<c-empty-state with-indicator-background>
  <template #icon>
    <shopping-cart-icon />
  </template>
  <template #title>Your cart is empty</template>
  <template #description>Your shopping cart is empty right now. Browse our catalog and add the items you like to get started with your first order.</template>
  <template #actions>
    <c-button>Browser products</c-button>
  </template>
</c-empty-state>

```vue
<template>
  <c-empty-state with-indicator-background>
    <template #icon>
      <shopping-cart-icon />
    </template>
    <template #title>Your cart is empty</template>
    <template #description>Your shopping cart is empty right now. Browse our catalog and add the items you like to get started with your first order.</template>
    <template #actions>
      <c-button>Browser products</c-button>
    </template>
  </c-empty-state>
</template>
```

## Size

`EmptyState` supports `xs`, `sm`, `md`, `lg` and `xl` sizes. The `size` prop controls the indicator size, gap between elements and font sizes of the title and description. Change the `size` prop in the configurator above to see how it scales.

## Title heading level

By default, `EmptyState` renders a `div` element without a semantic heading level. If the empty state title should be a heading, set the `order` prop to render it as an `h1` - `h6` element:

```vue
<template>
  <c-empty-state :order="4">
    <template #title>No results found</template>
  </c-empty-state>
</template>
```

## Accessibility

- The root element is a plain `div`, it is not assigned a landmark role.
- Title slot renders a non-heading `div` by default. Set the `order` prop if the title should be exposed as a heading to assistive technologies.
- Action buttons are rendered as provided - make sure they have accessible labels.

<script setup lang="ts">
import { SearchIcon, ShoppingCartIcon } from '@lucide/vue'
</script>

## Props

### EmptyState props

|Name|Type|Description|Default value|
|---|---|---|---|
|align|"center" \| "left" \| "right"|Content alignment. `center` stacks the content in a centered column, `left`/`right` place the indicator on the side with the content next to it.|`'center'`|
|color|CColor|Key of `theme.colors` or any valid CSS color, used by `filled` and `light` variants|`theme.primaryColor`|
|withIndicatorBackground|boolean|If set, a neutral circular background is displayed behind the indicator. Setting `variant` always displays a colored background regardless of this prop|`false`|

## Styles API

`EmptyState` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### EmptyState Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-EmptyState-root|Root element|
|body|.c-EmptyState-body|Wrapper around `title`, `description` and `actions`|
|indicator|.c-EmptyState-indicator|Wrapper around the icon or illustration|
|title|.c-EmptyState-title|Title element|
|description|.c-EmptyState-description|Description element|
|actions|.c-EmptyState-actions|Wrapper around action buttons|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--empty-state-indicator-size|Controls indicator icon size|
||--empty-state-gap|Controls gap between elements|
||--empty-state-title-fz|Controls title `font-size`|
||--empty-state-description-fz|Controls description `font-size`|
||--empty-state-indicator-bg|Controls indicator background of `filled` and `light` version|
||--empty-state-indicator-color|Controls indicator color of `filled` and `light` variants|

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-align|-|Value of `align` prop|
|root|data-variant|-|Value of `variant` prop|
|indicator|data-with-background|`withIndicatorBackground` prop is set or `variant` is set|-|