---
title: Boolean props and default values
lang: en-US
---

# Boolean props and defualt values

In CCK UI component, props follow a clear priority order:

```
User Value > Config Provider Value > Component Default
```

This means:

- If you pass a prop, your value always takes precedence
- If you don't pass it, the config provider's `defaultProps` (if configured) is used
- Otherwise, the component's own default value is used

Therefore we cannot use `withDefaults` function in components. Instead, we use a custom function to merge these three types of props.

## The problem with boolean props

Vue has a specific behavior for boolean props: **when a boolean prop is not passed,** `defineProps` **automatically sets its value to** `false`.

This creates a problem with the priority mechanism described above.

For example, default value of `animate` prop of [Skeleton](./skeleton) is `true`.

When you use the component without passing the prop:

```vue
<c-skeleton />
```

1. **What you expect**: `animate` should be `true` (component default)
2. **What actually happends**: Vue sets `animate` to `false`

## How to fix it

Explicitly pass a boolean prop, even though its documentation says the default value is `true`.

```vue
<c-skeleton animate />
<!-- or -->
<c-skeleton :animate="true" />
```