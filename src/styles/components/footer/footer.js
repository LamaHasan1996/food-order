import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: 95,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.globals.colors.white,
    "& *": {
      fontFamily: `${theme?.globals?.fontFamily?.en}!important`,
    },
  },
  coptRights: {
    fontSize: `${theme?.globals?.fontSize?.sm}px!important`,
  },
}));
export default useStyles;
