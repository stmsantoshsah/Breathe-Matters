import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Sample Testimonials Data
const testimonials = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    title: "Entrepreneur",
    description:
      "I thought I knew how to breathe—until I used the CapnoTrainer® GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    title: "Entrepreneur",
    description:
      "Using the CapnoTrainer® GO transformed my stress levels. It helped me regain control over my breathing and my life. Highly recommended!",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Michael Brown",
    title: "Entrepreneur",
    description:
      "I've seen a drastic improvement in my sleep quality and focus. The CapnoTrainer® GO is a game-changer!",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Emily Davis",
    title: "Entrepreneur",
    description:
      "Never thought breathing could impact my performance so much! The CapnoTrainer® GO made me realize what I was missing.",
  },
];

const TestimonialSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#E6F2F2] !mt-[180px] !pt-8 !pb-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Real Success Stories
        </h2>
        <Slider {...settings} className="px-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="rounded-lg p-6 flex flex-col items-center text-center border-1 border-primary bg-white rounded-[10px]">
                <p className="text-primary mb-4 bg-[#E6F2F2] rounded-[10px] !p-5 text-left" style={{ boxShadow: "0px 1px 3px 0px #0000001A" }}>

                  "{testimonial.description}"
                </p>
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-3"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
