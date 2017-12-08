import test from 'ava'
import puppeteer from 'puppeteer'
import path from 'path'
import Kansatsu from '../'

const base = path.join(__dirname, '../', 'test.html')

let browser
let page
let baseUrl = `file://${base}`

test('Kansatsu should be a function', async t => {
  t.is('function', typeof Kansatsu)
})

test('Kansatsu should return object', async t => {
  let kansatsu = Kansatsu()
	t.is('object', typeof kansatsu)
})

test('Kansatsu return should expose watch', async t => {
  let kansatsu = Kansatsu()
	t.is('function', typeof kansatsu.watch)
})

test.before(async t => {
	browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
        }
      : {}
  )
  page = await browser.newPage()
  await page.goto(baseUrl, {waitUntil: 'networkidle0'})
  await page.waitForSelector('.man')
})

test('Page should be ready', async t => {
  const result = await page.evaluate(() => {
    return Array.prototype.slice.call(document.querySelectorAll('.man'))
  })
  t.is(3, result.length)
})

test('Kansatsu unwatch', async t => {
  const result = await page.evaluate(() => {
    const woman = document.querySelectorAll('.woman')
    return Array.prototype.slice.call(woman).filter(el => {
      return el.classList.contains('is-appear')
    })
  })

	t.is(0, result.length)
})

test('Kansatsu watch action', async t => {
  const result = await page.evaluate(() => {
    const man = document.querySelectorAll('.man')
    return Array.prototype.slice.call(man).filter(el => {
      return el.classList.contains('is-appear')
    })
  })

	t.is(3, result.length)
})

test.after('cleanup', t => {
	browser.close()
})
