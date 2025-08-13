import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const features = [
  {
    icon: "👨‍💼",
    title: "Real job environment simulation",
    description: "Immersive practice for real-world readiness.",
  },
  {
    icon: "📝",
    title: "Hands-on projects",
    description: "Practical assignments for skill application and mastery.",
  },
  {
    icon: "🏅",
    title: "Certification",
    description: "Industry-recognized credentials upon completion.",
  },
  {
    icon: "💬",
    title: "Personalized feedback",
    description: "Tailored guidance from mentors for individual growth.",
  },
  {
    icon: "💬",
    title: "Personalized feedback",
    description: "Tailored guidance from mentors for individual growth.",
  },
  {
    icon: "💬",
    title: "Personalized feedback",
    description: "Tailored guidance from mentors for individual growth.",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[#f4f0f5] py-16 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-yellow-400 rounded-3xl shadow-lg p-4 text-center flex flex-col items-center h-full min-h-[200px]">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#f4f0f5]">{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets outside */}
      <div className="custom-swiper-pagination mt-6 flex justify-center"></div>
    </section>
  );
};

export default FeatureCards;
