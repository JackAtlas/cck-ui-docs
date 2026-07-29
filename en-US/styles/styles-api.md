---
title: Styles API
lang: en-US
---

# Styles API

## What is Styles API

The Styles API is a set of props and techniques that allows you to customize the style of any element inside a CCK UI component - inline or using the [theme object](../theming/theme-object). All CCK UI components that have styles support the Styles API.

## Styles API selectors

Every CCK UI component that supports the Styles API has a set of element names that can be used to apply styles to inner elements inside the component. For simplicity, these element names are called selectors in the CCK UI documentation. You can find selector information under the `Styles API` tab in a component's documentation.

Example of the [Button](../component/button) component selectors:

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Button-root|Root element|
|loader|.c-Button-loader|Loader component, displayed only when `loading` prop is set|
|inner|.c-Button-inner|Contains all other elements, child of the `root` element|
|section|.c-Button-section|Left and right sections of the button|
|label|.c-Button-label|Button children|

You can use these selectors in `classNames` and `styles` in both component props and `theme.components`:

## classNames prop

With the `classNames` prop you can add classes to inner elements of CCK UI components. It accepts an object with element names as keys and classes as values:

## classNames in theme.components

You can also define `classNames` in theme.components to apply them to all components of a specific type:

## Components CSS variables (WIP)

Most of CCK UI components use CSS variables to define colors, sizes, paddings and other properties. You can override these values using a custom CSS variables resolver function in theme.components or by passing it to the `vars` prop.

You can find CSS variables information under the `Styles API` part in a component's documentation. Example of [Button](../component/button) component CSS variables:

|Selector|Variable|Description|
|---|---|---|
|root|--button-bg|Controls `background`|
||--button-bd|Controls `border`|
||--button-hover|Controls `background` when hovered|
||--button-color|Controls text `color`|
||--button-hover-color|Controls text `color` when hovered|
||--button-radius|Controls `border-radius`|
||--button-height|Controls `height` of the button|
||--button-padding-x|Controls horizontal `padding` of the button|
||--button-fz|Controls `font-size` of the button|
||--button-justify|Controls `justify-content` of `inner` element|

Example of a custom CSS variables resolver function used to add more sizes to the [Button](../component/button) component:

## styles prop

The `styles` prop works the same way as `classNames`, but applies inline styles. Note that inline styles have higher specificity than classes, so you will not be able to override them with classes without using `!important`. You cannot use pseudo-classes (for example, `:hover`, `:first-of-type`) and media queries inside the `styles` prop.