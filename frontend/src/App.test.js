import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to our website for live ARC capacities /i);
  expect(linkElement).toBeInTheDocument();
});
