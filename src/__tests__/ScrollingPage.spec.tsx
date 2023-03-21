import { render, screen } from '@testing-library/react';
import { ScrollingPage } from '../container/ScrollingPage/ScrollingPage';

describe('ScrollingPage container', () => {
  it('renders section navigation and text', () => {
    render(<ScrollingPage />);
    const sectionNavigation = screen.getByRole('navigation');
    expect(sectionNavigation).toBeInTheDocument();
    const sectionText = screen.getByText(/A Amazônia perdeu/i);
    expect(sectionText).toBeInTheDocument();
  });

  it('renders image', () => {
    render(<ScrollingPage />);
    const image = screen.getByRole('img', { name: 'Hut picture' });
    expect(image).toBeInTheDocument();
  });
});