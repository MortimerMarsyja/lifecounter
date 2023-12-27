import { iGame } from "src/typings/GameTypes";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";

interface Props {
  game: iGame;
}

const FivePlayers = ({
  game,
}: Props) => {
   
  return (
    <div className={`grid 'grid-cols-4' grid-cols-2	`}>
      {game.players.map((player, idx) => {
        return (
          <PlayerPlaymat
            rowSpan={1}
            colSpan={2}
            background={player.background}
          >
            <PlayerSeat
              playerSeat={idx}
              key={player.id}
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
      )}
    </div>
  )
}

export default FivePlayers