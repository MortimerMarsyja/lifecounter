const calculateSeatOrientation = (nPlayers:number,playerSeat:number,uneven:boolean) => {
  if(nPlayers === 2) {
    if (playerSeat === 0) return 'topSeat'
    if (playerSeat === 1) return 'bottomSeat'
  }
  if (nPlayers === 3) {
    if (playerSeat === 0) return 'topSeat'
    if (playerSeat === 1) return 'rightSeat'
    if (playerSeat === 2) return 'bottomSeat'
  }
  if (nPlayers === 4) {
    if (playerSeat === 0) return 'topSeat'
    if (playerSeat === 1) return 'topSeat'
    if (playerSeat === 2) return 'bottomSeat'
    if (playerSeat === 3) return 'bottomSeat'
  }
  if (nPlayers === 5) {
    if (uneven) {
      if (playerSeat === 0) return 'topSeat'
      if (playerSeat === 1) return 'leftSeat'
      if (playerSeat === 2) return 'rightSeat'
      if (playerSeat === 3) return 'rightSeat'
      if (playerSeat === 4) return 'bottomSeat'
    }
    if (playerSeat === 0) return 'leftSeat'
    if (playerSeat === 1) return 'rightSeat'
    if (playerSeat === 2) return 'leftSeat'
    if (playerSeat === 3) return 'rightSeat'
    if (playerSeat === 4) return 'bottomSeat'
  }
  if (nPlayers === 6) {
    if (playerSeat === 0) return 'leftSeat'
    if (playerSeat === 1) return 'rightSeat'
    if (playerSeat === 2) return 'leftSeat'
    if (playerSeat === 3) return 'rightSeat'
    if (playerSeat === 4) return 'leftSeat'
    if (playerSeat === 5) return 'rightSeat'
    if(uneven) {
      if (playerSeat === 0) return 'topSeat'
      if (playerSeat === 1) return 'leftSeat'
      if (playerSeat === 2) return 'rightSeat'
      if (playerSeat === 3) return 'leftSeat'
      if (playerSeat === 4) return 'rightSeat'
      if (playerSeat === 5) return 'bottomSeat'
    }

  }
}

export default calculateSeatOrientation;