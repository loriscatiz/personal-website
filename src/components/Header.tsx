import { useEffect, useState, useRef } from "react";
import Menu from "./Menu";
import { throttle, debounce } from "../utils";
import ThemeToggleButton from "./ThemeToggleButton";

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
      className={`header fixed top-0 grid min-h-20 w-full items-center transition-all duration-300 ease-out ${
        visibility || isMenuOpen ? "" : "-translate-y-full"
      } ${visibility && isMenuOpen ? "bg-opacity-60 backdrop-blur-sm" : ""} ${
        visibility && !isMenuOpen ? "bg-opacity-60 dark:bg-opacity-60" : ""
      } ${isTransparent && !isMenuOpen ? "bg-transparent text-sky-950 dark:text-sky-100" : "bg-sky-100 text-sky-950 backdrop-blur-sm dark:bg-sky-950 dark:text-sky-100"}`}
    >
      <div className="container m-auto flex items-center justify-between">
        <img src="/vite.svg" />
        <div className="flex items-center gap-4">
          <ThemeToggleButton className="md:hidden"></ThemeToggleButton>
          <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
