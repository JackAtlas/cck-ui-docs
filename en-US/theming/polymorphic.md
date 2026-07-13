---
title: Polymorphic components
lang: en-US
---

# Polymorphic components

## What is a polymorphic component

A polymorphic component is a component whose root element can be changed with the `tag` prop. All polymorphic components have a default element that's used when the `tag` prop is not provided. For example, the [Button](../component/button) component's default element is `button` and it can be changed to `a` or any other element or component:

**Note**: The text color and underline you see here are styles injected by VitePress for all `<a>` tags. When using this button component in your own project, these styles won't appear unless you explicitly add them to your theme.

<c-button variant="filled" tag="a" href="https://cck-ui.jackatlas.xyz" target="_blank">CCK UI website</c-button>
