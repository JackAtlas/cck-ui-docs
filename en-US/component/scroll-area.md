---
title: ScrollArea
lang: en-US
---

# ScrollArea

Area with custom scrollbars

## Usage

The `ScrollArea` component supports the following props:

- `type` defines scrollbars behavior:
  - `hover` - scrollbars are visible on hover
  - `scroll` - scrollbars are visible on scroll
  - `auto` - similar to `overflow: auto` - scrollbars are always visible when the content is overflowing
  - `always` - same as `auto`, but scrollbars are always visible regardless of whether the content is overflowing
  - `never` - scrollbars are always hidden
- `offsetScrollbars` - adds padding to offset scrollbars with the following options:
  - `true` - adds padding to offset both scrollbars
  - `x` - adds padding to offset horizontal scrollbar only
  - `y` - adds padding to offset vertical scrollbar only
  - `present` - adds padding only when scrollbars are visible
- `scrollbarSize` - scrollbar size, controls scrollbar and thumb width/height
- `scrollHideDelay` - delay in ms to hide scrollbars, applicable only when type is `hover` or `scroll`
- `overscrollBehavior` - controls [overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior) of the viewport

<c-scroll-area mt="md" :h="250">
  <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
  <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
  <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
  <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
</c-scroll-area>

```vue
<template>
  <c-scroll-area :h="250">
    <!-- content -->
  </c-scroll-area>
</template>
```

## Horizontal scrollbars

<c-scroll-area mt="md" :h="200" :w="300">
  <c-box :w="600">
    <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
    <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
    <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
    <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
  </c-box>
</c-scroll-area>

```vue
<template>
  <c-scroll-area :h="200" :w="300">
    <c-box :w="600">
      <!-- content -->
    </c-box>
  </c-scroll-area>
</template>
```

## Disable horizontal scrollbars

To disable horizontal scrollbars, set the `scrollbars="y"` prop:

<c-scroll-area mt="md" scrollbars="y" :h="200" :w="300">
  <c-box :w="600">
    <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
    <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
    <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
    <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
  </c-box>
</c-scroll-area>

```vue
<template>
  <c-scroll-area scrollbars="y" :h="200" :w="300">
    <c-box :w="600">
      <!-- content -->
    </c-box>
  </c-scroll-area>
</template>
```

## Vertical scrollbar position

By default, the vertical scrollbar follows the inline-end edge: it is rendered on the right side in LTR and on the left side in RTL. Set the `verticalScrollbarPosition` prop to `left` or `right` to pin the vertical scrollbar to a physical side regardless of direction.

This is useful for RTL applications where users expect the vertical scrollbar to stay on the right, matching the behavior of most desktop software (Windows, Office, Gmail, etc.). The prop also realigns the offset padding, the corner and the horizontal scrollbar gap, so it works correctly with `offsetScrollbars` and `scrollbars="xy"`. When the prop is omitted, the default direction-based behavior is preserved.

<c-scroll-area mt="md" offset-scrollbars scrollbars="y" type="always" vertical-scrollbar-position="left" :h="200" :w="300">
  <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
  <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
  <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
  <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
</c-scroll-area>

```vue
<template>
  <c-scroll-area offset-scrollbars scrollbars="y" type="always" vertical-scrollbar-position="left" :h="200" :w="300">
    <!-- content -->
  </c-scroll-area>
</template>
```

## Subscribe to scroll position changes

Set the `onScrollPositionChange` function to subscribe to scroll position changes. It will be called each time the user scrolls with x and y coordinates:

<c-scroll-area mt="md" :h="200" :w="300" :on-scroll-position-change="setScrollPosition">
  <c-box :w="600">
    <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
    <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
    <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
    <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
  </c-box>
</c-scroll-area>

<c-text>Scroll position: <c-code>{ x: {{ scrollPosition.x }}, y: {{ scrollPosition.y }} }</c-code></c-text>

