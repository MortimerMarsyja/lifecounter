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

const SixPlayers = ({
  game,
}: Props) => {
  const [commonPlayerDimensions, setCommonPlayerDimensions] = useState<Dimensions>(undefined)
  return (
    <div className={`grid grid-rows-3 grid-cols-2 w-full h-full`}>
    {game.players.map((player, idx) => {
      return (
        <PlayerPlaymat
          key={player.id}
          colSpan={1}
          rowSpan={1}
          withRefData={
            (refData) => {
              if(refData.current){
                setCommonPlayerDimensions({
                  w: refData.current.offsetWidth,
                  h: refData.current.offsetHeight
                })
              }
            }
          }
          background={player.background}
        >
        { commonPlayerDimensions ?
        <PlayerSeat
            playerSeat={idx}
            width={commonPlayerDimensions?.h}
            height={commonPlayerDimensions?.w}
            nPlayers={game.numberOfPlayers}
            uneven={false}
          >
            <LifeCounter
              key={player.id}
              playerObject={player}
            />
          </PlayerSeat> : null}
        </PlayerPlaymat>
      )
    })}
  </div>
  )
}

export default SixPlayers