import { iGame } from "src/typings/GameTypes";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import { useState } from "react";
import { getBgColor } from "@utils/getBgColor";

interface Props {
  game: iGame;
}


type iDimension = {
  w: number;
  h: number;
}

type Dimensions = iDimension | undefined;

const OddSixLayout = ({
  game,
}: Props) => {
  const bgColor = getBgColor(game.dayNight)
  const [firstLastDimensions, setFirstLastDimensions] = useState<Dimensions>(undefined)
  const [commonPlayerDimensions, setCommonPlayerDimensions] = useState<Dimensions>(undefined)
  return (
    <div className={`grid grid-rows-4 grid-cols-2 w-full h-full`}>
    {game.players.map((player, idx) => {
      if(idx === 5 || idx === 0){
        return (
          <PlayerPlaymat
            key={player.id}
            rowSpan={1}
            colSpan={2}
            colFromTo={{from: 1, to: 2}}
            background={bgColor}
            withRefData={(refData) => {
              if(refData.current){
                setFirstLastDimensions({
                  w: refData.current.offsetWidth,
                  h: refData.current.offsetHeight
                })
              }
            }}
            >
            {firstLastDimensions && 
            <PlayerSeat
              width={firstLastDimensions.w}
              height={firstLastDimensions.h}
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
          colSpan={1}
          rowSpan={1}
          withRefData={
            (refData) => {
              if(refData.current){
                if(idx === 1){
                  setCommonPlayerDimensions({
                    w: refData.current.offsetWidth,
                    h: refData.current.offsetHeight
                  })
                }
              }
            }
          }
          background={bgColor}
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

export default OddSixLayout