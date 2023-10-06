import React from "react";
import { Box, Paper, Typography } from "@mui/material";
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
                  display: "grid",
                  gridTemplateAreas: `'content1 content2 content3''content1 content4 content5'`,
                }}
              >
                <Paper
                  sx={{
                    height: "400px",
                    width: "400px",
                    background: "lightBlue",
                    gridArea: "content1",
                  }}
                >
                  Content1
                </Paper>
                <Paper
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: "lightGreen",
                    gridArea: "content2",
                  }}
                >
                  Content2
                </Paper>
                <Paper
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: "lightGreen",
                    gridArea: "content3",
                  }}
                >
                  Content3
                </Paper>
                <Paper
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: "lightGreen",
                    gridArea: "content4",
                  }}
                >
                  Content4
                </Paper>
                <Paper
                  sx={{
                    height: "200px",
                    width: "200px",
                    background: "lightGreen",
                    gridArea: "content5",
                  }}
                >
                  Content5
                </Paper>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default BestDeals;
