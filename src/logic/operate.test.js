import operate from './operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('10', '5', '+');
    expect(result).toBe('15');
  });

  it('should perform subtraction correctly', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });

  it('should perform multiplication correctly', () => {
    const result = operate('10', '5', 'x');
    expect(result).toBe('50');
  });

  it('should perform division correctly', () => {
    const result = operate('10', '5', '÷');
    expect(result).toBe('2');
  });

  it('should handle division by 0', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    const result = operate('10', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo with divisor 0', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('10', '5', '$')).toThrow(
      "Unknown operation '$'",
    );
  });
});
