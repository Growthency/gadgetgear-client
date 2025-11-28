"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Typewriter, Cursor } from "react-simple-typewriter"; 


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop",
      title: "Upgrade Your Tech Life",
      subtitle:
        "Discover the latest gadgets and accessories at unbeatable prices. Quality tech for quality living.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      title: "Experience True Sound",
      subtitle:
        "Premium headphones and audio gear for the ultimate listening experience. Hear the difference.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
      title: "Smart Tech, Smart You",
      subtitle:
        "Wearable technology that keeps you connected and healthy. Smartwatches, bands, and more.",
    },
  ];

  return (
    <div className="hero-slider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero min-h-[80vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hero-overlay bg-black bg-opacity-70"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                  <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-md h-24">
                    <span className="text-primary">
             
                      <Typewriter
                        words={[slide.title]}
                        loop={1} 
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                

                  <p className="mb-8 text-gray-200 drop-shadow-sm text-lg">
                    {slide.subtitle}
                  </p>

                  <Link
                    href="/products"
                    className="btn btn-primary border-none text-white px-8 text-lg hover:scale-105 transition-transform"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
