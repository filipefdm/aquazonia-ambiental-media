import { render, screen, waitFor } from '@testing-library/react';
import { Cover } from '../container/Cover/Cover';

describe('Cover container', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Cover />);
    const title = getByText(/Aquazônia/i);
    const subtitle = getByText(/A FLORESTA-ÁGUA/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('changes background color on scroll', async () => {
    render(<Cover />);
    const headerElement = screen.getByRole('section');
    expect(headerElement).toHaveClass('emerald');

    window.pageYOffset = 10;
    window.dispatchEvent(new Event('scroll'));

    // Wait for the scroll to complete and check the class
    await waitFor(() => {
      expect(window.pageYOffset).toBe(10);
      expect(headerElement).toHaveClass('beige');
    });
  });
});
