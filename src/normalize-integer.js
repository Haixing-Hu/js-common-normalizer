////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 将某个字段值正则化为表示整数的`Number`对象。
 *
 * @param {string|number} value
 *     待正则化的字段值。
 * @return {number}
 *     正则化的结果。
 */
function normalizeInteger(value) {
  if (value === undefined || value === null) {
    return value;
  } else if (typeof value === 'string') {
    if (value === '') {
      return 0;
    } if (/^\s*[+-]?\d+\s*$/.test(value)) {
      return Number.parseInt(value.trim(), 10);
    } else {
      throw new RangeError(`Invalid integer format: ${value}`);
    }
  } else if (typeof value === 'number') {
    if (Number.isInteger(value)) {
      return Math.floor(value);   // 删除小数点后面可能的0
    } else {
      throw new RangeError(`Invalid integer value: ${value}`);
    }
  } else if (value instanceof Number) {
    value = Number(value);        // 将wrapped object转换为primitive
    if (Number.isInteger(value)) {
      return Math.floor(value);   // 删除小数点后面可能的0
    } else {
      throw new RangeError(`Invalid integer value: ${value}`);
    }
  } else {
    throw new RangeError(`Invalid integer format: type is ${typeof value}`);
  }
}

export default normalizeInteger;