```vue
<template>
  <c-scroll-area mt="md" :h="200" :w="300" :on-scroll-position-change="setScrollPosition">
    <c-box :w="600">
      <!-- content -->
    </c-box>
  </c-scroll-area>

  <c-text>Scroll position: <c-code>{ x: {{ scrollPosition.x }}, y: {{ scrollPosition.y }} }</c-code></c-text>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Coordinate = { x: number, y: number }
const scrollPosition = ref<Coordinate>({ x: 0, y: 0})
const setScrollPosition = (v: Coordinate) => {
  scrollPosition.value.x = v.x
  scrollPosition.value.y = v.y
}
</script>
```

## Scroll boundary callbacks

`ScrollArea` component supports callbacks that are triggered when scrolling reaches boundaries:

<c-stack align="center">
  <c-group>
    <c-badge color="blue" variant="filled">Top: {{ topReached }}</c-badge>
    <c-badge color="green" variant="filled">Bottom: {{ bottomReached }}</c-badge>
    <c-badge color="orange" variant="filled">Left: {{ leftReached }}</c-badge>
    <c-badge color="grape" variant="filled">Right: {{ rightReached }}</c-badge>
  </c-group>

  <c-scroll-area
    :h="200"
    :w="300"
    :on-top-reached="topReachedIncrease"
    :on-bottom-reached="bottomReachedIncrease"
    :on-left-reached="leftReachedIncrease"
    :on-right-reached="rightReachedIncrease"
  >
    <c-box :w="600">
      <c-text v-for="(_, i) in Array(50).fill(0)" :key="i">Line {{ i + 1 }} - This is a long line that requires horizontal scrolling</c-text>
    </c-box>
  </c-scroll-area>
</c-stack>

```vue
<template>
  <c-stack align="center">
    <c-group>
      <c-badge color="blue" variant="filled">Top: {{ topReached }}</c-badge>
      <c-badge color="green" variant="filled">Bottom: {{ bottomReached }}</c-badge>
      <c-badge color="orange" variant="filled">Left: {{ leftReached }}</c-badge>
      <c-badge color="grape" variant="filled">Right: {{ rightReached }}</c-badge>
    </c-group>

    <c-scroll-area
      :h="200"
      :w="300"
      :on-top-reached="topReachedIncrease"
      :on-bottom-reached="bottomReachedIncrease"
      :on-left-reached="leftReachedIncrease"
      :on-right-reached="rightReachedIncrease"
    >
      <c-box :w="600">
        <c-text v-for="(_, i) in Array(50).fill(0)" :key="i">Line {{ i + 1 }} - This is a long line that requires horizontal scrolling</c-text>
      </c-box>
    </c-scroll-area>
  </c-stack>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const topReached = ref(0)
const bottomReached = ref(0)
const leftReached = ref(0)
const rightReached = ref(0)

const topReachedIncrease = () => (topReached.value += 1)
const bottomReachedIncrease = () => (bottomReached.value += 1)
const leftReachedIncrease = () => (leftReached.value += 1)
const rightReachedIncrease = () => (rightReached.value += 1)
</script>
```

## Scroll to position

To programmatically scroll to any position, get the viewport element ref with the `viewportRef` prop and call the `scrollTo` method:

<c-stack align="center">
  <c-scroll-area :h="200" :w="300" :viewport-ref="(el) => (viewport = el)">
    <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
    <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
    <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
    <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
  </c-scroll-area>

  <c-group justify="center">
    <c-button variant="filled" @click="scrollToBottom">Scroll to bottom</c-button>
    <c-button variant="filled" @click="scrollToCenter">Scroll to center</c-button>
    <c-button variant="filled" @click="scrollToTop">Scroll to top</c-button>
  </c-group>
</c-stack>

