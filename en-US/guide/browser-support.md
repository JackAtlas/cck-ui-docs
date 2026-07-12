---
title: Browser support
lang: en-US
---

# Browser support

Browser versions that support [:where selector](https://caniuse.com/mdn-css_selectors_where) and [@layer directive](https://caniuse.com/mdn-css_at-rules_layer) features that are required for CCK UI styles (any versions below may have major issues with styles):

- Chromium browsers 99+ - Chrome, Edge, Chrome for Android, etc.
- Firfox 97+
- Safari 15.4+

## CSS features that contribute to browser support

CCK UI components use the following CSS features:

- [:where selector](https://caniuse.com/mdn-css_selectors_where) in all components
- [@layer directive](https://caniuse.com/mdn-css_at-rules_layer) in all styles
- [:has pseudo-class](https://caniuse.com/css-has) in several components for non-critical styles
- [flexbox gap](https://caniuse.com/flexbox-gap) in most components
- [dvh units](https://caniuse.com/mdn-css_types_length_viewport_percentage_units_dynamic) in several components
- [color-mix](https://caniuse.com/mdn-css_types_color_color-mix) function is not used in any components by default, but can be used on your side with alpha PostCSS function
- [aspect-ratio](https://caniuse.com/mdn-css_properties_aspect-ratio) CSS property is used in several components
- [container queries](https://caniuse.com/css-container-queries) are used in several components if the option is explicitly enabled via prop

All CSS features listed above are supported in all modern browsers (90% or more of global usage as of January 2024).

If you need to support older browser, you should:

- check the component `Browser support` section before usage and decide whether this component will work for your case
- install corresponding polyfills that are required for hook/component to work in older browsers
- check that the component works in those browsers on your side

## Polyfills

CCK UI does not include any polyfills by default, you should install them manually if you need to support older browsers. Usually, polyfills are automatically added to the project by your framework bundler (webpack, vite, etc.) based on the browserslist configuration.