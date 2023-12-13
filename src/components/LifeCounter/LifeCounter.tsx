import Button from "@components/Button";
import { useEffect, useState } from "react";
import MenuCounter from "./MenuCounter";
import  useGameContext  from "@contexts/GameContext/gameContext";
import { UUID } from "crypto";

interface LifeCounterProps {
  startingLife?: number;
  currentLife?: number;
  id: UUID;
}

const LifeCounter = ({startingLife = 40,currentLife,id}:LifeCounterProps):JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {updateLifeTotal,game,setDead} = useGameContext()
  const handleClose = () => {
    setMenuOpen(false)
  }
  const toggleMenu = () => {
    setMenuOpen((menuOpen)=>!menuOpen)
  }
  const playerObject = game.players.find((player=>player.id === id))

  useEffect(() => {
    if (currentLife === 0) {
      setDead(id)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentLife, id])

  return (
    <>
    {menuOpen && playerObject && (
      <MenuCounter playerObject={playerObject} handleClose={handleClose}/>
    )}
    <div className="flex rounded items-center w-full h-full justify-center bg-[#cecece]">
      <Button 
        disabled={game.players.find((player)=>player.id === id)?.isDead}
        className="w-full h-full" 
        onClick={()=>{
          updateLifeTotal((currentLife || startingLife) -1,id)
        }}
      >-</Button>
      <Button
      onClick={toggleMenu} 
      className="relative">
        {currentLife === 0 || game.players.find((player)=>player.id === id)?.isDead ? "💀" : currentLife}
      </Button> 
      <Button 
        disabled={game.players.find((player)=>player.id === id)?.isDead}
        className="w-full h-full" 
        onClick={()=>{
          updateLifeTotal((currentLife || startingLife) +1,id)
        }}
      >+</Button>
    </div>
    </>
  )
}

export default LifeCounter