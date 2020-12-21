import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders markdown editor display', () => {
  render(<App />);
  const linkElement = screen.getByTestId("bold");
  expect(linkElement).toBeInTheDocument();
});
