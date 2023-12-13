import Button from "@components/Button"
import useGameContext from "@contexts/GameContext/gameContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const {updateNumberOfPlayers} = useGameContext()
  useEffect(() => {
    updateNumberOfPlayers(4)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const navigateToGame = () => {
    navigate("/game");
  };
  return (
    <>
      <div className="card shadow-sm">
        <Button onClick={navigateToGame}>
          Start
        </Button>
      </div>
    </>
  )
}

export default Home
