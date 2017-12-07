export default (options) => {
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

      callback(entry.target, entry.intersectionRatio > 0, unwatch)
    })
  }

  const observer = new IntersectionObserver(handler, {
    root: root,
    threshold: appear,
    rootMargin: offset ? `-${offset}%` : rootMargin || '0%'
  })

  return {
    watch: node => observer.observe(node)
  }
}
