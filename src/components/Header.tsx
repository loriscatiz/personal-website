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
      className={`bg-sky-800 text-sky-200 dark:bg-sky-200 dark:text-sky-800  bg-opacity-80 min-h-20  w-full fixed transition-all ease-out duration-300 flex justify-between items-center px-6 backdrop-blur-sm ${
        visibility || isMenuOpen ? "" : "-translate-y-full "
      } ${isTransparent ? "bg-transparent dark:bg-transparent" : ""}`}
    >
      <img src='/vite.svg' />
      <Menu
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
}

export default Header;
