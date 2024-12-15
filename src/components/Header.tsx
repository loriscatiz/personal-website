import { useEffect, useState, useRef } from "react";
import Menu from "./Menu";
import { throttle, debounce } from "../utils";

function Header() {
  const [visibility, setVisibility] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false); // Nuovo stato
  const lastScrollY = useRef(0);
  const [isTransparent, setTransparent] = useState(true);


  // Handle visibility with throttle
  const handleScrollVisibility = throttle(() => {
    if (window.scrollY > lastScrollY.current && !isMenuOpen) {
      // Nascondi solo se il menu è chiuso
      setVisibility(false);
    } else {
      setVisibility(true);
    }
    lastScrollY.current = window.scrollY;
  }, 100);

  // Handle transparency with debounce
  const handleScrollTransparency = debounce(() => {
    setTransparent(window.scrollY === 0);
  }, 100);

  useEffect(() => {
    const handleScroll = () => {
      handleScrollVisibility();
      handleScrollTransparency();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]); // Dipendenza aggiunta

  return (
    <header
      className={`header ${
        visibility || isMenuOpen ? "" : "-translate-y-full "
      } ${isTransparent ? "bg-transparent" : ""}`}
    >
      <img src='/vite.svg' />
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default Header;