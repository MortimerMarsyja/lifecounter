import stylex from "@stylexjs/stylex";
import playerSeatStyles from "./playerSeatStyles";
// import calculateSeatOrientation from "@utils/calculateSeat";

interface PlayerSeatProps {
  playerSeat: number;
  children: React.ReactNode;
  uneven: boolean;
  nPlayers: number;
  playmatHeight: number;
}

const PlayerSeat = ({
  playerSeat,
  uneven,
  nPlayers,
  children,
  playmatHeight
}:PlayerSeatProps) => {
  const gridRows = Math.floor(playmatHeight / nPlayers);

  return (
    <div {... stylex.props(
      playerSeatStyles.main
    )}
    style={{ gridRowEnd: `span ${gridRows}` }}>
      {children}
    </div>
  )
}

export default PlayerSeat