import CommanderDamage from "@components/CommanderDamage";
import openModalService from "@services/open-modal-service";
import useGameStore from "@store/useGameStore";

import { UUID } from "crypto";

interface PlayerModalProps {
  playerId: UUID;
}

const PlayerModal = ({ playerId }: PlayerModalProps) => {
  const { game, setDead, dealCommanderDamage, updateLifeTotal } =
    useGameStore();
  const playerData = game.players.find((player) => player.id === playerId);
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  interface DamageObject {
    damageDealer: UUID;
    damage: number;
  }

  interface DamageObjectWithCurrentDmg extends DamageObject {
    currentDmg: number;
  }

  const handleAddDamage = ({ damageDealer, damage }: DamageObject) => {
    dealCommanderDamage(playerId, damageDealer, damage);
    updateLifeTotal(playerId, (playerData?.lifeTotal || 0) - 1);
  };

  const handleSubtractDamage = ({
    damageDealer,
    damage,
    currentDmg,
  }: DamageObjectWithCurrentDmg) => {
    if (currentDmg === 0) return;
    dealCommanderDamage(playerId, damageDealer, damage);
    updateLifeTotal(playerId, (playerData?.lifeTotal || 0) + 1);
  };

  const handleCloseModal = () => {
    openModalService.setSubject({ isOpen: false, playerId });
  };

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
      onClick={handleCloseModal}
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
                onAdd={() =>
                  handleAddDamage({
                    damageDealer: player.playerId,
                    damage: 1,
                  })
                }
                currentDmg={player.damage || 0}
                onSubtract={() =>
                  handleSubtractDamage({
                    damageDealer: player.playerId,
                    damage: -1,
                    currentDmg: player.damage || 0,
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
