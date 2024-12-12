import { useEffect, useState, useRef } from "react";

function Header() {
  const [visibility, setVisibility] = useState(true);
  const lastScrollY = useRef(window.scrollY);

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

  const handleScroll = throttle(() => {
    if (window.scrollY > lastScrollY.current) {
      setVisibility(false);
      console.log(visibility + " expected disappears (false)");
    } else {
      setVisibility(true);
      console.log(visibility + " expected appears (true)");
    }
    lastScrollY.current = window.scrollY;
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-lime-500 bg-opacity-50 min-h-36 fixed w-full transition-transform ease-out duration-500  ${
        visibility ? "" : "-translate-y-full"
      }`}
    ></header>
  );
}

export default Header;
