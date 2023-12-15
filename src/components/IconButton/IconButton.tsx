interface Props {
  children: JSX.Element;
  onClick: () => void;
  className?: string;
}

const IconButton = ({ children, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 ${className}`}
    >
      {children}
    </button>
  )
}

export default IconButton