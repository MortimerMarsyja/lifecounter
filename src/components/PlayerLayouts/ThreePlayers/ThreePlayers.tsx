import { iGame } from "src/typings/GameTypes";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";

interface Props {
  game: iGame;
}

const ThreePlayers = ({
  game,
}: Props) => {
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
            background={'red'}
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