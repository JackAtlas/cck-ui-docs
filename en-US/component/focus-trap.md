---
title: FocusTrap
lang: en-US
---

# FocusTrap

Trap focus at child node

## Usage

FocusTrap is a component implementation of the use-focus-trap hook. It is used in all CCK UI components that require focus trap.

## Initial focus

To define the element that will receive initial focus, set the `data-autofocus` attribute:

## FocusTrapInitialFocus

`FocusTrapInitialFocus` is a special component that adds a visually hidden element which will receive the focus when the focus trap is activated. Once `FocusTrapInitialFocus` loses focus, it is removed from the tab order.

## Focus trapping logic

- Focus is trapped within the child node if the `active` prop is `true`
- When the FocusTrap component is mounted or when the `active` prop changes from `false` to `true`, the first element with the `data-autofocus` attribute is focused
- If there are no elements with the `data-autofocus` attribute, then the first element that supports keyboard interaction is focused
- If the target element does not have focusable elements or does not support `ref`, then the focus trap will not work
- Trap stops working when an element outside of the `FocusTrap` child is focused

## Props

### FocusTrap props

|Name|Type|Description|Default value|
|---|---|---|---|
|active|boolean|If set to `false`, disables focus trap|`true`|