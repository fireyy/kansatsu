export default (options) => {
  if (!('IntersectionObserver' in window)) {
    throw new Error('IntersectionObserver is not supported, see: https://github.com/w3c/IntersectionObserver/tree/master/polyfill for the polyfill')
  }

  const {
    root = null,
    appear = 0,
    offset,
    rootMargin = '-100%',
    callback = _ => {}
  } = options || {}

  const handler = (entries, observer) => {
    entries.forEach(entry => {
      const unwatch = () => observer.unobserve(entry.target)

      callback(entry.target, entry.isIntersecting, unwatch)
    })
  }

  const observer = new window.IntersectionObserver(handler, {
    root: root,
    threshold: appear,
    rootMargin: offset ? `${offset}% 0px` : rootMargin || '0%'
  })

  return {
    watch: node => observer.observe(node)
  }
}
