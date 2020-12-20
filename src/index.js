import './styles/transitions.scss';

import 'core-js/stable'
import 'regenerator-runtime/runtime.js'

import VuePageTransition from './components/VuePageTransition.vue'

// Install the components
export function install (Vue) {
  Vue.component('vue-page-transition', VuePageTransition)
}

// Expose the components
export {
  VuePageTransition,
}

// Plugin
const plugin = {
  version: VERSION,
  install: install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
