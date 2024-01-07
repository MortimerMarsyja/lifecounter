import { iGame } from "src/typings/GameTypes";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import { getBgColor } from "@utils/getBgColor";
interface Props {
  game: iGame;
}

const FourPlayers = ({
  game,
}: Props) => {
  const bg = getBgColor(game.dayNight)
  return (
    <div className={`
    grid
    grid-rows-2
    grid-cols-2
    w-full 
    gap-2
    h-full`}>
    {game.players.map((player, idx) => {
      return (
        <PlayerPlaymat
          key={player.id}
          rowSpan={1}
          colSpan={1}
          background={bg}
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

export default FourPlayers