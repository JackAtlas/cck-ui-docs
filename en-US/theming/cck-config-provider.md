---
title: CckConfigProvider
lang: en-US
---

# CckConfigProvider

`CckConfigProvider` provides a theme object context value, manages color scheme changes, and injects CSS variables. At least one must be rendered at the root of your application.

## CckConfigProvider props

`CckConfigProvider` supports the following props:

```ts
interface ConfigProviderProps {
  /**
   * @description Theme override object
   */
  theme?: CThemeOverride

  /**
   * @description Used to retrieve/set color scheme value in external storage, by default was `window.localStorage`
   */
  colorSchemeManager?: CColorSchemeManager

  /**
   * @description Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage
   */
  defaultColorScheme?: CColorScheme

  /**
   * @description Forces color scheme value, if set, useTheme ignores `colorSchemeManager` and `defaultColorScheme`
   */
  forceColorScheme?: 'light' | 'dark'

  /**
   * @description CSS selector to which CSS variales should be added
   */
  cssVariablesSelector?: string

  /**
   * @description Determines whether theme CSS variables should be added to given `cssVariablesSelector`
   */
  withCssVariables?: boolean

  /**
   * @description Function to resolve root element to set `data-c-color-scheme` attribute
   * @returns root element, must return undefined on server
   */
  getRootElement?: () => HTMLElement | undefined

  /**
   * @description A prefix for components static classes (for example `${prefix}-text__root`)
   */
  classNamesPrefix?: string

  /**
   * @description Determines whether components should have static classes, for example `c-button__root`
   */
  withStaticClasses?: boolean

  /**
   * @description Determines whether global classes should be added with `<style />` tag. Global classes are required for `hiddenFrom`/`visibleFrom` and `lightHidden`/`darkHidden` props to work.
   * @default true
   */
  withGlobalClasses?: boolean

  /**
   * An object to transform `styles` and `sx` props into css classes, can be used with CSS-in-JS libraries
   */
  stylesTransform?: CStylesTransform

  /**
   * @description Enviroment at which the useTheme is used, `'test'` environment disables all transitions and portals
   */
  env?: 'default' | 'test'
}
```

### theme

Pass a theme object override to the `theme` prop. It will be merged with the default theme and used in all components within.

### colorSchemeManager

`colorSchemeManager` is used to retrieve and set the color scheme value in external storage. By default, `CckConfigProvider` uses `window.localStorage` to store the color scheme value, but you can pass your own implementation to the `colorSchemeManager` prop. You can lear more about color scheme management in the color schemes guide.

### defaultColorScheme

The `defaultColorScheme` value is used when `colorSchemeManager` cannot retrieve the value from external storage, for example during server-side rendering or when the user hasn't selected a preferred color scheme. Possible values are `light`, `dark`, and `auto`. By default, the color scheme value is `light`. You can learn more about color scheme management in the color schemes guide.

### cssVariablesSelector

`cssVariablesSelector` is a CSS selector to which CSS variables should be added. By default, variables are applied to `:root` and `:host`. `CckConfigProvider` generates CSS variables based on given theme override and `cssVariablesResolver`, then these variables are rendered into `<style />` tag next to your application. You can learn more about CCK UI CSS variables in the CSS variables guide.

### withCssVariables

`withCssVariables` determines whether theme CSS variables should be added to the given `cssVariablesSelector`. By default, it is set to `true`. You should not change it unless you want to manage CSS variables via a `.css` file (note that in this case you will need to generate all theme tokens that are not part of the default theme on your side).

### getRootElement

`getRootElement` is a function that returns the root application element (usually `html`) to set the `data-c-color-scheme` attribute. The default value is `() => document.documentElement` which means that the `data-c-color-scheme` attribute will be added to the `<html />` tag. You can learn more about color scheme management in the color schemes guide.

### classNamesPrefix

`classNamesPrefix` is a prefix for components' static classes (for example `{selector}-Text-root`). The default value is `c` - all components will have a `c-` prefix in their **static classes**.

In this case (default `classNamesPrefix`), the Text component will have the following classes:

- `c-focus-auto` - global utilify class
- `m_14602a9d` - component class, usually a random string; with this class library styles are applied
- `c-Text-root` - component static class, part of the Styles API

With `classNamesPrefix` you can change only the **static class**

Now the Text component will have the following classes:

- `c-focus-auto` - `classNamesPrefix` does not impact global utility classes - they are static and **cannot be changed**
- `m_14602a9d` - `classNamesPrefix` does not impact library classes - they are static and **cannot be changed**
- `app-Text-root` - component static class has `classNamesPrefix` instead of `c`

### withStaticClasses

`withStaticClasses` determines whether components should have static classes, for example, `c-Button-root`. By default, static classes are enabled. To disable them, set `withStaticClasses` to `false`:

### withGlobalClasses

`withGlobalClasses` determines whether global classes should be added with a `<style />` tag. Global classes are required for `hiddenFrom / visibleFrom` and `lightHidden / darkHidden` props to work. By default, global classes are enabled. To disable them, set `withGlobalClasses` to `false`. Note that disabling global classes may break styles of some components.

### getStyleNonce

`getStyleNonce` is a function to generate a nonce attribute added to dynamically generated `<style />` tags.

### cssVariablesResolver

`cssVariableResolver` is a function to generate CSS variables styles based on the theme object. You can learn more about CCK UI CSS variables in the CSS variables guide.

### env

The `env` prop can be used in a test environment to disable some features that might impact tests and/or make it harder to test component:

- transitions that mount/unmount a child component with delay
- portals that render a child component in a different part of the DOM

To enable the test environment, set `env` to `test`:

Note that `env="test"` is intended to be used in test environment only with Vitest. Do not use it in development or production environments.