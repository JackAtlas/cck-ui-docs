---
title: Accordion
lang: en-US
---

# Accordion

Divide content into collapsible sections

## Usage

Accordion allows users to expand and collapse sections of content. It helps manage large amounts of information in a limited space by showing only section headers initially and revealing content upon interaction.

Accordion is commonly used for:

- FAQ sections: displaying questions as headers with answers revealed when clicked
- Forms: organizing long forms into sections, for example, personal info, shipping, and payment
- Menus: nested navigation in sidebars or mobile views

<c-accordion default-value="Apples" :order="3">
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion default-value="Apples" :order="3">
    <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
      <c-accordion-control>
        <template #icon>
          {{ item.emoji }}
        </template>
        {{ item.value }}
      </c-accordion-control>
      <c-accordion-panel>{{ item.description }}</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
</script>
```

## order prop

The `order` prop (used in all demos on this page) sets the heading level for the `AccordionControl` root element. According to [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), it is required to use `h2` - `h6` heading levels to fit correctly within the outline of the page.

All examples on this page use `:order="3"`, which means that all `button` elements of `AccordionControl` are wrapped with an `h3` tag (`h2` tags are used for the documentation sections).

The `order` prop is not enforced by the library but is required if your application must meet accessibility standards.

## Change chevron

Use the `chevron` slot to change the chevron icon. When `chevron` slot is provided, the `chevronIconSize` prop is ignored. To remove the chevron icon, use `:chevron="null"`.

To customize chevron styles, use [Styles API](../styles/styles-api) with the [data-rotate](../styles/data-attributes) attribute. This attribute is set when the item is opened if the `disableChevronRotation` prop is no set.

Example of a custom chevron icon with rotation styles:

<c-accordion default-value="Apples" :classNames="{ chevron: chevronClasses.chevron }" :order="3">
  <template #chevron>
    <plus-icon :class="chevronClasses.icon" />
  </template>
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion default-value="Apples" :classNames="{ chevron: classes.chevron }" :order="3">
    <template #chevron>
      <plus-icon :class="classes.icon" />
    </template>
    <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
      <c-accordion-control>
        <template #icon>
          {{ item.emoji }}
        </template>
        {{ item.value }}
      </c-accordion-control>
      <c-accordion-panel>{{ item.description }}</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
import { PlusIcon } from '@lucide/vue'
import classes from './demo.module.css'

const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
</script>
```

```scss
// demo.module.css
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: 16px;
  height: 16px;
}
```

## Custom control label

You can use any VNode as a label for `AccordionControl` component. When you use nested elements in `AccordionControl`, it is recommended to set `aria-label` attribute to make the control accessible for screen readers.

<c-accordion variant="contained" :default-value="charactersList[2].id">
  <c-accordion-item v-for="char in charactersList" :key="char.label" :value="char.id">
    <c-accordion-control :aria-label="char.label">
      <c-flex align="center" gap="md" tag="span" wrap="nowrap">
        <c-avatar radius="xl" size="lg" :alt="char.label" :src="char.image" />
        <div>
          <c-text span>{{ char.label }}</c-text>
          <c-text span display="block" c="dimmed" size="sm" :fw="400">{{ char.description }}</c-text>
        </div>
      </c-flex>
    </c-accordion-control>
    <c-accordion-panel>
      <c-text size="sm">{{ char.content }}</c-text>
    </c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion variant="contained" :default-value="charactersList[2].id">
    <c-accordion-item v-for="char in charactersList" :key="char.label" :value="char.id">
      <c-accordion-control :aria-label="char.label">
        <c-flex align="center" gap="md" tag="span" wrap="nowrap">
          <c-avatar radius="xl" size="lg" :alt="char.label" :src="char.image" />
          <div>
            <c-text span>{{ char.label }}</c-text>
            <c-text span display="block" c="dimmed" size="sm" :fw="400">{{ char.description }}</c-text>
          </div>
        </c-flex>
      </c-accordion-control>
      <c-accordion-panel>
        <c-text size="sm">{{ char.content }}</c-text>
      </c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];
