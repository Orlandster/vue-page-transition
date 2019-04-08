# vue-page-transition

[![npm](https://img.shields.io/npm/v/vue-page-transition.svg) ![npm](https://img.shields.io/npm/dm/vue-page-transition.svg)](https://www.npmjs.com/package/vue-page-transition)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8789841c45264d19ad2595061437a8a9)](https://www.codacy.com/app/orlando.wenzinger/vue-typed-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Orlandster1998/vue-typed-js&amp;utm_campaign=Badge_Grade)

A lean Vue.js plugin for page / route transitions.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Transitions](#transitions)

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

# Transitions
Here you can find a list of all the available transitions so far.

- [Fade](#fade)
  - [default](#default)
  - [up](#up)
  - [right](#right)
  - [down](#down)
  - [left](#left)
- [Zoom](#zoom)
  - [default](#default)

## Fade
The default fade transtion smoothly changes the opacity between two elements / pages with the additional ability to add some direction.

### Default
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

## Zoom
### Default
The old page smoothly zooms out and then new page zooms in.

**Usage:**
```html
<vue-page-transition name="zoom">...</vue-page-transition>
```

---

# License

[MIT](http://opensource.org/licenses/MIT)
