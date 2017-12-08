# kansatsu

> A wrapper of Intersection Observer API. Kansatsu is a Japanese word [観察 (かんさつ)](https://en.wiktionary.org/wiki/観察) in Rōmaji, which means observe.

You may need a library polyfills the native IntersectionObserver API in unsupporting browsers. [w3c IntersectionObserver polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save kansatsu
```

or if you use [yarn](https://yarnpkg.com).

```sh
$ yarn add kansatsu
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import Kansatsu from 'kansatsu'

// using CommonJS modules
var Kansatsu = require('kansatsu')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="//unpkg.com/kansatsu/dist/kansatsu.umd.js"></script>
```

This exposes the `Kansatsu()` function as a global.

* * *

## Usage

```html
<div class="man"></div>
<div class="man"></div>
<div class="man"></div>
```

```js
import Kansatsu from 'kansatsu';

const man = document.querySelectorAll('.man')
let kansatsu = Kansatsu({
  offset: 100,
  callback (el, isAppear, unwatch) {
    if (isAppear) {
      el.classList.add('is-appear')
      unwatch()
    }
  }
})
Array.from(man).forEach(el => kansatsu.watch(el))
```

## Examples & Demos

[**Real Example on JSFiddle**](https://jsfiddle.net/fireyy/g1740zm7/) ➡️

## API

Kansatsu's API is organized as follows:

### `Kansatsu(options: Object)`

Kansatsu will account for the following properties in options:

  * `root` for `root` pass to the [`IntersectionObserver()`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API. Default null.
  * `appear` for `threshold` pass to the [`IntersectionObserver()`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API. Default 0.
  * `offset` the percent used by `rootMargin`. Default 0.
      ```js
        // offset 20
        // rootMargin = '20% 0px'
      ```
  * `rootMargin` for `rootMargin` pass to the [`IntersectionObserver()`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API. Default '0%'.
  * `callback` the callback fot the `observe` action.

      ```js
        callback (el, isAppear, unwatch) {
          if (isAppear) {
            el.classList.add('is-appear')
            unwatch()
          }
        }
      ```

### `watch()`

The wrap for `observe`
