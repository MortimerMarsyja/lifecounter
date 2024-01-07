import { UUID } from "crypto";
import { iDayNight, iGame } from "src/typings/GameTypes";
import { IntRange0To21, iPlayer } from "src/typings/Player";
import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';

export const gameInitialState = {
  numberOfPlayers: 4,
  dayNight: 'neutral',
  players: [],
  startingLifeTotal: 40,
  backgrounds: [],
  colors:[]
} as iGame;

interface GameState {
  game: iGame;
  dealCommanderDamage: (id: UUID, targetId: UUID, damage: number) => void;
  setDayNight: (dayNight: iDayNight) => void;
  setAscended: (id: UUID) => void;
  setMonarch: (id: UUID, isMonarch?: boolean) => void;
  addPoison: (id: UUID, poisonCounters: number) => void;
  updateLifeTotal: (id: UUID, lifeTotal: number) => void;
  updatePlayerName: (id: UUID, name: string) => void;
  setDead: (id: UUID, isDead?: boolean) => void;
  setInitiative: (id: UUID, hasInitiative?: boolean) => void;
  setNemesis: (id: UUID, isNemesis?: boolean) => void;
  setPlayerBg: (id: UUID,background:string) => void;
  populatePlayers: (nPlayers: number, commander?: boolean, totalLife?: number) => void;
  setStartingLifeTotal: (startingLifeTotal: number) => void;
  setPlayerColor: (id: UUID, color: string) => void;
}


const handleGenerateUUIDs = (playersAmount: number) => {
  const playerIds = [];
  for (let i = 0; i < playersAmount; i++) {
    playerIds.push(uuidv4());
  }
  return playerIds;
}

const handleGenerateCommanderDamage = (
  playersAmount: number,
  playerIds: UUID[]
) => {
  const commanderDamage = [];
  for (let i = 0; i < playersAmount; i++) {
    commanderDamage.push({
      name: `Player ${i + 1}`,
      damage: 0 as IntRange0To21,
      playerId: playerIds[i],
    });
  }
  return commanderDamage;
}

const handlePopulatePlayers = (playersAmount: number, commander: boolean, totalLife: number) => {
  const playerIds = handleGenerateUUIDs(playersAmount);
  const players: iPlayer[] = [];
  if (playersAmount < 2) return [];
  for (let i = 0; i < playersAmount; i++) {
    players.push({
      id: playerIds[i] as UUID,
      name: `Player ${i + 1}`,
      lifeTotal: totalLife,
      poisonCounters: 0,
      isDead: false,
      isMonarch: false,
      hasInitiative: false,
      isAscended: false,
      isNemesis: false,
      background:'',
      ...(commander && { commanderDamage: handleGenerateCommanderDamage(playersAmount, playerIds as UUID[]) }),
    });
  }
  return players satisfies iPlayer[];
};

function handleDealCommanderDamage(players: iPlayer[], id: UUID, targetId: UUID, damage: number): iPlayer[] {
  return players.map(player => {
    if (player.id === id) {
      if (!player.commanderDamage) return player;
      const commanderDamage = player.commanderDamage.map(dmg => {
        if (dmg.playerId === targetId) {
          return { ...dmg, damage: damage + dmg.damage as IntRange0To21 };
        }
        return dmg;
      });

      return { ...player, commanderDamage };
    }
    return player;
  });
}

function handleChangePlayerColor(players: iPlayer[], id: UUID, color: string): iPlayer[] {
  return players.map(player => {
    if (player.id === id) {
      return { ...player, color };
    }
    return player;
  });
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      game: gameInitialState,
      setPlayerColor: (id, color) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: handleChangePlayerColor(state.game.players, id, color),
          },
        })),
      setAscended: (id) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player) => {
              if (player.id === id) {
                return { ...player, isAscended: !player.isAscended };
              }
              return player;
            })
          },
        })),
      setMonarch: (id, isMonarch) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.isMonarch) {
                return { ...player, isMonarch: false };
              }
              if (player.id === id) {
                return { ...player, isMonarch: isMonarch ? isMonarch : !player.isMonarch };
              }
              return player;
            }),
          },
        })),
      addPoison: (id, poisonCounters) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.id === id) {
                return { ...player, poisonCounters: player.poisonCounters + poisonCounters };
              }
              return player;
            }),
          },
        })),
      updateLifeTotal: (id, lifeTotal) => {
        set((state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.id === id) {
                return { ...player, lifeTotal };
              }
              return player;
            }),
          },
        }));
      },
      updatePlayerName: (id, name) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.id === id) {
                return { ...player, name };
              }
              return player;
            }),
          },
        })),
      setDead: (id, isDead) => {
        set((state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.id === id) {
                return { ...player, isDead: isDead ? isDead : !player.isDead };
              }
              return player;
            }),
          },
        }));
      },
      setInitiative: (id, hasInitiative) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.hasInitiative) {
                return { ...player, hasInitiative: false };
              }
              if (player.id === id) {
                return { ...player, hasInitiative: hasInitiative ? hasInitiative : !player.hasInitiative };
              }
              return player;
            }),
          },
        })),
      setNemesis: (id, isNemesis) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.isNemesis) {
                return { ...player, isNemesis: false };
              }
              if (player.id === id) {
                return {
                  ...player, isNemesis: isNemesis ?
                    isNemesis :
                    !player.isNemesis
                };
              }
              return player;
            }),
          },
        })),
        setDayNight: (dayNight: iDayNight) => set(
          (state) => ({
            ...state,
            game: { ...state.game, dayNight },
          })),
        setPlayerBg: (id:UUID,background:string) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            players: state.game.players.map((player: iPlayer) => {
              if (player.id === id) {
                return { ...player, background };
              }
              return player;
            }),
           },
        })),
      populatePlayers: (nPlayers, commander = true, totalLife = 40) => set(
        (state) => ({
          ...state,
          game: {
            ...state.game,
            numberOfPlayers: nPlayers,
            players: handlePopulatePlayers(nPlayers, commander, totalLife),
          },
        })),
      dealCommanderDamage: (id, targetId, damage) => {
        set((state) => {
          if (damage > 21 || damage < 0) return state;
          return {
            ...state,
            game: {
              ...state.game,
              players: handleDealCommanderDamage(state.game.players, id, targetId, damage),
            },
          }
        });
      },
      setStartingLifeTotal: (startingLifeTotal) => set(
        (state) => ({
          ...state,
          game: { ...state.game, startingLifeTotal },
        })),
    }),
    {
      name: 'game-storage',
    },
  ),
);

export default useGameStore;