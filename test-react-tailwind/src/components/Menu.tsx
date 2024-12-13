import { useState } from "react";
import Button from "./Button";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    let prevIsOpen: boolean = isOpen;
    if (prevIsOpen == true){
      setIsOpen(false)
    }
    if (prevIsOpen == false){
      setIsOpen(true)
    }
    
  }
  return (
    <>
      <button onClick={handleIsOpen}>hamburger</button>
      <menu
        className={`menu  ${isOpen ? "right-0" : "-right-full"} `}
      >
        <li className='menu-item'>item 1</li>
        <li className='menu-item'>item 1</li>
        <li className='menu-item'>item 1</li>
        <li className='menu-item'>item 1</li>
        <li className='menu-item'>item 1</li>
        <Button href={"#"} text='Prova' variant='primary'></Button>
      </menu>
    </>
  );
}

export default Menu;
