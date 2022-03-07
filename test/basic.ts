import {
  t,
  f,
  invertLogic,
  fixLogic,
  breakLogic,
} from '../index.js'

import {test} from 'tap'

test('initial state', async tap => {
  tap.equal(t, true)
  tap.equal(f, false)
})

test('inverted logic', async tap => {
  invertLogic()
  tap.equal(t, false)
  tap.equal(f, true)
  invertLogic()
  tap.equal(t, true)
  tap.equal(f, false)
})

test('broken logic', async tap => {
  breakLogic()
  tap.equal(t, false)
  tap.equal(f, true)
  breakLogic()
  tap.equal(t, false)
  tap.equal(f, true)
})

test('fix logic', async tap => {
  fixLogic()
  tap.equal(t, true)
  tap.equal(f, false)
  fixLogic()
  tap.equal(t, true)
  tap.equal(f, false)
})

export default undefined
