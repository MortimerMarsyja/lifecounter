import { iPlayer } from "@typings/Player";
import LifeControls from "./LifeControls";
import TopLayer from "./TopLayer/TopLayer";
import useGameStore from "@store/useGameStore";
import usePlayerModalStore from "@store/usePlayerModalStore";

interface Props {
  playerObject: iPlayer;
}

const LifeCounter = ({ playerObject }: Props) => {
  const { updateLifeTotal, updatePlayerName, game } = useGameStore();
  const { id, lifeTotal, name } = playerObject;
  const { setModalData } = usePlayerModalStore();
  const onUpdateName = (newName: string) => {
    updatePlayerName(id, newName);
  };
  const onAddLife = () => {
    updateLifeTotal(id, lifeTotal + 1);
  };
  const onDecreaseLife = () => {
    updateLifeTotal(id, lifeTotal - 1);
  };
  const handleSetModalData = () => {
    setModalData({ val: true, playerId: id });
  };
  if (!playerObject) return;
  return (
    <>
      <LifeControls
        startingLife={game.startingLifeTotal}
        currentLife={lifeTotal}
        onAdd={onAddLife}
        onLifeClick={handleSetModalData}
        isDead={playerObject.isDead}
        onDecrease={onDecreaseLife}
      />
      <TopLayer
        initialUserName={name}
        onUpdateName={onUpdateName}
        placeholder={name}
        playerObject={playerObject}
      />
    </>
  );
};

export default LifeCounter;
