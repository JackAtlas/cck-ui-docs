---
title: Popover
lang: en-US
---

# Popover

Display popover section relative to given target element

## Usage

<c-center>
  <c-popover position="bottom" shadow="md" width="200" with-arrow>
    <c-popover-target>
      <c-button variant="filled">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="xs">This is uncontrolled popover, it is opened when button is clicked</c-text>
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover position="bottom" shadow="md" width="200" with-arrow>
    <c-popover-target>
      <c-button variant="filled">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="xs">This is uncontrolled popover, it is opened when button is clicked</c-text>
    </c-popover-dropdown>
  </c-popover>
</template>
```

## Controlled

You can control the Popover state with the `v-model:opened` prop:

```vue
<template>
  <c-popover v-model:opened="opened">
    <c-popover-target>
      <c-button variant="filled" @click="toggle">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Dropdown</c-popover-dropdown>
  </c-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opened = ref(false)
const toggle = () => (opened.value = !opened.value)
</script>
```

Controlled example with mouse events:

<c-center>
  <c-popover v-model:opened="controlledOpened">
    <c-popover-target>
      <c-button variant="filled" @mouseenter="controlledOpen" @mouseleave="controlledClose">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Dropdown</c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover v-model:opened="state">
    <c-popover-target>
      <c-button variant="filled" @mouseenter="open" @mouseleave="close">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Dropdown</c-popover-dropdown>
  </c-popover>
</template>

<script setup lang="ts">
import { useDisclosure } from '@cck-ui/hooks'

const { state, handlers: { close, open } } = useDisclosure(false)
</script>
```

## Focus trap

If you need to use interactive elements (inputs, buttons, etc.) inside `PopoverDropdown`, set the `trapFocus` prop:

<c-center>
  <c-popover position="bottom" shadow="md" trap-focus width="300" with-arrow>
    <c-popover-target>
      <c-button variant="filled">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <input placeholder="Name" type="text" />
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover position="bottom" shadow="md" trap-focus width="300" with-arrow>
    <c-popover-target>
      <c-button variant="filled">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <input placeholder="Name" type="text" />
    </c-popover-dropdown>
  </c-popover>
</template>
```

## Inline elements

Enable the `inline` middleware to use `Popover` with inline elements:

<c-text>
  Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.
  <c-popover position="top" :middlewares="{ flip: true, shift: true, inline: true }">
    <c-popover-target>
      <c-mark>When visiting a junkyard</c-mark>
    </c-popover-target>
    <c-popover-dropdown>Inline dropdown</c-popover-dropdown>
  </c-popover>
  , you may catch sight of it having an intense fight with Murkrow over shiny objects. Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.
</c-text>

```vue
<template>
  <c-text>
    Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.
    <c-popover position="top" :middlewares="{ flip: true, shift: true, inline: true }">
      <c-popover-target>
        <c-mark>When visiting a junkyard</c-mark>
      </c-popover-target>
      <c-popover-dropdown>Inline dropdown</c-popover-dropdown>
    </c-popover>
    , you may catch sight of it having an intense fight with Murkrow over shiny objects. Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.
  </c-text>
</template>
```

## Same width

Set the `width="target"` prop to make the Popover dropdown take the same width as the target element:

<c-center>
  <c-popover position="bottom" shadow="md" width="target" with-arrow>
    <c-popover-target>
      <c-button :w="200">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="sm">This popover has same width as target, it is useful when you are building input dropdowns</c-text>
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover position="bottom" shadow="md" width="target" with-arrow>
    <c-popover-target>
      <c-button :w="200">Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="sm">This popover has same width as target, it is useful when you are building input dropdowns</c-text>
    </c-popover-dropdown>
  </c-popover>
</template>
```

## Offset

Set the `offset` prop to a number to change the dropdown position relative to the target element. This way you can control the dropdown offset on the main axis only.

<c-center>
  <c-popover mb="60" opened position="bottom" width="200" :offset="5">
    <c-popover-target>
      <c-button>Popover target</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="sm">Change position and offset to configure dropdown offset relative to target</c-text>
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover opened position="bottom" width="200" :offset="5">
    <c-popover-target>
      <c-button>Popover target</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="sm">Change position and offset to configure dropdown offset relative to target</c-text>
    </c-popover-dropdown>
  </c-popover>
