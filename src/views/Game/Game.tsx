import PlayersLayout from "@components/PlayersLayout";
import useGameStore from "@store/useGameStore";
import { useEffect } from "react";

const vibrantColors = [
  '#99fa2e',
  '#2ec5fa',
  '#f92efa',
  '#fa2e2e',
  '#faa92e',
  '#2efa2e',
]

const Game = ():JSX.Element => {
  const {game} = useGameStore()
  const {setPlayerBg} = useGameStore()
  useEffect(() => {
    game.players.forEach((player, idx) => {
      setPlayerBg(player.id,vibrantColors[idx])
    }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {game.players.length ? 
        <PlayersLayout
          game={game}
        /> : 
        <>No players</>
      }
    </>
  )
}

export default Game


