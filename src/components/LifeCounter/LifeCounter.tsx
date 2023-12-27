import { iPlayer } from "@typings/Player";
import LifeControls from "./LifeControls"
import TopLayer from "./TopLayer/TopLayer"
import useGameStore from "@store/useGameStore";

interface Props {
  playerObject:iPlayer;
}

const LifeCounter = ({
  playerObject,
}:Props) => {
  const {updateLifeTotal,updatePlayerName,game} = useGameStore()
  const {id,lifeTotal,name} = playerObject;
  const onUpdateName = (newName:string) => {
    updatePlayerName(id,newName)
  }
  const onAddLife = () => {
    updateLifeTotal(id,lifeTotal + 1)
  }
  const onDecreaseLife = () => {
    updateLifeTotal(id,lifeTotal - 1)
  }
  if(!playerObject) return
  return (
    <div>
      <LifeControls
        startingLife={game.startingLifeTotal}
        onAdd={onAddLife}
        isDead={playerObject.isDead}
        onDecrease={onDecreaseLife}
      />
      <TopLayer
        initialUserName={name}
        onUpdateName={onUpdateName}
        placeholder={name}
        playerObject={playerObject}
      />
    </div>
  )
}

export default LifeCounter