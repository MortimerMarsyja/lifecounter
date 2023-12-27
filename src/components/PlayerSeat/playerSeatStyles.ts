import stylex from "@stylexjs/stylex";

const playerSeatStyles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  topSeat:{
    transform: "rotate(180deg)",
  },
  rightSeat:{
    transform: "rotate(270deg)",
  },
  leftSeat:{
    transform: "rotate(90deg)",
  },
  bottomSeat:{
    transform: "rotate(0deg)",
  },
});

export default playerSeatStyles;