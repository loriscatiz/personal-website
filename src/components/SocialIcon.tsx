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
    if (!darkIcon) {
        darkIcon = icon;
    }
    return (
        <>
            <a
                className="hidden flex-col items-center text-sky-900 transition-transform duration-300 hover:scale-110 dark:flex dark:text-sky-200"
                target="_blank"
                href={href}
            >
                <img
                    className={`h-11 w-11 rounded-full stroke-sky-900 object-contain object-center dark:stroke-sky-200 ${className}`}
                    src={darkIcon}
                    alt={social}
                />
                <span>{social}</span>
            </a>
            <a
                className="flex flex-col items-center text-sky-900 transition-transform duration-300 hover:scale-110 dark:hidden dark:text-sky-200"
                target="_blank"
                href={href}
            >
                <img
                    className={`h-11 w-11 rounded-full stroke-sky-900 object-contain object-center dark:stroke-sky-200 ${className}`}
                    src={icon}
                    alt={social}
                />
                <span>{social}</span>
            </a>
        </>
    );
}

export default SocialIcon;
