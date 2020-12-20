<template>
  <div>
    <transition :name="transition" :mode="mode">
      <slot></slot>
    </transition>
    <div class="overlay-top"></div>
    <div class="overlay-right"></div>
    <div class="overlay-bottom"></div>
    <div class="overlay-left"></div>
  </div>
</template>

<script>
export default {
  name: 'vue-page-transition',
  // props: ['name', 'mode'],
  props: ['name'],
  data: function () {
    return {
      transition: 'fade',
      mode: 'out-in'
    }
  },
  created: function () {
    this.$router.beforeEach((to, from, next) => {
      this.transition = to.meta.transition
          ? to.meta.transition
          : this.$props.name
      next()
    })
  },
}
</script>

