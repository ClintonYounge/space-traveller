import calculate from './calculate';

describe('Calculator', () => {
  it('should clear the calculator data when AC button is clicked', () => {
    const obj = {
      total: '100',
      next: '50',
      operation: '+',
    };

    const result = calculate(obj, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should clear the calculator data when 0 button is clicked', () => {
    const obj = {
      total: '100',
      next: '0',
      operation: '+',
    };

    const result = calculate(obj, '0');

    expect(result).toEqual({});
  });

  it('should give the calculate result when operation button is clicked', () => {
    const obj = {
      total: '100',
      next: '1.1',
      operation: '+',
    };

    const result = calculate(obj, '+');

    expect(result).toEqual({
      total: '101.1',
      next: null,
      operation: '+',
    });
  });

  it('should give the reverse number when +/- button is clicked', () => {
    const obj = {
      total: '100',
      next: '10',
      operation: '+/-',
    };

    const result = calculate(obj, '+/-');

    expect(result).toEqual({
      total: '100',
      next: '-10',
      operation: '+/-',
    });
  });
});
