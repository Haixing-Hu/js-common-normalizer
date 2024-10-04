////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { normalizeBool } from '../src';

describe('normalizeBool', () => {
  test('should return true for boolean true', () => {
    const result = normalizeBool(true);
    expect(result).toBe(true);
  });

  test('should return false for boolean false', () => {
    const result = normalizeBool(false);
    expect(result).toBe(false);
  });

  test('should return true for string "true"', () => {
    const result = normalizeBool('true');
    expect(result).toBe(true);
  });

  test('should return false for string "false"', () => {
    const result = normalizeBool('false');
    expect(result).toBe(false);
  });

  test('should return true for string " true " with spaces', () => {
    const result = normalizeBool(' true ');
    expect(result).toBe(true);
  });

  test('should return false for string " false " with spaces', () => {
    const result = normalizeBool(' false ');
    expect(result).toBe(false);
  });

  test('should throw RangeError for invalid boolean string', () => {
    expect(() => normalizeBool('invalid')).toThrow(RangeError, 'Invalid boolean format: invalid');
  });

  test('should throw TypeError for non-boolean and non-string input', () => {
    expect(() => normalizeBool(123)).toThrow(TypeError, 'Invalid boolean type: actual type is number');
  });

  test('should throw TypeError for null input', () => {
    expect(() => normalizeBool(null)).toThrow(TypeError, 'Invalid boolean type: actual type is object');
  });

  test('should throw TypeError for undefined input', () => {
    expect(() => normalizeBool(undefined)).toThrow(TypeError, 'Invalid boolean type: actual type is undefined');
  });

  test('should throw RangeError for invalid string', () => {
    expect(() => normalizeBool('xxx')).toThrow(RangeError, 'Invalid boolean format: xxx');
  });
});