</template>
```

To control offset on both axes, pass an object with `mainAxis` and `crossAxis` properties:

<c-center>
  <c-popover mb="60" opened position="bottom" width="200" :offset="{ mainAxis: 10, crossAxis: 40 }">
    <c-popover-target>
      <c-button>Popover target</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="sm">Change position and offset to configure dropdown offset relative to target</c-text>
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover opened position="bottom" width="200" :offset="{ mainAxis: 10, crossAxis: 40 }">
    <c-popover-target>
      <c-button>Popover target</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="sm">Change position and offset to configure dropdown offset relative to target</c-text>
    </c-popover-dropdown>
  </c-popover>
</template>
```

## Middlewares

You can enable or disable [Floating UI](https://floating-ui.com/) middlewares with the `middlewares` prop:

- [shift](https://floating-ui.com/docs/shift) middleware shifts the dropdown to keep it in view. It is enabled by default.
- [flip](https://floating-ui.com/docs/flip) middleware changes the placement of the dropdown to keep it in view. It is enabled by default.
- [inline](https://floating-ui.com/docs/inline) middleware improves positioning for inline reference elements that span over multiple lines. It is disabled by default.
- [size](https://floating-ui.com/docs/size) middleware manipulates the dropdown size. It is disabled by default.

Example of turning off `shift` and `flip` middlewares:

```vue
<template>
  <c-popover :middlewares="{ flip: false, shift: false }">
    <!-- Popover content -->
  </c-popover>
</template>
```

## Customize middlewares options

To customize [Floating UI](https://floating-ui.com/) middleware options, pass them as an object to the `middlewares` prop. For example, to change the [shift](https://floating-ui.com/docs/shift) middleware padding to `20px`, use the following configuration:

```vue
<template>
  <c-popover :middlewares="{ shift: { padding: 20 } }">
    <!-- Popover content -->
  </c-popover>
</template>
```

## Dropdown arrow

Set the `withArrow` prop to add an arrow to the dropdown. The arrow is a `div` element rotated with `transform: rotate(45deg)`.

The `arrowPosition` prop determines how the arrow is positioned relative to the target element when `position` is set to `*-start` and `*-end` values on the `Popover` component. By default, the value is `center` - the arrow is positioned in the center of the target element if it is possible.

If you change `arrowPosition` to `side`, then the arrow will be positioned on the side of the target element, and you will be able to control the arrow offset with the `arrowOffset` prop. Note that when `arrowPosition` is set to `center`, the `arrowOffset` prop is ignored.

<c-center>
  <c-popover arrow-position="center" mb="60" opened position="bottom-start" width="200" with-arrow>
    <c-popover-target>
      <c-button>Target element</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="xs">Arrow position can be changed for *-start and *-end positions</c-text>
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover arrow-position="center" opened position="bottom-start" width="200" with-arrow>
    <c-popover-target>
      <c-button>Target element</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-text size="xs">Arrow position can be changed for *-start and *-end positions</c-text>
    </c-popover-dropdown>
  </c-popover>
</template>
```

## With overlay

Set the `withOverlay` prop to add an overlay behind the dropdown. You can pass additional configuration to the [Overlay](./overlay) component with the `overlay` prop:

<c-center>
  <c-popover shadow="md" width="320" with-arrow with-overlay :overlay-props="{ zIndex: 1000, blur: '8px' }" :zIndex="10001">
    <c-popover-target>
      <unstyled-button>
        <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" />
      </unstyled-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-group>
        <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" />
        <c-stack :gap="5">
          <c-text size="sm" :fw="700" style="lineHeight: 1">Jane Doe</c-text>
          <c-anchor c="dimmed" href="javascript:void" size="xs" style="lineHeight: 1">janedoe@gmail.com</c-anchor>
        </c-stack>
      </c-group>
      <c-text mt="md" size="sm">Jane Doe from Earth.</c-text>
      <c-group mt="md" gap="xl">
        <c-text size="sm">
          <b>0</b> Following
        </c-text>
        <c-text size="sm">
          <b>1,174</b> Follower
        </c-text>
      </c-group>
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover shadow="md" width="320" with-arrow with-overlay :overlay-props="{ zIndex: 1000, blur: '8px' }" :zIndex="10001">
    <c-popover-target>
      <unstyled-button>
        <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" />
      </unstyled-button>
    </c-popover-target>
    <c-popover-dropdown>
      <c-group>
        <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" />
        <c-stack :gap="5">
          <c-text size="sm" :fw="700" style="lineHeight: 1">Jane Doe</c-text>
          <c-anchor c="dimmed" href="javascript:void" size="xs" style="lineHeight: 1">janedoe@gmail.com</c-anchor>
        </c-stack>
      </c-group>
      <c-text mt="md" size="sm">Jane Doe from Earth.</c-text>
      <c-group mt="md" gap="xl">
        <c-text size="sm">
          <b>0</b> Following
        </c-text>
        <c-text size="sm">
          <b>1,174</b> Follower
        </c-text>
      </c-group>
    </c-popover-dropdown>
  </c-popover>
</template>
```

## Hide detached

Use the `hideDetached` prop to configure how the dropdown behaves when the target element is hidden with styles (`display: none`, `visibility: hidden`, etc.), removed from the DOM, or when the target element is scrolled out of the viewport.

By default, `hideDetached` is enabled - the dropdown is hidden with the target element. You can change this behavior with `:hideDetached="false"`. To see the difference, try to scroll the root element of the following demo:

<c-center>
  <c-box bd="1px solid var(--c-color-dimmed)" p="xl" style="overflow: auto" :h="200" :w="{ base: 340, sm: 400 }">
    <c-box :h="400" :w="1000">
      <c-group>
        <c-popover opened position="bottom" width="target">
          <c-popover-target>
            <c-button>Toggle popover</c-button>
          </c-popover-target>
          <c-popover-dropdown>This popover dropdown is hidden when detached</c-popover-dropdown>
        </c-popover>
        <c-popover opened position="bottom" width="target" :hide-detached="false">
          <c-popover-target>
            <c-button>Toggle popover</c-button>
          </c-popover-target>
          <c-popover-dropdown>This popover dropdown is visible when detached</c-popover-dropdown>
        </c-popover>
      </c-group>
    </c-box>
  </c-box>
</c-center>

```vue
<template>
  <c-box bd="1px solid var(--c-color-dimmed)" p="xl" style="overflow: auto" :h="200" :w="{ base: 340, sm: 400 }">
    <c-box :h="400" :w="1000">
      <c-group>
        <c-popover opened position="bottom" width="target">
          <c-popover-target>
            <c-button>Toggle popover</c-button>
          </c-popover-target>
          <c-popover-dropdown>This popover dropdown is hidden when detached</c-popover-dropdown>
        </c-popover>
        <c-popover opened position="bottom" width="target" :hide-detached="false">
          <c-popover-target>
            <c-button>Toggle popover</c-button>
          </c-popover-target>
          <c-popover-dropdown>This popover dropdown is visible when detached</c-popover-dropdown>
        </c-popover>
      </c-group>
    </c-box>
  </c-box>
</template>
```

## Disabled

Set the `disabled` prop to prevent `PopoverDropdown` from rendering:

<c-center>
  <c-popover disabled width="200">
    <c-popover-target>
      <c-button>Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Disabled popover dropdown is always hidden</c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover disabled width="200">
    <c-popover-target>
      <c-button>Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Disabled popover dropdown is always hidden</c-popover-dropdown>
  </c-popover>
</template>
```

## Click outside

By default, `Popover` closes when you click outside of the dropdown. To disable this behavior, set `:closeOnClickOutside="false"`.

You can configure events that are used for click-outside detection with the `clickOutsideEvents` prop. By default, `Popover` listens to `mousedown` and `touchstart` events. You can change it to any other events, for example, `mouseup` and `touchend`:

<c-center>
  <c-popover position="bottom" width="200" :click-outside-events="['mouseup', 'touchend']">
    <c-popover-target>
      <c-button>Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Popover will be closed with mouseup and touchend events.</c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover position="bottom" width="200" :click-outside-events="['mouseup', 'touchend']">
    <c-popover-target>
      <c-button>Toggle popover</c-button>
    </c-popover-target>
    <c-popover-dropdown>Popover will be closed with mouseup and touchend events.</c-popover-dropdown>
  </c-popover>
</template>
```

## Initial focus

Popover uses the [FocusTrap](./focus-trap) component to manage focus. Add the `data-autofocus` attribute to the element that should receive initial focus:

<c-center>
  <c-popover trap-focus>
    <c-popover-target>
      <c-button>Target</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <input />
      <input data-autofocus />
      <input />
    </c-popover-dropdown>
  </c-popover>
</c-center>

```vue
<template>
  <c-popover>
    <c-popover-target>
      <c-button>Target</c-button>
    </c-popover-target>
    <c-popover-dropdown>
      <input />
      <input data-autofocus />
      <input />
    </c-popover-dropdown>
  </c-popover>
</template>
```

### PopoverTarget children

`PopoverTarget` requires an element or a component as a single child - strings, fragments, numbers, and multiple elements/components are not supported and **will throw an error**.

## Context menu

Use `PopoverContextMenu` to open the dropdown at the cursor position on right-click. It replaces `PopoverTarget` and wraps the element that should respond to the `contextmenu` event - the browser's default context menu is suppressed, and `PopoverDropdown` is positioned at the cursor. Right-clicking again repositions the dropdown to the new coordinates. `PopoverDropdown` can contain any content. Set `disabled` to restore the browser's default context menu:

<c-popover>
  <c-popover-context-menu>
    <c-paper p="xl" radius="md" style="user-select: none; text-align: center;" with-border>
      <c-text :fw="500">Right-click anywhere inside this area</c-text>
      <c-text c="dimmed" size="sm" :mt="4">A popover will open at the cursor position</c-text>
    </c-paper>
  </c-popover-context-menu>
  <c-popover-dropdown>
    <c-stack gap="xs">
      <c-group gap="sm" wrap="nowrap">
        <c-avatar color="blue" radius="xl">JD</c-avatar>
        <div>
          <c-text size="sm" :fw="500">Jane Doe</c-text>
          <c-text c="dimmed" size="xs">jane@example.com</c-text>
        </div>
      </c-group>
      <c-group gap="xs" grow>
        <c-button size="xs">Message</c-button>
        <c-button size="xs" variant="filled">Follow</c-button>
      </c-group>
    </c-stack>
  </c-popover-dropdown>
</c-popover>

```vue
<template>
  <c-popover>
    <c-popover-context-menu>
      <c-paper p="xl" radius="md" style="user-select: none; text-align: center;" with-border>
        <c-text :fw="500">Right-click anywhere inside this area</c-text>
        <c-text c="dimmed" size="sm" :mt="4">A popover will open at the cursor position</c-text>
      </c-paper>
    </c-popover-context-menu>
    <c-popover-dropdown>
      <c-stack gap="xs">
        <c-group gap="sm" wrap="nowrap">
          <c-avatar color="blue" radius="xl">JD</c-avatar>
          <div>
            <c-text size="sm" :fw="500">Jane Doe</c-text>
            <c-text c="dimmed" size="xs">jane@example.com</c-text>
          </div>
        </c-group>
        <c-group gap="xs" grow>
          <c-button size="xs">Message</c-button>
          <c-button size="xs" variant="filled">Follow</c-button>
        </c-group>
      </c-stack>
    </c-popover-dropdown>
  </c-popover>
</template>
```

### Touch devices

On touch devices (most notably iOS Safari, which does not fire the `contextmenu` event), the dropdown is opened with a long-press instead. Use the `longPressDelay` prop to control how long the element must be pressed before the dropdown opens, `500` ms by default. To prevent the native text-selection callout from appearing under the dropdown on touch devices, `PopoverContextMenu` disables text selection (`user-select: none`) on the wrapped element.

## Accessibility

Popover follows [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal):

- Dropdown element has `role="dialog"` and `aria-labelledby="target-id"` attributes
- Target element has `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls="dropdown-id"` attributes

An uncontrolled Popover will be accessible only when used with a `button` element or component that renders it ([Button](./button), [ActionIcon](./action-icon), etc.). Other elements will not support `Space` and `Enter` key presses.

## Keyboard interactions

|Key|Description|Condition|
|---|---|---|
|<kbd>Escape</kbd>|Closes dropdown|`Focus within dropdown`|
|<kbd>Space/Enter</kbd>|Opens/closes dropdown|`Focus on target element`|

<script setup lang="ts">
import { ref } from 'vue'
import { useDisclosure } from '@cck-ui/hooks'

const { state: controlledOpened, handlers: { close: controlledClose, open: controlledOpen } } = useDisclosure(false)

</script>

<style scope>
.c-Avatar-image {
  margin: 0 !important;
}
</style>

## Props

### Popover props

|Name|Type|Description|Default value|
|---|---|---|---|
|arrowOffset|number|Arrow offset in px|`5`|
|arrowPosition|'center' \| 'side'|Arrow position||
|arrowRadius|number|Arrow `border-radius` in px|`0`|
|arrowSize|number|Arrow size in px|`7`|
|clickOutsideEvents|string[]|Events that trigger outside clicks||
|closeOnClickOutside|boolean|Determines whether dropdown should be closed on outside clicks|`true`|
|closeOnEscape|boolean|Determines whether dropdown should be closed when `Escape` key is pressed|`true`|
|defaultOpened|boolean|Initial opened state for uncontrolled component||
|disabled|boolean|If set, popover dropdown will not be rendered||
|floatingStrategy|FloatingStrategy|Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy)|`'absolute'`|
|hideDetached|boolean|If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen|`true`|
|id|string|Id base to create accessibility connections||
|keepMounted|boolean|If set, the dropdown is not unmounted from the DOM when hidden. `display: none` styles are added instead.||
|middlewares|PopoverMiddlewares|Floating ui middlewares to configure position handling|`{ flip: true, shift: true, inline: false }`|
|offset|number \| FloatingAxesOffsets|Offset of the dropdown element|`8`|
|opened|boolean|Controlled dropdown opened state||
|overlayProps|OverlayProps & ElementProps<'div'>|Props passed down to `Overlay` component||
|portalProps|PortalProps|Props to pass down to the `Portal` when `withinPortal` is true||
|position|FloatingPosition|Dropdown position relative to the target element|`'bottom'`|
|preventPositionChangeWhenVisible|boolean|If `true`, the dropdown picks its side on open (flip runs once, preferring the `position` prop) and then never changes side - scrolling, resizing, and content size changes will not flip the dropdown. The side is recalculated fresh on the next open. Does not affect the `shift` middleware. Set to `false` to keep flip active and allow the dropdown to re-flip on every change.|`true`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius|`theme.defaultRadius`|
|returnFocus|boolean|Determines whether focus should be automatically returned to control when dropdown closes.|`false`|
|shadow|CShadow|Key of `theme.shadows` or any other valid CSS `box-shadow` value||
|transition-props|TransitionProps|Props passed down to the `Transition` component. Use to configure duration and animation type.|`{ duration: 150, transition: 'fade' }`|
|trapFocus|boolean|Determines whether focus should be trapped within dropdown|`false`|
|width|PopoverWidth|Dropdown width, or `'target'` to make dropdown width the same as target element|`'max-content'`|
|withArrow|boolean|Determines whether component should have an arrow|`false`|
|withOverlay|boolean|Determines whether the overlay should be displayed when the dropdown is opened|`false`|
|withRoles|boolean|Determines whether dropdown and target elements should have accessible roles|`true`|
|withinPortal|boolean|Determines whether dropdown should be rendered within the `Portal`|`true`|
|zIndex|string \| number|Dropdown `z-index`|`300`|

### Popover events

|Name|Type|Description|
|---|---|---|
|change|(opened: boolean) => void|Called with current state when dropdown opens or closes|
|close|() => void|Called when dropdown closes|
|dismiss|() => void|Called when the popover is dismissed by clicking outside or by pressing escape|
|enter-transition-end|() => void|Called when enter transition ends|
|exit-transition-end|() => void|Called when exit transition ends|
|open|() => void|Called when dropdown opens|
|position-change|(position: FloatingPosition) => void|Called when dropdown position changes|

### PopoverTarget props

|Name|Type|Description|Default value|
|---|---|---|---|
|popupType|string|Popup accessible type|`'dialog'`|
|refProp|string|Key of the prop that should be used to access element ref|

### PopoverContextMenu props

|Name|Type|Description|Default value|
|---|---|---|---|
|disabled|If set, the right-click trigger is disabled and the browser's default context menu is shown||
|longPressDelay|number|Delay in ms before a touch long-press opens the dropdown touch devices|`500`|

## Styles API

`Popover` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Popover Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|dropdown|.c-Popover-dropdown|Dropdown element|
|arrow|.c-Popover-arrow|Dropdown arrow|
|overlay|.c-Popover-overlay|Overlay element|

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
      <td rowspan="2">dropdown</td>
      <td>--popover-radius</td>
      <td>Controls dropdown border-radius</td>
    </tr>
    <tr>
      <td>--popover-shadow</td>
      <td>Controls dropdown box-shadow</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Value|
|---|---|---|
|dropdown|data-position|Value of floating ui dropdown position|