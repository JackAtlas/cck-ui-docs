<template>
  <CckConfigProvider>
    <DefaultTheme.Layout />
  </CckConfigProvider>
</template>

<script setup lang="ts">
import { CckConfigProvider } from '@cck-ui/core'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'

const { isDark } = useData()

onMounted(() => {
  watch(
    isDark,
    (newIsDark) => {
      document.documentElement.setAttribute(
        'data-c-color-scheme',
        newIsDark ? 'dark' : 'light'
      )
    },
    { immediate: true }
  )
})
</script>