```vue
<template>
  <c-stack align="center">
    <c-scroll-area :h="200" :w="300" :viewport-ref="(el) => (viewport = el)">
      <!-- content -->
    </c-scroll-area>

    <c-group justify="center">
      <c-button variant="filled" @click="scrollToBottom">Scroll to bottom</c-button>
      <c-button variant="filled" @click="scrollToCenter">Scroll to center</c-button>
      <c-button variant="filled" @click="scrollToTop">Scroll to top</c-button>
    </c-group>
  </c-stack>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const viewport = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: el.scrollHeight,
    behavior: 'smooth'
  })
}
const scrollToCenter = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: el.scrollHeight / 2,
    behavior: 'smooth'
  })
}
const scrollToTop = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
```

or using the exposed ref:

```vue
<template>
  <c-stack align="center">
    <c-scroll-area ref="scrollAreaRef" :h="200" :w="300">
      <!-- content -->
    </c-scroll-area>

    <c-group justify="center">
      <c-button variant="filled" @click="scrollToBottom">Scroll to bottom</c-button>
      <c-button variant="filled" @click="scrollToCenter">Scroll to center</c-button>
      <c-button variant="filled" @click="scrollToTop">Scroll to top</c-button>
    </c-group>
  </c-stack>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const scrollAreaRef = ref()
const viewport = computed(() => scrollAreaRef.value?.viewport ?? null)

const scrollToBottom = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: el.scrollHeight,
    behavior: 'smooth'
  })
}
const scrollToCenter = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: el.scrollHeight / 2,
    behavior: 'smooth'
  })
}
const scrollToTop = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
```

## Start scroll position

Use the `startScrollPosition` prop to set the initial scroll position when the component mounts.

<c-scroll-area scrollbars="y" type="always" :h="200" :start-scroll-position="{ y: 260 }">
  <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
  <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
  <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
  <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
</c-scroll-area>

```vue
<template>
  <c-scroll-area scrollbars="y" type="always" :h="200" :start-scroll-position="{ y: 260 }">
    <!-- content -->
  </c-scroll-area>
</template>
```

## Styles API

<c-scroll-area offset-scrollbars type="always" :classNames="classes" :h="200" :w="300">
  <c-box :w="600">
    <c-text fw="700" size="xl">Charizard (Pokémon)</c-text>
    <c-text c="dimmed">Charizard description from Bulbapedia</c-text>
    <c-text mt="md" size="sm">Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.</c-text>
    <c-text mt="md" size="sm">As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.</c-text>
  </c-box>
</c-scroll-area>

```vue
<template>
  <c-scroll-area offset-scrollbars type="always" :classNames="classes" :h="200" :w="300">
    <c-box :w="600">
      <!-- content -->
    </c-box>
  </c-scroll-area>
</template>

<script setup lang="ts">
import classes from './demo.module.css'
</script>
```

```scss
// demo.module.css
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--c-color-gray-0), var(--c-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--c-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--c-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--c-color-gray-0), var(--c-color-dark-6));
  opacity: 1;
}
```

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import classes from './_styles/scroll-area-styles-api.module.css'

type Coordinate = { x: number, y: number }
const scrollPosition = ref<Coordinate>({ x: 0, y: 0})
const setScrollPosition = (v: Coordinate) => {
  scrollPosition.value.x = v.x
  scrollPosition.value.y = v.y
}

const topReached = ref(0)
const bottomReached = ref(0)
const leftReached = ref(0)
const rightReached = ref(0)

const topReachedIncrease = () => (topReached.value += 1)
const bottomReachedIncrease = () => (bottomReached.value += 1)
const leftReachedIncrease = () => (leftReached.value += 1)
const rightReachedIncrease = () => (rightReached.value += 1)

