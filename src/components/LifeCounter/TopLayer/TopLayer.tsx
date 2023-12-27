import PlayerStates from "@components/PlayerStates";
import SelfUpdateText from "@components/SelfUpdateText";
import { iPlayer } from "src/typings/Player";

interface Props {
  initialUserName:string;
  onUpdateName:(payload:string)=>void;
  placeholder:string;
  playerObject:iPlayer;
}

const TopLayer = ({
  initialUserName,
  onUpdateName,
  playerObject,
}:Props) => {
  if(!playerObject) return 
  return (
    <div className="top-layer">
      <SelfUpdateText
        initialVal={initialUserName}
        onUpdate={onUpdateName}
      />
      <PlayerStates
        playerObject={playerObject}
      />
    </div>
  );
}

export default TopLayer;