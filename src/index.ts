/**
 * 链式处理
 */
import { pipe, compose } from './Chain'

/**
 * 时间处理工具
 */
import { formatDate } from './Date'

/**
 * 设备相关工具方法
 */
import { DeviceType, BrowserType, getDeviceType, isAndroid, isIos, getBrowserType } from './Equipment'

import { EventBus } from './EventBus'

/**
 * url参数处理工具
 */
import { getParams, getParamValue, getLocationParams, getLocationParamValue } from './Params'

/**
 * promiseChain
 */
import { runPromiseInSequence } from './PromiseChain'

import { createRequestor, createRequestPrefix } from './Request'

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

const $u = {
  pipe,
  compose,
  formatDate,
  DeviceType,
  BrowserType,
  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType,
  EventBus,
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
  validPassword
}

export default $u

/**
 * 公开的方法
 */
export {
  pipe,
  compose,
  formatDate,
  DeviceType,
  BrowserType,
  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType,
  EventBus,
  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue,
  runPromiseInSequence,
  createRequestor,
  createRequestPrefix,
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
