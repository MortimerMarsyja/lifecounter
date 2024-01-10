import Button from "@components/Button";
import lifeControlStyles from "./lifeControlStyles";
import stylex from "@stylexjs/stylex";

interface Props {
  onAdd: () => void;
  onDecrease: () => void;
  onLifeClick?: () => void;
  currentLife?: number;
  startingLife: number;
  isDead?: boolean;
}

const LifeControls = ({
  onAdd,
  onDecrease,
  onLifeClick,
  currentLife,
  startingLife,
  isDead,
}: Props) => {
  const handleCurrentLife = () => {
    if (isDead) return "💀";
    if (currentLife === startingLife) return startingLife;
    return currentLife;
  };
  return (
    <div {...stylex.props(lifeControlStyles.main)}>
      <Button
        {...stylex.props(lifeControlStyles.thirdButton)}
        fh
        onClick={onDecrease}
      >
        -
      </Button>
      <Button
        {...stylex.props(lifeControlStyles.secondButton)}
        onClick={onLifeClick}
      >
        {handleCurrentLife()}
      </Button>
      <Button
        {...stylex.props(lifeControlStyles.firstButton)}
        fh
        onClick={onAdd}
      >
        +
      </Button>
    </div>
  );
};

export default LifeControls;
