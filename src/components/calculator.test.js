import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('should render without errors', () => {
    render(<Calculator />);
  });

  it('should update display value when a number button is clicked', () => {
    const { getByText, container } = render(<Calculator />);
    const display = container.querySelector('.display');

    fireEvent.click(getByText('1'));
    expect(display.textContent).toBe('1');

    fireEvent.click(getByText('2'));
    expect(display.textContent).toBe('12');

    fireEvent.click(getByText('3'));
    expect(display.textContent).toBe('123');
  });

  it('should update display value when an operator button is clicked', () => {
    const { getByText, container } = render(<Calculator />);
    const display = container.querySelector('.display');

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    expect(display.textContent).toBe('0');

    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(display.textContent).toBe('5');
  });

  it('should clear the display when the AC button is clicked', () => {
    const { getByText, container } = render(<Calculator />);
    const display = container.querySelector('.display');

    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('AC'));
    expect(display.textContent).toBe('0');
  });
});
