import CommanderDamage from "@components/CommanderDamage";
import PoisonCounter from "@components/LifeCounter/PoisonCounter";
import useGameContext from "@contexts/GameContext/gameContext";
import Skull from "@icons/Skull";
import Ascend from "@icons/Ascend";
import { iPlayer } from "src/typings/Player";
import Crown from "@icons/Crown";

interface MenuCounterProps {
  playerObject: iPlayer;
  handleClose?: () => void;
}

const MenuCounter = ({playerObject,handleClose}:MenuCounterProps) => {
  const {
    numberOfPlayers,
    dealCommanderDamage,
    updateLifeTotal,
    setDead,
    setAscended,
    setMonarch
  } = useGameContext()
  
  const generateCommanderQuadrants = () => {
    const quadrants = []
    for (let i = 0; i < numberOfPlayers; i++) {
      const currentPlayerQuadrant = playerObject.commanderDamage[i]
      if(!currentPlayerQuadrant) continue
      quadrants.push(
        <>
          <CommanderDamage 
          on21Dmg={()=>setDead(playerObject.id)}
          onAdd={
            () => {
              dealCommanderDamage(playerObject.id,1,currentPlayerQuadrant.playerId)
              updateLifeTotal(playerObject.lifeTotal -1,currentPlayerQuadrant.playerId)
            }
          } 
          onSubtract={() => {
            dealCommanderDamage(playerObject.id,-1,currentPlayerQuadrant.playerId)
            updateLifeTotal(playerObject.lifeTotal +1,currentPlayerQuadrant.playerId)
          }}
          key={currentPlayerQuadrant.playerId}
          currentDmg={currentPlayerQuadrant.damage}
          />
        </>
      )
    }
    return quadrants
  }

  const handleSetMonarch = () => {
    setMonarch(playerObject.id)
  }

  const handleSetAscended = () => {
    setAscended(playerObject.id)
  }

  const handleSetDead = () => {
    setDead(playerObject.id)
  }

  return (
    <div className="
    menu-counter 
    absolute 
    w-11/12 
    h-5/6 
    bg-slate-600 
    z-10 
    top-0 
    left-0 
    right-0 
    bottom-0 
    m-auto 
    rounded-md">
      <>
        <button className="absolute right-3" onClick={handleClose}>&times;</button>
        <div className="
        flex 
        h-1/6
        justify-around">
          <button onClick={handleSetMonarch}><Crown color={playerObject.isMonarch? 'yellow': 'black'}/></button>
          <button onClick={handleSetAscended}><Ascend color={playerObject.isAscended? 'yellow': 'black'}/></button>
          <button onClick={handleSetDead}><Skull color={playerObject.isDead? 'yellow': 'black'}/></button>
          <PoisonCounter />
        </div>
        <div className=" 
        grid 
        h-5/6
        grid-cols-1 
        md:grid-cols-2 
        bg-slate-800
        ">
          {generateCommanderQuadrants()}
        </div>
      </>
    </div>
  );
}

export default MenuCounter