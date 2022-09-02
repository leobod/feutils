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
 * 公开的方法
 */
const SOT = {
  formateDate,
  getParams,
  getParamValue,
  getLocationParams,
  getLocationParamValue
}

console.log('RUN')

export default SOT
