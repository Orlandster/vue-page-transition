<template>
  <transition
    :name="transition"
    :mode="mode"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'vue-page-transition',
  props: ['name'],
  data () {
    return {
      transition: 'fade',
      mode: 'out-in',
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.transition = to.meta.transition
        ? to.meta.transition
        : this.$props.name

      next()
    })
  },
}
</script>

<style lang="scss" scoped>
/* Fade */
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

/* Fade In Down */
@keyframes fadeInDown {
  from {
    transform: translate3d(0, -40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-down-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-down-enter {
  opacity: 0;
  transform: translate3d(0, -40px, 0);
}

.fade-in-down-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

/* Fade In Right */
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

/* Fade In Up */
@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-up-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-up-enter {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
}

.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}

/* Fade In Left */
@keyframes fadeInLeft {
  from {
    transform: translate3d(-40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-left-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-left-enter {
  opacity: 0;
  transform: translate3d(-40px, 0, 0);
}

.fade-in-left-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
}

/* Zoom */
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

