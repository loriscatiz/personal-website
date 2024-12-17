import { Dispatch, SetStateAction, useEffect } from "react";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".menu-mobile") && !target.closest(".hamburger")) {
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
      <div className="md:hidden">
        <button
          onClick={handleIsOpen}
          className={`hamburger transition-all`}
          aria-label={`${isMenuOpen ? "Close the menu" : "Open the menu"}`}
        >
          <div
            className={`top-hamburger ${isMenuOpen ? "transform" : ""}`}
          ></div>
          <div
            className={`middle-hamburger ${isMenuOpen ? "scale-0 duration-1000" : ""}`}
          ></div>
          <div
            className={`bottom-hamburger ${isMenuOpen ? "transform" : ""}`}
          ></div>
        </button>
        <div
          className={`menu-mobile absolute right-0 w-full py-8 transition-all duration-500 ease-out ${isMenuOpen ? "top-full bg-sky-100 bg-opacity-100 text-sky-950 opacity-100 dark:bg-sky-950 dark:text-sky-100" : "pointer-events-none -top-full opacity-0"} `}
        >
          <menu
            className={`menu-items flex flex-col items-center justify-start gap-2`}
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
            <ThemeToggleButton className="absolute right-[5%] top-0"></ThemeToggleButton>

            <Button
              href={"#"}
              text="Prova"
              variant="primary"
              tabIndex={isMenuOpen ? 0 : -1}
            ></Button>
          </menu>
        </div>
      </div>
      <menu className="menu-desktop hidden flex-grow flex-row items-center justify-end gap-6 md:flex">
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
