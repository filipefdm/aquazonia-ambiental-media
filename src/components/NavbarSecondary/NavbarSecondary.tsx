import "./NavbarSecondary.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export function NavbarSecondary() {
  const navRef = useRef<HTMLDivElement>();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef} className="app__navbar">
        <a href="#">Sobre</a>
        <a href="#">Metodologia</a>
        <button className="app__nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
