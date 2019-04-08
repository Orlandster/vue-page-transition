<template>
  <component :is="`vue-page-transition-${name}`">
    <slot></slot>
  </component>
</template>

<script>
import VuePageTransitionFade from './transitions/VuePageTransitionFade.vue'
import VuePageTransitionFadeInUp from './transitions/VuePageTransitionFadeInUp.vue'
import VuePageTransitionFadeInRight from './transitions/VuePageTransitionFadeInRight.vue'

export default {
  name: 'vue-page-transition',
  props: ['name'],
  components: {
    VuePageTransitionFade,
    VuePageTransitionFadeInUp,
    VuePageTransitionFadeInRight,
  },
}
</script>

