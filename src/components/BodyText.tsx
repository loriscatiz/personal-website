interface BodyTextProps {
  className: string;
  text: string;
}

function BodyText({ className, text }: BodyTextProps) {
  return <p className={className}>{text}</p>;
}

export default BodyText;
