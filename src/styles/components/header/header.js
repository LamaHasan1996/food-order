import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme?.palette?.primary.main,
    height: 95,
    color: theme?.globals?.colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #fff",
    "& .MuiButton-root": {
      "& :hover": {
        background: "none",
      },
    },
    "& *": {
      fontFamily: `${theme?.globals?.fontFamily?.en}!important`,
    },
    "& .MuiContainer-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down(450)]: {
        display: "block",
      },
    },
  },
  brand: {
    fontSize: `${theme?.globals?.fontSize?.xl + 8}px!important`,
    color: `${theme?.globals?.colors.white}!important`,
  },
  icon: {
    border: `1px solid ${theme?.globals?.colors.white}`,
    fontSize: `${theme?.globals?.fontSize?.xl + 10}px!important`,
    padding: 8,
    borderRadius: 6,
    color: `${theme?.globals?.colors.white}!important`,
  },
}));
export default useStyles;
