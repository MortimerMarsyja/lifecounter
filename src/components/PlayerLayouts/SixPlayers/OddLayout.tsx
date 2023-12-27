import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";

interface Props {
  idx: number;
  children?: React.ReactNode;
  background?: string;
}

const OddSixLayout = ({
  idx,
  children,
  background
}:Props) => {
  if(idx === 0 || idx === 5) {
    return (
      <PlayerPlaymat
        rowSpan={2}
        colSpan={1}
        background={background || '#fff'}

      >
        {children}
      </PlayerPlaymat>
    )
  }
  return(
    <PlayerPlaymat
      rowSpan={1}
      colSpan={1}
      background={background || '#fff'}
    >
      {children}
    </PlayerPlaymat>
  )
}

export default OddSixLayout