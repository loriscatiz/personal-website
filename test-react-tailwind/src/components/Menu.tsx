import { useState } from "react";
import Button from "./Button";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    let prevIsOpen: boolean = isOpen;
    if (prevIsOpen == true) {
      setIsOpen(false);
    }
    if (prevIsOpen == false) {
      setIsOpen(true);
    }
  }
  return (
    <>
      <div className='md:hidden'>
        {/* add md:hidden*/}
        <button onClick={handleIsOpen} className={`hamburger transition-all`}>
          <div className={`top-hamburger ${isOpen ? "transform" : ""}`}></div>
          <div className={`middle-hamburger ${isOpen ? "scale-0" : ""}`}></div>
          <div
            className={`bottom-hamburger ${isOpen ? "transform" : ""}`}
          ></div>
        </button>
        <menu className={`menu ${isOpen ? "right-0" : "-right-full"} `}>
          <li className='menu-item'>item 1</li>
          <li className='menu-item'>item 1</li>
          <li className='menu-item'>item 1</li>
          <li className='menu-item'>item 1</li>
          <li className='menu-item'>item 1</li>
          <Button href={"#"} text='Prova' variant='primary'></Button>
        </menu>
      </div>
    </>
  );
}

export default Menu;
