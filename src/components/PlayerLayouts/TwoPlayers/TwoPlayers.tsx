import { iGame } from "@lib/definitions";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import { useState } from "react";
import { getBgColor } from "@services/get-bg-color";

interface Props {
  game: iGame;
  oddLayout?: boolean;
}

type iDimension = {
  w: number;
  h: number;
};

type Dimensions = iDimension | undefined;

const TwoPlayers = ({ game }: Props) => {
  const bg = getBgColor(game.dayNight);
  const [playerDimensions, setPlayerDimensions] =
    useState<Dimensions>(undefined);
  return (
    <div
      className={`
    grid
    grid-rows-2
    grid-cols-1
    w-full 
    h-full`}
    >
      {game.players.map((player, idx) => {
        return (
          <PlayerPlaymat
            key={player.id}
            rowSpan={1}
            colSpan={2}
            withRefData={(refData) => {
              if (refData.current) {
                setPlayerDimensions({
                  w: refData.current.offsetWidth,
                  h: refData.current.offsetHeight,
                });
              }
            }}
            background={bg}
          >
            {playerDimensions ? (
              <PlayerSeat
                playerSeat={idx}
                nPlayers={game.numberOfPlayers}
                uneven={false}
                width={playerDimensions.w}
                height={playerDimensions.h}
              >
                <LifeCounter key={player.id} playerObject={player} />
              </PlayerSeat>
            ) : null}
          </PlayerPlaymat>
        );
      })}
    </div>
  );
};

export default TwoPlayers;
