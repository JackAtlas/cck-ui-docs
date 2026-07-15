---
title: Styles performance
lang: en-US
---

# Styles performance

## CSS modules

CSS modules is the most performant way to apply styles - this approach generates static CSS that is never re-evaluated. 99% of CCK UI components are generated with CSS modules - components are optimized out of the box.

In most cases, it is recommended to use CSS modules to style your components as well. You can apply styles to HTML elements with the `className` prop and to CCK UI components with the `className` and `classNames` props.

Applying styles with the `className`:

<c-box :className="$style.box">
  Box component with <span :className="$style.highlight">some styles</span>
</c-box>

<style module>
.box {
  font-size: var(--c-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 4px 10px;
  display: inline-block;
  border-radius: var(--c-radius-md);
  background: var(--c-color-blue-light);
  color: var(--c-color-blue-light-color);
}
</style>

## Inline styles

<script setup>
const gradient = 'linear-gradient(45deg, var(--c-color-pink-filled) 0%, var(--c-color-orange-filled) 50%, var(--c-color-yellow-filled) 100%)';
</script>

<c-button
  :styles="{
    root: {
      padding: '2px',
      border: 0,
      backgroundImage: gradient
    },
    inner: {
      background: 'var(--c-color-body)',
      color: 'var(--c-color-text)',
      borderRadius: 'calc(var(--button-radius) - 2px)',
      paddingLeft: 'var(--c-spacing-md)',
      paddingRight: 'var(--c-spacing-md)'
    },
    label: {
      backgroundImage: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }"
>
  Gradient button
</c-button>

## Style props

Style props transform component props into inline styles. Style props have the same caveats as inline styles. It is not recommended to use them as the primary means of styling your componets. Usually, style props are used to apply 1-3 styles to a component - using them this way does not impact performance.

## Responsive style props

Responsive style props have worse performance than regular style props because they require injecting a `<style />` tag in `<head />`. It is fine to use responsive style props to apply styles to several components, but it is not recommended to use them in large lists of components. For example, if you have 1000 inputs with responsive margins, it is better to refactor to use the `classNames` prop.

### Deduplicating responsive style props

When multiple components share the `same` responsive style prop values, built-in styles manager will only generate one `<style />` tag for that specific stylesheet in `<head />`. And `<style />` tag will be removed when all components relying on it are unmounted.

### Components responsive props

Some components, like [SimpleGrid](../component/simple-grid) and [Grid](../component/grid), rely on the same mechanism as responsive style props to apply styles. The limitations are the same - it is fine to use several of these components on a page, but it is not recommended to use them in large lists of components.