import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import offersSlider from "../../assets/utils/offersSlider.tsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  getContainerStyle,
  getPageTitleStyle,
  getContentStyle,
  getOfferTypeStyle,
  getIconButtonStyle,
} from "./Offers.styles.ts";

const Offers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [swiper, setSwiper] = useState();
  const swipeNextPage = () => swiper.slideNext();
  const swipePreviousPage = () => swiper.slidePrev();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const params = {
    slidesPerView: "5",
    spaceBetween: "48px",
    onSwiper: setSwiper,
    pagination: isMobile ? true : false,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      850: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
      1750: {
        slidesPerView: 7,
      },
    },
    style: {
      margin: isMobile ? "0 24px 0 24px" : "0 36px 0 36px",
      background: "transparent",
    },
  };

  return (
    <Box>
      <Typography sx={getPageTitleStyle}>{"Conheça nossas ofertas"}</Typography>
      <Box sx={getContainerStyle}>
        <IconButton onClick={swipePreviousPage} sx={getIconButtonStyle}>
          <BsChevronLeft />
        </IconButton>
        <Swiper {...params}>
          {offersSlider.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                padding: "16px",
              }}
            >
              <Box sx={getContentStyle}>
                <Box component="img" alt={item.title} src={item.img} />
                <Typography variant="body1" sx={getOfferTypeStyle}>
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton onClick={swipeNextPage} sx={getIconButtonStyle}>
          <BsChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Offers;
