import { useTheme } from "../ThemeContext";
export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        className="grid aspect-square place-items-center rounded-xl border-2 border-solid bg-transparent p-2 transition-all hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 focus:-translate-y-1 focus:scale-110"
        aria-value={
          theme === "dark" ? "change to light theme" : "change to dark theme"
        }
      >
        <img
          src={
            theme === "dark" ? "/sun-svgrepo-com.svg" : "/moon-svgrepo-com.svg"
          }
          className="h-4"
          alt=""
        />
      </button>
    </>
  );
}
