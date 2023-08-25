import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { dealsOptions } from "../../assets/utils/dealsOptions.tsx";
import { StyledButton } from "../FeaturedProducts/Featuredproducts.styles.tsx";
import {
  getPageTitleStyle,
  getContainerStyle,
  getOptionsStyle,
  getContentStyle,
  getTitleStyle,
  getTextStyle,
} from "./BestDeals.styles.ts";

const BestDeals = () => {
  return (
    <>
      <Typography sx={getPageTitleStyle}>{"Melhores Promoções"}</Typography>
      <Box sx={getContainerStyle}>
        {dealsOptions.map((item) => (
          <Paper sx={getOptionsStyle}>
            <Box
              sx={{
                "> *": {
                  maxWidth: "100%",
                },
              }}
            >
              <Box component="img" alt={item.title} src={item.image} />
            </Box>
            <Box sx={getContentStyle}>
              <Typography sx={getTitleStyle}>{item.title}</Typography>
              <Typography sx={getTextStyle}>{item.text}</Typography>
              <StyledButton>Participe Já</StyledButton>
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default BestDeals;
