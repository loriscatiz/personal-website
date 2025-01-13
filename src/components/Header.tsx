import { useEffect, useState, useRef } from 'react';
import Menu from './Menu';
import { throttle } from '../utils';
import ThemeToggleButton from './ThemeToggleButton';

function Header() {
    const [visibility, setVisibility] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const isNavigating = useRef(false);
    const [isTransparent, setTransparent] = useState(window.scrollY === 0);
    const threshold = 30;
    const isResizing = useRef(false);
    const timeoutId = useRef<number | null>(null); // To manage setTimeout calls
    const loadThreshold = useRef(true);

    // Handles window resize
    const handleResizing = throttle(() => {
        console.log('Resizing window');
        isResizing.current = true;
        if (window.innerWidth >= 1024) {
            setMenuOpen(false); // Close the mobile menu on desktop
        }

        // Clear any existing timeout to avoid overlapping
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        // Set a new timeout to reset `isResizing`
        timeoutId.current = window.setTimeout(() => {
            isResizing.current = false;
            console.log('Resize complete');
        }, 1000);
    }, 500);

    window.addEventListener('resize', handleResizing);

    // Handle scroll visibility based on user action
    const handleScrollVisibility = throttle(() => {
        if (isNavigating.current || isResizing.current || loadThreshold.current)
            return;

        const scrollY = window.scrollY;

        if (Math.abs(scrollY - lastScrollY.current) > threshold) {
            if (scrollY > lastScrollY.current && !isMenuOpen) {
                setVisibility(false); // Scrolling down
            } else {
                setVisibility(true); // Scrolling up
            }
            lastScrollY.current = scrollY;
        }
    }, 100);

    const handleNavClick = () => {
        isNavigating.current = true;
        setVisibility(true); // Ensure the header is visible during navigation
        setTimeout(() => {
            isNavigating.current = false;
            lastScrollY.current = window.scrollY;
        }, 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            handleScrollVisibility();

            // Update transparency
            setTransparent(window.scrollY === 0);
            if (window.scrollY === 0) {
                setVisibility(true); // Ensure header is visible at the top
            }
        };
        setTimeout(() => {
            loadThreshold.current = false;
            lastScrollY.current = window.scrollY;
        }, 1000);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResizing);

        // Attach click handlers to navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach((link) =>
            link.addEventListener('click', handleNavClick)
        );

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResizing);

            navLinks.forEach((link) =>
                link.removeEventListener('click', handleNavClick)
            );
        };
    }, []);
    return (
        <header
            className={`header fixed top-0 z-50 grid min-h-20 w-full items-center transition-all duration-500 ease-out ${isMenuOpen ? 'bg-opacity-100 dark:bg-opacity-100' : ''} ${!visibility && !isMenuOpen ? '-translate-y-full' : ''} ${
                visibility && !isMenuOpen
                    ? 'bg-opacity-60 dark:bg-opacity-60'
                    : ''
            } ${
                isTransparent && !isMenuOpen
                    ? 'bg-transparent text-sky-900 dark:text-sky-200'
                    : 'bg-sky-100 text-sky-900 backdrop-blur-sm dark:bg-sky-950 dark:text-sky-200'
            }`}
        >
            <div className="container m-auto flex items-center justify-between">
                <svg
                    version="1.1"
                    id="Livello_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    height={'5rem'}
                    x="0px"
                    y="0px"
                    viewBox="0 0 1080 1080"
                    xmlSpace="preserve"
                    className={`fill-none stroke-sky-900 stroke-[20] dark:stroke-sky-200`}
                >
                    <g id="Livello_1_00000028283093678702650650000004811748255138527388_">
                        <g id="Livello_4"></g>
                        <g>
                            <path
                                className="st0"
                                d="M243.3,321.8c0,0-94.8,8.1-130,102.9c-16.2,55.5,17.6,102.4,49.4,118.2c37.2,17.1,110.3,34.7,201-8.6
			c83.9-50.1,128.6-89.4,134-161.1c2-26.9-16.1-46.9-31.1-52.8c-25.1-9.8-54.1,9.5-81.2,33.8c-54.1,46-92.4,193-112.4,232.9
			c-21.9,43.6-27.1,54.2-59.6,100.2c-35.2,50.1-100.2,77.2-138.1,65c-23.9-7.7-49.8-30.7-52.9-48.3c-3.8-21.4,15.7-56.6,54.3-68.1
			c104.2-31.1,106.9,56.9,161.1,101.5s331.7,42,456.2-121.8"
                            />
                            <g>
                                <g>
                                    <path
                                        className="st0"
                                        d="M1052.4,501c-42.7,50.5-225.2,176.5-332.3,232.8c-32.3,17-58.2,22.6-81.6,22.8
					c-31.7,0.3-89.9,3.1-120.5-77.2c-26-68.4,2.7-234.2,62.3-293.8c36.5-33.9,52.8-56.9,171.9-62.3c49.2,0,61.2,30.6,65,46
					c6.3,25.8-21.7,42-21.7,42"
                                    />
                                    <g>
                                        <path
                                            d="M1004.4,515.2c0.5,1.6,2.2,2.4,3.8,1.9l43.4-15l-4.7,45.7c-0.2,1.6,1,3.1,2.7,3.3c1.7,0.2,3.1-1,3.3-2.7l5.2-50.3
						c0.1-1-0.3-2-1.1-2.7s-1.9-0.8-2.8-0.5l-47.8,16.6c-0.6,0.2-1,0.5-1.4,1C1004.2,513.1,1004,514.2,1004.4,515.2z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Livello_3" className="st1 hidden"></g>
                </svg>
                <div className="flex items-center gap-4">
                    <ThemeToggleButton className="lg:hidden"></ThemeToggleButton>
                    <Menu
                        isMenuOpen={isMenuOpen}
                        setMenuOpen={setMenuOpen}
                        lastScrollY={lastScrollY}
                        setHeaderVisibility={setVisibility}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
