import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["Sobre", "Metodologia"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <AiOutlineMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {[
                "A intensidade das ameaças à bacia",
                "Lacunas de dados num mundo de águas",
              ].map((item) => (
                <li className="p-text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
