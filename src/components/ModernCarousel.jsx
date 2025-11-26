import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ModernCarousel = ({ items, effect = "coverflow" }) => {
  return (
    <div className="w-full py-12">
      <Swiper
        effect={effect}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!w-[300px] md:!w-[400px]">
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ModernCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  effect: PropTypes.oneOf(["coverflow", "fade", "cube", "flip"]),
};

// Example usage
export const CarouselShowcase = () => {
  const projectItems = [
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping solution with payment integration",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather updates with beautiful UI",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <ModernCarousel items={projectItems} />
      </div>
    </section>
  );
};
