import stylex from "@stylexjs/stylex";
import playerSeatStyles from "./playerSeatStyles";
import { useState } from "react";
import Measure from "react-measure";

interface PlayerSeatProps {
  playerSeat: number;
  children: React.ReactNode;
  uneven: boolean;
  nPlayers: number;
  playmatHeight?: number;
  width?: number;
  ninetyRotation?: boolean;
}

const PlayerSeat = ({
  playerSeat,
  uneven,
  nPlayers,
  children,
  playmatHeight,
  ninetyRotation,
}:PlayerSeatProps) => {
  const [bounds,setBounds] = useState({width: 0, height: 0});
  // console.log(bounds)
  const gridRows = Math.floor(playmatHeight ?? 0 / nPlayers);
  const calculateSeatOrientation = (playerSeat:number, uneven:boolean) => {
    if (uneven) {
      if (playerSeat === 0) {
        return 'bottomSeat'
      }
      if (playerSeat === 1) {
        return 'rightSeat'
      }
      return 'bottomSeat'
    }
    if (playerSeat === 0) {
      return 'topSeat'
    }
    if (playerSeat === 1) {
      return 'rightSeat'
    }
    return 'bottomSeat'
  }

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setBounds(contentRect.bounds || { width: 0, height: 0 });
      }}
    >
    {({ measureRef }: { measureRef: React.Ref<Element> }) => (
      <div 
        ref={measureRef as React.RefObject<HTMLDivElement>}
        {... stylex.props(
        playerSeatStyles.main,
        playerSeatStyles[calculateSeatOrientation(playerSeat, uneven) as keyof typeof playerSeatStyles]
      )}
      style={{ 
        gridRowEnd: `span ${gridRows}`
      }}>
        {children}
      </div>
      )}
    </Measure>
  )
}

export default PlayerSeat