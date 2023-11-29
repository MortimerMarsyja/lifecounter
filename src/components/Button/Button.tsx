interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  onClick,
}:ButtonProps):JSX.Element => {
  return ( <button className="shadow-lg	" onClick={onClick}>{children}</button>);
}

export default Button;