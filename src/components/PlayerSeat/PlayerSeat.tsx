import stylex from "@stylexjs/stylex";
import playerSeatStyles from "./playerSeatStyles";
import Measure from "react-measure";
import calculateSeatOrientation from "@utils/calculateSeat";
import { memo, useEffect, useState } from "react";

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

const PlayerSeat: React.FC<PlayerSeatProps> = memo(({
  playerSeat,
  uneven,
  nPlayers,
  children,
  playmatHeight,
  width,
  height,
}) => {
  const gridRows = Math.floor((playmatHeight ?? 0) / nPlayers);
  const [w, setW] = useState<string>('auto')
  const [h, setH] = useState<string>('auto')

  useEffect(() => {
    setW(width ? `${width}px` : 'auto')
  },[width])

  useEffect(() => {
    setH(height ? `${height}px` : 'auto')
  },[height])
  
  return (
    <Measure bounds>
      {({ measureRef }: { measureRef: React.Ref<Element> }) => (
        <div 
          ref={measureRef as React.RefObject<HTMLDivElement>}
          {...stylex.props(
            playerSeatStyles.main,
            playerSeatStyles[calculateSeatOrientation(nPlayers,playerSeat, uneven) as keyof typeof playerSeatStyles]
          )}
          style={{ 
            width: `${w}`,
            height: `${h}`,
            gridRowEnd: `span ${gridRows}`
          }}
        >
          {children}
        </div>
      )}
    </Measure>
  )
});

export default PlayerSeat;