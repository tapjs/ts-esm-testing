export default undefined

export let t:boolean = true
export let f:boolean = false

export function invertLogic () {
  t = !t
  f = !f
}

export function fixLogic () {
  t = true
  f = false
}

export function breakLogic () {
  t = false
  f = true
}
