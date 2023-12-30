import stylex from "@stylexjs/stylex";

const lifeControlStyles = stylex.create({
  // grid 5 columns first and second item should use two columns
  main: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 20,
  },
  firstButton: {
    flex: 2,
  },
  secondButton: {
    flex: 1,
  },
  thirdButton: {
    flex: 2,
  },
});

export default lifeControlStyles;
