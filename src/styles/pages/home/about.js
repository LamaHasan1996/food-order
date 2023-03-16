import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    backgroundColor: theme?.palette?.secondary.main,
    "& *": {
      fontFamily: `${theme?.globals?.fontFamily?.en}!important`,
    },
  },
  contentContainer: {
    padding: "24px 0px",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: `${theme?.globals?.fontSize?.xl + 6}px`,
    fontWeight: theme?.globals?.fontWeight?.bold,
    color: theme?.palette?.black?.main,
  },
  description: {
    fontSize: `${theme?.globals?.fontSize?.md - 2}px`,
    color: theme?.palette?.black?.main,
  },
}));
export default useStyles;
