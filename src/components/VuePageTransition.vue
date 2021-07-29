<template>
  <div>
    <transition
      :name="model.name"
      :mode="model.mode"
    >
      <slot></slot>
    </transition>
    <div class="overlay-top" :style="model.overlay"></div>
    <div class="overlay-right" :style="model.overlay"></div>
    <div class="overlay-bottom" :style="model.overlay"></div>
    <div class="overlay-left" :style="model.overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'vue-page-transition',
  data () {
    return {
      model: {
        mode: 'out-in',
        name: null,
        overlay: {
          background: '#1867c0'
        }
      }
    }
  },
  props: ['mode', 'name', 'overlay'],
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.model.mode = to.meta.transition.mode || this.$props.mode || this.model.mode
      this.model.name = to.meta.transition.name || this.$props.name || this.model.name
      this.model.overlay = to.meta.transition.overlay || this.$props.overlay || this.model.overlay
      next()
    })
  }
}
</script>

<style>
  :root {
    --transition-duration: .35s;
  }
</style>

<style lang="scss" scoped>
// fade
@import '../styles/transitions/fade/fade';
@import '../styles/transitions/fade/fade-in-down';
@import '../styles/transitions/fade/fade-in-right';
@import '../styles/transitions/fade/fade-in-up';
@import '../styles/transitions/fade/fade-in-left';

// zoom
@import '../styles/transitions/zoom/zoom';

// flip
@import '../styles/transitions/flip/flip-x';
@import '../styles/transitions/flip/flip-y';

// overlay
@import '../styles/transitions/overlay/overlay-right';
@import '../styles/transitions/overlay/overlay-down';
@import '../styles/transitions/overlay/overlay-up';
@import '../styles/transitions/overlay/overlay-left';
@import '../styles/transitions/overlay/overlay-up-full';
@import '../styles/transitions/overlay/overlay-right-full';
@import '../styles/transitions/overlay/overlay-down-full';
@import '../styles/transitions/overlay/overlay-left-full';
@import '../styles/transitions/overlay/overlay-up-down';
@import '../styles/transitions/overlay/overlay-left-right';
</style>
