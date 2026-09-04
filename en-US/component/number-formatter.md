---
title: NumberFormatter
lang: en-US
---

# NumberFormatter

Format number with thousands/decimal separators and suffix/prefix

## Usage

Use `NumberFormatter` to format numbers. It supports the same formatting-related props as the NumberInput(WIP) component.

<c-number-formatter prefix="$ " thousand-separator :value="1000000" />

```vue
<template>
  <c-number-formatter prefix="$ " thousand-separator :value="1000000" />
</template>
```

## Prefix and suffix

Set the `prefix` and `suffix` props to add a given string to the start or end of the value:

<c-stack>
  <div>
    With prefix: <c-number-formatter prefix="$ " :value="100" />
  </div>
  <div>
    With suffix: <c-number-formatter suffix=" RUB" :value="100" />
  </div>
</c-stack>

```vue
<template>
  <div>
    With prefix: <c-number-formatter prefix="$ " :value="100" />
  </div>
  <div>
    With suffix: <c-number-formatter suffix=" RUB" :value="100" />
  </div>
</template>
```

## Thousands separator

Set the `thousandSeparator` prop to separate thousands with a character. You can control the grouping logic with `thousandsGroupStyle`, which accepts: `thousand`, `lakh`, `wan`, `none` values.

<c-stack>
  <div>
    With default separator: <c-number-formatter thousand-separator :value="1000000" />
  </div>
  <div>
    With custom separator: <c-number-formatter thousand-separator="." decimal-separator="." :value="1000000" />
  </div>
</c-stack>

```vue
<template>
  <div>
    With default separator: <c-number-formatter thousand-separator :value="1000000" />
  </div>
  <div>
    With custom separator: <c-number-formatter thousand-separator="." decimal-separator="." :value="1000000" />
  </div>
</template>
```

## Decimal scale

The `decimalScale` prop controls the number of allowed decimal places:

<c-number-formatter :decimal-scale="2" :value="5 / 3" />

```vue
<template>
  <c-number-formatter :decimal-scale="2" :value="5 / 3" />
</template>
```

## Props

### NumberFormatter props

|Name|Type|Description|Default value|
|---|---|---|---|
|allowNegative|boolean|If set, negative values are allowed|`true`|
|decimalScale|number|Limits the number of digits that are displayed after the decimal point|`Infinity`|
|decimalSeparator|string|Character used as a decimal separator, `'.'` by default||
|fixedDecimalScale|boolean|If set, zeros are added after `decimalSeparator` to match given `decimalScale`|`false`|
|prefix|string|Prefix added before the value||
|suffix|string|Suffix added after the value||
|thousandSeparator|string \| boolean|A character used to separate thousands|`','`|
|thousandsGroupStyle|"none" \| "thousand" \| "lakh" \| "wan"|Defines the thousand grouping style|
|value|string \| number|Value to format||