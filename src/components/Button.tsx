interface ButtonProps {
  href?: string; // L'URL per il collegamento
  iconSrc?: string; // Icona opzionale, contrassegnata da "?"
  text: string; // Il testo del pulsante
  variant: string;
  tabIndex?: number;
  className?: string;
}

function Button({ href, text, variant, tabIndex, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={`button rounded-xl border-2 border-solid px-5 py-3 text-center text-base uppercase transition-all hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 ${className} ${variant === "primary" ? "bg-indigo-700 text-sky-100 hover:bg-indigo-900 focus:bg-indigo-900 dark:border-sky-200" : "border-sky-950 bg-transparent text-sky-950 dark:border-sky-100 dark:text-sky-100"}`}
      tabIndex={tabIndex}
    >
      {text}
    </a>
  );
}

export default Button;
