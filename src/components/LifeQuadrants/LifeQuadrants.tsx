import LifeCounter from "@components/LifeCounter"
import useGameStore from "@store/useGameStore"
import { iGame } from "@typings/GameTypes"

const LifeQuadrants = (game: iGame) => {
  const { updateLifeTotal,updatePlayerName } = useGameStore()
  const quadrants = []
  const handleAdd = (idx:number) => {
    updateLifeTotal(game.players[idx].id,game.players[idx].lifeTotal +1)
  }
  const handleDecrease = (idx:number) => {
    updateLifeTotal(game.players[idx].id,game.players[idx].lifeTotal -1)
  }
  const handleUpdateName = (idx:number,name:string) => {
    updatePlayerName(game.players[idx].id,name)
  }
  for (let i = 0; i < game.numberOfPlayers; i++) {
    quadrants.push(
      <div className="relative w-full h-full">
        <div className={`absolute inset-0 flex items-center justify-center transform`}>
          <LifeCounter
            startingLife={game.startingLifeTotal}
            key={game.players[i].id}
            onAddLife={()=>handleAdd(i)}
            onDecreaseLife={()=>handleDecrease(i)}
            playerObject={game.players[i]}
            onUpdateName={(name:string)=>handleUpdateName(i,name)}
            placeholder="Player Name"
          />
        </div>
      </div>
    )
  }
  return quadrants
}

export default LifeQuadrants