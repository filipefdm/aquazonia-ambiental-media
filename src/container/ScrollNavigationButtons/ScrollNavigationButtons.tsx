import { Section } from "../Section/Section";
import { Nav } from "../Nav/Nav";

import "./ScrollNavigationButtons.scss";
import { useState } from "react";

export function ScrollNavigationButtons() {
  const numOfSections = 2;

  const renderSections = (num: number): string[] => {
    let arr: string[] = [];

    for (let i = 1; i <= num; i++) {
      arr.push(`section-${i}`);
    }

    return arr;
  };

  const sections = renderSections(numOfSections);

  const [sectionsPages, setSectionsPages] = useState([
    {
      id: "section-1",
      backgroundColor: "#FFFFFF",
      content: {
        title: "",
        description: "",
      },
    },
    {
      id: "section-2",
      backgroundColor: "#FFFFFF",
      content: {
        title: "A intensidade das ameaças à bacia",
        description: "A intensidade das ameaças à bacia",
      },
    },
  ]);

  return (
    <div>
      <main>
        <Nav sections={sections} />

        <div className="app__section-container">
          {sectionsPages.map((section) => {
            return (
              <Section
                key={section.id}
                id={section.id}
                backgroundColor={section.backgroundColor}
                content={section.content}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
