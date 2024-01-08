import React from "react";
import { useNavigate } from "react-router-dom";
import useGameStore from "@store/useGameStore";

const Home = () => {
  const navigate = useNavigate();
  const {game, populatePlayers,setStartingLifeTotal} = useGameStore()
  const [isCommanderGame, setIsCommanderGame] = React.useState(true);
  const navigateToGame = () => {
    navigate("/game");
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    const formNumberOfPlayers = parseInt((document.getElementById('numberOfPlayers') as HTMLInputElement).value)
    const formLifeTotal = parseInt((document.getElementById('lifeTotal') as HTMLInputElement).value)
    populatePlayers(formNumberOfPlayers || 4,isCommanderGame,formLifeTotal || 40) // remove formCommander
    setStartingLifeTotal(formLifeTotal || 40)
    navigateToGame()
    e.preventDefault()
  }

  return (
    <>
      <div className="
      p-4 
      flex 
      items-center 
      flex-wrap 
      bg-[#cecece] 
      rounded-full 
      sm:rounded-md 
      ">
        <form className="flex gap-3 flex-wrap" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="flex gap-3 flex-wrap">
              <label htmlFor="numberOfPlayers" className="form-label">
                Number of players
              </label>
              <input
                type="number"
                className="form-control w-12"
                id="numberOfPlayers"
                placeholder={game.numberOfPlayers.toString()}
              />
              <label htmlFor="lifeTotal" className="form-label">
                Starting life total</label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="lifeTotal"
              >
                <option value="40">40</option>
                <option value="20">20</option>
              </select>
              <label htmlFor="commander" className="form-label">
                Commander</label>
              <input
                type="checkbox"
                onChange={() => setIsCommanderGame(!isCommanderGame)}
                checked={isCommanderGame}
                className="form-control"
                id="commander"
                placeholder={game.startingLifeTotal.toString()}
              />
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-secondary"
              type="submit"
             >
              Start
            </button>
          </div>
        </form>
      </div>
    </>
  )
};


export default Home;