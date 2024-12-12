interface ButtonProps {
  href: string; // L'URL per il collegamento
  iconSrc?: string; // Icona opzionale, contrassegnata da "?"
  text: string; // Il testo del pulsante
}

function Button({ href, text }: ButtonProps) {
  return (
    <a
      href={href}
      className="
    px-5 py-3 bg-rose-600 hover:bg-rose-950 transition-all rounded-full"
    >
      {text}
    </a>
  );
}

export default Button;
