import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import Button from "./Button";
import ThemeToggleButton from "./ThemeToggleButton";

interface MenuProps {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Menu({ isMenuOpen, setMenuOpen }: MenuProps) {
  function handleIsOpen() {
    setMenuOpen(!isMenuOpen); // Modifica diretta dello stato
  }

  const menuRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current && 
        !menuRef.current.contains(target) &&
        themeToggleRef.current &&
        !themeToggleRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
  
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <>
      <div className="lg:hidden">
        <button
          onClick={handleIsOpen}
          className={`hamburger transition-all`}
          aria-label={`${isMenuOpen ? "Close the menu" : "Open the menu"}`}
        >
          <div
            className={`top-hamburger relative w-full flex-grow rounded bg-sky-900 dark:bg-sky-100  transition-all duration-500 ${isMenuOpen ? "transform" : ""}`}
          ></div>
          <div
            className={`middle-hamburger relative w-full flex-grow rounded bg-sky-900 dark:bg-sky-100 transition-all duration-500 ${isMenuOpen ? "scale-0 duration-1000" : ""}`}
          ></div>
          <div
            className={`bottom-hamburger relative w-full flex-grow rounded bg-sky-900 dark:bg-sky-100 transition-all duration-500 ${isMenuOpen ? "transform" : ""}`}
          ></div>
        </button>
        <div ref={menuRef}
          className={`menu-mobile right-0 w-full py-8 landscape:py-4 transition-all duration-500 ease-out ${isMenuOpen ? "absolute top-full w-1/2 bg-sky-100 bg-opacity-100 text-sky-950 backdrop-blur-sm dark:bg-sky-950 dark:text-sky-100" : "pointer-events-none absolute -top-full opacity-0"} `}
        >
          <menu
            className={`menu-items flex flex-col landscape:flex-row landscape:gap-8 justify-center landscape:overflow-x-auto items-center gap-2`}
            aria-hidden={isMenuOpen ? false : true}
          >
            <li className="menu-item">
              <a href="#1" tabIndex={isMenuOpen ? 0 : -1}>
                test 1
              </a>
            </li>
            <li className="menu-item">
              <a href="#2" tabIndex={isMenuOpen ? 0 : -1}>
                test 2
              </a>
            </li>
            <li className="menu-item">
              <a href="#3" tabIndex={isMenuOpen ? 0 : -1}>
                test 3
              </a>
            </li>
            <li className="menu-item">
              <a href="#4" tabIndex={isMenuOpen ? 0 : -1}>
                test 4
              </a>
            </li>

            <Button
              href={"#"}
              text="Prova"
              variant="primary"
              tabIndex={isMenuOpen ? 0 : -1}
            ></Button>
          </menu>
        </div>
      </div>
      <menu className="menu-desktop hidden flex-grow flex-row items-center justify-end gap-6 lg:flex">
        <li className="menu-item">
          <a href="#1">test 1</a>
        </li>
        <li className="menu-item">
          <a href="#2">test 2</a>
        </li>
        <li className="menu-item">
          <a href="#3">test 3</a>
        </li>
        <li className="menu-item">
          <a href="#4">test 4</a>
        </li>
        <ThemeToggleButton></ThemeToggleButton>
        <Button href={"#"} text="Prova" variant="primary"></Button>
      </menu>
    </>
  );
}

export default Menu;
