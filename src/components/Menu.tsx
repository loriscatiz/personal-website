import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

import Button from './Button'
import ThemeToggleButton from './ThemeToggleButton'

interface MenuProps {
    isMenuOpen: boolean
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}

function Menu({ isMenuOpen, setMenuOpen }: MenuProps) {
    function handleIsOpen() {
        setMenuOpen(!isMenuOpen) // Modifica diretta dello stato
    }

    const menuRef = useRef<HTMLDivElement>(null)
    const themeToggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                themeToggleRef.current &&
                !themeToggleRef.current.contains(target)
            ) {
                setMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])
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
                        className={`menu-items flex flex-col items-center justify-center gap-2 landscape:flex-row landscape:gap-8 landscape:overflow-x-auto`}
                        aria-hidden={isMenuOpen ? false : true}
                    >
                        <li className="menu-item">
                            <a
                                href="#hi"
                                tabIndex={isMenuOpen ? 0 : -1}
                                onClick={handleIsOpen}
                                aria-hidden={isMenuOpen ? false : true}
                            >
                                Hi
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="#about"
                                tabIndex={isMenuOpen ? 0 : -1}
                                onClick={handleIsOpen}
                                aria-hidden={isMenuOpen ? false : true}
                            >
                                About me
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="#projects"
                                tabIndex={isMenuOpen ? 0 : -1}
                                onClick={handleIsOpen}
                                aria-hidden={isMenuOpen ? false : true}
                            >
                                Projects
                            </a>
                        </li>

                        <li className="menu-item">
                            <a
                                href="#skills"
                                tabIndex={isMenuOpen ? 0 : -1}
                                onClick={handleIsOpen}
                                aria-hidden={isMenuOpen ? false : true}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="#timeline"
                                tabIndex={isMenuOpen ? 0 : -1}
                                onClick={handleIsOpen}
                                aria-hidden={isMenuOpen ? false : true}
                            >
                                Timeline
                            </a>
                        </li>
                        <li className="menu-item">
                            <a
                                href="#contact"
                                onClick={handleIsOpen}
                                aria-hidden={isMenuOpen ? false : true}
                            >
                                Contact
                            </a>
                        </li>

                        <Button
                            href={'https://github.com/loriscatiz/'}
                            text="Github"
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
                <li className="menu-item">
                    <a href="#hi">Hi</a>
                </li>
                <li className="menu-item">
                    <a href="#about">About me</a>
                </li>
                <li className="menu-item">
                    <a href="#projects">Projects</a>
                </li>
                <li className="menu-item">
                    <a href="#skills">Skills</a>
                </li>
                <li className="menu-item">
                    <a href="#timeline">Timeline</a>
                </li>
                <li className="menu-item">
                    <a href="#contact">Contact</a>
                </li>
                <ThemeToggleButton></ThemeToggleButton>
                <Button
                    href={'https://github.com/loriscatiz/'}
                    text="Github"
                    variant="primary"
                    blank={true}
                ></Button>
            </menu>
        </>
    )
}

export default Menu
