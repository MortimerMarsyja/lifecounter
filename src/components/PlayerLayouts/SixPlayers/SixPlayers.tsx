import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import PlayerSeat from "@components/PlayerSeat";
import { iGame } from "src/typings/GameTypes";
import OddLayout from "./OddLayout";
import LifeCounter from "@components/LifeCounter";
import Layout from "src/typings/Layout/Layout";

interface Props {
  layout: Layout;
  game: iGame;
}

const SixPlayers = ({ layout, game }: Props) => {
  const calculateRows = layout === 'even' ?
    'grid-rows-3' : 'grid-rows-4'
  if (layout === 'even') {
    return (
      game.players.map((player, idx) => (
        <OddLayout
          idx={idx}
          key={player.id}
          background={player.background}
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
    <div className={`grid ${calculateRows} grid-cols-2	`}>
      {game.players.map((player, idx) => (
        <PlayerPlaymat
          rowSpan={1}
          colSpan={1}
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
      ))}
    </div>
  )
}

export default SixPlayers