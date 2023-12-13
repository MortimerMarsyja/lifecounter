interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  fh?: boolean;
}

const Button = ({
  children,
  onClick,
  fh,
  className,
  disabled = false
}:ButtonProps):JSX.Element => {
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : ""
  const fullHeight = fh ? "h-full" : ""
  return ( 
    <button
     className={className + " " + disabledClass + " " + fullHeight} 
     onClick={onClick}
     disabled={disabled}
     >
      {children}
    </button>
  );
}

export default Button;