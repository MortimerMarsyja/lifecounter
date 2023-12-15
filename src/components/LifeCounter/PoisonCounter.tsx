import Button from "@components/Button";
import { useEffect } from "react";

interface PoisonCounterProps {
  currentPoison:number;
  onAdd:()=>void;
  onSubtract:()=>void;
  onTenPoison?:()=>void;
  isDead?:boolean;
}

const PoisonCounter = ({
  onAdd,
  onSubtract,
  currentPoison,
  onTenPoison,
  isDead
}:PoisonCounterProps) => {
  useEffect(() => {
    if (currentPoison === 10) {
      onTenPoison && onTenPoison()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPoison])

  return (
    <div className={`
    flex 
    bg-[#fff] 
    rounded-b-md 
    items-center 
    justify-around 
    w-full 
    max-w-md
    `}>
      <Button
        fh 
        className="w-full h-full" 
        onClick={onSubtract}
        disabled={currentPoison === 0 || isDead}
      >-</Button>
      <div className="flex direction-column justify-center">{currentPoison} 🤢</div>
      <Button 
        fh
        className="w-full h-full" 
        onClick={onAdd}
        disabled={currentPoison === 10 || isDead}
      >+</Button>
    </div>
  );
}

export default PoisonCounter