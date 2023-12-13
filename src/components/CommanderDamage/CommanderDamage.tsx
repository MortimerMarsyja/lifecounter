import Button from "@components/Button";
import { useEffect } from "react";

interface Props {
  onAdd:()=>void;
  onSubtract:()=>void;
  currentDmg:number;
  on21Dmg:()=>void;
}

const CommanderDamage = ({onAdd,onSubtract,currentDmg,on21Dmg}:Props) => {
  useEffect(() => {
    if (currentDmg === 21) {
      on21Dmg()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDmg])
  return (
    <div className="flex items-center justify-around w-full h-full">
        <Button fh disabled={currentDmg === 0} onClick={onSubtract}>-</Button>
          <span>{currentDmg}</span>
        <Button fh disabled={currentDmg === 21} onClick={onAdd}>+</Button>
    </div>
  );
}

export default CommanderDamage