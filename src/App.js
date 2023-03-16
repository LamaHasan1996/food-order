import { CssBaseline, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { basicTheme, darkTheme } from "./styles/theme";
import { makeTheme } from "./utils/globalFunctions";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routing from "./Routing";

function App() {
  const materialLightTheme = createTheme(makeTheme(basicTheme));
  const materialDarkTheme = createTheme(makeTheme(darkTheme));
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [customTheme, setCustomTheme] = useState(
    localStorage.getItem("currentTheme")
      ? createTheme(JSON.parse(localStorage.getItem("currentTheme")))
      : materialLightTheme
  );

  useEffect(() => {
    const handleChangeTheme = () => {
      let newTheme = localStorage.getItem("theme");
      if (!newTheme || newTheme === "light") setDark(true);
      else setDark(false);
    };

    window.addEventListener("theme", handleChangeTheme);
    return () => {
      window.removeEventListener("theme", handleChangeTheme);
    };
  }, []);

  useEffect(() => {
    const handleChangeCurrentTheme = () => {
      let newTheme = JSON.parse(localStorage.getItem("currentTheme"));
      if (newTheme) setCustomTheme(createTheme(newTheme));
    };
    window.addEventListener("changeCurrentTheme", handleChangeCurrentTheme);
    return () => {
      window.removeEventListener(
        "changeCurrentTheme",
        handleChangeCurrentTheme
      );
    };
  }, []);

  return (
    <ThemeProvider
      theme={
        dark
          ? materialDarkTheme
          : customTheme
          ? customTheme
          : materialLightTheme
      }
    >
      <CssBaseline />
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "none",
          backgroundColor: dark ? "#0a1929" : "#fff",
        }}
      >
        <Suspense fallback={<h1></h1>}>
          <Header />
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
          <Footer />
        </Suspense>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
