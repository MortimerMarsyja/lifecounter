import CommanderDamage from "@components/CommanderDamage";
import useGameContext from "@contexts/GameContext/gameContext";
import { iPlayer } from "src/typings/Player";

interface CommanderQuadrantProps {
  nPlayers:number;
  playerObject:iPlayer;
}

const CommanderQuadrants = ({nPlayers,playerObject}:CommanderQuadrantProps) => {
  const {
    dealCommanderDamage,
    updateLifeTotal,
    setDead,
  } = useGameContext()
  const quadrants = []
    for (let i = 0; i < nPlayers; i++) {
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
          isDead={playerObject.isDead}
          />
        </>
      )
    }
    return quadrants
}

export default CommanderQuadrants