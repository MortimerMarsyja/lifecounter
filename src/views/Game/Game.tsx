import LifeCounter from "@components/LifeCounter";
import  useGameContext  from "@contexts/GameContext/gameContext";
import { iGame } from "src/typings/GameTypes";

const  getQuadrants = (game:iGame) => {
  const quadrants = []
  for (let i = 0; i < game.numberOfPlayers; i++) {
    quadrants.push(
      <>
        <LifeCounter 
          key={game.players[i].id}
          id={game.players[i].id} 
          currentLife={game.players[i].lifeTotal} 
        />
      </>
    )
  }
  return quadrants
}

const divideScreenInNPlayers = (game:iGame) => {
  return (
    <div 
    style={{
      width: 'calc(100% - 54px)',
      height: 'calc(100vh - 54px)',
    }}
    className="
    w-full 
    h-screen 
    grid 
    grid-cols-1 
    md:grid-cols-2
    box-content
    bg-gray-100 
    p-3
    rounded-md">
      {getQuadrants(game)}
    </div>
  )
}

const Game = ():JSX.Element => {
  const {game} = useGameContext()
  return (
    <>
      {game.players.length ? divideScreenInNPlayers(game) : <>No players</>}
    </>
  )
}

export default Game


