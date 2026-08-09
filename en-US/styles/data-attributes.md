---
title: data-* attributes
lang: en-US
---

# data attributes

CCK UI components uses `data-*` attributes to apply styles. These attributes are used as modifiers to apply styles based on component state. The general rule of CCK UI component styles: one class with shared styles and any number of `data-*` attributes as modifiers.

Example of applying styles with `data-*` attributes:

<c-group>
  <c-button :classNames="classes" variant="filled">
    <template #left-section>12</template>
    Send files
    <template #right-section>
      <arrow-right-icon :size="18"></arrow-right-icon>
    </template>
  </c-button>
  <c-button :classNames="classes" disabled>
    <template #left-section>3</template>
    Send files
    <template #right-section>
      <arrow-right-icon :size="18"></arrow-right-icon>
    </template>
  </c-button>
</c-group>

<script setup lang="ts">
import { ArrowRightIcon } from '@lucide/vue'
import classes from './_styles/data-attributes-1.module.css'
</script>

```vue
<!-- demo.vue -->
<template>
  <c-group>
    <c-button :classNames="classes" variant="filled">
      <template #left-section>12</template>
      Send files
      <template #right-section>
        <arrow-right-icon :size="18"></arrow-right-icon>
      </template>
    </c-button>
    <c-button :classNames="classes" disabled>
      <template #left-section>3</template>
      Send files
      <template #right-section>
        <arrow-right-icon :size="18"></arrow-right-icon>
      </template>
    </c-button>
  </c-group>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@lucide/vue'
import classes from './demo.module.css'
</script>
```

```scss
// demo.module.css
.root {
  border-top-left-radius: var(--c-radius-xl);
  border-bottom-left-radius: var(--c-radius-xl);
  padding-left: 4px;

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use CCK UI PostCSS mixins inside data attributes */
    @mixin light {
      border: 1px solid var(--c-color-gray-2);
    }

    @mixin dark {
      border: 1px solid var(--c-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - 8px);

    background-color: var(--c-color-body);
    color: var(--c-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--c-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
```

## data attributes values

Most of the `data-*` attributes do not have associated values. They represent boolean state or a feature. For example, when the `disabled` prop on [Button](../component/button) is Set, the `data-disabled` attribute is added to the `<button />` element:

```vue
<template>
  <c-button disabled className="my-button">Disabled button</c-button>
</template>
```

Will output the following HTML:

```html
<button class="my-button" data-disabled>Disabled button</button>
```

You can use this attribute to apply styles to the disabled button:

```scss
.my-button {
  color: var(--c-color-black);

  &[data-disabled] {
    color: var(--c-color-gray-5);
  }
}
```

When the `disabled` prop is not set, the `data-disabled` attribute is not added to the button:

```html
<button class="my-button">Not disabled button</button>
```

In some cases, `data-*` attributes have associated values. For example, a [Button](../component/button) component's `section` element has an associated `data-position` attribute which can be `left` or `right`. The following example will render two `section` elements, one with `data-position="left"` and another with `data-position="right"`:

```vue
<template>
  <c-button>
    <template #left-section>L</template>
    Label
    <template #right-section>R</template>
  </c-button>
</template>
```

Will output the following HTML:

```html
<button>
  <span class="section" data-position="left">L</span>
  Label
  <span class="section" data-position="right">R</span>
</button>
```

You can use this attribute to apply styles to the left and right sections:

```scss
// module css
.section {
  /* Styles applied to both sections */
  width: 2rem;

  /* Styles applied only to left section */
  &[data-position='left'] {
    background-color: red;
  }

  /* Styles applied only to right section */
  &[data-position='right'] {
    background-color: blue;
  }
}
```

## Components data attributes documentation

Every component that uses `data-*` attributes has a dedicated section under the `Styles API` tab.

The [Button](../component/button) `data-*` attributes table:

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|root|data-disabled|`disabled` prop is set|-|
|root, label|data-loading|`loading` prop is set|-|
|root|data-block|`fullWidth` prop is set|-|
|root|data-with-left-section|`leftSection` slot is provided|-|
|root|data-with-right-section|`rightSection` slot is provided|-|
|section|data-position|-|Section position: left or right

How to read the table:

- `selector` column - [Styles API](./styles-api) selector (or multiple selectors) to which data attribute is added
- `attribute` column - data attribute name
- `condition` column - condition based on which the data attribute is added to the element
- `value` column - value of the data attribute

## mod prop

All components support the `mod` prop, which allows adding data attributes to the root element. CamelCase keys are converted to kebab-case. If a key starts with `data-`, the prefix is not duplicated.

Examples of using `mod` prop:

```vue
<template>
  <c-box mod="data-button" />
  <!-- <div data-button /> -->

  <c-box :mod="{ opened: true }" />
  <!-- <div data-opened /> -->

  <c-box :mod="{ someValue: 'hello' }" />
  <!-- <div data-some-value="hello" /> -->

  <c-box :mod="{ opened: false }" />
  <!-- <div /> -->

  <c-box :mod="['button', { opened: true }]" />
  <!-- <div data-button data-opened /> -->

  <c-box :mod="{ orientation: 'horizontal' }" />
  <!-- <div data-orientation="horizontal" /> -->
</template>
```