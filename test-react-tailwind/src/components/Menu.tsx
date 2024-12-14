import { Dispatch, SetStateAction } from "react";
import MenuItems from "./MenuItems";
import Button from "./Button";

interface MenuProps {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Menu({ isMenuOpen, setMenuOpen }: MenuProps) {
  function handleIsOpen() {
    setMenuOpen(!isMenuOpen); // Modifica diretta dello stato
  }

  return (
    <>
      <div className='md:hidden'>
        <button
          onClick={handleIsOpen}
          className={`hamburger transition-all`}
          aria-label={`${isMenuOpen ? "Close the menu" : "Open the menu"}`}
        >
          <div
            className={`top-hamburger ${isMenuOpen ? "transform" : ""}`}
          ></div>
          <div
            className={`middle-hamburger ${isMenuOpen ? "scale-0" : ""}`}
          ></div>
          <div
            className={`bottom-hamburger ${isMenuOpen ? "transform" : ""}`}
          ></div>
        </button>
        <div
          className={`menu-mobile ${isMenuOpen ? "right-0" : "-right-full"} `}
        >
          <menu
            className={`menu-items`}
            aria-hidden={isMenuOpen ? false : true}
          >
            <li className='menu-item'>
              <a href='#1' tabIndex={isMenuOpen ? 0 : -1}>
                test 1
              </a>
            </li>
            <li className='menu-item'>
              <a href='#2' tabIndex={isMenuOpen ? 0 : -1}>
                test 2
              </a>
            </li>
            <li className='menu-item'>
              <a href='#3' tabIndex={isMenuOpen ? 0 : -1}>
                test 3
              </a>
            </li>
            <li className='menu-item'>
              <a href='#4' tabIndex={isMenuOpen ? 0 : -1}>
                test 4
              </a>
            </li>

            <Button
              href={"#"}
              text='Prova'
              variant='primary'
              tabIndex={isMenuOpen ? 0 : -1}
            ></Button>
          </menu>
        </div>
      </div>
      <menu className='menu-desktop'>
        <MenuItems></MenuItems>
      </menu>
    </>
  );
}

export default Menu;
