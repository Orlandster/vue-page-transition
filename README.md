# vue-page-transition

![](demo.gif)

[![npm](https://img.shields.io/npm/v/vue-page-transition.svg) ![npm](https://img.shields.io/npm/dm/vue-page-transition.svg)](https://www.npmjs.com/package/vue-page-transition)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8789841c45264d19ad2595061437a8a9)](https://www.codacy.com/app/orlando.wenzinger/vue-typed-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Orlandster1998/vue-typed-js&amp;utm_campaign=Badge_Grade)

A lean Vue.js plugin for page / route transitions.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Transitions](#transitions)
- [Demo](#demo)

# Installation

```bash
yarn add vue-page-transition
```

or with npm

```
npm install vue-page-transition
```

## Default import

Install the component:

```javascript
import Vue from 'vue'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
```

## Browser import

```html
<script src="vue.js"></script>
<script src="vue-typed-js/dist/vue-page-transition.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(VuePageTransition)
```

# Usage
To get started simply wrap your `router-view` with the `vue-page-transition` component.

Minimal setup:

```html
<vue-page-transition>
  <router-view/>
</vue-page-transition>
```
As a default the `fade` animation will be applied. If you want to use another animation you can do so by passing it via the `name` attribute:
```html
<vue-page-transition name="fade-in-right">
  <router-view/>
</vue-page-transition>
```

You can find a list of all available transitions in the following section.

> Notice: You can use the `vue-page-transition` component to wrap any element you would like to. The `router-view` is just the most commone use case.

## Properties / Attributes
You can make use of the following properties in order to customize your typing expirience:

| Property | Type   | Description                         | Example                  |
|----------|--------|-------------------------------------|--------------------------|
| name     | String | The name of the desired transition. | `name="'fade-in-right'"` |

## Overwrite transiton for single route
We've now covered how to set up a global transition by using the `name` attribute. But what if I want to use multiple transitions depending on the route? In this case you can simple add a `transition` property to the meta fields of your specific route. 

Here's an example on how your router could look like:

```js
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // overwrite default transition
      meta: { transition: 'zoom' },
    },
  ]
})
```

# Transitions
Here you can find a list of all the available transitions so far.

- [vue-page-transition](#vue-page-transition)
  - [Table of contents](#table-of-contents)
- [Installation](#installation)
  - [Default import](#default-import)
  - [Browser import](#browser-import)
- [Usage](#usage)
  - [Properties / Attributes](#properties--attributes)
  - [Overwrite transiton for single route](#overwrite-transiton-for-single-route)
- [Transitions](#transitions)
  - [Fade](#fade)
    - [Default Fade](#default-fade)
    - [Up](#up)
    - [Right](#right)
    - [Down](#down)
    - [Left](#left)
  - [Overlay](#overlay)
    - [Overlay Up](#overlay-up)
    - [Overlay Right](#overlay-right)
    - [Overlay Down](#overlay-down)
    - [Overlay Left](#overlay-left)
    - [Overlay Down Full](#overlay-down-full)
    - [Overlay Right Full](#overlay-right-full)
    - [Overlay Up Full](#overlay-up-full)
    - [Overlay Left Full](#overlay-left-full)
    - [Overlay Up Down](#overlay-up-down)
    - [Overlay Left Right](#overlay-left-right)
  - [Flip](#flip)
    - [Flip X](#flip-x)
    - [Flip Y](#flip-y)
  - [Zoom](#zoom)
    - [Default Zoom](#default-zoom)
- [Demo](#demo)
- [License](#license)

## Fade
The default fade transtion smoothly changes the opacity between two elements / pages with the additional ability to add some direction.

### Default Fade
The default fade transtion smoothly changes the visibility of the pages without any directional change.

**Usage:**
```html
<vue-page-transition name="fade">...</vue-page-transition>
```

### Up
The old page smoothly disappears, while the new page fades in from the bottom.

**Usage:**
```html
<vue-page-transition name="fade-in-up">...</vue-page-transition>
```

### Right
The old page smoothly disappears, while the new page fades in from right.

**Usage:**
```html
<vue-page-transition name="fade-in-right">...</vue-page-transition>
```

### Down
The old page smoothly disappears, while the new page fades in from top.

**Usage:**
```html
<vue-page-transition name="fade-in-down">...</vue-page-transition>
```

### Left
The old page smoothly disappears, while the new page fades in from left.

**Usage:**
```html
<vue-page-transition name="fade-in-left">...</vue-page-transition>
```

## Overlay
### Overlay Up
The overlay grows from the bottom to the top and back.

**Usage:**
```html
<vue-page-transition name="overlay-up">...</vue-page-transition>
```

### Overlay Right
The overlay grows from the left to the right and back.

**Usage:**
```html
<vue-page-transition name="overlay-right">...</vue-page-transition>
```

### Overlay Down
The overlay grows from the top to the bottom and back.

**Usage:**
```html
<vue-page-transition name="overlay-down">...</vue-page-transition>
```

### Overlay Left
The overlay grows from the right to the left and back.

**Usage:**
```html
<vue-page-transition name="overlay-left">...</vue-page-transition>
```

### Overlay Down Full
The overlay grows from the top to the bottom and then shrinks from top to the bottom.

**Usage:**
```html
<vue-page-transition name="overlay-down-full">...</vue-page-transition>
```

### Overlay Right Full
The overlay grows from the left to the right and then shrinks from left to the right.

**Usage:**
```html
<vue-page-transition name="overlay-right-full">...</vue-page-transition>
```

### Overlay Up Full
The overlay grows from the bottom to the top and then shrinks from bottom to the top.

**Usage:**
```html
<vue-page-transition name="overlay-up-full">...</vue-page-transition>
```

### Overlay Left Full
The overlay grows from the left to the right and then shrinks from left to the right.

**Usage:**
```html
<vue-page-transition name="overlay-left-full">...</vue-page-transition>
```

### Overlay Up Down
The overlay grows from the bottom and top at the same time and back.

**Usage:**
```html
<vue-page-transition name="overlay-up-down">...</vue-page-transition>
```

### Overlay Left Right
The overlay grows from the left and right at the same time and back.

**Usage:**
```html
<vue-page-transition name="overlay-left-right">...</vue-page-transition>
```

## Flip
### Flip X
The old page flips horizontally into the new page.

**Usage:**
```html
<vue-page-transition name="flip-x">...</vue-page-transition>
```

### Flip Y
The old page flips vertically into the new page.

**Usage:**
```html
<vue-page-transition name="flip-y">...</vue-page-transition>
```

## Zoom
### Default Zoom
The old page smoothly zooms out and then new page zooms in.

**Usage:**
```html
<vue-page-transition name="zoom">...</vue-page-transition>
```

# Demo
Checkout the demo [here](https://orlandster.github.io/vue-page-transition).

---

# License

[MIT](http://opensource.org/licenses/MIT)
