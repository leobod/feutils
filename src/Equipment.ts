

enum DeviceType {
  BROWSER = 0,
  ANDROID = 1,
  IOS = 2
}

enum BrowserType {
  BROWSER = 0,
  WECHAT = 1,
  WORK_WECHAT = 2,
  DINGTALK = 3
}

/**
 * 识别设备类型
 */
const getDeviceType = function():DeviceType {
  if (isAndroid()) {
    return DeviceType.ANDROID
  } else if (isIos()) {
    return DeviceType.IOS
  } else {
    return DeviceType.BROWSER
  }
}

/**
 * 检查是否是Android设备
 * @returns {boolean}
 */
const isAndroid = function():boolean {
  return navigator.userAgent.indexOf('Android') > -1
}
/**
 * 检查是否是IOS设备(可能需要完善)
 * @returns {boolean}
 */
const isIos = function():boolean {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
}

/**
 * 游览器环境识别
 * @returns {boolean}
 */
const getBrowserType = function():BrowserType {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('dingtalk') !== -1) {
    // 钉钉
    return BrowserType.DINGTALK
  } else if ((ua.indexOf('micromessenger') !== -1) && (ua.indexOf('wxwork') !== -1)) {
    // 企业微信
    // (ua.match(/micromessenger/i) === 'micromessenger') && (ua.match(/wxwork/i) === 'wxwork')
    return BrowserType.WORK_WECHAT
  } else if (ua.indexOf('micromessenger') !== -1) {
    // 微信
    return BrowserType.WECHAT
  } else {
    return BrowserType.BROWSER
  }
}

export {
  DeviceType,
  BrowserType,

  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType
}
