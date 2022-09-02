/**
 * 根据url处理参数
 * @param url
 */
const getParams = function (url) {
    return _getLocationParams(_parseUrl(url));
};
/**
 * 根据url以及指定key来获取参数的值
 * @param url
 * @param param
 */
const getParamValue = function (url, param) {
    const paramsObj = getParams(url);
    if (paramsObj[param]) {
        return paramsObj[param];
    }
    return '';
};
/**
 * 解析url为url对象
 * @param url
 */
const _parseUrl = function (url) {
    return new URL(url);
};
/**
 * 将url对象中的参数提取出来,转换为参数对象
 * @param location
 */
const _getLocationParams = function (location) {
    const query = location.search.substring(1);
    const vars = query.split('&');
    const result = {};
    vars.forEach((item) => {
        const pair = item.split('=');
        result[pair[0]] = pair[1];
    });
    return result;
};
/**
 * 获取当前url中的参数
 * @param key
 * @returns {SimpleObject}
 */
const getLocationParams = function () {
    return getParams(window.location.href);
};
/**
 * 获取当前url中的指定参数的值
 * @param param
 * @returns {string}
 */
const getLocationParamValue = function (param) {
    return getParamValue(window.location.href, param);
};
export { getParams, getParamValue, getLocationParams, getLocationParamValue };
//# sourceMappingURL=getLocationParams.js.map