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

// splash
@import '../styles/transitions/splash/splash';
</style>

