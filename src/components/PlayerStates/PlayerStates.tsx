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
    {... stylex.props(
      playerStateStyle.main
    )}
    >
      <IconButton 
        onClick={handleSetMonarch}>
        <Crown color={playerObject.isMonarch? '#0066cc': '#6e6e73'}/>
      </IconButton>
      <IconButton 
        onClick={handleSetAscended}
      >
        <Ascend color={playerObject.isAscended? '#0066cc': '#6e6e73'}/>
      </IconButton>
      <IconButton 
        onClick={handleSetInitiative}
      >
        <Icosahedron color={playerObject.hasInitiative? '#0066cc': '#6e6e73'}/>
      </IconButton>
      <IconButton 
        onClick={handleSetDead}
      >
        <Skull color={playerObject.isDead? '#0066cc': '#6e6e73'}/>
      </IconButton>
      <IconButton onClick={handleSetNemesis}>
        <Eye color={playerObject?.isNemesis ? '#0066cc' : '#6e6e73'} />
      </IconButton>
    </div>
  )
}

export default PlayerStates