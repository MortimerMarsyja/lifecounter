import stylex from "@stylexjs/stylex";
import playerSeatStyles from "./playerSeatStyles";
import Measure from "react-measure";
import calculateSeatOrientation from "@utils/calculateSeat";

interface PlayerSeatProps {
  playerSeat: number;
  children: React.ReactNode;
  uneven: boolean;
  nPlayers: number;
  playmatHeight?: number;
  width?: number;
  height?: number;
  ninetyRotation?: boolean;
}

const PlayerSeat = ({
  playerSeat,
  uneven,
  nPlayers,
  children,
  playmatHeight,
  width,
  height,
}:PlayerSeatProps) => {
  const gridRows = Math.floor(playmatHeight ?? 0 / nPlayers);
  const w = width ? `${width}px` : 'auto'
  const h = height ? `${height}px` : 'auto'
  return (
    <Measure
      bounds
    >
    {({ measureRef }: { measureRef: React.Ref<Element> }) => (
      <div 
        ref={measureRef as React.RefObject<HTMLDivElement>}
        {... stylex.props(
        playerSeatStyles.main,
        playerSeatStyles[calculateSeatOrientation(nPlayers,playerSeat, uneven) as keyof typeof playerSeatStyles]
      )}
      style={{ 
        width: `${w}`,
        height: `${h}`,
        gridRowEnd: `span ${gridRows}`
      }}>
        {children}
      </div>
      )}
    </Measure>
  )
}

export default PlayerSeat