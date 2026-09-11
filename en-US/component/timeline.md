---
title: Timeline
lang: en-US
---

# Timeline

Display list of events in chronological order

## Usage

<c-timeline :active="1" :bullet-size="24" :line-width="2">
  <c-timeline-item>
    <template #bullet>
      <git-branch-icon :size="12" />
    </template>
    <template #title>New branch</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve created new branch
      <c-text inherit tag="span" variant="link">fix-notifications</c-text> from master
    </c-text>
    <c-text size="xs" :mt="4">2 hours ago</c-text>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <git-commit-icon :size="12" />
    </template>
    <template #title>Commits</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve pushed 23 commits to
      <c-text inherit tag="span" variant="link">fix-notifications branch</c-text>
    </c-text>
    <c-text size="xs" :mt="4">52 minutes ago</c-text>
  </c-timeline-item>
  <c-timeline-item line-variant="dashed">
    <template #bullet>
      <git-pull-request-icon :size="12" />
    </template>
    <template #title>Pull request</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve submitted a pull request
      <c-text inherit tag="span" variant="link"
        >Fix incorrect notification message (#187)</c-text
      >
    </c-text>
    <c-text size="xs" :mt="4">34 minutes ago</c-text>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <message-circle-more-icon :size="12" />
    </template>
    <template #title>Code review</template>
    <c-text c="dimmed" size="sm">
      <c-text inherit tag="span" variant="link">Robert Gluesticker</c-text> left a code review
      on your pull request
    </c-text>
    <c-text size="xs" :mt="4">12 minutes ago</c-text>
  </c-timeline-item>
</c-timeline>

```vue
<template>
  <c-timeline :active="1" :bullet-size="24" :line-width="2">
    <c-timeline-item>
      <template #bullet>
        <git-branch-icon :size="12" />
      </template>
      <template #title>New branch</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve created new branch
        <c-text inherit tag="span" variant="link">fix-notifications</c-text> from master
      </c-text>
      <c-text size="xs" :mt="4">2 hours ago</c-text>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <git-commit-icon :size="12" />
      </template>
      <template #title>Commits</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve pushed 23 commits to
        <c-text inherit tag="span" variant="link">fix-notifications branch</c-text>
      </c-text>
      <c-text size="xs" :mt="4">52 minutes ago</c-text>
    </c-timeline-item>
    <c-timeline-item line-variant="dashed">
      <template #bullet>
        <git-pull-request-icon :size="12" />
      </template>
      <template #title>Pull request</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve submitted a pull request
        <c-text inherit tag="span" variant="link"
          >Fix incorrect notification message (#187)</c-text
        >
      </c-text>
      <c-text size="xs" :mt="4">34 minutes ago</c-text>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <message-circle-more-icon :size="12" />
      </template>
      <template #title>Code review</template>
      <c-text c="dimmed" size="sm">
        <c-text inherit tag="span" variant="link">Robert Gluesticker</c-text> left a code review
        on your pull request
      </c-text>
      <c-text size="xs" :mt="4">12 minutes ago</c-text>
    </c-timeline-item>
  </c-timeline>
</template>

<script setup lang="ts">
import {
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  MessageCircleMoreIcon,
} from '@lucide/vue'
</script>
```

## Line and bullet props

Control the timeline appearance with the following props:

- `active` - index of the current active element; all elements before this index will be highlighted with `color`
- `color` - color from theme that should be used to highlight active items, defaults to `theme.primaryColor`
- `lineWidth` - controls line width and bullet border
- `bulletSize` - bullet width, height and border-radius
- `align` - defines the line and bullets position relative to content, also sets text-align

## Opposite content

Use the `opposite` slot on `TimelineItem` to render content on the opposite side of the timeline. When any `TimelineItem` has the `opposite` slot, the timeline switches to a centered layout with content on both sides of the line.

<c-timeline :active="1" :bullet-size="24" :line-width="2">
  <c-timeline-item>
    <template #bullet>
      <git-branch-icon :size="12" />
    </template>
    <template #title>New branch</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve created new branch
      <c-text inherit tag="span" variant="link">fix-notifications</c-text> from master
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">2 hours ago</c-text>
    </template>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <git-commit-icon :size="12" />
    </template>
    <template #title>Commits</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve pushed 23 commits to
      <c-text inherit tag="span" variant="link">fix-notifications branch</c-text>
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">52 minutes ago</c-text>
    </template>
  </c-timeline-item>
  <c-timeline-item line-variant="dashed">
    <template #bullet>
      <git-pull-request-icon :size="12" />
    </template>
    <template #title>Pull request</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve submitted a pull request
      <c-text inherit tag="span" variant="link"
        >Fix incorrect notification message (#187)</c-text
      >
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">34 minutes ago</c-text>
    </template>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <message-circle-more-icon :size="12" />
    </template>
    <template #title>Code review</template>
    <c-text c="dimmed" size="sm">
      <c-text inherit tag="span" variant="link">Robert Gluesticker</c-text> left a code review
      on your pull request
    </c-text>
  </c-timeline-item>
</c-timeline>

```vue
<template>
  <c-timeline :active="1" :bullet-size="24" :line-width="2">
    <c-timeline-item>
      <template #bullet>
        <git-branch-icon :size="12" />
      </template>
      <template #title>New branch</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve created new branch
        <c-text inherit tag="span" variant="link">fix-notifications</c-text> from master
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">2 hours ago</c-text>
      </template>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <git-commit-icon :size="12" />
      </template>
      <template #title>Commits</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve pushed 23 commits to
        <c-text inherit tag="span" variant="link">fix-notifications branch</c-text>
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">52 minutes ago</c-text>
      </template>
    </c-timeline-item>
    <c-timeline-item line-variant="dashed">
      <template #bullet>
        <git-pull-request-icon :size="12" />
      </template>
      <template #title>Pull request</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve submitted a pull request
        <c-text inherit tag="span" variant="link"
          >Fix incorrect notification message (#187)</c-text
        >
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">34 minutes ago</c-text>
      </template>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <message-circle-more-icon :size="12" />
      </template>
      <template #title>Code review</template>
      <c-text c="dimmed" size="sm">
        <c-text inherit tag="span" variant="link">Robert Gluesticker</c-text> left a code review
        on your pull request
      </c-text>
    </c-timeline-item>
  </c-timeline>
</template>

<script setup lang="ts">
import {
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  MessageCircleMoreIcon,
} from '@lucide/vue'
</script>
```

## Alternate items

Set the `alternate` prop on individual `TimelineItem` components to switch the position of content and opposite:

<c-timeline :active="1" :bullet-size="24" :line-width="2">
  <c-timeline-item>
    <template #bullet>
      <git-branch-icon :size="12" />
    </template>
    <template #title>New branch</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve created new branch
      <c-text inherit tag="span" variant="link">fix-notifications</c-text> from master
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">2 hours ago</c-text>
    </template>
  </c-timeline-item>
  <c-timeline-item alternate>
    <template #bullet>
      <git-commit-icon :size="12" />
    </template>
    <template #title>Commits</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve pushed 23 commits to
      <c-text inherit tag="span" variant="link">fix-notifications branch</c-text>
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">52 minutes ago</c-text>
    </template>
  </c-timeline-item>
  <c-timeline-item line-variant="dashed">
    <template #bullet>
      <git-pull-request-icon :size="12" />
    </template>
    <template #title>Pull request</template>
    <c-text c="dimmed" size="sm">
      You&apos;ve submitted a pull request
      <c-text inherit tag="span" variant="link"
        >Fix incorrect notification message (#187)</c-text
      >
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">34 minutes ago</c-text>
    </template>
  </c-timeline-item>
  <c-timeline-item alternate>
    <template #bullet>
      <message-circle-more-icon :size="12" />
    </template>
    <template #title>Code review</template>
    <c-text c="dimmed" size="sm">
      <c-text inherit tag="span" variant="link">Robert Gluesticker</c-text> left a code review
      on your pull request
    </c-text>
    <template #opposite>
      <c-text c="dimmed" size="sm">12 minutes ago</c-text>
    </template>
  </c-timeline-item>
</c-timeline>

```vue
<template>
  <c-timeline :active="1" :bullet-size="24" :line-width="2">
    <c-timeline-item>
      <template #bullet>
        <git-branch-icon :size="12" />
      </template>
      <template #title>New branch</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve created new branch
        <c-text inherit tag="span" variant="link">fix-notifications</c-text> from master
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">2 hours ago</c-text>
      </template>
    </c-timeline-item>
    <c-timeline-item alternate>
      <template #bullet>
        <git-commit-icon :size="12" />
      </template>
      <template #title>Commits</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve pushed 23 commits to
        <c-text inherit tag="span" variant="link">fix-notifications branch</c-text>
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">52 minutes ago</c-text>
      </template>
    </c-timeline-item>
    <c-timeline-item line-variant="dashed">
      <template #bullet>
        <git-pull-request-icon :size="12" />
      </template>
      <template #title>Pull request</template>
      <c-text c="dimmed" size="sm">
        You&apos;ve submitted a pull request
        <c-text inherit tag="span" variant="link"
          >Fix incorrect notification message (#187)</c-text
        >
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">34 minutes ago</c-text>
      </template>
    </c-timeline-item>
    <c-timeline-item alternate>
      <template #bullet>
        <message-circle-more-icon :size="12" />
      </template>
      <template #title>Code review</template>
      <c-text c="dimmed" size="sm">
        <c-text inherit tag="span" variant="link">Robert Gluesticker</c-text> left a code review
        on your pull request
      </c-text>
      <template #opposite>
        <c-text c="dimmed" size="sm">12 minutes ago</c-text>
      </template>
    </c-timeline-item>
  </c-timeline>
</template>

<script setup lang="ts">
import {
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  MessageCircleMoreIcon,
} from '@lucide/vue'
</script>
```

## Bullet as Vue node

<c-timeline :bullet-size="24">
  <c-timeline-item>
    <template #title>Default bullet</template>
    <c-text c="dimmed" size="sm">Default bullet without anything</c-text>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" :size="22" />
    </template>
    <template #title>Avatar</template>
    <c-text c="dimmed" size="sm">Timeline bullet as avatar image</c-text>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <sun-icon size="14" />
    </template>
    <template #title>Icon</template>
    <c-text c="dimmed" size="sm">Timeline bullet as icon</c-text>
  </c-timeline-item>
  <c-timeline-item>
    <template #bullet>
      <c-theme-icon radius="xl" variant="gradient" :gradient="{ from: 'lime', to: 'cyan' }" :size="22">
        <video-icon size="14" />
      </c-theme-icon>
    </template>
    <template #title>ThemeIcon</template>
    <c-text c="dimmed" size="sm">Timeline bullet as ThemeIcon component</c-text>
  </c-timeline-item>
</c-timeline>

```vue
<template>
  <c-timeline :bullet-size="24">
    <c-timeline-item>
      <template #title>Default bullet</template>
      <c-text c="dimmed" size="sm">Default bullet without anything</c-text>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <c-avatar src="https://randomuser.me/api/portraits/women/60.jpg" :size="22" />
      </template>
      <template #title>Avatar</template>
      <c-text c="dimmed" size="sm">Timeline bullet as avatar image</c-text>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <sun-icon size="14" />
      </template>
      <template #title>Icon</template>
      <c-text c="dimmed" size="sm">Timeline bullet as icon</c-text>
    </c-timeline-item>
    <c-timeline-item>
      <template #bullet>
        <c-theme-icon radius="xl" variant="gradient" :gradient="{ from: 'lime', to: 'cyan' }" :size="22">
          <video-icon size="14" />
        </c-theme-icon>
      </template>
      <template #title>ThemeIcon</template>
      <c-text c="dimmed" size="sm">Timeline bullet as ThemeIcon component</c-text>
    </c-timeline-item>
  </c-timeline>
</template>

<script setup lang="ts">
import { SunIcon, VideoIcon } from '@lucide/vue'
</script>
```

## Wrap TimelineItem

`Timeline` component relies on `TimelineItem` order. Wrapping `TimelineItem` is not supported. Instead, you will need to use different approaches.

<script setup lang="ts">
import {
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  MessageCircleMoreIcon,
  SunIcon,
  VideoIcon,
} from '@lucide/vue'
</script>

## Props

### Timeline props

|Name|Type|Description|Default value|
|---|---|---|---|
|active|number|Index of the active element||
|align|"left" \| "right"|Position of content relative to the bullet|`'left'`|
|autoContrast|boolean|If set, adjusts text color based on background color for `filled` variant||
|bulletSize|string \| number|Size of the bullet|`20`|
|color|CColor|Key of `theme.colors` or any valid CSS color to control active item colors|`theme.primaryColor`|
|lineWidth|string \| number|Control with of the line||
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem|`'xl'`|
|reverseActive|boolean|If set, the active items direction is reversed without reversing items order|`false`|

### TimelineItem props

|Name|Type|Description|Default value|
|---|---|---|---|
|alternate|boolean|If set, switches the position of content and opposite|`false`|
|color|CColor|Key of `theme.colors` or any valid CSS color to control active item colors|`theme.primaryColor`|
|lineVariant|"dashed" \| "dotted" \| "solid"|Controls line border style|`'solid'`|
|radius|CRadius \| number|Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem|`'xl'`|

### TimelineItem slots

|Name|Description|
|---|---|
|bullet|Vue node that should be rendered inside the bullet - icon, image, avatar, etc. By default, large white dot is displayed.|
|default|Content displayed below the title|
|opposite|Content displayed on the opposite side of the timeline item|
|title|Item title, displayed next to the bullet|

## Styles API

`Timeline` component supports [Styles API](../styles/styles-api), you can customize styles of any inner element. Follow [the documentation](../styles/styles-api) to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

### Timeline Styles API

#### Selectors

|Selector|Static selector|Description|
|---|---|---|
|root|.c-Timeline-root|Root element|
|item|.c-Timeline-item|Item root element|
|itemBody|.c-Timeline-itemBody|Item body, wraps title and content|
|itemTitle|.c-Timeline-itemTitle|Item title, controlled by title prop|
|itemBullet|.c-Timeline-itemBullet|Item bullet|
|itemOpposite|.c-Timeline-itemOpposite|Item opposite content, controlled by opposite prop on TimelineItem|

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
      <td>--tl-bullet-size</td>
      <td>Controls bullet <code>width</code> and <code>height</code></td>
    </tr>
    <tr>
      <td>--tl-color</td>
      <td>Controls active bullet and line colors</td>
    </tr>
    <tr>
      <td>--tl-icon-color</td>
      <td>Controls icon color</td>
    </tr>
    <tr>
      <td>--tl-line-width</td>
      <td>Controls width of the line between bullets</td>
    </tr>
    <tr>
      <td>--tl-radius</td>
      <td>Controls bullet <code>border-radius</code></td>
    </tr>
  </tbody>
</table>

#### Data attributes

|Selector|Attribute|Condition|
|---|---|---|
|item, itemBullet|data-active|Item index is =< Timeline active prop|
|item|data-line-active|Item index is < Timeline active prop|