////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import normalizeDateTimeImpl from './impl/normalize-date-time-impl';

/**
 * 可解析的日期时间格式。
 */
const PARSE_FORMATS = [
  'YYYY-M-D',
  'YYYY-M-D H:m',
  'YYYY-M-D H:m:s.S',
  'YYYY-M-D H:m:s.SS',
  'YYYY-M-D H:m:s.SSS',
  'YYYY-M-D H:m:s',
];

/**
 * 日期时间的标准显示格式。
 */
const DISPLAY_FORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * 将某个字段值正则化为表示本地日期时间的字符串。
 *
 * @param {String|Date} value
 *     待正则化的字段值。
 * @return {String}
 *     正则化的结果。
 */
function normalizeDateTime(value) {
  return normalizeDateTimeImpl(value, PARSE_FORMATS, DISPLAY_FORMAT);
}

export default normalizeDateTime;
