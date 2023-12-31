import { iGame } from "src/typings/GameTypes";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import { useState } from "react";

interface Props {
  game: iGame;
}


type iDimension = {
  w: number;
  h: number;
}

type Dimensions = iDimension | undefined;

const ThreePlayers = ({
  game,
}: Props) => {
  const [secondPlayerDimensions, setSecondPlayerDimensions] = useState<Dimensions>(undefined)
  console.log(secondPlayerDimensions)
  return (
    <div className={`grid grid-rows-2 grid-cols-2 w-full h-full`}>
    {game.players.map((player, idx) => {
      if(idx === 1){
        return (
          <PlayerPlaymat
            key={player.id}
            rowFromTo={{from: 1, to: 2}}
            colFromTo={{from: 2, to: 2}}
            rowSpan={2}
            colSpan={1}
            background={player.background}
            withRefData={(refData) => {
              if(refData.current){
                setSecondPlayerDimensions({
                  w: refData.current.offsetWidth,
                  h: refData.current.offsetHeight
                })
              }
            }}
            >
            {secondPlayerDimensions && 
            <PlayerSeat
              width={secondPlayerDimensions.h}
              height={secondPlayerDimensions.w}
              playerSeat={idx}
              nPlayers={game.numberOfPlayers}
              uneven={false}
            >
              <LifeCounter
                key={player.id}
                playerObject={player}
              />
            </PlayerSeat>}
          </PlayerPlaymat>
        )
      }
      return (
        <PlayerPlaymat
          key={player.id}
          colFromTo={{from: 1, to: 1}}
          colSpan={1}
          rowSpan={1}
          background={player.background}
        >
          <PlayerSeat
            playerSeat={idx}
            nPlayers={game.numberOfPlayers}
            uneven={false}
          >
            <LifeCounter
              key={player.id}
              playerObject={player}
            />
          </PlayerSeat>
        </PlayerPlaymat>
      )
    })}
  </div>
  )
}

export default ThreePlayers