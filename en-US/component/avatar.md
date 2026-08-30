---
title: Avatar
lang: en-US
---

# Avatar

Display user profile image, initials or fallback icon

## Usage

<c-group>
  <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" />
  <c-avatar radius="xl" />
  <c-avatar color="cyan" radius="xl">MK</c-avatar>
  <c-avatar color="blue" radius="sm">
    <star-icon :size="20" />
  </c-avatar>
</c-group>

```vue
<template>
  <c-group>
    <!-- With image -->
    <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" />

    <!-- Default placeholder -->
    <c-avatar radius="xl" />

    <!-- Letters with xl radius -->
    <c-avatar color="cyan" radius="xl">MK</c-avatar>

    <!-- Custom placeholder icon -->
    <c-avatar color="blue" radius="sm">
      <star-icon :size="20" />
    </c-avatar>
  </c-group>
</template>

<script setup lang="ts">
import { StarIcon } from '@lucide/vue'
</script>

<style scope>
.c-Avatar-image {
  margin: 0 !important;
}
</style>
```

## Initials

To display initials instead of the default placeholder, set the `name` prop to the name of the person, for example, `name="John Doe"`. If the name is set, you can use `color="initials"` to generate a color based on the name:

<c-group>
  <c-avatar color="initials" v-for="name in names" :key="name" :name="name"></c-avatar>
</c-group>

```vue
<template>
  <c-group>
    <c-avatar color="initials" v-for="name in names" :key="name" :name="name"></c-avatar>
  </c-group>
</template>

<script setup lang="ts">
const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
]
</script>
```

## Allowed initials colors

By default, all colors from the default theme are allowed for initials. You can restrict them by providing the `allowedInitialsColors` prop with an array of colors. Note that the default colors array does not include custom colors defined in the theme - you need to provide them manually if needed.

<c-group>
  <c-avatar color="initials" v-for="name in names" :key="name" :allowedInitialsColors="['blue', 'red']" :name="name"></c-avatar>
</c-group>

```vue
<template>
  <c-group>
    <c-avatar color="initials" v-for="name in names" :key="name" :allowedInitialsColors="['blue', 'red']" :name="name"></c-avatar>
  </c-group>
</template>

<script setup lang="ts">
const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
]
</script>
```

## Placeholder

If the image cannot be loaded or is not provided, `Avatar` will display a placeholder instead. By default, the placeholder is an icon, but it can be changed to any Vue node:

<c-group>
  <c-avatar alt="no image here" src="" />
  <c-avatar alt="no image here" color="indigo" src="" />
  <c-avatar alt="Jack Atlas" color="red" src="">JA</c-avatar>
  <c-avatar color="blue" radius="xl">
    <star-icon :size="20" />
  </c-avatar>
</c-group>

```vue
<template>
  <c-group>
    <!-- Defualt placeholder -->
    <c-avatar alt="no image here" src="" />

    <!-- Default placeholder with custom color -->
    <c-avatar alt="no image here" color="indigo" src="" />

    <!-- Placeholder with initial -->
    <c-avatar alt="Jack Atlas" color="red" src="">JA</c-avatar>

    <!-- Placeholder with custom icon -->
    <c-avatar color="blue" radius="xl">
      <star-icon :size="20" />
    </c-avatar>
  </c-group>
</template>
```

## Variants

<c-group>
  <c-avatar color="blue" radius="md" v-for="v in variants" :key="v" :variant="v" />
</c-group>

```vue
<template>
  <c-group>
    <c-avatar color="blue" radius="md" v-for="v in variants" :key="v" :variant="v" />
  </c-group>
</template>

<script setup lang="ts">
const variants = ['default', 'filled', 'light', 'white', 'outline', 'dashed', 'gradient']
</script>
```

## AvatarGroup

The `AvatarGroup` component combines multiple avatars into a stack:

