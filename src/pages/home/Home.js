import Slider from "./homeSlider/HomeSlider";
import Marketing from "./marketing/Marketing";
import Service from "../../components/home/service/Service";
import About from "./about/About";
import Restaurants from "./restaurants/Restaurants";
function Home() {
  return (
    <>
      <Slider />
      <Marketing />
      <Service />
      <Restaurants />
      <About />
    </>
  );
}
export default Home;
