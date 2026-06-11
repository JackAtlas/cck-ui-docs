<template>
  <span class="loader" v-bind="$attrs" :class="loaderClass"></span>
</template>

<script setup lang="ts">
import { useNamespace } from '@cck-ui/hooks'

const ns = useNamespace('loader')
const loaderClass = ns.e('root')
</script>

<style scoped>
.loader {
  display: inline-block;
  width: var(--loader-size);
  height: var(--loader-size);
  border-radius: var(--loader-size);
  background: var(--loader-color);
  animation: loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes loader-animation {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
}
</style>
