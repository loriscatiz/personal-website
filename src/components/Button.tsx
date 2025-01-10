interface ButtonProps {
    href?: string // L'URL per il collegamento
    iconSrc?: string // Icona opzionale, contrassegnata da "?"
    text: string // Il testo del pulsante
    variant: string
    tabIndex?: number
    className?: string
    blank?: boolean
    ariaHidden?: boolean
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function Button({
    href,
    text,
    variant,
    tabIndex,
    className,
    blank,
    ariaHidden,
    onClick
}: ButtonProps) {
    return (
        <a
            href={href}
            className={`button rounded-xl border-2 border-solid px-5 py-3 text-center text-base font-medium uppercase tracking-widest transition-all hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 ${className} ${variant === 'primary' ? 'border-indigo-200 bg-indigo-700 text-indigo-200 hover:bg-indigo-900 focus:bg-indigo-900' : 'border-sky-900 bg-transparent text-sky-900 hover:bg-sky-900 hover:text-sky-200 dark:border-sky-200 dark:text-sky-200 hover:dark:bg-sky-200 hover:dark:text-sky-900'}`}
            tabIndex={tabIndex}
            target={blank == true ? '_blank' : ''}
            aria-hidden = {ariaHidden}
            onClick ={onClick}
        >
            {text}
        </a>
    )
}

export default Button
