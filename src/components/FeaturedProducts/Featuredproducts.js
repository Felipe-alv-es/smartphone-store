import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import productsSlider from "../../assets/utils/productsSlider.tsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  getContainerStyle,
  getPageTitleStyle,
  getContentStyle,
  getOfferTypeStyle,
  getIconButtonStyle,
  getChipContainerStyle,
  StyledTypography,
  StyledButton,
  getRadiogroupStyle,
} from "./Featuredproducts.styles.tsx";

const Featuredproducts = () => {
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
    spaceBetween: "32px",
    onSwiper: setSwiper,
    breakpoints: {
      200: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,
      },
      1750: {
        slidesPerView: 5,
      },
    },
    style: {
      margin: isMobile ? "0 0 0 0" : "0 36px 0 36px",
      background: "transparent",
    },
  };

  return (
    <Box sx={{ marginTop: "5em" }}>
      <Typography sx={getPageTitleStyle}>{"Produtos em destaque"}</Typography>
      <Box sx={getContainerStyle}>
        {isMobile ? null : (
          <IconButton onClick={swipePreviousPage} sx={getIconButtonStyle}>
            <BsChevronLeft />
          </IconButton>
        )}

        <Swiper {...params}>
          {productsSlider.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{
                background: "transparent",
                padding: "1px",
                borderRadius: "16px",
              }}
            >
              <Paper sx={getContentStyle}>
                <Box
                  component="img"
                  alt={item.title}
                  src={item.img}
                  sx={{ gridArea: "image", marginRight: "16px" }}
                />
                <Box
                  sx={{
                    gridArea: "content",
                  }}
                >
                  <Typography variant="body1" sx={getOfferTypeStyle}>
                    {item.title}
                  </Typography>
                  <FormControl sx={getChipContainerStyle}>
                    <RadioGroup
                      defaultValue={item.version1}
                      sx={getRadiogroupStyle}
                      row
                    >
                      <FormControlLabel
                        value={item.version1}
                        control={<Radio sx={{ display: "none" }} />}
                        label={item.version1}
                      />
                      <FormControlLabel
                        value={item.version2}
                        control={<Radio sx={{ display: "none" }} />}
                        label={item.version2}
                      />
                    </RadioGroup>
                  </FormControl>
                  <StyledTypography>{item.value1}</StyledTypography>
                  <StyledTypography>{item.value2}</StyledTypography>
                </Box>
                <StyledButton gridArea="button"> Mais detalhes</StyledButton>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
        {isMobile ? null : (
          <IconButton onClick={swipeNextPage} sx={getIconButtonStyle}>
            <BsChevronRight />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Featuredproducts;
