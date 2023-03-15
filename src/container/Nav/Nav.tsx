import { useLayoutEffect, useState } from "react";
import "./Nav.scss";

interface NavProps {
  sections: string[];
}

export function Nav({ sections }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`dot-nav ${scrolled ? "show" : ""}`}>
      <ul>
        {scrolled && (
          <>
            {sections.map((section) => (
              <li key={section}>
                <h2>
                  <a href={`#${section}`}>{section}</a>
                </h2>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
