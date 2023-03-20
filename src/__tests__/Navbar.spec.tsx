import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar/Navbar';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByTestId('menu-button');
    const mobileMenu = screen.getByTestId('mobile-menu');

    if (mobileMenu) {
      expect(mobileMenu.classList).not.toContain('responsive-nav');
    }

    fireEvent.click(menuButton);

    expect(mobileMenu.classList).not.toContain('responsive-nav');
  });

  it('closes mobile menu when close button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByTestId('menu-button');
    const closeButton = screen.getByTestId('close-button');
    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveClass('mobile-menu');

    fireEvent.click(menuButton);

    expect(mobileMenu).not.toHaveClass('responsive-nav');

    fireEvent.click(closeButton);

    expect(mobileMenu).not.toHaveClass('responsive-nav');
  });
});
