import { UUID } from "crypto";

export type IntRange0To21 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;

export type iCommanderDamage = {
  name: string;
  damage: IntRange0To21; 
  playerId: UUID;
}

export type iBackgroundColor = 'red' | 'blue' | 'green' | 'black' | 'white' | 'colorless';
export type iBackgroundImage = string;

export type iPlayer = {
  name: string;
  hasInitiative: boolean;
  isNemesis: boolean;
  isMonarch: boolean;
  isDead: boolean;
  isAscended: boolean;
  id:UUID;
  lifeTotal: number;
  background?: iBackgroundColor | iBackgroundImage;
  poisonCounters: number;
  commanderDamage: iCommanderDamage[];
  startingLifeTotal: number;
}