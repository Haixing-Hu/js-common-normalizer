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
 * 可解析的时间格式。
 */
const PARSE_FORMATS = [
  'H:m',
  'H:m:s.SSS',
  'H:m:s.SS',
  'H:m:s.S',
  'H:m:s',
];

/**
 * 时间的标准显示格式。
 */
const DISPLAY_FORMAT = 'HH:mm:ss';

/**
 * 将某个字段值正则化为表示时间的字符串。
 *
 * @param {String|Date} value
 *     待正则化的字段值。
 * @return {String}
 *     正则化的结果。
 */
function normalizeTime(value) {
  return normalizeDateTimeImpl(value, PARSE_FORMATS, DISPLAY_FORMAT);
}

export default normalizeTime;
