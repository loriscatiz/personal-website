import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

const ThemeManager = () => {
    const { theme } = useTheme();

    useEffect(() => {
        const htmlElement = document.documentElement;

        // Rimuove entrambe le classi per evitare conflitti
        htmlElement.classList.remove('dark', 'light');

        // Aggiunge la classe corrispondente al tema attuale
        htmlElement.classList.add(theme);
    }, [theme]);

    return null;
};

export default ThemeManager;
