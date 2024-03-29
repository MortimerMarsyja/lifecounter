import PlayerModal from "@components/PlayerModal";
import PlayersLayout from "@components/PlayersLayout";
import openModalService from "@services/open-modal-service";
import useGameStore from "@store/useGameStore";
import { useEffect } from "react";

const vibrantColors = [
  "#99fa2e",
  "#2ec5fa",
  "#f92efa",
  "#fa2e2e",
  "#faa92e",
  "#2efa2e",
];

const Game = (): JSX.Element => {
  const { game, setPlayerColor } = useGameStore();
  let modalData;
  if (openModalService && openModalService.getSubject) {
    modalData = openModalService.getSubject;
  }
  useEffect(() => {
    game.players.forEach((player, idx) => {
      setPlayerColor(player.id, vibrantColors[idx]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative w-full h-full p-2">
      {modalData?.isOpen && <PlayerModal playerId={modalData.playerId} />}
      {game.players.length ? <PlayersLayout game={game} /> : <>No players</>}
    </div>
  );
};

export default Game;
