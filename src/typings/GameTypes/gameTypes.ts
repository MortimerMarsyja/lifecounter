import { UUID } from "crypto";

export interface iPlayer {
  startingLifeTotal: number;
  lifeTotal: number;
  poisonCounters: number;
  isDead: boolean;
  isAscended: boolean;
  isMonarch: boolean;
  isNemesis: boolean;
  hasInitiative: boolean;
  name: string;
  id: UUID;
  color: string;
  commanderDamage: Array<{ name: string; damage: number,playerId:UUID }>;
}

export type iDayNight = false | 'day' | 'night';

export interface iGame {
  numberOfPlayers: number;
  dayNight: iDayNight;
  startingLifeTotal: number;
  players: Array<iPlayer>;
}


