import { iDayNight } from "src/typings/GameTypes";

const dayColor = '#f0f0f0'
const nightColor = '#010101'
const neutralColor = '#3c3c3c'

export const getBgColor = (dayNight: iDayNight) => {
  console.log('dayNight', dayNight)
  if(dayNight === false) return neutralColor;
  if(dayNight === 'night') return nightColor;
  return dayColor;
}

