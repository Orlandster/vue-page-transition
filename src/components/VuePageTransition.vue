<template>
  <component :is="name">
    <slot></slot>
  </component>
</template>

<script>
import Fade from './transitions/Fade/Fade.vue'
import FadeInUp from './transitions/Fade/FadeInUp.vue'
import FadeInRight from './transitions/Fade/FadeInRight.vue'

export default {
  name: 'vue-page-transition',
  props: ['name'],
  components: {
    Fade,
    FadeInUp,
    FadeInRight,
  },
}
</script>

