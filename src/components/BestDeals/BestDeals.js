import React from "react";
import { Box, Typography } from "@mui/material";
import { dealsOptions } from "../../assets/utils/dealsOptions.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPageTitleStyle, getContainerStyle } from "./BestDeals.styles.ts";

const BestDeals = () => {
  return (
    <>
      <Typography sx={getPageTitleStyle}>{"Melhores Promoções"}</Typography>
      <Box sx={getContainerStyle}>
        <Swiper>
          {dealsOptions.map((item) => (
            <SwiperSlide>
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ width: "100%", background: "lightGreen" }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt="Man avatar generic image"
                    sx={{ width: "100%" }}
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      background: "lightBlue",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ width: "25%" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%" }}
                      />
                    </Box>
                    <Box sx={{ width: "25%" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      background: "purple",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ width: "25%" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%" }}
                      />
                    </Box>
                    <Box sx={{ width: "25%" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default BestDeals;
