---
title: RollingNumber
lang: en-US
---

# RollingNumber

Animate value changes with rolling digits

## Usage

`RollingNumber` animates value changes with rolling digit transitions. Each digit independently rolls to its new position when the value changes.

<c-stack>
  <c-rolling-number :fz="36" :value="usageValue" />
  <c-group>
    <c-button @click="() => usageValue += 1">Increment</c-button>
    <c-button @click="() => usageValue -= 1">Decrement</c-button>
    <c-button @click="() => usageValue = Math.floor(Math.random() * 10000)">Random</c-button>
  </c-group>
</c-stack>

```vue
<template>
  <c-stack>
    <c-rolling-number :fz="36" :value="value" />
    <c-group>
      <c-button @click="() => value += 1">Increment</c-button>
      <c-button @click="() => value -= 1">Decrement</c-button>
      <c-button @click="() => value = Math.floor(Math.random() * 10000)">Random</c-button>
    </c-group>
  </c-stack>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1234)
</script>
```

## Prefix and suffix

Set `prefix` and `suffix` props to add static text before or after the animated number. Use `thousandSeparator` to separate thousands and `decimalScale` with `fixedDecimalScale` to control decimal formatting:

<c-stack>
  <c-rolling-number fixed-decimal-scale prefix="$ " suffix=" USD" thousand-separator :decimal-scale="2" :fz="32" :value="psValue" />
  <c-group>
    <c-button @click="() => psValue = +(psValue + 10.5).toFixed(2)">+10.50</c-button>
    <c-button @click="() => psValue = +(psValue - 10.5).toFixed(2)">-10.50</c-button>
    <c-button @click="() => psValue = +(Math.random() * 10000).toFixed(2)">Random</c-button>
  </c-group>
</c-stack>

```vue
<template>
  <c-stack>
    <c-rolling-number fixed-decimal-scale prefix="$ " suffix=" USD" thousand-separator :decimal-scale="2" :fz="32" :value="psValue" />
    <c-group>
      <c-button @click="() => value = +(value + 10.5).toFixed(2)">+10.50</c-button>
      <c-button @click="() => value = +(value - 10.5).toFixed(2)">-10.50</c-button>
      <c-button @click="() => value = +(Math.random() * 10000).toFixed(2)">Random</c-button>
    </c-group>
  </c-stack>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(99.99)
</script>
```

## Animation duration

Control animation speed with `animationDuration` prop (in milliseconds, default is `600`). Use `timingFunction` prop to change the CSS timing function (default is `ease`):

<c-stack>
  <div>
    <c-text c="dimmed" size="sm">200ms</c-text>
    <c-rolling-number :animation-duration="200" :fz="28" :value="adValue" />
  </div>
  <div>
    <c-text c="dimmed" size="sm">600ms (default)</c-text>
    <c-rolling-number :animation-duration="600" :fz="28" :value="adValue" />
  </div>
  <div>
    <c-text c="dimmed" size="sm">1200ms</c-text>
    <c-rolling-number :animation-duration="1200" :fz="28" :value="adValue" />
  </div>
  <c-group>
    <c-button @click="() => adValue = Math.floor(Math.random() * 1000)">Random</c-button>
  </c-group>
</c-stack>

```vue
<template>
  <c-stack>
    <div>
      <c-text c="dimmed" size="sm">200ms</c-text>
      <c-rolling-number :animation-duration="200" :fz="28" :value="value" />
    </div>
    <div>
      <c-text c="dimmed" size="sm">600ms (default)</c-text>
      <c-rolling-number :animation-duration="600" :fz="28" :value="value" />
    </div>
    <div>
      <c-text c="dimmed" size="sm">1200ms</c-text>
      <c-rolling-number :animation-duration="1200" :fz="28" :value="value" />
    </div>
    <c-group>
      <c-button @click="() => value = Math.floor(Math.random() * 1000)">Random</c-button>
    </c-group>
  </c-stack>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(500)
</script>
```

## Text selection and copying

Each animated digit is rendered as a stack of all possible values which is clipped to display only the current digit. To keep the hidden digits out of the clipboard, the animated part is not selectable: text selection is handed by a transparent copy of the formatted value rendered on top of the digits, Selecting and copy `RollingNumber` always produces the value as it is displayed, for example `$1,234,56 USD`.

<script setup lang="ts">
import { ref } from 'vue'

const usageValue = ref(1234)
const psValue = ref(99.99)
const adValue = ref(500)
</script>

## Props

### RollingNumber props

|Name|Type|Description|Default value|
|---|---|---|---|
|animationDuration|number|Animation duration in milliseconds|`600`|
|decimalScale|number|Number of decimal places to display||
|decimalSeparator|string|Character used as a decimal separator|`'.'`|
|fixedDecimalScale|boolean|If set, trailing zeros are added to match `decimalScale`|`false`|
|prefix|string|Prefix added before the value||
|suffix|string|Suffix added after the value||
|tabularNumbers|boolean|If set, use tabular (monospace numbers)|`true`|
|thousandSeparator|string \| boolean|Character used to separate thousands, set to `true` for `,`|`false`|
|timingFunction|string|CSS timing function for animation|`'ease'`|
|value <span style="color: var(--c-color-red-filled)">*</span>|number|Number value to display||
|withLiveRegion|boolean|If set, the root element acts an `aira-live="polite"` region (`role="status"`) and screen readers announce every value change. When `false`, the root uses `role="img"` so the current value is still accessible but updates are not announced.|`false`|

## Styles API

`RollingNumber` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### RollingNumber Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-RollingNumber-root|Root element|
|char|.c-RollingNumber-char|Char element|
|digit|.c-RollingNumber-digit|Digit element|
|digitColumn|.c-RollingNumber-digitColumn|DigitColumn element|
|copyValue|.c-RollingNumber-copyValue|CopyValue element|

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
      <td rowspan="2">digitColumn</td>
      <td>--rn-roll-from</td>
      <td>Digit column rolling from</td>
    </tr>
    <tr>
      <td>--rn-roll-to</td>
      <td>Digit column rolling to</td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|root|data-tabular-numbers|`tabularNumbers` prop is set|
|digit|data-empty|when a digit is collapsed|
|digitColumn|data-direction|rolling direction auto set|