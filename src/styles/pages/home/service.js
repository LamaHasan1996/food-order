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
    flexDirection: "row-reverse!important",
    [theme.breakpoints.down(770)]: {
      flexDirection: "column!important",
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
    fontSize: `${theme?.globals?.fontSize?.xl + 6}px!important`,
    fontWeight: `${theme?.globals?.fontWeight?.bold}!important`,
    marginBottom: "24px!important",
    color: theme?.palette?.black?.main,
  },
  description: {
    fontSize: `${theme?.globals?.fontSize?.md}px!important`,
    color: theme?.palette?.black?.main,
  },
  centeredData: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column!important",
  },
}));
export default useStyles;
