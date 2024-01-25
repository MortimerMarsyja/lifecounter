import { iGame } from "@lib/definitions";
import PlayerSeat from "@components/PlayerSeat";
import LifeCounter from "@components/LifeCounter";
import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat";
import { RefObject, useCallback, useState } from "react";
import { getBgColor } from "@services/get-bg-color";

interface Props {
  game: iGame;
}

type iDimension = {
  w: number;
  h: number;
};

type Dimensions = iDimension | undefined;

const ThreePlayers = ({ game }: Props) => {
  const [secondPlayerDimensions, setSecondPlayerDimensions] =
    useState<Dimensions>(undefined);
  const [commonDimensions, setCommonDimensions] =
    useState<Dimensions>(undefined);
  const bgColor = getBgColor(game.dayNight);

  const handleSecondPlayerRefData = useCallback(
    (refData: RefObject<HTMLDivElement>) => {
      if (refData.current) {
        setSecondPlayerDimensions({
          w: refData.current.offsetWidth,
          h: refData.current.offsetHeight,
        });
      }
    },
    []
  );

  const handleCommonRefData = useCallback(
    (refData: RefObject<HTMLDivElement>) => {
      if (refData.current) {
        setCommonDimensions({
          w: refData.current.offsetWidth,
          h: refData.current.offsetHeight,
        });
      }
    },
    []
  );
  return (
    <div className={`grid grid-rows-2 gap-2 grid-cols-2 w-full h-full`}>
      {game.players.map((player, idx) => {
        if (idx === 1) {
          return (
            <PlayerPlaymat
              key={player.id}
              rowFromTo={{ from: 1, to: 2 }}
              colFromTo={{ from: 2, to: 2 }}
              rowSpan={2}
              colSpan={1}
              background={bgColor}
              withRefData={handleSecondPlayerRefData}
            >
              {secondPlayerDimensions && (
                <PlayerSeat
                  width={secondPlayerDimensions.h}
                  height={secondPlayerDimensions.w}
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
            background={bgColor}
            withRefData={handleCommonRefData}
          >
            {commonDimensions && (
              <PlayerSeat
                width={commonDimensions.h}
                height={commonDimensions.w}
                playerSeat={idx}
                nPlayers={game.numberOfPlayers}
                uneven={false}
              >
                <LifeCounter key={player.id} playerObject={player} />
              </PlayerSeat>
            )}
          </PlayerPlaymat>
        );
      })}
    </div>
  );
};

export default ThreePlayers;
