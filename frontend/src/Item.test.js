import { render, screen } from '@testing-library/react';
import Item from './pages/Item';

test('renders equipment list', () => {
  render(<Item />);
  const linkElement = screen.getByText(/equipment/i);
  expect(linkElement).toBeInTheDocument();
});
