import CommanderDamage from "@components/CommanderDamage";
import useGameStore from "@store/useGameStore";
import usePlayerModalStore from "@store/usePlayerModalStore";
import { UUID } from "crypto";

interface PlayerModalProps {
  playerId: UUID;
}

const PlayerModal = ({ playerId }: PlayerModalProps) => {
  const { game, setDead, dealCommanderDamage } = useGameStore();
  const { setModalData } = usePlayerModalStore();
  const playerData = game.players.find((player) => player.id === playerId);
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  interface CDamage {
    id: UUID;
    commanderDamage: number;
    name: string;
  }

  const gridOfPlayers = (numberOfPlayers: number) => {
    switch (numberOfPlayers) {
      case 2:
        return "grid-cols-2 grid-rows-1";
      case 3:
        return "grid-cols-2 grid-rows-2";
      case 4:
        return "grid-cols-2 grid-rows-2";
      case 5:
        return "grid-cols-3 grid-rows-2";
      case 6:
        return "grid-cols-3 grid-rows-2";
      default:
        return "grid-cols-1 grid-rows-1";
    }
  };

  return (
    <div
      className="w-full h-full opacity-75 absolute top-0 bg-[#000] z-40 flex items-center justify-center"
      onClick={() => setModalData({ val: false, playerId })}
    >
      <div
        onClick={stopPropagation}
        className="w-10/12 h-3/4 bg-white rounded-md opacity-100 relative z-50"
      >
        <div
          className={`
          w-full
          h-full 
          grid
          ${gridOfPlayers(game.numberOfPlayers)}
        `}
        >
          {playerData?.commanderDamage?.map((player) => (
            <div className="w-full h-full bg-[#cecece] relative">
              <div className="w-full flex justify-center absolute top-3">
                {player.name}
              </div>
              <CommanderDamage
                key={player.playerId}
                on21Dmg={() => setDead(playerId)}
                onAdd={() => {
                  dealCommanderDamage(playerId, player.playerId, 1);
                }}
                currentDmg={player.damage || 0}
                onSubtract={() => {
                  dealCommanderDamage(playerId, player.playerId, -1);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
