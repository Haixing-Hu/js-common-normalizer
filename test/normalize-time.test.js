////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { normalizeTime } from '../src';

describe('normalizeTime', () => {
  test('should handle null input gracefully', () => {
    const result = normalizeTime(null);
    expect(result).toBe('');
  });

  test('should handle undefined input gracefully', () => {
    const result = normalizeTime(undefined);
    expect(result).toBe('');
  });

  test('should handle empty string input gracefully', () => {
    const result = normalizeTime('');
    expect(result).toBe('');
  });

  test('should handle blank string input gracefully', () => {
    const result = normalizeTime('  ');
    expect(result).toBe('');
  });

  test('should normalize a time string in HH:mm:ss format', () => {
    const result = normalizeTime('12:21:03');
    expect(result).toBe('12:21:03');
  });

  test('should normalize a time string in HH:mm:s format', () => {
    const result = normalizeTime('12:21:3');
    expect(result).toBe('12:21:03');
  });

  test('should normalize a time string in HH:m:ss format', () => {
    const result = normalizeTime('12:1:03');
    expect(result).toBe('12:01:03');
  });

  test('should normalize a time string in H:mm:ss format', () => {
    const result = normalizeTime('2:21:03');
    expect(result).toBe('02:21:03');
  });

  test('should normalize a time string in HH:mm format', () => {
    const result = normalizeTime('12:21');
    expect(result).toBe('12:21:00');
  });

  test('should normalize a time string in HH:m format', () => {
    const result = normalizeTime('12:1');
    expect(result).toBe('12:01:00');
  });

  test('should normalize a time string in H:mm format', () => {
    const result = normalizeTime('2:21');
    expect(result).toBe('02:21:00');
  });

  test('should normalize a time string in HH:mm:ss.S format', () => {
    const result = normalizeTime('12:21:03.1');
    expect(result).toBe('12:21:03');
  });

  test('should normalize a time string in HH:mm:ss.SS format', () => {
    const result = normalizeTime('12:21:03.12');
    expect(result).toBe('12:21:03');
  });

  test('should normalize a time string in HH:mm:ss.SSS format', () => {
    const result = normalizeTime('12:21:03.123');
    expect(result).toBe('12:21:03');
  });

  test('should normalize a time string with leading/trailing spaces', () => {
    const result = normalizeTime(' 12:21:03  ');
    expect(result).toBe('12:21:03');
  });

  test('should normalize a Date object with time', () => {
    const result = normalizeTime(new Date(2023, 0, 1, 12, 23, 21));
    expect(result).toBe('12:23:21');
  });

  test('should normalize a Date object without time part', () => {
    const result = normalizeTime(new Date(2023, 0, 1));
    expect(result).toBe('00:00:00');
  });

  test('should throw RangeError for an invalid date string', () => {
    expect(() => normalizeTime('invalid-date')).toThrow(RangeError);
  });

  test('should throw RangeError for an invalid Date object', () => {
    expect(() => normalizeTime(new Date('invalid-date'))).toThrow(RangeError);
  });

  test('should throw TypeError for boolean type', () => {
    expect(() => normalizeTime(true)).toThrow(TypeError);
  });
});
