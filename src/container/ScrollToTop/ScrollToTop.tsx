import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss";

interface ScrollButtonsProps {
  showBelow: number;
}

const ScrollToTop: React.FC<ScrollButtonsProps> = ({ showBelow }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div className={`scroll-buttons ${show ? "show" : ""}`}>
      <button className="scroll-buttons__button" onClick={handleClick}>
        <span className="sr-only">Scroll to top</span>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;
