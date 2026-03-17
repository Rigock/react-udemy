import { describe, expect, test } from 'vitest'
import { add, divide, multiply, subtract } from './math.helper'

describe('Add', () => {
  test('Should add two positive numbers', () => {
    
    //! 1. Arrange
    const a = 1;
    const b = 2;
    //! 2. Act
    const result = add(a, b);
    //! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe('Subtract', () => {
  test('Should result of subtract of A - B be less than A', () => {
    //! 1. Arrange
    const a = 5;
    const b = 2;
    //! 2. Act
    const result = subtract(a, b);
    //! 3. Assert
    expect(true).toBe(result < a);
  });
  test('Should subtract two positive numbers', () => {
    const a = 5;
    const b = 2;

    const result = subtract(a, b);
 
    expect(result).toBe(a - b);
  });
});

describe('Multiply', () => {
  test('Should product of  multiply two negative numbers to be positve', () => {
    const a = -5;
    const b = -2;

    const result = multiply(a, b);

    expect(true).toBe(result > 0);
  });
  test('Should multiply one positive and one negative number to be negative', () => {
    const a = 5;
    const b = -2;

    const result = multiply(a, b);
  
    expect(true).toBe(result < 0);
  });
});

describe('Divide', () => {
  test('Should divide two positive numbers', () => {
    const a = 2;
    const b = 1;

    const result = divide(a, b);
  
    expect(result).toBe(a / b);
  });
});