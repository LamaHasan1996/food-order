import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    flex: "1 1 auto",
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
    color: theme.palette.black.main,
    marginBottom: 24,
  },
  description: {
    fontSize: `${theme?.globals?.fontSize?.md - 2}px`,
    color: theme.palette.black.main,
  },
  btn: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "8px 24px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: theme?.globals?.fontSize?.md,
    color: theme.palette.primary.main,
    backgroundColor: theme.globals.colors.white,
  },
  btnBox: {
    justifyContent: "end",
    display: "flex",
    marginTop: 16,
    "& .MuiLink-root:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.globals.colors.white,
    },
  },
  mb40: {
    marginBottom: 40,
  },
  mb24: {
    marginBottom: 24,
  },
  mb8: {
    marginBottom: 8,
  },
  noDataText: {
    fontSize: theme?.globals?.fontSize?.xl,
    textAlign: "center",
    color: theme.palette.black.main,
  },
  mealBox: {
    borderTop: `1px solid ${theme.palette.gray.light}`,
    marginTop: 8,
    marginBottom: 8,
    padding: "8px 24px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 2px 16px 0 rgb(0 0 0 / 8%)",
    },
  },
  mealTitleBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    [theme.breakpoints.down(600)]: {
      display: "block",
    },
  },
  mealTitle: {
    fontSize: theme?.globals?.fontSize?.md,
    color: theme.palette.black.main,
  },
  mealDescription: {
    fontSize: theme?.globals?.fontSize?.md - 2,
    color: theme.palette.gray.main,
  },
  circle: {
    backgroundColor: theme.palette.green.main,
    height: 15,
    width: 15,
    borderRadius: 16,
    marginRight: 8,
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
}));
export default useStyles;
