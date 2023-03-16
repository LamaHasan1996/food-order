import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& *": {
      fontFamily: `${theme?.globals?.fontFamily?.en}!important`,
      textAlign: "center",
    },
  },
  icon: {
    height: 90,
    width: 90,
    "& img": {
      maxWidth: "100%",
    },
  },
  title: {
    fontSize: `${theme?.globals?.fontSize.md}px!important`,
    fontWeight: `${theme?.globals?.fontWeight.bold}!important`,
    color: theme?.palette?.black?.main,
    height: 50,
  },
  description: {
    color: theme?.palette?.gray?.main,
  },
}));
export default useStyles;
