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

const OddFiveLayout = ({ game }: Props) => {
  const bg = getBgColor(game.dayNight);
  const [firstLastDimensions, setFirstLastDimensions] =
    useState<Dimensions>(undefined);
  const [secondPlayerDimensions, setSecondPlayerDimensions] =
    useState<Dimensions>(undefined);
  const [commonPlayerDimensions, setCommonPlayerDimensions] =
    useState<Dimensions>(undefined);
  return (
    <div className={`grid grid-rows-4 grid-cols-2 w-full h-full`}>
      {game.players.map((player, idx) => {
        if (idx === 4 || idx === 0) {
          return (
            <PlayerPlaymat
              key={player.id}
              colSpan={2}
              rowSpan={1}
              background={bg}
              withRefData={(refData) => {
                if (refData.current) {
                  const newDimensions = {
                    w: refData.current.offsetWidth,
                    h: refData.current.offsetHeight,
                  };
                  setFirstLastDimensions(newDimensions);
                }
              }}
            >
              {firstLastDimensions && (
                <PlayerSeat
                  width={firstLastDimensions.w}
                  height={firstLastDimensions.h}
                  playerSeat={idx}
                  nPlayers={game.numberOfPlayers}
                  uneven
                >
                  <LifeCounter key={player.id} playerObject={player} />
                </PlayerSeat>
              )}
            </PlayerPlaymat>
          );
        }
        if (idx === 1) {
          return (
            <PlayerPlaymat
              key={player.id}
              colSpan={1}
              rowSpan={2}
              background={bg}
              withRefData={(refData) => {
                if (refData.current) {
                  const newDimensions = {
                    w: refData.current.offsetWidth,
                    h: refData.current.offsetHeight,
                  };
                  if (
                    JSON.stringify(newDimensions) !==
                    JSON.stringify(secondPlayerDimensions)
                  ) {
                    setSecondPlayerDimensions(newDimensions);
                  }
                }
              }}
            >
              {secondPlayerDimensions && (
                <PlayerSeat
                  width={secondPlayerDimensions.h}
                  height={secondPlayerDimensions.w}
                  playerSeat={idx}
                  nPlayers={game.numberOfPlayers}
                  uneven
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
            withRefData={(refData) => {
              if (refData.current) {
                const newDimensions = {
                  w: refData.current.offsetWidth,
                  h: refData.current.offsetHeight,
                };
                if (
                  JSON.stringify(newDimensions) !==
                  JSON.stringify(commonPlayerDimensions)
                ) {
                  setCommonPlayerDimensions(newDimensions);
                }
              }
            }}
            background={bg}
          >
            {commonPlayerDimensions ? (
              <PlayerSeat
                playerSeat={idx}
                width={commonPlayerDimensions?.h}
                height={commonPlayerDimensions?.w}
                nPlayers={game.numberOfPlayers}
                uneven
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

export default OddFiveLayout;
