import stylex from "@stylexjs/stylex";

const selfUpdateStyles = stylex.create({
  main: {
    color: "#ffffff",
    padding: 10,
    top: 0,
    width: "auto",
    display: "flex",
    alignItems: "center",
    zIndex: 15,
    position: "absolute",
  },
  text:{
    display: "flex",
    justifyContent: "space-between",
    width:"auto",
  }
});

export default selfUpdateStyles;
