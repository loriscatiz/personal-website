interface ButtonProps {
  href?: string; // L'URL per il collegamento
  iconSrc?: string; // Icona opzionale, contrassegnata da "?"
  text: string; // Il testo del pulsante
  variant: string;
}

function Button({ href, text, variant }: ButtonProps) {
  return (
    <a
      href={href}
      className={`button ${variant === 'primary' ? 'primary' : 'secondary'}`}
    >
      {text}
    </a>
  );
}

export default Button;
