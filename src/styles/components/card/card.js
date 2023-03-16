import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  link: {
    width: "100%",
    display: "block",
    [theme.breakpoints.down(600)]: {
      display: "flex",
      justifyContent: "center",
    },
    "&>:hover": {
      boxShadow: "0px 8px 0px #f5cfcf38",
    },
  },
  card: {
    maxWidth: 345,
    height: 335,
    cursor: "pointer",
    position: "relative",
    "& *": {
      fontFamily: `${theme?.globals?.fontFamily?.en}!important`,
    },
    "& .MuiCardContent-root": {
      backgroundColor: theme?.globals?.colors.offWhite,
    },
  },
  flag: {
    padding: "2px 10px",
    position: "absolute",
    fontSize: `${theme?.globals?.fontSize?.sm}px!important`,
    backdropFilter: "blur(4px)",
    backgroundColor: "#ffffff1a",
    height: 24,
  },
  openFlag: {
    right: 0,
  },
  title: {
    height: 28,
    fontSize: `${theme?.globals?.fontSize?.xl}px!important`,
    fontWeight: `${theme?.globals?.fontWeight?.bold}!important`,
    color: theme?.palette?.black?.main,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    width: "93%",
  },
  description: {
    height: 70,
    fontSize: `${theme?.globals?.fontSize?.md}px!important`,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3",
    color: `${theme?.palette?.black?.main}!important`,
  },
}));
export default useStyles;