</script>
```

## With icons

Use the `icon` slot to display any element in the left section of the `AccordionControl`:

<c-accordion default-value="photos" variant="filled" :order="3">
  <c-accordion-item value="photos">
    <c-accordion-control>
      <template #icon>
        <image-icon color="var(--c-color-dimmed)" size="22" />
      </template>
      Recent photos
    </c-accordion-control>
    <c-accordion-panel>Content</c-accordion-panel>
  </c-accordion-item>
  <c-accordion-item value="print">
    <c-accordion-control>
      <template #icon>
        <printer-icon color="var(--c-color-dimmed)" size="22" />
      </template>
      Print photos
    </c-accordion-control>
    <c-accordion-panel>Content</c-accordion-panel>
  </c-accordion-item>
  <c-accordion-item value="camera">
    <c-accordion-control>
      <template #icon>
        <camera-icon color="var(--c-color-dimmed)" size="22" />
      </template>
      CameraIcon settings
    </c-accordion-control>
    <c-accordion-panel>Content</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion default-value="photos" variant="filled" :order="3">
    <c-accordion-item value="photos">
      <c-accordion-control>
        <template #icon>
          <image-icon color="var(--c-color-dimmed)" size="22" />
        </template>
        Recent photos
      </c-accordion-control>
      <c-accordion-panel>Content</c-accordion-panel>
    </c-accordion-item>
    <c-accordion-item value="print">
      <c-accordion-control>
        <template #icon>
          <printer-icon color="var(--c-color-dimmed)" size="22" />
        </template>
        Print photos
      </c-accordion-control>
      <c-accordion-panel>Content</c-accordion-panel>
    </c-accordion-item>
    <c-accordion-item value="camera">
      <c-accordion-control>
        <template #icon>
          <camera-icon color="var(--c-color-dimmed)" size="22" />
        </template>
        CameraIcon settings
      </c-accordion-control>
      <c-accordion-panel>Content</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
import { CameraIcon, ImageIcon, PrinterIcon } from '@lucide/vue'
</script>
```

## Change transition

To change transition duration, set `transitionDuration` prop:

<c-accordion :order="3" :transition-duration="1000">
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion :order="3" :transition-duration="1000">
    <!-- content -->
  </c-accordion>
</template>
```

To disable transitions, set `transitionDuration` to 0:

<c-accordion :order="3" :transition-duration="0">
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion :order="3" :transition-duration="0">
    <!-- content -->
  </c-accordion>
</template>
```

## Default opened items

For `:multiple="false"`, set `defaultValue` as string:

```vue
<template>
  <c-accordion default-value="item-2">
    <c-accordion-item value="item-1">
      <!-- item 1 -->
    </c-accordion-item>
    <c-accordion-item value="item-2">
      <!-- item 2 -->
    </c-accordion-item>
  </c-accordion>
</template>
```

For `:multiple="true"`, set `defaultValue` as an array of strings:

```vue
<template>
  <c-accordion multiple :default-value="['item-1', 'item-2']">
    <c-accordion-item value="item-1">
      <!-- item 1 -->
    </c-accordion-item>
    <c-accordion-item value="item-2">
      <!-- item 2 -->
    </c-accordion-item>
  </c-accordion>
</template>
```

## Control opened state

For `:multiple="false"`, set `value` as string:

```vue
<template>
  <c-accordion :v-model:value="value">
    <c-accordion-item value="item-1">
      <!-- item-1 -->
    </c-accordion-item>
    <c-accordion-item value="item-2">
      <!-- item-2 -->
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | null>(null)
</script>
```

For `:multiple="true"`, set `value` as an array of strings:

```vue
<template>
  <c-accordion multiple v-model:value="value">
    <c-accordion-item value="item-1">
      <!-- item-1 -->
    </c-accordion-item>
    <c-accordion-item value="item-2">
      <!-- item-2 -->
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string[]>([])
</script>
```

## Disable collapse

By default, in single mode (`:multiple="false"`) the open item can always be toggled closed, which leaves the Accordion fully collapsed. Set the `disableCollapse` prop to prevent this: once an item is open, clicking its control again is a no-op, and the only way to change state is to open a different item. This is useful for settings panels, stepper-style flows and FAQ pages where one section should always stay visible.

`disableCollapse` only prevents collapsing an already-open item - it does not force an item open on mount. To guarantee that one item is open from start, pair it with `defaultValue` (uncontrolled) or `value` (controlled):

<c-accordion default-value="Apples" disable-collapse :order="3">
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion default-value="Apples" disable-collapse :order="3">
    <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
      <c-accordion-control>
        <template #icon>
          {{ item.emoji }}
        </template>
        {{ item.value }}
      </c-accordion-control>
      <c-accordion-panel>{{ item.description }}</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
</script>
```

The prop has no effect when `multiple` is set, as multiple mode already allows any combination of opened and closed items.

## Compose controls

Putting a button or link inside `AccordionControl` is a common mistake when using Accordion. The `AccordionControl` root element is a `button`. Putting interactive elements inside other interactive elements is not recommended:

```vue
<!-- ❌ Incorrect usage: do not do this -->
<template>
  <c-accordion>
    <c-accordion-item value="item-1">
      <c-accordion-control>
        <c-group>
          <span>Control 1</span>
          <button>My action</button>
        </c-group>
      </c-accordion-control>
    </c-accordion-item>
  </c-accordion>
