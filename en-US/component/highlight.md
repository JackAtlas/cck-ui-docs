---
title: Highlight
lang: en-US
---

# Highlight

Highlight given part of a string with mark

## Usage

Use the highlight component to highlight substrings within text using the HTML `<mark>` element.

Pass the text as children and specify which substring(s) to highlight with the `highlight` prop. Matching is **case-insensitive** and **accent-insensitive** by default, and highlights all occurrences of the matched substring. Use the `caseInsensitive` and `accentInsensitive` props to opt out.

<c-highlight highlight="this" :case-insensitive="true">Highlight This, definitely THIS and also this!</c-highlight>

```vue
<template>
  <c-highlight highlight="this" :case-insensitive="true">Highlight This, definitely THIS and also this!</c-highlight>
</template>
```

## Matching behavior

- **Case-insensitive**: 'hello' matches 'Hello', 'HELLO', 'hElLo', etc. (controlled by `caseInsensitive`, defaults to `true`)
- **Accent-insensitive**: 'cafe' matches 'café', 'cafè', 'CAFÉ', etc. (controlled by `accentInsensitive`, defaults to `true`)
- **All occurrences**: Every instance of the matched substring is highlighted
- **Special characters**: Regex special characters like `[`, `]`, `(`, `)` are automatically escaped and treated as literal text
- **Whitespace**: Leading and trailing whitespacing in highlight strings is trimmed and ignored
- **Empty strings**: Empty or whitespace-only highlight strings are ignored

## Case-sensitive matching

Set `:case-insensitive="false"` to only match substrings with the same casing as the highlight term:

<c-stack gap="md">
  <div>
    <c-text size="sm" :fw="500" :mb="5">With case-insensitive matching (default)</c-text>
    <c-highlight highlight="this" :case-insensitive="true">Highlight This, definitely THIS and also this!</c-highlight>
  </div>
  <div>
    <c-text size="sm" :fw="500" :mb="5">With case-sensitive matching (:case-insensitive="false")</c-text>
    <c-highlight highlight="this" :case-insensitive="false">Highlight This, definitely THIS and also this!</c-highlight>
  </div>
</c-stack>

```vue
<template>
  <c-stack gap="md">
    <div>
      <c-text size="sm" :fw="500" :mb="5">With case-insensitive matching (default)</c-text>
      <c-highlight highlight="this" :case-insensitive="true">Highlight This, definitely THIS and also this!</c-highlight>
    </div>
    <div>
      <c-text size="sm" :fw="500" :mb="5">With case-sensitive matching (:case-insensitive="false")</c-text>
      <c-highlight highlight="this" :case-insensitive="false">Highlight This, definitely THIS and also this!</c-highlight>
    </div>
  </c-stack>
</template>
```

## Accent-sensitive matching

Set `:accent-insensitie="false"` to require accented characters in the text to match the highlight term exactly:

<c-stack gap="md">
  <div>
    <c-text size="sm" :fw="500" :mb="5">With accent-insensitive matching (default)</c-text>
    <c-highlight highlight="cafe" :accent-insensitive="true" :case-insensitive="true">We visited café and cafe</c-highlight>
  </div>
  <div>
    <c-text size="sm" :fw="500" :mb="5">With accent-sensitive matching (:accent-insensitive="false")</c-text>
    <c-highlight highlight="cafe" :accent-insensitive="false" :case-insensitive="true">We visited café and cafe</c-highlight>
  </div>
</c-stack>

```vue
<template>
  <c-stack gap="md">
    <div>
      <c-text size="sm" :fw="500" :mb="5">With accent-insensitive matching (default)</c-text>
      <c-highlight highlight="cafe" :accent-insensitive="true" :case-insensitive="true">We visited café and cafe</c-highlight>
    </div>
    <div>
      <c-text size="sm" :fw="500" :mb="5">With accent-sensitive matching (:accent-insensitive="false")</c-text>
      <c-highlight highlight="cafe" :accent-insensitive="false" :case-insensitive="true">We visited café and cafe</c-highlight>
    </div>
  </c-stack>
</template>
```

## Highlight multiple substrings

To highlight multiple substrings, provide an array of values. When multiple substrings are provided, longer matches take precedence to avoid partial overlaps.

<c-highlight :highlight="['this', 'that']">Highlight this and also that</c-highlight>

```vue
<template>
  <c-highlight :highlight="['this', 'that']">Highlight this and also that</c-highlight>
</template>
```

## Custom colors per term

You can assign different colors to different highlighted terms by providing an array of objects with `text` and `color` properties:

<c-highlight :case-insensitive="true" :highlight="[{text: 'error', color: 'red'}, {text: 'warning', color: 'yellow'}, {text: 'success', color: 'green'}]">Error: Invalid input. Warning: Check this field. Success: All tests passed.</c-highlight>

