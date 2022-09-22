

/**
 * 识别设备类型
 */
const getDeviceType = function():string {
  if (isAndroid()) {
    return 'ANDROID'
  } else if (isIos()) {
    return 'IOS'
  } else {
    return 'BROWSER'
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
const getBrowserType = function() {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('dingtalk') !== -1) {
    // 钉钉
    return {
      state: 3,
      text: 'DINGTALK'
    }
  } else if ((ua.indexOf('micromessenger') !== -1) && (ua.indexOf('wxwork') !== -1)) {
    // 企业微信
    // (ua.match(/micromessenger/i) === 'micromessenger') && (ua.match(/wxwork/i) === 'wxwork')
    return {
      state: 2,
      text: 'WORK_WECHAT'
    }
  } else if (ua.indexOf('micromessenger') !== -1) {
    // 微信
    return {
      state: 1,
      text: 'WECHAT'
    }
  } else {
    return {
      state: 0,
      text: 'BROWSER'
    }
  }
}

export {
  getDeviceType,
  isAndroid,
  isIos,
  getBrowserType
}
