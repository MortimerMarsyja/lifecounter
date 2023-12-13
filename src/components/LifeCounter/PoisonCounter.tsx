import { useState } from "react";


const PoisonCounter = () => {
  const [poison, setPoison] = useState(0);
  return (
    <div className={`flex items-center justify-around w-full`}>
      <button onClick={() => setPoison(poison - 1)}>-</button>
      <div>{poison}"🤢"</div>
      <button onClick={() => setPoison(poison + 1)}>+</button>
    </div>
  );
}

export default PoisonCounter