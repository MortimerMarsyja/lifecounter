import { UUID } from "crypto";
import { iDayNight, iGame } from "src/typings/GameTypes";
import { IntRange0To21, iPlayer } from "src/typings/Player";
import { v4 as uuidv4 } from 'uuid';

export const gameInitialState = {
  numberOfPlayers: 4,
  dayNight: false,
  players: [],
  startingLifeTotal: 40,
} as iGame;

const colors = ['red', 'blue', 'green', 'black', 'white', 'yellow'];

const handleGenerateCommanderDamage = (playersAmount: number,playerIds:UUID[]) => {
  const commanderDamage = [];
  for(let i = 0; i < playersAmount; i++) {
    commanderDamage.push({
      name: `Player ${i + 1}`,
      damage: 0 as IntRange0To21,
      playerId: playerIds[i],
    });
  }
  return commanderDamage;
}

const handleGenerateUUIDs = (playersAmount: number) => {
  const playerIds = [];
  for(let i = 0; i < playersAmount; i++) {
    playerIds.push(uuidv4());
  }
  return playerIds;
}

const handlePopulatePlayers = (playersAmount: number) => {
  const playerIds = handleGenerateUUIDs(playersAmount);
  const players: iPlayer[] = [];
  if (playersAmount < 2 ) return [];
  for(let i = 0; i < playersAmount; i++) {
    players.push({
      id: playerIds[i] as UUID,
      startingLifeTotal: gameInitialState.startingLifeTotal || 40,
      name: `Player ${i + 1}`,
      lifeTotal: gameInitialState.startingLifeTotal,
      poisonCounters: 0,
      isDead: false,
      isMonarch: false,
      hasInitiative: false,
      isAscended: false,
      isNemesis: false,
      background: colors[i],
      commanderDamage: handleGenerateCommanderDamage(playersAmount,playerIds as UUID[]),
    });
  }
  return players satisfies iPlayer[];
};

export enum GameActionTypes {
  CHANGE_PLAYERS_AMOUNT = 'CHANGE_PLAYERS_AMOUNT',
  SET_ASCENDED = 'SET_ASCENDED',
  SET_MONARCH = 'SET_MONARCH',
  SET_INITIATIVE = 'SET_INITIATIVE',
  SET_NEMESIS = 'SET_NEMESIS',
  SET_DEAD = 'SET_DEAD',
  ADD_POISON = 'ADD_POISON',
  UPDATE_LIFE_TOTAL = 'UPDATE_LIFE_TOTAL',
  UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME',
  UPDATE_COMMANDER_DAMAGE = 'UPDATE_COMMANDER_DAMAGE',
  UPDATE_DAY_NIGHT_CYCLE = 'UPDATE_DAY_NIGHT_CYCLE'
}

// Actions
type changePlayersAmount = { 
  type: GameActionTypes.CHANGE_PLAYERS_AMOUNT; 
  payload: number 
};

type setAscended = { 
  type: GameActionTypes.SET_ASCENDED; 
  payload: { id: UUID; isAscended?: boolean } 
};

type setNemesis = {
  type: GameActionTypes.SET_NEMESIS;
  payload: { id: UUID; isNemesis?: boolean } 
};

type setMonarch = { 
  type: GameActionTypes.SET_MONARCH; 
  payload: { id: UUID; isMonarch: boolean } 
};

type setInitiative = { 
  type: GameActionTypes.SET_INITIATIVE; 
  payload: { id: UUID; hasInitiative?: boolean } 
};

type setDead = { 
  type: GameActionTypes.SET_DEAD; 
  payload: { id: UUID; isDead?: boolean } 
};

type addPoison = { 
  type: GameActionTypes.ADD_POISON; 
  payload: { id: UUID; poisonCounters: number } 
};

type updateLifeTotal = { 
  type: GameActionTypes.UPDATE_LIFE_TOTAL; 
  payload: { id: UUID; lifeTotal: number } 
};

type updateCommanderDamage = { 
  type: GameActionTypes.UPDATE_COMMANDER_DAMAGE; 
  payload: { id: UUID; targetId: UUID; damage: number } 
};

type updatePlayerName = { 
  type: GameActionTypes.UPDATE_PLAYER_NAME;
   payload: { id: UUID; name: string } 
};

type updateDayNightCycle = {
  type: GameActionTypes.UPDATE_DAY_NIGHT_CYCLE;
  payload: iDayNight;
}

export type GameActions =
  | changePlayersAmount
  | setAscended
  | setMonarch
  | setInitiative
  | setDead
  | addPoison
  | updateLifeTotal
  | updateCommanderDamage
  | updatePlayerName
  | updateDayNightCycle
  | setNemesis;

// Reducer
export const gameReducer = (state: iGame , action: GameActions): iGame  => {
  const { type, payload } = action;
  switch (type) {
    case GameActionTypes.CHANGE_PLAYERS_AMOUNT:
      return { 
          ...state,
          numberOfPlayers: payload,
          players: handlePopulatePlayers(action.payload)
      };
    case GameActionTypes.SET_ASCENDED:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.id === action.payload.id) {
            return { ...player, isAscended: action.payload.isAscended ? action.payload.isAscended : !player.isAscended };
          }
          return player;
        }),
      };
    case GameActionTypes.SET_MONARCH:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.isMonarch) {
            return { ...player, isMonarch: false };
          }
          if (player.id === action.payload.id) {
            return { ...player, isMonarch: payload.isMonarch };
          }
          return player;
        }),
      };
    case GameActionTypes.SET_INITIATIVE:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.hasInitiative) {
            return { ...player, hasInitiative: false };
          }
          if (player.id === action.payload.id) {
            return { ...player, hasInitiative: payload.hasInitiative ? payload.hasInitiative : !player.hasInitiative };
          }
          return player;
        }),
      };
    case GameActionTypes.SET_DEAD:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.id === action.payload.id) {
            return { ...player, isDead: payload.isDead ? payload.isDead : !player.isDead };
          }
          return player;
        }),
      };
    case GameActionTypes.ADD_POISON:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.id === action.payload.id) {
            return { ...player, poisonCounters: player.poisonCounters + action.payload.poisonCounters };
          }
          return player;
        }),
      };
    case GameActionTypes.UPDATE_LIFE_TOTAL:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.id === action.payload.id) {
            return { ...player, lifeTotal: payload.lifeTotal };
          }
          return player;
        }),
      };
    case GameActionTypes.UPDATE_PLAYER_NAME:
      return {
        ...state,
        players: state.players.map((player: iPlayer) => {
          if (player.id === action.payload.id) {
            return { ...player, name: payload.name };
          }
          return player;
        }),
      };
      case GameActionTypes.UPDATE_COMMANDER_DAMAGE:
        return {
          ...state,
          players: state.players.map((player: iPlayer) => {
            if (player.id === action.payload.id) {
              return { ...player, commanderDamage: player.commanderDamage.map((commander) => {
                if (commander.playerId === action.payload.targetId) {
                  return { ...commander, damage: commander.damage + action.payload.damage };
                }
                return commander;
              }) };
            }
            return player;
          }),
        };
    case GameActionTypes.UPDATE_DAY_NIGHT_CYCLE:
      return {
        ...state,
        dayNight: payload,
      };
      case GameActionTypes.SET_NEMESIS:
        return {
          ...state,
          players: state.players.map((player: iPlayer) => {
            if (player.id === action.payload.id) {
              return { ...player, isNemesis: payload.isNemesis ? payload.isNemesis : !player.isNemesis };
            }
            return player;
          }),
        };
    default:
      return state;
  }
};

export default gameReducer;