<c-avatar-group>
  <c-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" />
  <c-avatar src="https://randomuser.me/api/portraits/lego/3.jpg" />
  <c-avatar src="https://randomuser.me/api/portraits/lego/4.jpg" />
  <c-avatar>+5</c-avatar>
</c-avatar-group>

```vue
<template>
  <c-avatar-group>
    <c-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" />
    <c-avatar src="https://randomuser.me/api/portraits/lego/3.jpg" />
    <c-avatar src="https://randomuser.me/api/portraits/lego/4.jpg" />
    <c-avatar>+5</c-avatar>
  </c-avatar-group>
</template>
```

## Polymorphic component

`Avatar` is a [polymorphic component](../styles/polymorphic) - its default root element is `div`, but it can be changed to any other element or component with the `component` prop:

```vue
<template>
  <c-avatar tag="button" />
</template>
```

Example of using `Avatar` as a link:

<c-avatar tag="a" href="https://cck-ui.jackatlas.xyz" target="_blank" src="https://randomuser.me/api/portraits/lego/2.jpg" alt="it's me" />

```vue
<template>
  <c-avatar
    tag="a"
    href="https://cck-ui.jackatlas.xyz"
    target="_blank"
    src="https://randomuser.me/api/portraits/lego/2.jpg"
    alt="it's me"
  />
</template>
```

## Accessibility

Avatar renders an `<img />` HTML element. Set the `alt` prop to describe the image - it is also used as the `title` attribute for the avatar placeholder when the image cannot be loaded.

```vue
<template>
  <!-- ❌ No alt for image -->
  <c-avatar src="./image.png" />

  <!-- ✅ alt is set -->
  <c-avatar />

  <!-- ✅ title is not required, but still recommended -->
  <c-avatar>RJ</c-avatar>

  <!-- ✅ title is set on placeholder -->
  <c-avatar alt="Rob Johnson">RJ</c-avatar>
</template>
```

<script setup lang="ts">
import { StarIcon } from '@lucide/vue'

const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
]

const variants = ['default', 'filled', 'light', 'white', 'outline', 'dashed', 'gradient']
</script>

<style scope>
.c-Avatar-image {
  margin: 0 !important;
}
</style>

## Props

## Avatar props

|Name|Type|Description|Default value|
|---|---|---|---|
|allowedInitialsColors|CColor[]|A list of colors that is used for autogenerated initials. By default, all default CCK UI colors can be used except gray and dark.||
|alt|string|Image `alt` attribute, also used as `title` attribute for placeholder||
|autoContrast|boolean|If set, ajusts text color based on background color for filled variant||
|color|CColor \| "initial"| Key of `theme.colors` or ay valid CSS color|`'gray'`|
|gradient|CGradient|Gradient configuration for `variant="gradient"`|`theme.defaultGradient`|
|imageProps||Attributes passed down to `img` element||
|name|string|Name of the user. When `src` is not set, used to display initials and to generate color when `color="initials"` is set||
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set border-radius|`1000px`|
|size|CSize \| number|Width and height of the avatar, numbers are converted to rem|`'md'`|
|src|string|Image url, if the image cannot be loaded or , then placeholder is displayed instead||

## Styles API

`Avatar` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Avatar Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Avatar-root|Root element|
|image|.c-Avartar-image|`img` element|
|placeholder|.c-Avatar-placeholder|Avatar placeholder, displayer when image cannot be loaded|

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
      <td rowspan="5">root</td>
      <td>--avatar-bd</td>
      <td>Controls placeholder <code>border</code></td>
    </tr>
    <tr>
      <td>--avatar-bg</td>
      <td>Controls placeholder <code>background</code></td>
    </tr>
    <tr>
      <td>--avatar-color</td>
      <td>Controls placeholder text <code>color</code></td>
    </tr>
    <tr>
      <td>--avatar-size</td>
      <td>Controls <code>width</code>, <code>min-width</code> and <code>height</code></td>
    </tr>
    <tr>
      <td>--avatar-radius</td>
      <td>Controls <code>border-radius</code></td>
    </tr>
  </tbody>
</table>