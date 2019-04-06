<template>
  <div>
    <transition
      name="fade"
      mode="out-in"
    >
      {{ name }}
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'vue-page-transition',
  props: ['name'],
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
