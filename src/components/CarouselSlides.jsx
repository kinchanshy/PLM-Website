import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, ActionIcon, Image } from "@mantine/core";
import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";

function CarouselSlides({ slides }) {
  // This is for the Hover function where the buttons are shown when hovered
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  // This is for the prev and next buttons
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
  };

  // prev button
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // next button
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // This is for the effect where the prev button is disabled for the first and next button for the last page
  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setIsFirstSlide(swiperRef.current.isBeginning);
        setIsLastSlide(swiperRef.current.isEnd);
      }
    };

    // To check the current is the first or last slide
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", handleSlideChange);
      }
    };
  }, []);

  return (
    // Main Carousel
    <>
      {/* Main container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        // To let the system know if the carousel is being hovered or not
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The previous button */}
        <ActionIcon
          style={{
            color: isFirstSlide ? "#ccc" : "#a31920",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          variant="light"
          size="lg"
          radius="lg"
          onClick={goToPrevSlide}
          disabled={isFirstSlide}
        >
          <IconCircleArrowLeftFilled size="2rem" />
        </ActionIcon>

        {/* The slideshow component that is imported from SwiperJS */}
        <Swiper
          onSwiper={handleSwiper}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          dynamicslides="true"
          pagination={{ dynamicBullets: true }}
          slidesPerView={2}
          spaceBetween={10}
          //   className="mySwiper"
        >
          {slides.map((content, index) => (
            <SwiperSlide key={index}>
              <Container style={{ marginBottom: "5rem" }}>
                <Image src={content.url} />
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* The next button */}
        <ActionIcon
          style={{
            color: isLastSlide ? "#ccc" : "#a31920",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          variant="light"
          size="lg"
          radius="lg"
          onClick={goToNextSlide}
          disabled={isLastSlide}
        >
          <IconCircleArrowRightFilled size="2rem" />
        </ActionIcon>
      </div>
    </>
  );
}

export default CarouselSlides;