</template>
```

Instead of putting interactive elements inside the `AccordionControl`, render them next to it. For example, you can add an [ActionIcon](./action-icon) to the right side of the original control. If you need to display an interactive element over the `AccordionControl`, use `position: absolute` instead.

<c-accordion chevron-position="left" :order="3">
  <c-accordion-item value="item-1">
    <c-center>
      <c-accordion-control>Control 1</c-accordion-control>
      <c-action-icon aria-label="More options" color="gray" size="lg" variant="subtle">
        <ellipsis-icon size="20" />
      </c-action-icon>
    </c-center>
    <c-accordion-panel>Panel 1</c-accordion-panel>
  </c-accordion-item>
  <c-accordion-item value="item-2">
    <c-center>
      <c-accordion-control>Control 2</c-accordion-control>
      <c-action-icon aria-label="More options" color="gray" size="lg" variant="subtle">
        <ellipsis-icon size="20" />
      </c-action-icon>
    </c-center>
    <c-accordion-panel>Panel 2</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion chevron-position="left" :order="3">
    <c-accordion-item value="item-1">
      <c-center>
        <c-accordion-control>Control 1</c-accordion-control>
        <c-action-icon aria-label="More options" color="gray" size="lg" variant="subtle">
          <ellipsis-icon size="20" />
        </c-action-icon>
      </c-center>
      <c-accordion-panel>Panel 1</c-accordion-panel>
    </c-accordion-item>
    <c-accordion-item value="item-2">
      <c-center>
        <c-accordion-control>Control 2</c-accordion-control>
        <c-action-icon aria-label="More options" color="gray" size="lg" variant="subtle">
          <ellipsis-icon size="20" />
        </c-action-icon>
      </c-center>
      <c-accordion-panel>Panel 2</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
import { EllipsisIcon } from '@lucide/vue'
</script>
```

## Disabled items

Set the `disabled` prop on the `AccordionControl` component to disable it. When you disable items, users cannot activate them with the mouse or keyboard, and arrow key navigation will skip them:

<c-accordion default-value="Apples" :order="3">
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control :disabled="item.value === 'Bananas'">
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion default-value="Apples" :order="3">
    <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
      <c-accordion-control :disabled="item.value === 'Bananas'">
        <template #icon>
          {{ item.emoji }}
        </template>
        {{ item.value }}
      </c-accordion-control>
      <c-accordion-panel>{{ item.description }}</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
]
</script>
```

## Unstyled Accordion

Set the `unstyled` prop on the Accordion component to remove all non-essential library styles. Use the `unstyled` prop to style the component with the [Styles API](../styles/styles-api) without overriding any styles.

<c-accordion unstyled :order="3">
  <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion unstyled :order="3">
    <c-accordion-item v-for="item in data" :key="item.value" :value="item.value">
      <c-accordion-control>
        <template #icon>
          {{ item.emoji }}
        </template>
        {{ item.value }}
      </c-accordion-control>
      <c-accordion-panel>{{ item.description }}</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
]
</script>
```

## Styles API Editing

`Accordion` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

Example of using [Styles API](../styles/styles-api) to customize Accordion styles:

<c-accordion default-value="Apples" :order="3">
  <c-accordion-item v-for="item in data" :classNames="stylesApiClasses" :key="item.value" :value="item.value">
    <c-accordion-control>
      <template #icon>
        {{ item.emoji }}
      </template>
      {{ item.value }}
    </c-accordion-control>
    <c-accordion-panel>{{ item.description }}</c-accordion-panel>
  </c-accordion-item>
</c-accordion>

```vue
<template>
  <c-accordion default-value="Apples" :order="3">
    <c-accordion-item v-for="item in data" :classNames="classes" :key="item.value" :value="item.value">
      <c-accordion-control>
        <template #icon>
          {{ item.emoji }}
        </template>
        {{ item.value }}
      </c-accordion-control>
      <c-accordion-panel>{{ item.description }}</c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<script setup lang="ts">
import classes from './demo.module.css'

const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
]
</script>
```

```scss
// demo.module.css
.root {
  border-radius: var(--c-radius-sm);
  background-color: light-dark(var(--c-color-gray-0), var(--c-color-dark-6));
}

.item {
  background-color: light-dark(var(--c-color-gray-0), var(--c-color-dark-6));
  border: 1px solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--c-color-body);
    border-color: light-dark(var(--c-color-gray-2), var(--c-color-dark-4));
    box-shadow: var(--c-shadow-md);
    border-radius: var(--c-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
}
```

