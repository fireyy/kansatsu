require('jsdom-global')()
import test from 'ava'
import Kansatsu from '../'

test('Kansatsu should be a function', t => {
	t.is('function', typeof Kansatsu)
})

test('Kansatsu should return object', t => {
  const kansatsu = Kansatsu()
	t.is('object', typeof kansatsu)
})

test('Kansatsu return should expose watch', t => {
  const kansatsu = Kansatsu()
	t.is('function', typeof kansatsu.watch)
})

test.before(t => {
  document.body.innerHTML = ''
  const div = document.createElement('div')
  document.body.appendChild(div)
});

test('Kansatsu unwatch', t => {
  const div = document.getElementsByTagName('div')[0]
	const kansatsu = Kansatsu({
    callback (el, isAppear, unwatch) {
      if (isAppear) {
        el.classList.add('appear')
      }
    }
  })

	t.is(0, div.classList.length)
})

test('Kansatsu watch and add `.appear` to div', t => {
  const div = document.getElementsByTagName('div')[0]
	const kansatsu = Kansatsu({
    callback (el, isAppear, unwatch) {
      if (isAppear) {
        el.classList.add('appear')
      }
    }
  })
  kansatsu.watch(div)

	t.is(true, div.classList.contains('appear'))
})
