import stylex from "@stylexjs/stylex";

const playerStateStyle = stylex.create({
  main: {
    display: "flex",
    width: "60px",
    height: "120px",
    padding: 10,
    gap: 10,
    top:"60px",
    zIndex: 15,
    position: "absolute",
  },
});

export default playerStateStyle;
