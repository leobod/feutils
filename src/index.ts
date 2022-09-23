/**
 * 时间处理工具
 */
import {
  formateDate
} from './Date'

/**
 * url参数处理工具
 */
import {
  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue
} from './Params'

/**
 * promiseChain
 */
import {
  runPromiseInSequence
} from "./PromiseChain"

/**
 * 链式处理
 */
import {
  pipe,
  compose
} from "./Chain"

/**
 * 公开的方法
 */
export {
  formateDate,

  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue,

  runPromiseInSequence,

  pipe,
  compose,

}

export default {
  formateDate,

  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue,

  runPromiseInSequence,

  pipe,
  compose,
}
