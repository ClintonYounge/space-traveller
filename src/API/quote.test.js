import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Quote from './quote';

test('renders quote and author', async () => {
  render(<Quote />);

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i), { timeout: 20000 });

  const errorElement = screen.queryByText(/error/i, { className: 'quote' });

  if (errorElement) {
    expect(errorElement).not.toBeInTheDocument();
  } else {
    const quoteTextElement = screen.queryByText(/Quote:*/, { className: 'quote' });
    const authorTextElement = screen.queryByText(/ - /);

    if (quoteTextElement) {
      expect(quoteTextElement).toBeInTheDocument();
      const quoteText = quoteTextElement.textContent;
      expect(quoteText).toBeTruthy();
      expect('Quote: I started on an Apple II, which I had bought at the very end of 1978 for half of my annual income. I made $4,500 a year, and I spent half of it on the computer.').toMatchSnapshot();
    }

    if (authorTextElement) {
      expect(authorTextElement).toBeInTheDocument();
      const authorText = authorTextElement.textContent;
      expect(authorText).toBeTruthy();
      expect('Bill Budge').toMatchSnapshot();
    }
  }
});
