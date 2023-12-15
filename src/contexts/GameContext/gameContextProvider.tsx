import { FC, ReactNode, useReducer } from 'react';
import { GameContext } from './gameContext';
import { iDayNight } from 'src/typings/GameTypes';
import useGameReducer,{ GameActionTypes, gameInitialState } from '@reducers/gameReducer';
import { UUID } from 'crypto';

interface GameContextProviderProps {
  children: ReactNode;
}

interface Props {
  children: ReactNode;
}

const GameContextProvider: FC<GameContextProviderProps> = ({ children }:Props) => {
  const [state, dispatch] = useReducer(useGameReducer, gameInitialState);
  const { numberOfPlayers,startingLifeTotal } = state;

  const updateLifeTotal = (newLife:number,id:UUID) => {
    dispatch({
      type:GameActionTypes.UPDATE_LIFE_TOTAL,
      payload:{
         id, lifeTotal: newLife
      }
    })
  } 

  const updateDayNight = (dayNight:iDayNight) => {
    dispatch({
      type:GameActionTypes.UPDATE_DAY_NIGHT_CYCLE,
      payload:dayNight
    })
  }

  const setNemesis = (playerId:UUID,isNemesis?:boolean) => {
    dispatch({
      type:GameActionTypes.SET_NEMESIS,
      payload:{
        id:playerId,
        ...isNemesis && {isNemesis}
      }
    })
  }

  const dealCommanderDamage = (playerId:UUID, damage:number,targetPlayerId:UUID) => {
    dispatch({
      type:GameActionTypes.UPDATE_COMMANDER_DAMAGE,
      payload:{id:playerId, targetId: targetPlayerId, damage}
    })
  }

  const updatePlayerName = (playerId:UUID, name:string) => {
    dispatch({
      type:GameActionTypes.UPDATE_PLAYER_NAME,
      payload:{id:playerId, name}
    })
  }

  const addPoison = (playerId:UUID, poison:number) => {
    dispatch({
      type:GameActionTypes.ADD_POISON,
      payload:{id:playerId, poisonCounters: poison}
    })
  }
  
  const setMonarch = (playerId:UUID) => {
    dispatch({
      type:GameActionTypes.SET_MONARCH,
      payload:{
        id:playerId,
        isMonarch:true
      }
    })
  }

  const setAscended = (playerId:UUID,isAscended?:boolean) => {
    dispatch({
      type:GameActionTypes.SET_ASCENDED,
      payload:{
        id:playerId,
        ...isAscended && {isAscended}
      }
    })
  }

  const setInitiative = (playerId:UUID,hasInitiative?:boolean) => {
    dispatch({
      type:GameActionTypes.SET_INITIATIVE,
      payload:{
        id:playerId,
        ...hasInitiative && {hasInitiative}
      }
    })
  }

  const setDead = (playerId:UUID,isDead?:boolean) => {
    dispatch({
      type:GameActionTypes.SET_DEAD,
      payload:{
        id:playerId,
        ...isDead && {isDead}
      }
    })
  }

  const updateNumberOfPlayers = (numberOfPlayers:number) => {
    dispatch({
      type:GameActionTypes.CHANGE_PLAYERS_AMOUNT,
      payload:numberOfPlayers
    })
  }

  const setDayNight = (dayNight:iDayNight) => {
    dispatch({
      type:GameActionTypes.UPDATE_DAY_NIGHT_CYCLE,
      payload:dayNight
    })
  }

  return (
    <GameContext.Provider value={{ 
      startingLifeTotal,
      game:state, 
      updateLifeTotal, 
      updateDayNight,
      setMonarch,
      numberOfPlayers,
      updateNumberOfPlayers,
      setAscended,
      setDead,
      dealCommanderDamage,
      updatePlayerName,
      addPoison,
      setInitiative,
      setNemesis,
      setDayNight
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;