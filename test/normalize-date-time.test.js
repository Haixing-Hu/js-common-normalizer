////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { normalizeDate, normalizeDateTime } from '../src';

describe('normalizeDateTime', () => {
  test('should handle null input gracefully', () => {
    const result = normalizeDateTime(null);
    expect(result).toBe('');
  });

  test('should handle undefined input gracefully', () => {
    const result = normalizeDateTime(undefined);
    expect(result).toBe('');
  });

  test('should handle empty string input gracefully', () => {
    const result = normalizeDateTime('');
    expect(result).toBe('');
  });

  test('should handle blank string input gracefully', () => {
    const result = normalizeDateTime('  ');
    expect(result).toBe('');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:mm:ss format', () => {
    const result = normalizeDateTime('2023-01-01 12:21:03');
    expect(result).toBe('2023-01-01 12:21:03');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:mm:s format', () => {
    const result = normalizeDateTime('2023-01-01 12:21:3');
    expect(result).toBe('2023-01-01 12:21:03');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:m:ss format', () => {
    const result = normalizeDateTime('2023-01-01 12:1:03');
    expect(result).toBe('2023-01-01 12:01:03');
  });

  test('should normalize a date time string in YYYY-MM-DD H:mm:ss format', () => {
    const result = normalizeDateTime('2023-01-01 2:21:03');
    expect(result).toBe('2023-01-01 02:21:03');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:mm format', () => {
    const result = normalizeDateTime('2023-01-01 12:21');
    expect(result).toBe('2023-01-01 12:21:00');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:m format', () => {
    const result = normalizeDateTime('2023-01-01 12:1');
    expect(result).toBe('2023-01-01 12:01:00');
  });

  test('should normalize a date time string in YYYY-MM-DD H:mm format', () => {
    const result = normalizeDateTime('2023-01-01 2:21');
    expect(result).toBe('2023-01-01 02:21:00');
  });

  test('should normalize a date time string in YYYY-MM-DD format', () => {
    const result = normalizeDateTime('2023-01-01');
    expect(result).toBe('2023-01-01 00:00:00');
  });

  test('should normalize a date time string in YYYY-MM-D format', () => {
    const result = normalizeDateTime('2023-01-1');
    expect(result).toBe('2023-01-01 00:00:00');
  });

  test('should normalize a date time string in YYYY-M-DD format', () => {
    const result = normalizeDateTime('2023-1-01');
    expect(result).toBe('2023-01-01 00:00:00');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:mm:ss.S format', () => {
    const result = normalizeDateTime('2023-01-01 12:21:03.1');
    expect(result).toBe('2023-01-01 12:21:03');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:mm:ss.SS format', () => {
    const result = normalizeDateTime('2023-01-01 12:21:03.12');
    expect(result).toBe('2023-01-01 12:21:03');
  });

  test('should normalize a date time string in YYYY-MM-DD HH:mm:ss.SSS format', () => {
    const result = normalizeDateTime('2023-01-01 12:21:03.123');
    expect(result).toBe('2023-01-01 12:21:03');
  });

  test('should normalize a date time string with leading/trailing spaces', () => {
    const result = normalizeDateTime(' 2023-01-01 12:21:03  ');
    expect(result).toBe('2023-01-01 12:21:03');
  });

  test('should normalize a Date object with time', () => {
    const result = normalizeDateTime(new Date(2023, 0, 1, 12, 23, 21));
    expect(result).toBe('2023-01-01 12:23:21');
  });

  test('should normalize a Date object without time part', () => {
    const result = normalizeDateTime(new Date(2023, 0, 1));
    expect(result).toBe('2023-01-01 00:00:00');
  });

  test('should throw RangeError for an invalid date string', () => {
    expect(() => normalizeDateTime('invalid-date')).toThrow(RangeError);
  });

  test('should throw RangeError for an invalid Date object', () => {
    expect(() => normalizeDateTime(new Date('invalid-date'))).toThrow(RangeError);
  });

  test('should throw TypeError for boolean type', () => {
    expect(() => normalizeDateTime(true)).toThrow(TypeError);
  });
});
