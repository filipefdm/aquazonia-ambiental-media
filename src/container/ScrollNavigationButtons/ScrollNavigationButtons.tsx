import React, { useState, useEffect } from "react";
import "./ScrollNavigationButtons.scss";

interface Props {
  sections: string[];
}

const ScrollNavigationButtons: React.FC<Props> = ({ sections }) => {
  // const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let currentSection = "";
  //     sections.forEach((section) => {
  //       const element = document.getElementById(section);
  //       if (element && window.pageYOffset >= element.offsetTop - 200) {
  //         currentSection = section;
  //       }
  //     });
  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [sections]);

  // const scrollToSection = (section: string) => {
  //   const element = document.getElementById(section);
  //   if (element) {
  //     const offsetTop = element.offsetTop - 100;
  //     window.scrollTo({ top: offsetTop, behavior: "smooth" });
  //   }
  // };

  return (
    <section id="header" className="section scrolled">
      <section className="container grid-lg">
        <nav className="navbar">
          <section className="navbar-section desktop-menu">
            <nav className="dropmenu animated">
              <ul className="navigation">
                <li>
                  <a className="active" href="#a-intensidade-das-amea-as-bacia">
                    A intensidade das ameaças à bacia
                  </a>
                </li>
                <li>
                  <a className="" href="#lacunas-de-dados-num-mundo-de-guas">
                    Lacunas de dados num mundo de águas
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#menos-peixe-na-mesa-o-fantasma-da-inseguran-a-alimentar"
                  >
                    Menos peixe na mesa: o fantasma da insegurança alimentar
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#agua-fonte-de-energia-de-baixo-impacto"
                  >
                    Agua: fonte de energia de baixo impacto?
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#ouro-o-sonho-amaz-nico-virou-pesadelo-ambiental"
                  >
                    Ouro: o sonho amazônico virou pesadelo ambiental
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#zonas-inund-veis-paisagens-t-picas-da-amaz-nia"
                  >
                    Zonas inundáveis: paisagens típicas da Amazônia
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="#o-futuro-um-esfor-o-coordenado-pela-bacia"
                  >
                    O futuro: um esforço coordenado pela bacia
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </nav>
      </section>
    </section>
  );
};

export default ScrollNavigationButtons;
