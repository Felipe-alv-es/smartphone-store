import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import offersSlider from "../../assets/utils/offersSlider.tsx";
import {
  getContainerStyle,
  getPageTitleStyle,
  getContentStyle,
  getOfferTypeStyle,
} from "./Offers.styles.ts";

const Offers = () => {
  const [width, setWidth] = useState(window.innerWidth);

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
    pagination: isMobile ? true : false,
    breakpoints: {
      200: {},
      850: {},
      1200: {},
      1500: {},
      1750: {},
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
        <Swiper {...params}>
          {offersSlider.map((item) => (
            <SwiperSlide key={item.id} style={{ padding: "8px" }}>
              <Box sx={getContentStyle}>
                <Box component="img" alt={item.title} src={item.img} />
                <Typography variant="body1" sx={getOfferTypeStyle}>
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Offers;
