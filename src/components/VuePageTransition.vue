<template>
  <div>
    <vue-page-transition-fade v-if="name === 'fade'">
      <slot></slot>
    </vue-page-transition-fade>
  </div>
</template>

<script>
import VuePageTransitionFade from './transitions/VuePageTransitionFade.vue'

export default {
  name: 'vue-page-transition',
  props: ['name'],
  components: {
    VuePageTransitionFade,
  },
}
</script>

