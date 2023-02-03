

import SOT, { runPromiseInSequence } from '../src/out/umd'

const fn1 = (val) => {
  console.log(val)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

const fn2 = (val) => {
  console.log(val)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
}

const fns = [fn1, fn2]

export const testPromiseChainTest = function () {
  SOT.runPromiseInSequence(fns)
    .then((val) => {
      console.log(val)
    })
}

