"use strict";
const usedTimeList = [
    { SName: '001', TStart: '2022-08-04 01:00:00', TEnd: '2022-08-04 02:15:00' },
    { SName: '002', TStart: '2022-08-04 04:30:00', TEnd: '2022-08-04 04:45:00' },
    { SName: '003', TStart: '2022-08-03 18:00:00', TEnd: '2022-08-04 01:00:00' },
    { SName: '004', TStart: '2022-08-04 19:15:00', TEnd: '2022-08-05 01:00:00' }
];
const TIME_STEP = 15;
/**
 * 根据时间间隔生成时间段
 * @param step
 */
function getTimeOptions(step) {
    let hour = 0;
    let minute = 0;
    const MAX_HOURS = 24;
    const MAX_MINUTES = 60;
    const timeList = [];
    for (; hour < MAX_HOURS; hour++) {
        minute = 0;
        for (; minute < MAX_MINUTES; minute = minute + step) {
            const time_hour = hour < 9 ? `0${hour}` : hour;
            const time_minute = minute < 9 ? `0${minute}` : minute;
            timeList.push({
                label: `${time_hour}:${time_minute}`,
                value: `${time_hour}:${time_minute}`,
                status: '',
                create: true,
                modify: false
            });
        }
    }
    return timeList;
}
// console.log(getTimeOptions(TIME_STEP))
/**
 * 已使用的时间段，timestamp化
 * @param opts
 */
function timingUsedTimeList(opts) {
    const result = [];
    for (const item of opts) {
        /* 转换为时间错，用于计算差值 */
        const start_timestamp = new Date(item.TStart).getTime();
        const end_timestamp = new Date(item.TEnd).getTime();
        const today_last = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;
        const today_first = new Date(new Date().toLocaleDateString()).getTime();
        // console.log((end_timestamp - start_timestamp) / 1000);
        let nType = 0;
        /* 是否是今天、明天、昨天... */
        const isYesterday = today_first - start_timestamp > 0;
        const isTomorrow = today_last - end_timestamp < 0;
        if (!isYesterday && !isTomorrow) {
            nType = 0;
        }
        else if (isYesterday && !isTomorrow) {
            nType = -1;
        }
        else if (!isYesterday && isTomorrow) {
            nType = 1;
        }
        else {
            nType = 2;
        }
        /* 记录 */
        result.push(Object.assign(Object.assign({}, item), { NStart: start_timestamp, NEnd: end_timestamp, NDuration: end_timestamp - start_timestamp, NType: nType }));
    }
    return result;
}
// console.log(timingUsedTimeList(usedTimeList))
/**
 * 升序排序,timestamp的已使用的时间段
 * @param opts
 */
function sortUsedTimeList(opts) {
    return opts.sort((prev, next) => {
        return prev.NStart - next.NStart;
    });
}
// console.log(sortUsedTimeList(timingUsedTimeList(usedTimeList)));
/**
 * 给定时间段，与已使用的时间，填充出时间段占用有否的情况
 * @param opts
 * @param usedList
 */
function mathUsedOptions(opts, usedList) {
    const imut_opts = JSON.parse(JSON.stringify(opts));
    console.log(imut_opts);
    console.log(usedList);
    const today_start = new Date(new Date().toLocaleDateString()).getTime();
    const unit_step = TIME_STEP * 60 * 1000;
    for (const item of usedList) {
        if (item.NType === -1) {
            const diff_end_minutes = Math.ceil(item.NEnd - today_start);
            const effect_piece = Math.ceil(diff_end_minutes / unit_step);
            for (let i = 0; i < effect_piece && i < opts.length; ++i) {
                console.log(i);
                if (!imut_opts[i].modify) {
                    imut_opts[i].status = '(已使用)';
                    imut_opts[i].modify = true;
                }
            }
        }
        else if (item.NType === 0) {
            const diff_start_minutes = Math.ceil(item.NStart - today_start);
            const effect_start = Math.ceil(diff_start_minutes / unit_step);
            const effect_piece = Math.ceil(item.NDuration / unit_step);
            for (let i = effect_start; i < effect_start + effect_piece && i < opts.length; ++i) {
                console.log(i);
                console.log(item.TStart);
                if (!imut_opts[i].modify) {
                    imut_opts[i].status = '(已使用)';
                    imut_opts[i].modify = true;
                }
            }
        }
        else if (item.NType === 1) {
            const diff_start_minutes = Math.ceil(item.NStart - today_start);
            const effect_start = Math.ceil(diff_start_minutes / unit_step);
            for (let i = effect_start; i < opts.length; ++i) {
                if (!imut_opts[i].modify) {
                    imut_opts[i].status = '(已使用)';
                    imut_opts[i].modify = true;
                }
            }
        }
        else if (item.NType === 2) {
            for (let i = 0; i < opts.length; ++i) {
                if (!imut_opts[i].modify) {
                    imut_opts[i].status = '(已使用)';
                    imut_opts[i].modify = true;
                }
            }
        }
    }
    return imut_opts;
}
// 数据测试当天为 2022-08-05
console.log(mathUsedOptions(getTimeOptions(TIME_STEP), sortUsedTimeList(timingUsedTimeList(usedTimeList))));
