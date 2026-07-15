---
title: Global styles
lang: en-US
---

# Global styles

The `@cck-ui/core` package includes some global styles that are required for components to work correctly. If you override these styles, some components might not work as expected.

Global styles are automatically imported with:

```ts
import '@cck-ui/core/styles.css'
```

If you want to import styles per component, you need to import all global styles manually:

```ts
import '@cck-ui/core/styles/baseline.css'
import '@cck-ui/core/styles/default-css-variables.css'
import '@cck-ui/core/styles/global.css'
```

## CSS reset

The `@cck-ui/core` package includes minimal CSS reset - it includes only basic styles required for components to work in modern browsers. If you need to support older browsers, you can additionally include [normalize.css](https://necolas.github.io/normalize.css/) or any other CSS reset of your choice.

```css
body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
}

button,
select {
  text-transform: none;
}
```

## Body and :root elements styles

The `@cck-ui/core` package includes the following `body` and `:root` element styles:

```css
:root {
  color-scheme: var(--c-color-scheme);
}

body {
  font-family: var(--c-font-family);
  font-size: var(--c-font-size-md);
  line-height: var(--c-line-height);
  background-color: var(--c-color-body);
  color: var(--c-color-text);

  -webkit-font-smoothing: var(--c-webkit-font-smoothing);
  -moz-osx-font-smoothing: var(--c-webkit-font-smoothing);
}
```

## Static classes

The `@cck-ui/core` package include the following static classes:

- `c-active` - contains `:active` styles
- `c-focus-auto` - contains `:focus-visible` styles
- `c-focus-always` - contains `:focus` styles
- `c-focus-never` - removes default browser focus ring
- `c-visible-from-{breakpoint}` - shows element when screen width is greater than the breakpoint, for example `c-visible-from-sm`
- `c-hidden-from-{breakpoint}` - hides element when screen width is greater than the breakpoint, for example `c-hidden-from-sm`

You can use these classes with any components or elements:

<c-group>
  <button type="button" class="c-focus-auto">Focus auto</button>
  <button type="button" class="c-focus-always">Focus always</button>
  <button type="button" class="c-focus-never">Focus never</button>
  <button type="button" class="c-active">Active</button>
</c-group>

```vue
<template>
  <c-group>
    <button type="button" class="c-focus-auto">Focus auto</button>
    <button type="button" class="c-focus-always">Focus always</button>
    <button type="button" class="c-focus-never">Focus never</button>
    <button type="button" class="c-active">Active</button>
  </c-group>
</template>
```

## Add global styles in your application

It is recommended to use [CSS modules](./css-modules) to apply styles to CCK UI components with the `className` prop or with Style API. CSS modules file names usually end with `.module.css`. If you want to add global styles to your application, create a file with a `.css` extension but without the `.module` part, for example `global.css`.

In global `.css` files you can reference all CCK UI CSS variables and change styles of `<body />`, `:root`, and other elements. For example, to change the body background-color:

```css
body {
  background-color: var(--c-color-red-filled);
}
```