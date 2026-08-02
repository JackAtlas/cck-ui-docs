---
title: AspectRatio
lang: en-US
---

# AspectRatio

Maintain responsive consistant width/height ratio

## Usage

`AspectRatio` maintains a consistant width/height ratio. It can be used to display images, maps, videos, and other media.

<c-aspect-ratio :ratio="1080 / 720" :maw="300" mx="auto">
  <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Lego" />
</c-aspect-ratio>

```vue
<template>
  <c-aspect-ratio :ratio="1080 / 720" :maw="300" mx="auto">
    <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Lego" />
  </c-aspect-ratio>
</template>
```

## Map embed

<c-aspect-ratio :ratio="16 / 9" :maw="1600" mx="auto">
  <iframe src="https://j.map.baidu.com/0c/m6" frameborder="0"></iframe>
</c-aspect-ratio>

```vue
<template>
  <c-aspect-ratio :ratio="16 / 9" :maw="1600" mx="auto">
    <iframe src="https://j.map.baidu.com/0c/m6" frameborder="0"></iframe>
  </c-aspect-ratio>
</template>
```

## Video embed

<c-aspect-ratio :ratio="16 / 9" :maw="1600" mx="auto">
  <iframe
    src="//player.bilibili.com/player.html?isOutside=true&aid=116994791774195&bvid=BV1fd3P66Eym&cid=40349403664&p=1"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
  ></iframe>
</c-aspect-ratio>

```vue
<template>
  <c-aspect-ratio :ratio="16 / 9" :maw="1600" mx="auto">
    <iframe
      src="//player.bilibili.com/player.html?isOutside=true&aid=116994791774195&bvid=BV1fd3P66Eym&cid=40349403664&p=1"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
    ></iframe>
  </c-aspect-ratio>
</template>
```

## Inside flex container

By default, `AspectRatio` does not have a fixed width and height - it will take as much space as possible in a regular container. However, when used inside a flex container, it will not stretch to fill the available space. To make it work inside a flexbox container, you need to set the `width` or `flex` property.

<div :style="{ display: 'flex' }">
  <c-aspect-ratio :ratio="1" flex="0 0 100px">
    <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Lego" />
  </c-aspect-ratio>
</div>

```vue
<template>
  <div :style="{ display: 'flex' }">
    <c-aspect-ratio :ratio="1" flex="0 0 100px">
      <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Lego" />
    </c-aspect-ratio>
  </div>
</template>
```

## API

### AspectRatio Props

|Name|Type|Description|Default value|
|---|---|---|---|
|ratio|number|Aspect ratio, for example, `16 / 9`, `4 / 3`, `1920 / 1080`|`1`|

## Styles API

`AspectRatio` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### AspectRatio Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-AspectRatio-root|Root element|

#### CSS variables

|Selector|Variable|Description|
|---|---|---|
|root|--ar-ratio|Aspect ratio|