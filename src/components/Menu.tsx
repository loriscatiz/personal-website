import {
    Dispatch,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useRef,
} from 'react';

import Button from './Button';
import ThemeToggleButton from './ThemeToggleButton';

interface MenuProps {
    isMenuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    lastScrollY: MutableRefObject<number>;
    setHeaderVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({
    isMenuOpen,
    setMenuOpen,
    lastScrollY,
    setHeaderVisibility,
}: MenuProps) {
    const menuItems = [
        {
            href: '#about',
            text: 'Chi sono',
        },
        {
            href: '#projects',
            text: 'Progetti',
        },
        {
            href: '#skills',
            text: 'Skill',
        },
        {
            href: '#timeline',
            text: 'Timeline',
        },
        {
            href: '#contact',
            text: 'Contatti',
        },
    ];

    const menuCta = {
        href: 'https://github.com/loriscatiz/',
        text: 'Github',
    };

    function handleIsOpen() {
        setMenuOpen(!isMenuOpen); // Modifica diretta dello stato
        lastScrollY.current = scrollY;
        setHeaderVisibility(true);
    }

    const menuRef = useRef<HTMLDivElement>(null);
    const themeToggleRef = useRef<HTMLButtonElement>(null);

    const mapMenuItems = function(
        menuItems: { href: string; text: string }[],
        mobile: boolean
    ) {
        if (mobile) {
            return menuItems.map((e, i) => {
                return (
                    <li
                        className="menu-item whitespace-nowrap"
                        key={'mobile-' + i}
                    >
                        <a
                            href={e.href}
                            tabIndex={isMenuOpen ? 0 : -1}
                            onClick={handleIsOpen}
                            aria-hidden={isMenuOpen ? false : true}
                        >
                            {e.text}
                        </a>
                    </li>
                );
            });
        }
        return menuItems.map((e, i) => {
            return (
                <li className="menu-item" key={'desktop' + i}>
                    <a href={e.href}>{e.text}</a>
                </li>
            );
        });
    };

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
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);
    return (
        <>
            <div className="lg:hidden">
                <button
                    onClick={handleIsOpen}
                    className={`hamburger transition-all`}
                    aria-label={`${isMenuOpen ? 'Close the menu' : 'Open the menu'}`}
                >
                    <div
                        className={`top-hamburger relative w-full flex-grow rounded bg-sky-900 transition-transform duration-500 dark:bg-sky-200 ${isMenuOpen ? 'transform' : ''}`}
                    ></div>
                    <div
                        className={`middle-hamburger relative w-full flex-grow rounded bg-sky-900 transition-transform duration-500 dark:bg-sky-200 ${isMenuOpen ? 'scale-0 duration-1000' : ''}`}
                    ></div>
                    <div
                        className={`bottom-hamburger relative w-full flex-grow rounded bg-sky-900 transition-transform duration-500 dark:bg-sky-200 ${isMenuOpen ? 'transform' : ''}`}
                    ></div>
                </button>
                <div
                    ref={menuRef}
                    className={`menu-mobile right-0 w-full py-8 transition-all duration-500 ease-out landscape:py-4 ${isMenuOpen ? 'absolute top-full w-1/2 bg-sky-100 bg-opacity-100 text-sky-950 backdrop-blur-sm dark:bg-sky-950 dark:text-sky-100' : 'pointer-events-none absolute -translate-y-full opacity-0'} `}
                >
                    <menu
                        className={`menu-items flex flex-col items-center justify-start gap-4 landscape:flex-row landscape:gap-8 landscape:overflow-x-auto landscape:px-8`}
                        aria-hidden={isMenuOpen ? false : true}
                    >
                        {mapMenuItems(menuItems, true)}

                        <Button
                            href={menuCta.href}
                            text={menuCta.text}
                            variant="primary"
                            blank={true}
                            tabIndex={isMenuOpen ? 0 : -1}
                            ariaHidden={isMenuOpen ? false : true}
                            onClick={handleIsOpen}
                        ></Button>
                    </menu>
                </div>
            </div>
            <menu className="menu-desktop hidden flex-grow flex-row items-center justify-end gap-6 lg:flex">
                {mapMenuItems(menuItems, false)}
                <ThemeToggleButton></ThemeToggleButton>
                <Button
                    href={menuCta.href}
                    text={menuCta.text}
                    variant="primary"
                    blank={true}
                ></Button>
            </menu>
        </>
    );
}

export default Menu;
