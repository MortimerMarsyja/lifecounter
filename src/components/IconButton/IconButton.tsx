interface Props {
  children: JSX.Element;
  onClick: () => void;
  className?: string;
  noBg?: boolean;
}

const IconButton = ({ children, onClick, className,noBg }: Props) => {
  const handleBg = () => {
    if(noBg) return ''
    return 'bg-gray-200 hover:bg-gray-300 hover:text-white'
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full w-10 h-10 ${handleBg()} ${className}`}
    >
      {children}
    </button>
  )
}

export default IconButton