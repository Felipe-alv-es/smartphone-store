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
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: "45%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt="Man avatar generic image"
                    sx={{ width: "100%", borderRadius: "32px" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ width: "40%", marginRight: "16px" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%", borderRadius: "32px" }}
                      />
                    </Box>
                    <Box sx={{ width: "40%" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%", borderRadius: "32px" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ width: "40%", marginRight: "16px" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%", borderRadius: "32px" }}
                      />
                    </Box>
                    <Box sx={{ width: "40%" }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt="Man avatar generic image"
                        sx={{ width: "100%", borderRadius: "32px" }}
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
