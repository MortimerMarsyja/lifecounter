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
  console.log(lifeTotal)
  const onAddLife = () => {
    updateLifeTotal(id,lifeTotal + 1)
  }
  const onDecreaseLife = () => {
    updateLifeTotal(id,lifeTotal - 1)
  }
  if(!playerObject) return
  return (
    <>
      <LifeControls
        startingLife={game.startingLifeTotal}
        currentLife={lifeTotal}
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
    </>
  )
}

export default LifeCounter