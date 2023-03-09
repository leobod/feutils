/**
 * pipe
 *    pipe(x, f1, f2) => f2(f1(x))
 * @param src
 * @param fns
 */
const pipe = function (src, ...fns) {
    return fns.reduce(function (fn1, fn2) {
        return fn2(fn1);
    }, src);
};
/**
 * compose
 * @type 函数式
 *   compose(fn3, fn2, fn1)(6) => fn3(fn2(fn1(6)))
 * @param args
 */
const compose = function (...args) {
    const length = args.length;
    let count = length - 1;
    let result;
    return function f1(...arg1) {
        /* apply(this:Object, args: Array) */
        result = args[count].apply(null, arg1);
        if (count <= 0) {
            count = length - 1;
            return result;
        }
        count--;
        /* call(this:Object, param1:any, param2:any, ...) */
        return f1.call(null, result);
    };
};
export { pipe, compose };
