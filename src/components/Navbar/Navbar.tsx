import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import arrowRight from '../../assets/vector-28.svg';

import './Navbar.scss';
import './MenuMobile.scss';

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive-nav');
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
        <div className="mobile-menu" data-testid="mobile-menu">
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
            <a href="#">Ouro: o sonho amazônico virou pesadelo ambiental.</a>
            <a href="#">Zonas inundáveis: paisagens típicas da Amazônia</a>
            <a href="#">O futuro: um esforço coordenado pela bacia</a>
          </div>
          <button className="other-histories-button">
            <p>
              outras histórias
              <img src={arrowRight} alt="Arrow pointed to the right." />
            </p>
          </button>
        </div>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavBar}
          data-testid="close-button"
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavBar}
        data-testid="menu-button"
      >
        <FaBars />
      </button>
    </header>
  );
}
