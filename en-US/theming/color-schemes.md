---
title: Color schemes
lang: en-US
---

# Color schemes

CckConfigProvider manages the color scheme context in your components tree. You can configure the default color scheme value with the `defaultColorScheme` prop; possible values are `light`, `dark`, and `auto` (system color scheme is used). The default value is `light`.

## data-c-color-scheme attribute

When CckConfigProvider is mounted, it sets a data-c-color-scheme attribute on the `<html />` element to the value that the user has previously selected or to the value of the `defaultColorScheme` prop. The `data-c-color-scheme` attribute is used in all component styles to determine which colors each component should use.

## use-cck-color-scheme hook

The `useCckColorScheme` hook can be used to get and set the current color scheme value

```ts
function useCckColorScheme(): {
  /** Current color scheme value */
  colorScheme: ComputedRef<'light' | 'dark' | 'auto'>

  /** Computed color scheme value */
  computedColorScheme: ComputedRef<'light' | 'dark'>

  /** Sets colors scheme to given value */
  setColorScheme: (value: 'light' | 'dark' | 'auto') => void

  /** Toggles color scheme to the opposite value; if value is 'auto', color scheme is inferred from the OS settings */
  toggleColorScheme: () => void

  /** Clears the color scheme value from storage and sets it to `defaultColorScheme */
  clearColorScheme: () => void
}
```

## Transitions during color scheme change

By default, transitions on all elements are disabled when the color scheme changes to avoid inconsistant animations.

## Color scheme value caveats

By default, the color scheme value is stored in local storage, and its value is saved in state before the component is mounted to avoid a flash of inaccurate color scheme. This means that the color scheme value can be different on the client and server, as the server does not have access to local storage and always uses that default value.

## lightHidden and darkHidden

All CCK UI components support `lightHidden` and `darkHidden` props that can be used to hide a component in a specific color scheme

<c-button variant="filled" color="cyan" light-hidden>Visible in dark color scheme only</c-button>
<c-button variant="filled" color="pink" dark-hidden>Visible in light color scheme only</c-button>

## With disabled JavaScript

If you need to support users with disabled JavaScript, you need to set the `data-c-color-scheme` attribute on the `<html />` element manually.
