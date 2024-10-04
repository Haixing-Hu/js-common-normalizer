////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 将某个字段值正则化为`boolean`值。
 *
 * @param {string|boolean} value
 *     待正则化的字段值。
 * @return {boolean}
 *     正则化的结果。
 */
function normalizeBool(value) {
  if ((typeof value === 'boolean') || (value instanceof Boolean)) {
    return Boolean(value);
  } else if ((typeof value === 'string') || (value instanceof String)) {
    const val = value.trim().toLowerCase();
    if (val === 'true') {
      return true;
    } else if (val === 'false') {
      return false;
    } else {
      throw new RangeError(`Invalid boolean format: ${value}`);
    }
  } else {
    throw new TypeError(`Invalid boolean type: actual type is ${typeof value}`);
  }
}

export default normalizeBool;
