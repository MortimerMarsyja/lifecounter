import IconButton from "@components/IconButton"
import useGameContext from "@contexts/GameContext/gameContext"
import Ascend from "@icons/Ascend"
import Crown from "@icons/Crown"
import Eye from "@icons/Eye"
import Icosahedron from "@icons/Icosahedron"
import Skull from "@icons/Skull"
import { iPlayer } from "src/typings/Player"

interface Props {
  playerObject: iPlayer
}

const PlayerStates = ({ playerObject }:Props) => {
  const {
    setDead,
    setAscended,
    setMonarch,
    setInitiative,
    setNemesis,
  } = useGameContext()

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
    <div className="flex gap-3 absolute top-3 left-1/2 -translate-x-1/2 z-10">
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