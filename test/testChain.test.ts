

import { compose } from '../src/index'

export const testChain = function () {
  const toUpperCase = function(x) { return x.toUpperCase() }
  const exclaim = function(x) { return x + '!' }
  const shout = compose(exclaim, toUpperCase)
  const result = shout("send in the clowns")
  console.log(result)
}

