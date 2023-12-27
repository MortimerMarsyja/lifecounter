import Button from "@components/Button"

interface Props {
  onAdd:()=>void;
  onDecrease:()=>void;
  onLifeClick?:()=>void;
  currentLife?:number;
  startingLife:number;
  isDead?:boolean;
}

const LifeControls = ({
  onAdd,
  onDecrease,
  onLifeClick,
  currentLife,
  startingLife,
  isDead,
}:Props) => {
  const handleCurrentLife = 
  (currentLife:number | undefined,
   startingLife:number) => {
    return currentLife ? currentLife : startingLife
  }
  
  return (
    <>
      <Button onClick={onAdd}>+</Button>
      <Button onClick={onLifeClick}>{
        currentLife === 0  || isDead ? '☠️' : handleCurrentLife(currentLife,startingLife)
      }</Button>
      <Button onClick={onDecrease}>-</Button>
    </>
  )
}

export default LifeControls