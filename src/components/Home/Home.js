import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Snackbar, Alert } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeSlider } from "../../assets/utils/homeSlider.tsx";
import { getImageStyle, getContainerStyle } from "./Home.styles.ts";

const Home = () => {
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
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: {
      delay: 15000,
    },
    loop: true,
  };

  return (
    <Box sx={getContainerStyle}>
      <Snackbar
        open
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginTop: "120px", position: "absolute" }}
      >
        <Alert variant="filled" severity="warning">
          Site em construção
        </Alert>
      </Snackbar>
      <Navbar />
      <Swiper
        {...params}
        style={{
          paddingTop: isMobile ? "56px" : "",
          marginTop: isMobile ? "" : "4px",
        }}
      >
        {homeSlider.map((item) => (
          <SwiperSlide key={item.id}>
            <Box>
              <Box
                component="img"
                alt={item.title}
                src={item.image}
                sx={getImageStyle}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Home;