## Accessibility

The Accordion component implements the [WAI-ARIA accessibility pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## Keyboard interactions

|Key|Description|
|---|---|
|<c-kbd>ArrowDown</c-kbd>|Moves focus to next item|
|<c-kbd>ArrowUp</c-kbd>|Moves focus to previous item|
|<c-kbd>Home</c-kbd>|Moves focus to first item|
|<c-kbd>End</c-kbd>|Moves focus to last item|
|<c-kbd>Space/Enter</c-kbd>|Toggles focused item opened state|

<script setup lang="ts">
import { ref } from 'vue'
import { CameraIcon, EllipsisIcon, ImageIcon, PlusIcon, PrinterIcon } from '@lucide/vue'
import chevronClasses from './_styles/accordion-chevron.module.css'
import stylesApiClasses from './_styles/accordion-styles-api.module.css'

const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
]

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];
</script>

<style scope>
.c-Accordion-itemTitle {
  margin: 0 !important;
}

.c-Avatar-image {
  margin: 0 !important;
}
</style>

## Props

### Accordion props

|Name|Type|Description|Default value|
|---|---|---|---|
|chevronIconSize|string \| number|Size of the default chevron size. Ignored when `chevron` slot is provided. Use `chevronSize` instead when using custom chevron.|`16`|
|chevronPosition|"left" \| "right"|Position of the chevron relative to the item label|`right`|
|chevronSize|string \| number|Size of the chevron icon container|`auto`|
|defaultValue|string \| string[] \| null|Uncontrolled component default value||
|disableChevronRotation|boolean|If set, chevron rotation is disabled|`false`|
|disableCollapse|boolean|If set, the open item cannot be collapsed by clicking it again, so one item always stay on. Only applies when `multiple` is `false`.|`false`|
|keepMounted|boolean|If set to `false`, panels are unmounted when collapsed. By default, panels stay mounted when collapsed.|`true`|
|loop|boolean|If set, arrow keys loop through items (first to last and last to first)|`true`|
|multiple|boolean|If set, multiple items can be opened at the same time|`false`|
|order| 2 \| 3 \| 4 \| 5 \| 6|Sets heading level (h2-h6) for `AccordionControl` elements. Wraps each control in the corresponding heading tag, recommended to meet WAI ARIA accessibility requirements. Has no visual effect.||
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem.|`theme.defaultRadius`|
|transitionDuration|number|Transition duration in ms|`200`|
|value|string \| string[] \| null|Controlled component value||

### Accordion slots

|Name|Description|
|---|---|
|chevron|Custom chevron icon|

### Accordion events

|Name|Type|Description|
|---|---|---|
|change|(value: string \| string[] \| null) => void|Called when value changes|

### AccordionItem props

|Name|Type|Description|
|---|---|---|
|value <span style="color: var(--c-color-red-filled)">*</span>|string|Value that is used to manage the accordion state|

### AccordionControl props

|Name|Type|Description|
|---|---|---|
|disabled|boolean|Sets `disabled` attribute, prevents interactions|

### AccordionControl slots

|Name|Description|
|---|---|
|chevron|Custom chevron icon|
|icon|Icon displayed next to the label|

## Styles API

`Accordion` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Accordion Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Accordion-root|Root element|
|item|.c-Accordion-item|`AccordionItem` root element|
|control|.c-Accordion-control|`AccordionControl` root element|
|chevron|.c-Accordion-chevron|`AccordionControl` chevron container element|
|label|.c-Accordion-label|`AccordionControl` label|
|icon|.c-Accordion-icon|`AccordionControl` icon|
|itemTitle|.c-Accordion-itemTitle|`AccordionControl` title (h2-h6) tag|
|panel|.c-Accordion-panel|`AccordionPanel` root element|
|content|.c-Accordion-content|Wrapper element of `AccordionPanel` `children`|

#### CSS variables

<table>
  <thead>
    <tr>
      <th>Selector</th>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">root</td>
      <td>--accordion-chevron-size</td>
      <td>Controls chevron container element <code>width</code> and <code>min-width</code></td>
    </tr>
    <tr>
      <td>--accordion-radius</td>
      <td>Controls <code>border-radius</code> in various elements, depending on variant</td>
    </tr>
    <tr>
      <td>--accordion-transition-duration</td>
      <td>Controls all transitions <code>transition-duration</code></td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|item, control|data-active|Item is active (opened)|-|
|control|data-chevron-position|-|Value of `chevronPosition` prop on `Accordion`|