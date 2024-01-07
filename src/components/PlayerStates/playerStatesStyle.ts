import stylex from "@stylexjs/stylex";

const playerStateStyle = stylex.create({
  main: {
    display: "flex",
    width: "100%",
    padding: 10,
    gap: 10,
    bottom:0,
    zIndex: 15,
    position: "absolute",
  },
});

export default playerStateStyle;
