import LifeCounter from "@components/LifeCounter";
import  useGameContext  from "@contexts/GameContext/gameContext";
import { useEffect } from "react";
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
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
      {getQuadrants(game)}
    </div>
  )
}

const Game = ():JSX.Element => {
  const {game} = useGameContext()
  useEffect(() => {
    console.log('game',game)
  }, [game])
  return (
    <>
      {game.players.length ? divideScreenInNPlayers(game) : <>No players</>}
    </>
  )
}

export default Game


