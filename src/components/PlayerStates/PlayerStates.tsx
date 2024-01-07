import IconButton from "@components/IconButton"
import Ascend from "@icons/Ascend"
import Crown from "@icons/Crown"
import Eye from "@icons/Eye"
import Icosahedron from "@icons/Icosahedron"
import Skull from "@icons/Skull"
import useGameStore from "@store/useGameStore"
import stylex from "@stylexjs/stylex"
import { iPlayer } from "src/typings/Player"
import playerStateStyle from "./playerStatesStyle"

interface Props {
  playerObject: iPlayer
  className?: string
}
const colors = {
  active: '#fff',
  inactive: '#a2a1a1'
}
const PlayerStates = ({ playerObject,className }:Props) => {
  const {
    setDead,
    setAscended,
    setMonarch,
    setInitiative,
    setNemesis,
  } = useGameStore()

  const handleSetMonarch = () => {
    setMonarch(playerObject.id)
  }

  const handleSetNemesis = () => {
    setNemesis(playerObject.id)
  }

  const handleSetAscended = () => {
    setAscended(playerObject.id)
  }

  const handleSetDead = () => {
    setDead(playerObject.id)
  }

  const handleSetInitiative = () => {
    setInitiative(playerObject.id)
  }

  return(
    <div
    className={`${className}`}
    {... stylex.props(
      playerStateStyle.main
    )}
    >
      <IconButton 
        onClick={handleSetMonarch}>
        <Crown color={playerObject.isMonarch? colors.active:colors.inactive}/>
      </IconButton>
      <IconButton 
        onClick={handleSetAscended}
      >
        <Ascend color={playerObject.isAscended? colors.active:colors.inactive}/>
      </IconButton>
      <IconButton 
        onClick={handleSetInitiative}
      >
        <Icosahedron color={playerObject.hasInitiative? colors.active:colors.inactive}/>
      </IconButton>
      <IconButton 
        onClick={handleSetDead}
      >
        <Skull color={playerObject.isDead? colors.active:colors.inactive}/>
      </IconButton>
      <IconButton onClick={handleSetNemesis}>
        <Eye color={playerObject?.isNemesis ? colors.active:colors.inactive} />
      </IconButton>
    </div>
  )
}

export default PlayerStates