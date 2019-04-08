<template>
  <transition
    name="zoom"
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'zoom',
}
</script>

<style lang="scss" scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.zoom-enter,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
