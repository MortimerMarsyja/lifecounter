import useGameStore from "@store/useGameStore";

interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout = ({ children }: CenteredLayoutProps): JSX.Element => {
  const { game } = useGameStore();
  const bg = () => {
    console.log(game.dayNight, "tell me the truth");
    if (game.dayNight === "day") return "#ffffff";
    return "#000000";
  };
  return (
    <div
      className={`flex flex-wrap w-full items-center justify-center h-full bg-[${bg()}]`}
    >
      {children}
    </div>
  );
};

export default CenteredLayout;
