

interface TimeItemModel {
  label: string,
  value: string
}

interface UsedModel {
  SName: string,
  TStart: string,
  TEnd: string
}

interface TimingUsedModel {
  SName: string,
  TStart: string,
  TEnd: string,
  NStart: number,
  NDuration: number
}


const usedTimeList: Array<UsedModel> = [
  {SName: '001', TStart: '2022-07-15 01:00:00', TEnd: '2022-07-15 02:15:00'},
  {SName: '002', TStart: '2022-07-15 04:30:00', TEnd: '2022-07-15 04:45:00'},
  {SName: '003', TStart: '2022-07-14 18:00:00', TEnd: '2022-07-15 01:00:00'},
  {SName: '004', TStart: '2022-07-15 19:15:00', TEnd: '2022-07-16 01:00:00'},
];

const TIME_STEP = 15;

/**
 * 根据时间间隔生成时间段
 * @param step
 */
function getTimeOptions(step: number): Array<TimeItemModel> {
  let hour = 0;
  let minute = 0;
  const MAX_HOURS = 24;
  const MAX_MINUTES = 60;
  const timeList: Array<TimeItemModel> = [];
  for (; hour < MAX_HOURS; hour++) {
    minute = 0
    for (; minute < MAX_MINUTES; minute = minute + step) {
      const time_hour = hour < 9 ? `0${hour}` : hour;
      const time_minute = minute < 9 ? `0${minute}` : minute;
      timeList.push({
        label: `${time_hour}:${time_minute}`,
        value: `${time_hour}:${time_minute}`
      })
    }
  }
  return timeList
}
// console.log(getTimeOptions(TIME_STEP))

/**
 * 已使用的时间段，timestamp化
 * @param opts
 */
function timingUsedTimeList (opts: Array<UsedModel>): Array<TimingUsedModel> {
  const result : Array<TimingUsedModel> = []
  for (const item of opts) {
    const start_timestamp = new Date(item.TStart).getTime()
    const end_timestamp = new Date(item.TEnd).getTime()
    console.log((end_timestamp - start_timestamp) / 1000);
    result.push({
      ...item,
      NStart: start_timestamp,
      NDuration: end_timestamp - start_timestamp,
    })
  }
  return result
}
// console.log(timingUsedTimeList(usedTimeList))

/**
 * 升序排序,timestamp的已使用的时间段
 * @param opts
 */
function sortUsedTimeList (opts: Array<TimingUsedModel>): Array<TimingUsedModel> {
  return opts.sort((prev, next) => {
    return prev.NStart - next.NStart
  })
}
// console.log(sortUsedTimeList(timingUsedTimeList(usedTimeList)));


/**
 * 给定时间段，与已使用的时间，填充出时间段占用有否的情况
 * @param opts
 * @param usedList
 */
function mathUsedOptions (opts: Array<TimeItemModel>, usedList: Array<TimingUsedModel>):void {
  const imut_opts = JSON.parse(JSON.stringify(opts));
  let pointer = 0;
  const today_start = new Date(`2022/07/15 00:00:00`).getTime();
  for (const item of usedList) {
    const diff_minutes = (item.NStart - today_start) / 1000 / 60
    if (diff_minutes < 0) {

    } else {

    }

  }
}



