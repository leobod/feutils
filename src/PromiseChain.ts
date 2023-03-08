/**
 * 顺序调用Promise
 * @param functions
 * @param initValue
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const runPromiseInSequence = function (functions: Array<Function>, initValue = null): Promise<any> {
  return functions.reduce((promiseChain, currentFunction) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return promiseChain.then(currentFunction)
  }, Promise.resolve(initValue))
}

export { runPromiseInSequence }
