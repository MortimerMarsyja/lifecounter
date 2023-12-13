interface Props {
  size?: number;
  color?: string;
}

const Skull = ({
  size = 24,
  color,
}:Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path color={color} fill={color} d="M12 1a9.957 9.957 0 0 0-10 9.889 9.791 9.791 0 0 0 3.375 7.4v1.487A3.24 3.24 0 0 0 8.625 23h6.75a3.24 3.24 0 0 0 3.25-3.223V18.29A9.791 9.791 0 0 0 22 10.889 9.957 9.957 0 0 0 12 1Zm5 16.037a1 1 0 0 0-.379.784v1.956A1.239 1.239 0 0 1 15.375 21H15v-3a1 1 0 0 0-2 0v3h-2v-3a1 1 0 0 0-2 0v3h-.375a1.239 1.239 0 0 1-1.25-1.223v-1.956A1 1 0 0 0 7 17.037a7.813 7.813 0 0 1-3-6.148 8 8 0 0 1 16 0 7.813 7.813 0 0 1-3 6.148ZM11 13a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm6 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2Z" />
  </svg>
)
export default Skull
