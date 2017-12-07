const kansatsu = () => {

  return options => {
    const handler = (entries, observer) => {
      entries.forEach(entry => {
        //
      })
    }

    const observer = new window.IntersectionObserver(handler, {
      threshold: 0,
      rootMargin: '100%'
    })

    return {
      watch: node => observer.observe(node)
    }
  }
}

export default kansatsu()
