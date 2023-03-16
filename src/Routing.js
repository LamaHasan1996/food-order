import { lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const Restaurants = lazy(() => import("./pages/restaurants/Restaurant"));
const RestaurantDetails = lazy(() => import("./pages/restaurants/Details"));
function Routing() {
  return (
    <Routes>
      <Route path={`/`} element={<Navigate replace to="/home" />} />
      <Route path={`/home`} element={<Home />} />
      <Route path={`/restaurants`} element={<Restaurants />} />
      <Route path={`/restaurant/:alias`} element={<RestaurantDetails />} />
    </Routes>
  );
}

export default memo(Routing);
