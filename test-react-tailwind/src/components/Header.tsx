import { useEffect, useState, useRef } from "react";
import Menu from "./Menu";

function Header() {
  const [visibility, setVisibility] = useState(true);
  const lastScrollY = useRef(0);
  const [isTransparent, setTransparent] = useState(true);
  function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timer: number;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  function throttle<T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;

    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func(...args);
      }
    };
  }
  // Handle visibility with throttle
  const handleScrollVisibility = throttle(() => {
    if (window.scrollY > lastScrollY.current) {
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
  }, []);
  return (
    <header
      className={`header ${
        visibility ? "" : "-translate-y-full "
      } ${isTransparent ? "bg-transparent" : ""}`}
    >
      <img src='/public/vite.svg' />
      <Menu></Menu>
    </header>
  );
}

export default Header;
