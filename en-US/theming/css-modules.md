---
title: CSS modules
lang: en-US
---

# CSS modules

All CCK UI components use CSS modules for styling. It is recommended to use CSS modules in your project as well, but it is not required - CCK components are fully compatible with any third-party styling solution and native CSS.

## Usage

CSS modules are supported out of the box by all major frameworks and build tools. Usually, all you need to do is adding a `module` attribute to your vue style tag.

```vue
<template>
  <button :class="$style.button" type="button">Button</button>
</template>

<style module>
.button {
  color: red;
}
</style>
```

Or create a `*.module.css` file.

```css
.button {
  color: red;
}
```

And then import it in your component:

```vue
<template>
  <button :class="$style.button" type="button">Button</button>
</template>

<script>
import style from './button.module.css'
</script>
```

## How CSS modules work

When you are using CSS modules, your build tool will generate a unique class name for each class in your file. For example, when you import the following file in your `.js/.ts` file:

```css
/* button.module.css */
.button {
  red: red;
}

.text {
  color: blue;
}
```

You will get an object with unique class names:

```ts
import classes from './button.module.css'

console.log(classes)

// -> Object of scoped class names: key if the class name, value is the generated unique class name
// { button: 'button-Xh3s7ER', text: 'text-js65s3Se' }
// Note that the generated class names may vary depending on your build tool
```

With CSS modules, you do not need to worry about class name collisions. You can use any class name you want.

## Referencing global class names

To reference global class names in CSS modules, you can use the `:global` selector:

```css
.test {
  & :global(.global-class-name) {
    color: red;
  }
}
```

The code above will compile to the following CSS:

```css
.m-dj3w33 .global-class-name {
  color: red;
}
```

## Styling CCK UI components without CSS modules

All CCK UI components are fully compatible with any third-party styling solution and native CSS. There are two main strategies to apply styles with a third-party library:

- `className`, `classNames`, `style` and `styles` props
- with static selectors, for example `.c-Text-root`
