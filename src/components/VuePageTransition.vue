<template>
  <div>
    <transition
      :name="transition"
      :mode="mode"
    >
      <slot></slot>
    </transition>
    <div class="splash"></div>
  </div>
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

// FlipX
.flip-x-enter-active,
.flip-x-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.flip-x-enter,
.flip-x-leave-to {
  transform: rotateX(-180deg);
  opacity: 0;
}

// FlipY
.flip-y-enter-active,
.flip-y-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.flip-y-enter,
.flip-y-leave-to {
  transform: rotateY(-180deg);
  opacity: 0;
}

.splash {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  background: black;
  transition-duration: .45s;
}

.splash-enter + .splash,
.splash-leave-to + .splash {
  width: 0;
}

.splash-enter-active + .splash,
.splash-leave-active + .splash {
  width: 100vw;
}

.splash-enter-active + .splash {
  transition-timing-function: ease-in;
}

.splash-leave-active + .splash {
  transition-timing-function: ease-out;
}

.splash-enter-active,
.splash-leave-active {
  transition-duration: .45s;
}

.splash-fade {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  background: black;
  transition: .3s ease-out;
}

.splash-fade-enter + .splash,
.splash-fade-leave-to + .splash {
  width: 0;
}

.splash-fade-enter-active + .splash,
.splash-fade-leave-active + .splash {
  width: 80vw;
}

.splash-fade-enter,
.splash-fade-leave-active {
  transform: translate3d(0, -40px, 0);
}

.splash-fade-enter-active,
.splash-fade-leave-active {
  transition: .3s ease-out;
}
</style>

