import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.scss";
import "./MenuMobile.scss";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive-nav");
    }
  };

  return (
    <header>
      <nav ref={navRef} className="app__navbar">
        <a href="#" className="links">
          Sobre
        </a>
        <a href="#" className="links">
          Metodologia
        </a>
        <div className="mobile-menu">
          <span className="line-contain"></span>
          <div className="language-switcher">
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
            <a href="#">
              Menos peixe na mesa: o fantasma da insegurança alimentar
            </a>
            <a href="#">Água: fonte de energia de baixo impacto?</a>
          </div>
          <button className="other-histories-button">
            <p>outras histórias</p>
          </button>
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
