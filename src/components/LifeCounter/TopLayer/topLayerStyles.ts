import stylex from "@stylexjs/stylex";

// rotate depending on the child number first up is 0 second is 90 third is 180 fourth is 270
const topLayerStyles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    gap: 10,
    paddingTop: 20,
    zIndex: 15,
    position: "absolute",
  },
  leftSeat:{
    transform: "rotate(90deg)",
  },
  rightSeat:{
    transform: "rotate(270deg)",
  },
  bottomSeat:{
    transform: "rotate(180deg)",
    background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
  },
  topSeat:{
    transform: "rotate(0deg)",
  },
});

export default topLayerStyles;
