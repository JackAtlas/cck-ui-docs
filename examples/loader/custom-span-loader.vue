<template>
  <c-box tag="span" v-bind="others" :class="loaderClass"></c-box>
</template>

<script setup lang="ts">
import cx from 'clsx'
import type { LoaderProps } from '@cck-ui/core'
import classes from './custom-loader.module.css'

const { className, attributes, ...others } = defineProps<LoaderProps>()

const loaderClass = cx(classes.spanLoader, className)
</script>
