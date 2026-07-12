---
title: Text
lang: en-US
---

# Text

Display text

## Usage

<c-text size="xs">Extra small text</c-text>
<c-text size="sm">Small text</c-text>
<c-text size="md">Default text</c-text>
<c-text size="md">Large text</c-text>
<c-text size="xl">Extra large text</c-text>
<c-text :fw="500">Semibold</c-text>
<c-text :fw="700">Bold</c-text>
<c-text fs="italic">Italic</c-text>
<c-text td="underline">Underline</c-text>
<c-text td="line-through">Strikethrough</c-text>
<c-text c="dimmed">Dimmed text</c-text>
<c-text c="blue">Blue text</c-text>
<c-text c="teal.4">Teal 4 text</c-text>
<c-text tt="uppercase">Uppercase</c-text>
<c-text tt="capitalize">capitalized text</c-text>
<c-text ta="center">Aligned to center</c-text>
<c-text ta="right">Aligned to right</c-text>

## Gradient variant

When the `variant` prop is set to `gradient`, you can control the gradient with the `gradient` prop, which accepts an object with `form`, `to` and `deg` properties. If the `gradient` prop is not set, `Text` will use `theme.defaultGradient` which can be configured on the theme object. The `gradient` prop is ignored when `variant` is not `gradient`.

(**WIP**) Note that `variant="gradient"` supports only linear gradients with two colors. If you need a more complex gradient, use the Styles API to modify `Text` styles.

<c-group>
  <c-text size="xl" :fw="900" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">Gradient Text</c-text>
</c-group>

```vue
<template>
  <c-group>
    <c-text size="xl" :fw="900" variant="gradient" :gradient="{ from: 'blue', to: 'cyan', deg: 90 }">Gradient Text</c-text>
  </c-group>
</template>
```

## Truncate

Set the `truncate` prop to add `text-overflow: ellipsis` styles:

<c-box :w="300">
  <c-text truncate="end">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
  </c-text>
  <c-text truncate="start">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
  </c-text>
</c-box>

```vue
<template>
  <c-box :w="300">
    <c-text truncate="end">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
    </c-text>
    <c-text truncate="start">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
    </c-text>
  </c-box>
</template>
```

## Line clamp

Specify the maximum number of lines with the `line-clamp` prop. This option uses [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) CSS property ([caniuse](https://caniuse.com/css-line-clamp)). Note that `padding-bottom` cannot be set on the text element:

<c-text :line-clamp="4">
  From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
</c-text>

```vue
<template>
  <c-text :line-clamp="4">
    From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.
  </c-text>
</template>
```

(**WIP**) Line clamp can also be used with any children (not only strings), for example with Typography:

## Inherit styles

Text always applies font-size, font-family and line-height styles, but in some cases this is not the desired behavior. To force Text to inherit parent styles, set the `inherit` prop. For example, highlight part of Title:

example is WIP

## Text wrap

Use the `text-wrap` prop to control the `text-wrap` CSS property. For example, `balance` evens out line lengths and `pretty` prevents orphaned words on the last line:

<c-box :w="300">
  <c-text text-wrap="wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-text>
  <c-text text-wrap="balance">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-text>
  <c-text text-wrap="pretty">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!</c-text>
</c-box>

## Polymorphic component

`Text` is a polymorphic component - its defaut root element is `p`, but it can be changed to any other element or component with the `component` prop:

```vue
<template>
  <c-text tag="a">This is an anchor element</c-text>
</template>
```

## span prop

Use the `span` props as a shorthand for `tag="span"`:

```vue
<template>
  <c-text span>Same as below</c-text>
  <c-text tag="span">Same as above</c-text>
</template>
```