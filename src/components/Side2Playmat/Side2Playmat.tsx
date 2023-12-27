import PlayerPlaymat from "@components/PlayerPlaymat/PlayerPlaymat"
import { iPlayer } from "src/typings/Player";

type Orientation = 'vertical' | 'horizontal'

interface Props {
  playerObject: iPlayer;
  startingLife: number;
  orientation: Orientation
  background?: string;
}

const Side2Playmat = ({
  orientation,
  background='#fff', 
}:Props) => {
  return(
    <PlayerPlaymat
      rowSpan={orientation === 'vertical' ? 2 : 1}
      colSpan={orientation === 'vertical' ? 1 : 2}
      background={background}
    />
  )
}

export default Side2Playmat