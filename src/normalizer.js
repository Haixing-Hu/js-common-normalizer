////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { trimString, trimUppercaseString, stringToFloat, stringToMoney } from '@haixing_hu/common-util';
import normalizeDate from './normalize-date';
import normalizeDateTime from './normalize-date-time';
import normalizeTime from './normalize-time';
import normalizeTimestamp from './normalize-timestamp';
import normalizeInteger from './normalize-integer';

/**
 * 提供一个更方便使用的`Normalizer`对象。
 *
 * @type object
 */
const Normalizer = {
  date: normalizeDate,
  datetime: normalizeDateTime,
  time: normalizeTime,
  timestamp: normalizeTimestamp,
  number: stringToFloat,
  id: normalizeInteger,
  int: normalizeInteger,
  mobile: trimUppercaseString,
  money: stringToMoney,
  personName: trimUppercaseString,
  phone: trimUppercaseString,
  url: trimString,
  email: trimString,
  trim: trimString,
  trimUppercase: trimUppercaseString,
};

export default Normalizer;