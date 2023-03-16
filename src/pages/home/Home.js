import Slider from "../../components/home/homeSlider/HomeSlider";
import Marketing from "../../components/home/marketing/Marketing";
import Service from "../../components/home/service/Service";
import About from "../../components/home/about/About";
import Restaurants from "../../components/home/restaurants/Restaurants";
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
