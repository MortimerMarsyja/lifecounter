import FivePlayers from "@components/PlayerLayouts/FivePlayers";
import OddFiveLayout from "@components/PlayerLayouts/FivePlayers/OddFiveLayout";
import FourPlayers from "@components/PlayerLayouts/FourPlayers";
import SixPlayers from "@components/PlayerLayouts/SixPlayers/SixPlayers";
import ThreePlayers from "@components/PlayerLayouts/ThreePlayers";
import TwoPlayers from "@components/PlayerLayouts/TwoPlayers";
import { iGame } from "@lib/definitions";

interface Props {
  game: iGame;
  isEven?: boolean;
}

const PlayersLayout = ({ game, isEven = true }: Props) => {
  if (game.players.length === 6) {
    return <SixPlayers game={game} />;
  }
  if (game.players.length === 5) {
    isEven ? <FivePlayers game={game} /> : <OddFiveLayout game={game} />;
  }
  if (game.players.length === 4) {
    return <FourPlayers game={game} />;
  }
  if (game.players.length === 3) {
    return <ThreePlayers game={game} />;
  }
  return <TwoPlayers game={game} />;
};

export default PlayersLayout;
