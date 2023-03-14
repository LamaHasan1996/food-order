import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Box } from "@mui/material";
import useStyles from "../../styles/components/slider/slider";

export default function SpecificSlider(props) {
  let { data } = props;
  const sliderClasses = useStyles();
  console.log("slliderrrrrrrrrr");
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Box className={sliderClasses.sliderContainer}>
      {" "}
      <Slider {...settings}>
        {data?.map((item) => (
          <img src={item?.src} alt={item?.alt} />
        ))}
      </Slider>
    </Box>
  );
}
