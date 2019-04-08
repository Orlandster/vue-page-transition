<template>
  <transition
    name="fade-in-right"
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'vue-page-transition-fade-in-right',
}
</script>

<style lang="scss" scoped>
@keyframes fadeInRight {
  from {
    transform: translate3d(40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-right-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-right-enter {
  opacity: 0;
  transform: translate3d(40px, 0, 0);
}

.fade-in-right-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}
</style>
