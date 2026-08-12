---
title: Alert
lang: en-US
---

# Alert

Attract user attention with important static message

## Usage

<c-alert color="blue" variant="light" with-close-button>
  <template #title>Alert title</template>
  <template #icon>
    <info-icon></info-icon>
  </template>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon officiis, quae tempore necessitatibus placeat saepe.
</c-alert>

## Styles API

`Alert` supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

## Accessiblility

- Root element role set to `alert`
- `aria-describedby` set to body element id, `aria-labelledby` set to title element id if `title` is provided
- Set `closeButtonLabel` prop to make close button accessible

```vue
<template>
  <!-- not ok -->
  <c-alert with-close-button></c-alert>

  <!-- ok -->
  <c-alert with-close-button close-button-label="dismiss"></c-alert>

  <!-- ok, without close button, closeButtonLabel is not needed -->
  <c-alert></c-alert>
</template>
```

<script setup>
import { InfoIcon } from '@lucide/vue'
</script>

## Props

### Alert props

|Name|Type|Description|Default value|
|---|---|---|---|
|autoContrast|boolean|If set, adjusts text color based on background color for `filled` variant|
|closeButtonLabel|string|Close button `aria-label`||
|color|CColor|Key of `theme.colors` or any valid CSS color|`theme.primaryColor`|
|onClose|() => void|Called when the close button is clicked||
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius|`theme.defaultRadius`|
|withCloseButton|boolean|Determines whether close button should b displayed|`false`|

## Styles API

`Alert` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Alert Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Alert-root|Root element|
|wrapper|.c-Alert-wrapper|Wrapper around `body` and `icon`|
|body|.c-Alert-body|Body element, contains `title` and `message`|
|title|.c-Alert-title|Title element, contains `label` and `icon`|
|label|.c-Alert-label|Title label|
|message|.c-Alert-message|Alert message|
|icon|.c-Alert-icon|Icon element|
|closeButton|.c-Alert-closeButton|Close button|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--alert-bd|Controls `border`|
||--alert-bg|Controls `background`|
||--alert-color|Controls `color`|
||--alert-radius|Controls `border-radius`|

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|title|data-with-close-button|`withCloseButton` prop is provided|