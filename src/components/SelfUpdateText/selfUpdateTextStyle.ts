import stylex from "@stylexjs/stylex";

const selfUpdateStyles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#ffffff",
    height: "auto",
    padding: 10,
    width: "100%",
    gap: 10,
    top:"0",
    zIndex: 15,
    position: "absolute",
  },
  text:{
    display: "flex",
    justifyContent: "space-between",
    width:"100%",
  }
});

export default selfUpdateStyles;
