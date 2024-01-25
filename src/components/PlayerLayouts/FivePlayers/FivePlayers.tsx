import { iGame } from "@lib/definitions";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import { useState } from "react";
import { getBgColor } from "@services/get-bg-color";

interface Props {
  game: iGame;
}

type iDimension = {
  w: number;
  h: number;
};

type Dimensions = iDimension | undefined;

const FivePlayers = ({ game }: Props) => {
  const bg = getBgColor(game.dayNight);
  const [fifthPlayerDimensions, setFifthPlayerDimensions] =
    useState<Dimensions>(undefined);
  const [commonPlayerDimensions, setCommonPlayerDimensions] =
    useState<Dimensions>(undefined);
  return (
    <div className={`grid grid-rows-3 grid-cols-2 w-full h-full`}>
      {game.players.map((player, idx) => {
        if (idx === 4) {
          return (
            <PlayerPlaymat
              key={player.id}
              rowSpan={1}
              colSpan={2}
              colFromTo={{ from: 1, to: 2 }}
              background={bg}
              withRefData={(refData) => {
                if (refData.current) {
                  setFifthPlayerDimensions({
                    w: refData.current.offsetWidth,
                    h: refData.current.offsetHeight,
                  });
                }
              }}
            >
              {fifthPlayerDimensions && (
                <PlayerSeat
                  width={fifthPlayerDimensions.w}
                  height={fifthPlayerDimensions.h}
                  playerSeat={idx}
                  nPlayers={game.numberOfPlayers}
                  uneven={false}
                >
                  <LifeCounter key={player.id} playerObject={player} />
                </PlayerSeat>
              )}
            </PlayerPlaymat>
          );
        }
        return (
          <PlayerPlaymat
            key={player.id}
            colSpan={1}
            rowSpan={1}
            background={bg}
            withRefData={(refData) => {
              if (refData.current) {
                if (idx === 1) {
                  setCommonPlayerDimensions({
                    w: refData.current.offsetWidth,
                    h: refData.current.offsetHeight,
                  });
                }
              }
            }}
          >
            {commonPlayerDimensions ? (
              <PlayerSeat
                playerSeat={idx}
                width={commonPlayerDimensions?.h}
                height={commonPlayerDimensions?.w}
                nPlayers={game.numberOfPlayers}
                uneven={false}
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

export default FivePlayers;
