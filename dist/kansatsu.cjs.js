'use strict';

var index = function (options) {
  if (!('IntersectionObserver' in window)) {
    throw new Error('IntersectionObserver is not supported, see: https://github.com/w3c/IntersectionObserver/tree/master/polyfill for the polyfill')
  }

  var ref = options || {};
  var root = ref.root; if ( root === void 0 ) root = null;
  var appear = ref.appear; if ( appear === void 0 ) appear = 0;
  var offset = ref.offset;
  var rootMargin = ref.rootMargin; if ( rootMargin === void 0 ) rootMargin = '-100%';
  var callback = ref.callback; if ( callback === void 0 ) callback = function (_) {};

  var handler = function (entries, observer) {
    entries.forEach(function (entry) {
      var unwatch = function () { return observer.unobserve(entry.target); };

      callback(entry.target, entry.isIntersecting, unwatch);
    });
  };

  var observer = new window.IntersectionObserver(handler, {
    root: root,
    threshold: appear,
    rootMargin: offset ? (offset + "% 0px") : rootMargin || '0%'
  });

  return {
    watch: function (node) { return observer.observe(node); }
  }
};

module.exports = index;
