import { render, screen } from '@testing-library/react';
import App from './App';

test('renders illinois login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
