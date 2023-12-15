import PoisonCounter from "@components/LifeCounter/PoisonCounter";
import useGameContext from "@contexts/GameContext/gameContext";
import { iPlayer } from "src/typings/Player";
import CommanderQuadrants from "@components/CommanderQuadrants";

interface MenuCounterProps {
  playerObject: iPlayer;
  handleClose?: () => void;
}

const MenuCounter = ({playerObject,handleClose}:MenuCounterProps) => {
  const {
    addPoison,
    setDead,
  } = useGameContext()

  const handleAddPoison = () => {
    addPoison(playerObject.id,1)
  }

  const handleSetDead = () => {
    setDead(playerObject.id)
  }

  const handleSubtractPoison = () => {
    addPoison(playerObject.id,-1)
  }

  return (
    <div className="
    menu-counter 
    absolute 
    w-11/12 
    h-5/6 
    bg-[#fff] 
    z-20 
    top-0 
    left-0 
    right-0 
    bottom-0 
    m-auto 
    p-2
    rounded-md">
      <>
        <button className="absolute right-3" onClick={handleClose}>&times;</button>
        <div className="
        flex 
        items-center
        h-1/6
        justify-around">
          <PoisonCounter 
            onAdd={handleAddPoison} 
            onSubtract={handleSubtractPoison} 
            currentPoison={playerObject.poisonCounters}
            onTenPoison={handleSetDead}
            isDead={playerObject.isDead}
          />
        </div>
        <div className=" 
        grid 
        h-5/6
        grid-cols-1 
        md:grid-cols-2 
        ">
          <CommanderQuadrants 
            nPlayers={playerObject.commanderDamage.length}
            playerObject={playerObject}
          />
        </div>
      </>
    </div>
  );
}

export default MenuCounter