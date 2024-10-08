////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import normalizeDateTimeImpl from './impl/normalize-date-time-impl';

/**
 * 可解析的日期格式。
 */
const PARSE_FORMATS = [
  'YYYY-M-D',
  'YYYY/M/D',
];

/**
 * 日期的标准显示格式。
 */
const DISPLAY_FORMAT = 'YYYY-MM-DD';

/**
 * 将某个字段值正则化为表示日期的字符串。
 *
 * @param {String|Date} value
 *     待正则化的字段值。
 * @return {String}
 *     正则化的结果。
 */
function normalizeDate(value) {
  return normalizeDateTimeImpl(value, PARSE_FORMATS, DISPLAY_FORMAT);
}

export default normalizeDate;
