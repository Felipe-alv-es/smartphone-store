import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
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
    spaceBetween: "48px",
    onSwiper: setSwiper,
    pagination: isMobile ? true : false,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      850: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5, // loop não funciona com +4 slides, quebra o stilo
      },
      1750: {
        slidesPerView: 6,
      },
    },
    style: {
      margin: isMobile ? "0 24px 0 24px" : "0 36px 0 36px",
      background: "transparent",
    },
  };

  return (
    <Box sx={{ marginTop: "5em" }}>
      <Typography sx={getPageTitleStyle}>{"Produtos em destaque"}</Typography>
      <Box sx={getContainerStyle}>
        <IconButton onClick={swipePreviousPage} sx={getIconButtonStyle}>
          <BsChevronLeft />
        </IconButton>
        <Swiper {...params}>
          {productsSlider.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ padding: "32px", borderRadius: "16px" }}
            >
              <Box sx={getContentStyle}>
                <Box component="img" alt={item.title} src={item.img} />
                <Typography variant="body1" sx={getOfferTypeStyle}>
                  {item.title}
                </Typography>
                <Box sx={getChipContainerStyle}>
                  <FormControl>
                    <RadioGroup defaultValue={item.version1} row>
                      <FormControlLabel
                        value={item.version1}
                        control={<Radio checkedIcon={<BsChevronLeft />} />}
                        label={item.version1}
                      />
                      <FormControlLabel
                        value={item.version2}
                        control={<Radio />}
                        label={item.version2}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <StyledTypography>{item.value1}</StyledTypography>
                <StyledTypography>{item.value2}</StyledTypography>
                <StyledButton>Mais detalhes</StyledButton>
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

export default Featuredproducts;
