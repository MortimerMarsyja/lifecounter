import { iPlayer } from "../Player";



export type iDayNight = 'neutral' | 'day' | 'night';

export interface iGame {
  numberOfPlayers: number;
  dayNight: iDayNight;
  startingLifeTotal: number;
  players: Array<iPlayer>;
  colors: Array<string>;
}


