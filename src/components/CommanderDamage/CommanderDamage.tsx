import Button from "@components/Button";
import { useEffect } from "react";

interface Props {
  onAdd:()=>void;
  onSubtract:()=>void;
  currentDmg:number;
  on21Dmg:()=>void;
  isDead?:boolean;
}

const CommanderDamage = ({onAdd,onSubtract,currentDmg,on21Dmg,isDead}:Props) => {
  useEffect(() => {
    if (currentDmg === 21) {
      on21Dmg()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDmg])
  return (
    <div className="flex items-center justify-around w-full h-full relative">
        <Button className="w-full h-full hover:bg-sky-700" fh disabled={currentDmg === 0 || isDead} onClick={onSubtract}>-</Button>
          <span className="absolute">{currentDmg}</span>
        <Button className="w-full h-full hover:bg-sky-700" fh disabled={currentDmg === 21 || isDead} onClick={onAdd}>+</Button>
    </div>
  );
}

export default CommanderDamage