import { render } from '@testing-library/react';
import { SectionNavigation } from '../container/SectionNavigation/SectionNavigation';

const sections = [
  {
    id: 'section-1',
    label: 'Section 1',
    ref: { current: null },
  },
  {
    id: 'section-2',
    label: 'Section 2',
    ref: { current: null },
  },
];

describe('SectionNavigation container', () => {
  it('renders the component with the given sections', () => {
    const { getByText } = render(
      <SectionNavigation sections={sections} showButtons={true} />,
    );

    sections.forEach((section) => {
      expect(getByText(section.label)).toBeInTheDocument();
    });
  });
});
