import IconButton from "@components/IconButton";
import LifeCounter from "@components/LifeCounter";
import  useGameContext  from "@contexts/GameContext/gameContext";
import Day from "@icons/Day";
import DayNight from "@icons/DayNight";
import Night from "@icons/Night";
import { iDayNight, iGame } from "src/typings/GameTypes";

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

const divideScreenInNPlayers = (
  game:iGame,
  setDayNight:(payload:iDayNight)=>void
) => {
  
  const handleSetDayNight = () => {
    setDayNight(game.dayNight === 'day' || false ? 'night': 'day')
  }

  const handleShowDayNightIcon = (dayNight:iDayNight) => {
    if(dayNight === 'day') return <Day color="#000"/>
    if(dayNight === 'night') return <Night color="#000"/>
    return <DayNight color="#000"/>
  }

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
    relative
    rounded-md">
      <>
        <IconButton 
         className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 " onClick={handleSetDayNight}>
          {handleShowDayNightIcon(game.dayNight)}
        </IconButton> 
      </>
      {getQuadrants(game)}
    </div>
  )
}

const Game = ():JSX.Element => {
  const {game,setDayNight} = useGameContext()



  return (
    <>
      {game.players.length ? divideScreenInNPlayers(game,setDayNight) : <>No players</>}
    </>
  )
}

export default Game


