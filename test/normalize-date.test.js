////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { normalizeDate } from '../src';

describe('normalizeDate', () => {
  test('should handle null input gracefully', () => {
    const result = normalizeDate(null);
    expect(result).toBe('');
  });

  test('should handle undefined input gracefully', () => {
    const result = normalizeDate(undefined);
    expect(result).toBe('');
  });

  test('should handle empty string input gracefully', () => {
    const result = normalizeDate('');
    expect(result).toBe('');
  });

  test('should handle blank string input gracefully', () => {
    const result = normalizeDate('  ');
    expect(result).toBe('');
  });

  test('should normalize a date string in YYYY-M-D format', () => {
    const result = normalizeDate('2023-1-1');
    expect(result).toBe('2023-01-01');
  });

  test('should normalize a date string in YYYY-MM-D format', () => {
    const result = normalizeDate('2023-02-1');
    expect(result).toBe('2023-02-01');
  });

  test('should normalize a date string in YYYY-MM-DD format', () => {
    const result = normalizeDate('2023-02-01');
    expect(result).toBe('2023-02-01');
  });

  test('should normalize a date string with leading/trailing spaces', () => {
    const result = normalizeDate('  2023-12-1  ');
    expect(result).toBe('2023-12-01');
  });

  test('should normalize a date string in YYYY/M/D format', () => {
    const result = normalizeDate('2023/1/1');
    expect(result).toBe('2023-01-01');
  });

  test('should normalize a date string in YYYY/MM/D format', () => {
    const result = normalizeDate('2023/01/1');
    expect(result).toBe('2023-01-01');
  });

  test('should normalize a date string in YYYY/MM/DD format', () => {
    const result = normalizeDate('2023/01/01');
    expect(result).toBe('2023-01-01');
  });

  test('should normalize a Date object', () => {
    const result = normalizeDate(new Date(2023, 0, 1));
    expect(result).toBe('2023-01-01');
  });

  test('should normalize a Date object with time', () => {
    const result = normalizeDate(new Date(2023, 0, 1, 12, 23, 21));
    expect(result).toBe('2023-01-01');
  });

  test('should throw RangeError for an invalid date string', () => {
    expect(() => normalizeDate('invalid-date')).toThrow(RangeError);
  });

  test('should throw RangeError for an invalid Date object', () => {
    expect(() => normalizeDate(new Date('invalid-date'))).toThrow(RangeError);
  });

  test('should throw TypeError for boolean type', () => {
    expect(() => normalizeDate(true)).toThrow(TypeError);
  });
});
