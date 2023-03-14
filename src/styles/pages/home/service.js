import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    marginBottom: "40px",
    "& *": {
      fontFamily: `${theme?.globals?.fontFamily?.en}!important`,
    },
  },
  contentContainer: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down(770)]: {
      flexDirection: "column",
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  imgContainer: {
    width: 400,
    height: 400,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down(600)]: {
      width: 355,
      height: 260,
    },
    [theme.breakpoints.down(400)]: {
      width: 315,
      height: 260,
    },
  },
  title: {
    fontSize: `${theme?.globals?.fontSize?.xl + 6}px`,
    fontWeight: theme?.globals?.fontWeight?.bold,
    marginBottom: 24,
    color: theme.palette.black.main,
  },
  description: {
    fontSize: theme?.globals?.fontSize?.md,
    color: theme.palette.black.main,
  },
  centeredData: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
}));
export default useStyles;
