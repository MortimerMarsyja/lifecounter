import { createContext, useContext } from "react";
import { gameInitialState } from "@reducers/gameReducer";
import { iDayNight, iGame } from "src/typings/GameTypes";
import { UUID } from "crypto";

interface GameContextProps {
  game: iGame;
  startingLifeTotal: number;
  numberOfPlayers: number;
  updateNumberOfPlayers: (newNumberOfPlayers:number) => void;
  updateLifeTotal: (newLifeTotal:number,playerId:UUID) => void;
  updatePlayerName: (playerId:UUID, name:string) => void;
  addPoison: (playerId:UUID, poison:number) => void;
  dealCommanderDamage: (
    playerId:UUID,
    damage:number,
    targetPlayerId:UUID
  ) => void;
  updateDayNight: (dayNight:iDayNight) => void;
  setAscended: (playerId:UUID) => void;
  setMonarch: (playerId:UUID) => void;
  setDead: (playerId:UUID,isDead?:boolean) => void;
  setNemesis: (playerId:UUID,isNemesis?:boolean) => void;
  setInitiative: (playerId:UUID) => void;
  setDayNight: (dayNight:iDayNight) => void;
}

export const GameContext = createContext<GameContextProps>({
  game: gameInitialState,
  startingLifeTotal: 40,
  numberOfPlayers: 4,
  updateLifeTotal: () => { },
  updateNumberOfPlayers: () => { },
  updatePlayerName: () => { },
  addPoison: () => { },
  dealCommanderDamage: () => { },
  updateDayNight: () => { },
  setAscended: () => { },
  setMonarch: () => { },
  setDead: () => { },
  setInitiative: () => { },
  setNemesis: () => { },
  setDayNight: () => { },
});

const useGameContext = () => useContext(GameContext);

export default useGameContext;
