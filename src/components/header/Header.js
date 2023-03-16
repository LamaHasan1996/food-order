import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useState } from "react";
import { BiSun } from "react-icons/bi";
import { FiMoon, FiSettings } from "react-icons/fi";
import useStyles from "../../styles/components/header/header";
import Dialog from "../dialog/Dialog";
import { basicTheme } from "../../styles/theme";
import { createTheme } from "@mui/material/styles";
import { makeTheme } from "../../utils/globalFunctions";

export default function Header() {
  const [icon, setIcon] = useState(
    localStorage.getItem("theme") === "dark" ? "sun" : "moon"
  );
  const [open, setOpen] = useState(false);
  let materialLightTheme = createTheme(makeTheme(basicTheme));
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("currentTheme")
      ? JSON.parse(localStorage.getItem("currentTheme"))?.palette?.primary?.main
      : "#ff9752"
  );
  const [secondaryColor, setSecondaryColor] = useState(
    localStorage.getItem("currentTheme")
      ? JSON.parse(localStorage.getItem("currentTheme"))?.palette?.secondary
          ?.main
      : "#d7f4f4"
  );
  const newTheme = new Event("changeCurrentTheme");
  const headerClasses = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color?.hex);
    let theme = localStorage.getItem("currentTheme")
      ? JSON.parse(localStorage.getItem("currentTheme"))
      : null;
    localStorage?.setItem(
      "currentTheme",
      JSON.stringify(
        theme
          ? {
              ...theme,
              palette: { ...theme.palette, primary: { main: color?.hex } },
            }
          : {
              ...materialLightTheme,
              palette: {
                ...materialLightTheme.palette,
                primary: { main: color?.hex },
              },
            }
      )
    );
    window.dispatchEvent(newTheme);
  };

  const changeSecondaryColor = (color) => {
    setSecondaryColor(color?.hex);
    let theme = localStorage.getItem("currentTheme")
      ? JSON.parse(localStorage.getItem("currentTheme"))
      : null;
    localStorage?.setItem(
      "currentTheme",
      JSON.stringify(
        theme
          ? {
              ...theme,
              palette: { ...theme.palette, secondary: { main: color?.hex } },
            }
          : {
              ...materialLightTheme,
              palette: {
                ...materialLightTheme.palette,
                secondary: { main: color?.hex },
              },
            }
      )
    );
    window.dispatchEvent(newTheme);
  };

  return (
    <Box className={headerClasses.root}>
      <Container maxWidth="lg">
        <Link href="/home">
          <Typography className={headerClasses.brand}>Meal Mate</Typography>
        </Link>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography>Share us Your Food Journey!</Typography>
          <Button
            onClick={(e) => {
              const newEvent = new Event("theme");
              window.dispatchEvent(newEvent);
              let currentTheme = localStorage?.getItem("theme");
              if (!currentTheme || currentTheme === "light") {
                setIcon("sun");
                localStorage?.setItem("theme", "dark");
              } else if (currentTheme === "dark") {
                setIcon("moon");
                localStorage?.setItem("theme", "light");
              }
            }}
          >
            {icon === "sun" ? (
              <BiSun className={headerClasses.icon} />
            ) : (
              <FiMoon className={headerClasses.icon} />
            )}
          </Button>
          <Button onClick={(e) => setOpen(true)}>
            <FiSettings className={headerClasses.icon} />
          </Button>
        </Box>
      </Container>
      <Dialog
        open={open}
        handleClose={handleClose}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        changePrimaryColor={changePrimaryColor}
        changeSecondaryColor={changeSecondaryColor}
      />
    </Box>
  );
}
