import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import image1 from "../../../public/assets/Airway1.png"; 
import image2 from "../../../public/assets/DrCruz.png";
import image3 from "../../../public/assets/KNOSIS.png";
import image4 from "../../../public/assets/conspirelogo.png";

const sliderImages = [image1, image2, image3, image4];

const LogoSlider: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="logoslider_section !pt-[26px] !pb-[90px]">
      <div className="container mx-auto">
        <Slider {...settings}>
          {sliderImages.map((image, i) => (
            <div key={i} className="!flex justify-center">
              <img src={image} alt={`Logo ${i + 1}`} className="w-auto " />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
