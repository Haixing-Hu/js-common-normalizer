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
 * 可解析的时间戳格式。
 */
const PARSE_FORMATS = [
  'YYYY-M-D',
  'YYYY-M-Dz',
  'YYYY-M-DZ',
  'YYYY-M-DTH:m',
  'YYYY-M-DTH:mz',
  'YYYY-M-DTH:mZ',
  'YYYY-M-DTH:m:s',
  'YYYY-M-DTH:m:sz',
  'YYYY-M-DTH:m:sZ',
  'YYYY-M-DTH:m:s.S',
  'YYYY-M-DTH:m:s.Sz',
  'YYYY-M-DTH:m:s.SZ',
  'YYYY-M-DTH:m:s.SS',
  'YYYY-M-DTH:m:s.SSz',
  'YYYY-M-DTH:m:s.SSZ',
  'YYYY-M-DTH:m:s.SSS',
  'YYYY-M-DTH:m:s.SSSz',
  'YYYY-M-DTH:m:s.SSSZ',
];

/**
 * 时间戳的标准显示格式。
 *
 * @type {string}
 */
const DISPLAY_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]';

/**
 * 将某个字段值正则化为表示时间戳的字符串。
 *
 * @param {String|Date} value
 *     待正则化的字段值。
 * @return {String}
 *     正则化的结果。
 */
function normalizeTimestamp(value) {
  return normalizeDateTimeImpl(value, PARSE_FORMATS, DISPLAY_FORMAT);
}

export default normalizeTimestamp;
