/* eslint-disable */
/**
 * 正则表达式
 * ^\\d+$　　//非负整数（正整数 + 0）
 * ^[0-9]*[1-9][0-9]*$　　//正整数
 * ^((-\\d+)|(0+))$　　//非正整数（负整数 + 0）
 * ^-[0-9]*[1-9][0-9]*$　　//负整数
 * ^-?\\d+$　　　　//整数
 * ^\\d+(　　//非负浮点数（正浮点数 + 0）
 * ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$ //正浮点数
 * ^((-\\d+(　　//非正浮点数（负浮点数 + 0）
 * ^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$ //负浮点数
 * ^(-?\\d+)(　　//浮点数
 * ^[A-Za-z]+$　　//由26个英文字母组成的字符串
 * ^[A-Z]+$　　//由26个英文字母的大写组成的字符串
 * ^[a-z]+$　　//由26个英文字母的小写组成的字符串
 * ^[A-Za-z0-9]+$　　//由数字和26个英文字母组成的字符串
 * ^\\w+$　　//由数字、26个英文字母或者下划线组成的字符串
 * ^[\\w-]+(　　　　//email地址
 * ^[a-zA-z]+://(　　//url
 * ^[A-Za-z0-9_]*$
 * 匹配完整域名的正则表达式：
 * [a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?
 */
/* eslint-enable */
/**
 * 是否是URL
 * @param {string} url
 * @returns {Boolean}
 */
const validURL = function (url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
};
/**
 * 是否是小写字母
 * @param {string} str
 * @returns {Boolean}
 */
const validLowerCase = function (str) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
};
/**
 * 是否是大写字母
 * @param {string} str
 * @returns {Boolean}
 */
const validUpperCase = function (str) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
};
/**
 * 是否是字母
 * @param {string} str
 * @returns {Boolean}
 */
const validAlphabets = function (str) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
};
/**
 * 判断是否是中文
 * @param {string} str
 * @return {boolean}
 */
const validChinese = function (str) {
    const pattern = new RegExp('[\u4E00-\u9FA5]+');
    return pattern.test(str);
};
/**
 * 判断是否是英文
 * @param {string} str
 * @return {boolean}
 */
const validEng = function (str) {
    const pattern = new RegExp('[A-Za-z]+');
    return pattern.test(str);
};
/**
 * 判断是否是数字
 * @param {string} str
 * @return {boolean}
 */
const validNumber = function (str) {
    const pattern = new RegExp('[0-9]+');
    return pattern.test(str);
};
/**
 * 判断是否是手机号
 * @param {string} str
 * @return {boolean}
 */
const validPhone = function (str) {
    const pattern = /^[1][3-9][\d]{9}/;
    return pattern.test(str);
};
/**
 * 判断是否是邮箱号
 * @param {string} str
 * @return {boolean}
 */
const validEmail = function (str) {
    const pattern = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
    return pattern.test(str);
};
/**
 * 密码验证
 * @param str
 */
const validPassword = function (str, type = 'strong') {
    switch (type) {
        case 'strong':
            return _validStrongPassword(str);
        case 'number':
            return _validNumberPassword(str);
        case 'account':
            return _validAccountPassword(str);
        default:
            return _validNormalPassword(str);
    }
};
/**
 * 纯数字密码
 * @param str
 */
const _validNumberPassword = function (str) {
    const pattern = /^[0-9]{6}$/;
    return pattern.test(str);
};
/**
 * 以字母开头、可带数字、“_”、“.”的字串(适用于登录名)
 * @param str
 */
const _validAccountPassword = function (str) {
    const pattern = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){2,18}$/;
    return pattern.test(str);
};
/**
 * 校验密码：只能输入6-20个字母、数字、下划线
 * @param str
 */
const _validNormalPassword = function (str) {
    const pattern = /^(\w){6,20}$/;
    return pattern.test(str);
};
/**
 * 6~18位字母、数字、符号的组合密码
 * @param str
 */
const _validStrongPassword = function (str) {
    const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()<>,.?-_+=`~])[0-9a-zA-Z!@#$%^&*()<>,.?-_+=`~]{6,18}$/;
    return pattern.test(str);
};
var PasswordType;
(function (PasswordType) {
    PasswordType[PasswordType["WEAK"] = 0] = "WEAK";
    PasswordType[PasswordType["NORMAL"] = 1] = "NORMAL";
    PasswordType[PasswordType["STRONG"] = 2] = "STRONG";
})(PasswordType || (PasswordType = {}));
/**
 * 密码强度
 * @param str
 */
const getPasswordType = function (str) {
    if (/^\d+$/.test(str) || /^[a-z]+$/.test(str) || /^[A-Z]+$/.test(str)) {
        return PasswordType.WEAK;
    }
    else if (/\d+/.test(str) && /[a-z]+/.test(str) && /[A-Z]+/.test(str)) {
        return PasswordType.STRONG;
    }
    else {
        return PasswordType.NORMAL;
    }
};
export { validURL, validLowerCase, validUpperCase, validAlphabets, validChinese, validEng, validNumber, validPhone, validEmail, validPassword, getPasswordType };
