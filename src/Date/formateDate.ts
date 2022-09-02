import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

type DateType = string | Date;

/**
 *
 * @param date
 * @param format  例如: YYYY/MM/DD
 */
const formateDate = function (date: DateType, format: string): string {
  return dayjs(date).format(format)
}


export {
  formateDate
}
