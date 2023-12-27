import CommanderDamage from "@components/CommanderDamage";
import useGameStore from "@store/useGameStore";
import { iPlayer } from "src/typings/Player";

interface CommanderQuadrantProps {
  nPlayers:number;
  playerObject:iPlayer;
}

const CommanderQuadrants = ({
  nPlayers,
  playerObject
}:CommanderQuadrantProps) => {
  const {
    dealCommanderDamage,
    updateLifeTotal,
    setDead,
  } = useGameStore()
  const quadrants = []
    if(!playerObject.commanderDamage) return null
    for (let i = 0; i < nPlayers; i++) {
      const currentPlayerQuadrant = playerObject.commanderDamage[i]
      if(!currentPlayerQuadrant) continue
      quadrants.push(
        <div className="relative">
          <p className="absolute">{currentPlayerQuadrant.name}</p>
          <CommanderDamage 
          on21Dmg={()=>setDead(playerObject.id)}
          onAdd={
            () => {
              dealCommanderDamage(playerObject.id,currentPlayerQuadrant.playerId,1)
              updateLifeTotal(playerObject.id,playerObject.lifeTotal -1)
            }
          } 
          onSubtract={
            () => {
              dealCommanderDamage(currentPlayerQuadrant.playerId,playerObject.id,-1)
              updateLifeTotal(playerObject.id,playerObject.lifeTotal +1)
           }
          }
          key={currentPlayerQuadrant.playerId}
          currentDmg={currentPlayerQuadrant.damage}
          isDead={playerObject.isDead}
          />
        </div>
      )
    }
    return quadrants
}

export default CommanderQuadrants