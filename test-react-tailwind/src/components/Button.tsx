interface ButtonProps {
  href?: string; // L'URL per il collegamento
  iconSrc?: string; // Icona opzionale, contrassegnata da "?"
  text: string; // Il testo del pulsante
  variant: string;
  tabIndex?: number;
}

function Button({ href, text, variant, tabIndex }: ButtonProps) {
  return (
    <a
      href={href}
      className={`button ${variant === 'primary' ? 'primary' : 'secondary'}`}
      tabIndex={tabIndex}
    >
      {text}
    </a>
  );
}

export default Button;
