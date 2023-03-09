import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
/**
 *
 * @param date
 * @param format  例如: YYYY/MM/DD
 */
const formateDate = function (date, format) {
    return dayjs(date).format(format);
};
export { formateDate };
