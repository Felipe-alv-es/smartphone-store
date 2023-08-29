import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  getContainerStyle,
  StyledTypography,
  getButtonStyle,
  getTitleStyle,
  getContentStyle,
} from "./News.styles.tsx";

const News = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box sx={getContentStyle}>
        <Typography sx={getTitleStyle}>FM News!</Typography>
        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
          Receba nossas ofertas
        </Typography>
      </Box>
      <StyledTypography placeholder="Qual o seu nome ?" />
      <StyledTypography placeholder="Seu Email ?" />
      <Box sx={{ m: 1 }} />
      <Button variant="contained" size="large" sx={getButtonStyle}>
        Participe Já
      </Button>
    </Box>
  );
};

export default News;
