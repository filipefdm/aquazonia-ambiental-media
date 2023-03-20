import React, { useState, useLayoutEffect } from 'react';
import './SectionNavigation.scss';

type SectionNavigationProps = {
  sections: {
    id: string;
    label: string;
    ref: React.MutableRefObject<HTMLElement | null>;
  }[];
  showButtons: boolean;
};

export function SectionNavigation({
  sections,
  showButtons,
}: SectionNavigationProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (index: number) => {
    setCurrentSectionIndex(index);
    sections[index].ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className={`section-navigation ${scrolled ? 'show' : ''}`}>
      {showButtons && (
        <ul className="section-navigation__list">
          {sections.map((section, index) => (
            <li key={section.id} className="section-navigation__item">
              <h2
                className={`section-navigation__heading ${
                  index === currentSectionIndex ? 'is-active' : ''
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <p>{section.label}</p>
              </h2>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
