import stylex from "@stylexjs/stylex";

const playerSeatStyles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  topSeat:{
    rotate: "180deg",
  },
  rightSeat:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column-reverse',
    transform: 'rotate(-90deg) translateX(-100%)',
    transformOrigin: 'bottom left',
  },
  leftSeat:{
    rotate: "90deg",
  },
  bottomSeat:{
    transform: "rotate(0deg)",
  },
});

export default playerSeatStyles;