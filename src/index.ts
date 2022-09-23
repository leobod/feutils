
/**
 * 链式处理
 */
import {
  pipe,
  compose
} from "./Chain"

/**
 * 时间处理工具
 */
import {
  formateDate
} from './Date'

import {
  DeviceType,
  BrowserType,
  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType
} from './Equipment'

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

import {
  createRequestor
} from "./Request"

import {
  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  validChinese,
  validEng,
  validNumber,
  validPhone,
  validEmail,
  validPassword,
  getPasswordType
} from './Valid'

/**
 * 公开的方法
 */
export {
  pipe,
  compose,

  formateDate,

  DeviceType,
  BrowserType,
  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType,

  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue,

  runPromiseInSequence,

  createRequestor,

  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  validChinese,
  validEng,
  validNumber,
  validPhone,
  validEmail,
  validPassword,
  getPasswordType
}

export default {
  pipe,
  compose,

  formateDate,

  DeviceType,
  BrowserType,
  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType,

  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue,

  runPromiseInSequence,

  createRequestor,

  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  validChinese,
  validEng,
  validNumber,
  validPhone,
  validEmail,
  validPassword,
  getPasswordType
}