const viewport = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: el.scrollHeight,
    behavior: 'smooth'
  })
}
const scrollToCenter = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: el.scrollHeight / 2,
    behavior: 'smooth'
  })
}
const scrollToTop = () => {
  const el = viewport.value
  if (!el) return
  el.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

## Props

### ScrollArea props

|Name|Type|Description|Default value|
|---|---|---|---|
|offsetScrollbars|boolean \| "x" \| "y" \| "present"|Determines whether scrollbars should be offset with padding on given axis<br>- `true` - adds padding to offset both scrollbars (always)<br>- `'x'` - adds padding to offset horizontal scrollbar (always)<br>- `'y'` - adds padding to offset vertical scrollbar (always)<br>- `'present'` - adds padding only when scrollbars are visible (dynamic)|`false`|
|onBottomReached|() => void|Called when scrollarea is scrolled to the bottom (within 0.8px tolerance for sub-pixel rendering)||
|onLeftReached|() => void|Called when scrollarea is scrolled to the left (within 0.8px tolerance for sub-pixel rendering)||
|onRightReached|() => void|Called when scrollarea is scrolled to the right (within 0.8px tolerance for sub-pixel rendering)||
|onScrollPositionChange|(position: { x: number; y: number }) => void|Called with current position (`x` and `y` coordinates) when viewport is scrolled||
|onTopReached|() => void|Called when scrollarea is scrolled to the top (within 0.8px tolerance for sub-pixel rendering)||
|overscrollBehavior|OverscrollBehavior|Defines `overscroll-behavior` of the viewport||
|scrollHideDelay|number|Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`|`1000`|
|scrollbarSize|string \| number|Scrollbar size, any valid CSS value for width/height, numbers are converted to rem|`'12px'('0.75rem')`|
|scrollbars|`false \| "x" \| "y" \| "xy"| Axis at which scrollbars must be rendered<br>- `'x'` - horizontal scrollbar only<br>- `'y'` - vertical scrollbar only<br>- `'xy'` - both scrollbars<br>- `false` - no scrollbars rendered (content remains scrollable via mouse/touch)|`'xy'`|
|startScrollPosition|{ x?: number; y?: number }|Initial scroll position set on mount||
|type|"auto" \| "scroll" \| "always" \| "hover" \| "never"|Defines scrollbars behavior<br>- `'hover'` - scrollbars visible on hover (default)<br>- `'scroll'` - scrollbars visible during scrolling<br>- `'auto'` - scrollbars visible only when content overflows (like CSS overflow: auto)<br>- `'always'` - scrollbars always visible, even when content doesn't overflow<br>- `'never'` - scrollbars always hidden|`'hover'`|
|verticalScrollbarPosition|"left" \| "right"|Pins the vertical scrollbar to a physical side (`left` or `right`) regardless of direction. By default, the scrollbar follows the inline-end edge (right in LTR, left in RTL).||
|viewportProps|ComponentProps\<"div">|Props passed to the viewport element||
|viewportRef|Ref\<HTMLDivElement \| null> \|<br> ((el: HTMLDivElement \| null) => void)|Assigns viewport element (scrollable container) ref||

### ScrollArea exposes

|Name|Description|
|---|---|
|root|root element|
|viewport|viewport element|

## Styles API

`ScrollArea` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### ScrollArea Styles API

#### Selectors:

|Selector|Static selector|Description|
|---|---|---|
|root|.c-ScrollArea-root|Root element|
|content|.c-ScrollArea-content|Wraps content children|
|viewport|.c-ScrollArea-viewport|Main scrollable area|
|scrollbar|.c-ScrollArea-scrollbar|Horizontal or vertical scrollbar root|
|thumb|.c-ScrollArea-thumb|Scrollbar thumb|
|corner|.c-ScrollArea-corner|Corner between horizontal and vertical scrollbars|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--scrollarea-scrollbar-size|Scrollbar size|

#### Data attributes

|Selector|Attribute|Condition|Value|
|---|---|---|---|
|scrollbar, corner|data-hidden|type="never"|-|
|corner|data-hovered|One of the scrollbars is hovered|-|
|scrollbar|data-orientation|-|"horizontal" or "vertical" depending on scrollbar position|