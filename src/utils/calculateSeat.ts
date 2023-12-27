import playerSeatStyles from "@components/PlayerSeat/playerSeatStyles";

const calculateSeatOrientation = (nPlayers:number,playerSeat:number,uneven:boolean) => {
  if(nPlayers === 2) {
    if (playerSeat === 0) return playerSeatStyles.topSeat
    if (playerSeat === 1) return playerSeatStyles.bottomSeat
  }
  if (nPlayers === 3) {
    if (playerSeat === 0) return playerSeatStyles.topSeat
    if (playerSeat === 1) return playerSeatStyles.leftSeat
    if (playerSeat === 2) return playerSeatStyles.rightSeat
  }
  if (nPlayers === 4) {
    if (playerSeat === 0) return playerSeatStyles.topSeat
    if (playerSeat === 1) return playerSeatStyles.leftSeat
    if (playerSeat === 2) return playerSeatStyles.bottomSeat
    if (playerSeat === 3) return playerSeatStyles.rightSeat
  }
  if (nPlayers === 5) {
    if (uneven) {
      if (playerSeat === 0) return playerSeatStyles.topSeat
      if (playerSeat === 1) return playerSeatStyles.leftSeat
      if (playerSeat === 2) return playerSeatStyles.bottomSeat
      if (playerSeat === 3) return playerSeatStyles.rightSeat
      if (playerSeat === 4) return playerSeatStyles.rightSeat
    }
    if (playerSeat === 0) return playerSeatStyles.topSeat
    if (playerSeat === 1) return playerSeatStyles.leftSeat
    if (playerSeat === 2) return playerSeatStyles.bottomSeat
    if (playerSeat === 3) return playerSeatStyles.rightSeat
    if (playerSeat === 4) return playerSeatStyles.bottomSeat
  }
  if (nPlayers === 6) {
    if(uneven) {
      if (playerSeat === 0) return playerSeatStyles.topSeat
      if (playerSeat === 1) return playerSeatStyles.leftSeat
      if (playerSeat === 2) return playerSeatStyles.leftSeat
      if (playerSeat === 3) return playerSeatStyles.rightSeat
      if (playerSeat === 4) return playerSeatStyles.rightSeat
      if (playerSeat === 5) return playerSeatStyles.bottomSeat
    }
    if (playerSeat === 0) return playerSeatStyles.topSeat
    if (playerSeat === 1) return playerSeatStyles.leftSeat
    if (playerSeat === 2) return playerSeatStyles.leftSeat
    if (playerSeat === 3) return playerSeatStyles.bottomSeat
    if (playerSeat === 4) return playerSeatStyles.rightSeat
    if (playerSeat === 5) return playerSeatStyles.rightSeat
  }
}

export default calculateSeatOrientation;