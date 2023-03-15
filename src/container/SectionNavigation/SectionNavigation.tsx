import React, { useState, useRef } from "react";
import "./SectionNavigation.scss";

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

  const handleButtonClick = (index: number) => {
    setCurrentSectionIndex(index);
    sections[index].ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="section-navigation">
      {showButtons && (
        <ul className="section-navigation__list">
          {sections.map((section, index) => (
            <li key={section.id} className="section-navigation__item">
              <button
                className={`section-navigation__button ${
                  index === currentSectionIndex ? "is-active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
