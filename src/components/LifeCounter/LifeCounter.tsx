import Button from "@components/Button";
import { useEffect, useState } from "react";
import MenuCounter from "./MenuCounter";
import useGameContext from "@contexts/GameContext/gameContext";
import { UUID } from "crypto";
import IconButton from "@components/IconButton";
import PlayerStates from "@components/PlayerStates";

interface LifeCounterProps {
  startingLife?: number;
  currentLife?: number;
  id: UUID;
}

const LifeCounter = ({ startingLife = 40, currentLife, id }: LifeCounterProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { updateLifeTotal, game, setDead } = useGameContext()
  const handleClose = () => {
    setMenuOpen(false)
  }
  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen)
  }
  const playerObject = game.players.find((player => player.id === id))

  useEffect(() => {
    if (currentLife === 0) {
      setDead(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLife, id])

  return (
    <>
      {menuOpen && playerObject && (
        <MenuCounter playerObject={playerObject} handleClose={handleClose} />
      )}
      <div className="
        flex 
        items-center 
        w-full 
        h-full 
        justify-center 
      relative">
        {playerObject && <PlayerStates playerObject={playerObject} />}
        <Button
          disabled={game.players.find((player) => player.id === id)?.isDead}
          className="w-full h-full hover:bg-sky-700	transition-all ease-in-out duration-500"
          onClick={() => {
            updateLifeTotal((currentLife || startingLife) - 1, id)
          }}
        >-</Button>
        <IconButton
          onClick={toggleMenu}
          className="absolute">
          <p>{currentLife === 0 || game.players.find((player) => player.id === id)?.isDead ? "💀" : currentLife}</p>
        </IconButton>
        <Button
          disabled={game.players.find((player) => player.id === id)?.isDead}
          className="w-full h-full hover:bg-sky-700	transition-all ease-in-out duration-500"
          onClick={() => {
            updateLifeTotal((currentLife || startingLife) + 1, id)
          }}
        >+</Button>
      </div>
    </>
  )
}

export default LifeCounter