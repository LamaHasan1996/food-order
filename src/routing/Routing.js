import { CssBaseline, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { default as React, lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { basicTheme } from "../styles/theme";
import { makeTheme } from "../utils/globalFunctions";
const Header = lazy(() => import("../components/header/Header"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Home = lazy(() => import("../pages/home/Home"));
const Restaurants = lazy(() => import("../pages/restaurants/Restaurant"));
const RestaurantDetails = lazy(() => import("../pages/restaurants/Details"));
function Routing() {
  const theme = makeTheme(basicTheme);
  console.log(theme, "themeeeeeeeeeeee");
  const materialTheme = createTheme(theme);

  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "none",
        }}
      >
        <Suspense fallback={<h1></h1>}>
          <Header />
          <Routes>
            <Route path={`/`} element={<Navigate replace to="/home" />} />
            <Route path={`/home`} element={<Home />} />
            <Route path={`/restaurants`} element={<Restaurants />} />
            <Route
              path={`/restaurant/:alias`}
              element={<RestaurantDetails />}
            />
          </Routes>
          <Footer />
        </Suspense>
      </Paper>
    </ThemeProvider>
  );
}

export default memo(Routing);
