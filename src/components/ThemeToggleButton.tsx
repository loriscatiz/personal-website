import { useTheme } from "../ThemeContext";
export default function ThemeToggleButton(){
    const { theme, toggleTheme } = useTheme();
    return (
        <>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-800 text-red-500 dark:text-lime-500 rounded" aria-value={theme === 'dark' ? 'change to light theme' : 'change to dark theme' }
        >
         <img src={theme === 'dark' ? '/sun-svgrepo-com.svg' : '/moon-svgrepo-com.svg' } className="h-4" alt="" />
              </button>

            </>
        
            
      );
    };
    
