import "./ScrollToTopButton.css"; 
import React, { useState, useEffect } from "react";
import Arrow from "./../../Assets/up-arrow.png"

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`ScrollToTopButton ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
     <img src={Arrow} alt="arrow" className={`ScrollToTopButton ${showButton ? "show" : ""}`}/>
    </button>
  );
};

export default ScrollToTopButton;