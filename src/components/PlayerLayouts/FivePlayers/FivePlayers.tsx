import { iGame } from "src/typings/GameTypes";
import Layout from "src/typings/Layout/Layout";
import OddLayout from "./OddLayout";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";

interface Props {
  layout: Layout;
  game: iGame;
}

const FivePlayers = ({
  layout,
  game,
}: Props) => {
  const full = 'w-full h-full gap-1'
  const calculateRows = layout === 'even' ? `grid-cols-3 ${full}` : `grid-cols-4 ${full}`
  if (layout === 'even') {
    return (
      game.players.map((player, idx) => (
        <OddLayout
          idx={idx}
          background={player.background}
          key={player.id}
        >
          <PlayerSeat
            playerSeat={idx}
            key={player.id}
            nPlayers={game.numberOfPlayers}
            uneven={true}
          >
            <LifeCounter
              key={player.id}
              playerObject={player}
            />
          </PlayerSeat>
        </OddLayout>
      ))
    )
  }
  return (
    <div className={`grid ${calculateRows} grid-cols-2`}>
      {game.players.map((player, idx) => {
        if(idx === 0) return (
          <PlayerPlaymat
            rowSpan={2}
            colSpan={1}
            background='#fff'
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
        return (
          <PlayerPlaymat
            rowSpan={1}
            colSpan={1}
            background='#fff'
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