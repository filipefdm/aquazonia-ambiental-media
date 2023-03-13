import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavbarSecondary.scss";
import "./MenuMobile.scss";

export function NavbarSecondary() {
  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header>
      <nav ref={navRef} className="app__navbar">
        <a href="#">Sobre</a>
        <a href="#">Metodologia</a>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>

        <div className="mobile-menu">
          <div className="vertical-line">
            <div className="languageSwitcher">
              <ul>
                <li>
                  <a href="" className="active">
                    PT
                  </a>
                </li>
                <li>
                  <a href="">EN</a>
                </li>
              </ul>
            </div>

            <div className="menu-items">
              <a href="#">A intensidade das ameaças à bacia</a>
              <a href="#">Lacunas de dados num mundo de águas</a>
              <a href="">
                Menos peixe na mesa: o fantasma da insegurança alimentar
              </a>
              <a href="">Água: fonte de energia de baixo impacto?</a>
            </div>
          </div>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
