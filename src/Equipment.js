var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["BROWSER"] = 0] = "BROWSER";
    DeviceType[DeviceType["ANDROID"] = 1] = "ANDROID";
    DeviceType[DeviceType["IOS"] = 2] = "IOS";
})(DeviceType || (DeviceType = {}));
var BrowserType;
(function (BrowserType) {
    BrowserType[BrowserType["BROWSER"] = 0] = "BROWSER";
    BrowserType[BrowserType["WECHAT"] = 1] = "WECHAT";
    BrowserType[BrowserType["WORK_WECHAT"] = 2] = "WORK_WECHAT";
    BrowserType[BrowserType["DINGTALK"] = 3] = "DINGTALK";
})(BrowserType || (BrowserType = {}));
/**
 * 识别设备类型
 */
const getDeviceType = function () {
    if (isAndroid()) {
        return DeviceType.ANDROID;
    }
    else if (isIos()) {
        return DeviceType.IOS;
    }
    else {
        return DeviceType.BROWSER;
    }
};
/**
 * 检查是否是Android设备
 * @returns {boolean}
 */
const isAndroid = function () {
    return navigator.userAgent.indexOf('Android') > -1;
};
/**
 * 检查是否是IOS设备(可能需要完善)
 * @returns {boolean}
 */
const isIos = function () {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
};
/**
 * 游览器环境识别
 * @returns {boolean}
 */
const getBrowserType = function () {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('dingtalk') !== -1) {
        // 钉钉
        return BrowserType.DINGTALK;
    }
    else if (ua.indexOf('micromessenger') !== -1 && ua.indexOf('wxwork') !== -1) {
        // 企业微信
        // (ua.match(/micromessenger/i) === 'micromessenger') && (ua.match(/wxwork/i) === 'wxwork')
        return BrowserType.WORK_WECHAT;
    }
    else if (ua.indexOf('micromessenger') !== -1) {
        // 微信
        return BrowserType.WECHAT;
    }
    else {
        return BrowserType.BROWSER;
    }
};
export { DeviceType, BrowserType, getDeviceType, isAndroid, isIos, getBrowserType };
