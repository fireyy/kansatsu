const kansatsu = () => {

  return options => {
    const {
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
      threshold: appear,
      rootMargin: offset ? `-${offset}%` : rootMargin || '0px'
    })

    return {
      watch: node => observer.observe(node)
    }
  }
}

export default kansatsu()
