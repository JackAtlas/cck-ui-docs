---
title: Style props
lang: en-US
---

# Style props

With style props, you can add inline styles to any CCK UI component. Style props add styles to the **root** element. If you need to style nested elements, use [Styles API](./styles-api) instead.

```vue
<template>
  <c-box mx="auto" :maw="400" c="blue.6" bg="#fff">
    Your component
  </c-box>
</template>
```

## Supported props 

All CCK UI components that have a root element support the following style props:

|Prop|CSS Property|Theme key|
|---|---|---|
|`m`|`margin`|`theme.spacing`|
|`mt`|`marginTop`|`theme.spacing`|
|`mb`|`marginBottom`|`theme.spacing`|
|`ml`|`marginLeft`|`theme.spacing`|
|`mr`|`marginRight`|`theme.spacing`|
|`ms`|`marginInlineStart`|`theme.spacing`|
|`me`|`marginInlineEnd`|`theme.spacing`|
|`mis`|`marginInlineStart`|`theme.spacing`|
|`mie`|`marginInlineEnd`|`theme.spacing`|
|`mx`|`marginInline`|`theme.spacing`|
|`my`|`marginBlock`|`theme.spacing`|
|`p`|`padding`|`theme.spacing`|
|`pt`|`paddingTop`|`theme.spacing`|
|`pb`|`paddingBottom`|`theme.spacing`|
|`pl`|`paddingLeft`|`theme.spacing`|
|`pr`|`paddingRight`|`theme.spacing`|
|`ps`|`paddingInlineStart`|`theme.spacing`|
|`pe`|`paddingInlineEnd`|`theme.spacing`|
|`pis`|`paddingInlineStart`|`theme.spacing`|
|`pie`|`paddingInlineEnd`|`theme.spacing`|
|`px`|`paddingInline`|`theme.spacing`|
|`py`|`paddingBlock`|`theme.spacing`|
|`bd`|`border`|-|
|`bdrs`|`borderRadius`|-|
|`bg`|`background`|`theme.colors`|
|`c`|`color`|-|
|`opacity`|`opacity`|-|
|`ff`|`fontFamily`|-|
|`fz`|`fontSize`|`theme.fontSizes`|
|`fw`|`fontWeight`|-|
|`lts`|`letterSpacing`|-|
|`ta`|`textAlign`|-|
|`lh`|`lineHeight`|`theme.lineHeights`|
|`fs`|`fontStyle`|-|
|`tt`|`textTransform`|-|
|`td`|`textDecoration`|-|
|`w`|`width`|`theme.spacing`|
|`miw`|`minWidth`|`theme.spacing`|
|`maw`|`maxWidth`|`theme.spacing`|
|`h`|`height`|`theme.spacing`|
|`mih`|`minHeight`|`theme.spacing`|
|`mah`|`maxHeight`|`theme.spacing`|
|`bgsz`|`backgroundSize`|-|
|`bgp`|`backgroundPosition`|-|
|`bgr`|`backgroundRepeat`|-|
|`bga`|`backgroundAttachment`|-|
|`pos`|`position`|-|
|`top`|`top`|-|
|`left` | `left` |-|
|`bottom`|`bottom`|-|
|`right`|`right`|-|
|`inset`|`inset`|-|
|`display`|`display`|-|
|`flex`|`flex`|-|

## Theme values

Some style props can reference values from the theme. For example, `mt` will use the `theme.spacing` value if you set `xs`, `sm`, `md`, `lg`, `xl`:

```vue
<template>
  <!-- margin-top: theme.spacing.xs -->
  <c-box mt="xs"></c-box>

  <!-- margin-top: theme.spacing.md * -1 -->
  <c-box mt="-md"></c-box>

  <!-- margin-top: auto -->
  <c-box mt="auto"></c-box>

  <!-- margin-top: 1rem -->
  <c-box :mt="16"></c-box>

  <!-- margin-top: 5rem -->
  <c-box mt="5rem"></c-box>
</template>
```

In the `c`, `bd` and `bg` props you can reference colors from `theme.colors`:

```vue
<template>
  <!-- color: theme.colors.blue[theme.primaryShade] -->
  <c-box c="blue"></c-box>

  <!-- background: theme.colors.orange[1] -->
  <c-box bg="orange.1"></c-box>

  <!-- border: 1px solid theme.colors.red[6] -->
  <c-box bd="1px solid red.6"></c-box>

  <!-- color: if color scheme is dark `var(--c-color-dark-2)`, if color scheme is light `var(--c-color-gray-6)` -->
  <c-box c="dimmed"></c-box>

  <!-- color: if color scheme is dark `var(--c-color-white)`, if color scheme is light `var(--c-color-black)` -->
  <c-box c="bright"></c-box>

  <!-- background: #edfeff -->
  <c-box bg="#edfeff"></c-box>

  <!-- background: rgba(0, 34, 45, 0.6) -->
  <c-box bg="rgba(0, 34, 45, 0.6)"></c-box>
</template>
```

## Responsive styles

You can use object syntax to add responsive styles with style props. Note that responsive style props are [less performant](./styles-performance) than regular style props. It is not recommended to use them in large lists of elements.

<c-box
  :w="{ base: 200, sm: 400, lg: 500 }"
  :py="{ base: 'xs', sm: 'md', lg: 'xl' }"
  :bg="{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }"
  c="#fff"
  ta="center"
  mx="auto"
>
  Box with responsive style props
</c-box>

```vue
<template>
  <c-box
    :w="{ base: 200, sm: 400, lg: 500 }"
    :py="{ base: 'xs', sm: 'md', lg: 'xl' }"
    :bg="{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }"
    c="#fff"
    ta="center"
    mx="auto"
  >
    Box with responsive style props
  </c-box>
</template>
```

Responsive values are calculated the following way:

- `base` value is used when none of breakpoint values are applied
- `xs`, `sm`, `md`, `lg`, `xl` values are used when the viewport is larger than the value of the corresponding breakpoint specified in [theme.breakpoints](./responsive)

```vue
<c-box :w="{ base: 320, sm: 480, lg: 640 }" />
```

In this case the element will have the following styles:

```css
/* Base styles added to the element and then get overwritten with responsive values */
.element {
  width: 20rem
}

/* 48em is theme.breakpoints.sm by default */
@media (min-width: 48em) {
  .element {
    width: 30rem;
  }
}

/* 75em is theme.breakpoints.lg by default */
@media (min-width: 75em) {
  .element {
    width: 40rem;
  }
}
```