const kansatsu = () => {

  return options => {
    const {
      root = null,
      appear = 0,
      offset,
      rootMargin = '-100%'
    } = options

    const handler = (entries, observer) => {
      entries.forEach(entry => {
        //
      })
    }

    const observer = new window.IntersectionObserver(handler, {
      root: root,
      threshold: appear,
      rootMargin: offset ? `-${offset}%` : rootMargin || '0%'
    })

    return {
      watch: node => observer.observe(node)
    }
  }
}

export default kansatsu()