```vue
<template>
  <c-highlight :case-insensitive="true" :highlight="[{text: 'error', color: 'red'}, {text: 'warning', color: 'yellow'}, {text: 'success', color: 'green'}]">Error: Invalid input. Warning: Check this field. Success: All tests passed.</c-highlight>
</template>
```

## Whole word matching

Use the `wholeWord` prop to match only complete words. When enabled, 'the' will not match 'there' or 'theme':

<c-stack gap="md">
  <div>
    <c-text size="sm" :fw="500" :mb="5">With whole-word matching (:whole-word="true")</c-text>
    <c-highlight highlight="the" :case-insensitive="true" :whole-word="true">The theme is there</c-highlight>
  </div>
  <div>
    <c-text size="sm" :fw="500" :mb="5">Without whole word matching (default)</c-text>
    <c-highlight highlight="the" :case-insensitive="true">The theme is there</c-highlight>
  </div>
</c-stack>

```vue
<template>
  <c-stack gap="md">
    <div>
      <c-text size="sm" :fw="500" :mb="5">With whole-word matching (:whole-word="true")</c-text>
      <c-highlight highlight="the" :case-insensitive="true" :whole-word="true">The theme is there</c-highlight>
    </div>
    <div>
      <c-text size="sm" :fw="500" :mb="5">Without whole word matching (default)</c-text>
      <c-highlight highlight="the" :case-insensitive="true">The theme is there</c-highlight>
    </div>
  </c-stack>
</template>
```

## Change highlight styles

Default [Mark](./mark) styles can be overwritten with the `highlightStyles` prop, which accepts either an object with styles or a function that receives the theme as a parameter and returns styles:

<c-highlight :highlight="['highlighted', 'default']" :highlight-styles="{ backgroundImage: 'linear-gradient(45deg, var(--c-color-cyan-5), var(--c-color-indigo-5))', fontWeight: 700, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }">You can change styles of highlighted part if you do not like default styles</c-highlight>

```vue
<template>
  <c-highlight :highlight="['highlighted', 'default']" :highlight-styles="{ backgroundImage: 'linear-gradient(45deg, var(--c-color-cyan-5), var(--c-color-indigo-5))', fontWeight: 700, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }">You can change styles of highlighted part if you do not like default styles</c-highlight>
</template>
```

## Text props

Highlight is based on the [Text](./text) component - all Text props except `color` are available. Use the `color` prop to change the highlight background color, not the text color.

<c-highlight c="var(--c-color-anchor)" href="https://cck-ui.jackatlas.xyz" highlight="cck ui" tag="a" target="_blank" :case-insensitive="true" :fw="500">CCK UI website</c-highlight>

## Props

### Highlight props

|Name|Type|Description|Default value|
|---|---|---|---|
|accentInsensitive|boolean|Perform accent-insensitive matching. When enabled cafe will match cafe, café, cafè, etc.|`true`|
|caseInsensitive|boolean|Perform case-insensitive matching.|`true`|
|color|string \| (string & {})|Default background color for all highlighted text. Key of `theme.colors` or any valid CSS color, passed to `Mark` component. Can be overridden per term when using HighlightTerm objects.|`'yellow'`|
|gradient|CGradient|Gradient configuration, ignored when `variant` is not `gradient`|`theme.defaultGradient`|
|highlight <span style="color: var(--c-color-red-filled);">*</span>|string \| string[] \| HighlightTerm[]|Substring(s) to highlight in default slot. Can be:<br><ul><li>string: single term</li><li>string[]: multiple terms with same color</li><li>HighlightTerm[]: multiple terms with custom colors per term</li><li>Matching is case-insensitive and accent-insensitive by default, use `caseInsensitive` and `accentInsensitive` props to control this behavior</li><li>Regex special characters are automatically escaped</li><li>When multiple substrings are provided, longer matches take precedence</li><li>Empty strings and whitespace-only strings are ignored</li></ul>||
|highlightStyles|Properties \| (theme: CTheme) => Properties|Styles applied to `mark` elements||
|inherit|boolean|Determines whether font properties should be inherited from the parent|`false`|
|inline|boolean|Sets `line-height` to 1 for centering|`false`|
|lineClamp|number|Number of lines after which Text will be truncated||
|size|CSize \| (string & {})|Controls `font-size` and `line-height`|`'md'`|
|span|boolean|Shorthand for `tag="span"`||
|textWrap|"wrap" \| "nowrap" \| "balance" \| "pretty" \| "stable"|Controls `text-wrap` CSS property||
|truncate|TextTruncate|Side on which Text must be truncated, if `true`, text is truncated from the start||
|wholeWord|boolean|Only match whole words (adds word boundaries to regex). When enabled, 'the' will not match 'there'.|`false`|

## Styles API

`Highlight` component supports the [Styles API](../styles/styles-api); you can add styles to any inner element of the component with the `classNames` prop. Follow the [Styles API](../styles/styles-api) documentation to learn more.

### Highlight Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Highlight-root|Root element|
