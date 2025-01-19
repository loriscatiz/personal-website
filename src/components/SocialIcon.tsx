import { useTheme } from '../contexts/theme-context/ThemeContext';

interface SocialIconProps {
    social: string;
    href: string;
    icon: string;
    darkIcon?: string;
    className?: string;
}

function SocialIcon({
    social,
    href,
    icon,
    darkIcon,
    className,
}: SocialIconProps) {
    const { theme } = useTheme(); // Destructure `theme` from the context

    return (
        <a
            className="flex gap-4 items-center text-sky-900 transition-transform duration-300 hover:scale-110 dark:text-sky-200"
            target="_blank"
            href={href}
            rel="noopener noreferrer"
        >
            <img
                className={`h-14 w-14 rounded-full stroke-sky-900 object-contain object-center dark:stroke-sky-200 ${className}`}
                src={theme === 'dark' ? darkIcon : icon} // Use theme to toggle the icon
                alt={social}
            />
            <span>{social}</span>
        </a>
    );
}

export default SocialIcon;
