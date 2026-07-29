---
title: Default props
lang: en-US
---

<script setup>
import { CButton as Button, createTheme } from '@cck-ui/core'

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline'
      }
    })
  }
})
</script>

# Default props

You can define default props for every CCK UI component by setting `theme.components`. These props will be used by default by all components in your application unless they are overridden by component props:

