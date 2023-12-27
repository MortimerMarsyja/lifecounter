import stylex from "@stylexjs/stylex";

// rotate depending on the child number first up is 0 second is 90 third is 180 fourth is 270
const selfUpdateStyles = stylex.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    gap: 10,
    top:"-12px",
    zIndex: 15,
    position: "absolute",
  },
  text:{
    display: "flex",
    width:"100%",
  }
});

export default selfUpdateStyles;
