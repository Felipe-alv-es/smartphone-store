import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  getContainerStyle,
  StyledTypography,
  getButtonStyle,
} from "./News.styles.tsx";

const News = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box sx={{ marginRight: "16px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          FM News!
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
          Receba nossas ofertas
        </Typography>
      </Box>
      <StyledTypography placeholder="Qual o seu nome ?" />
      <StyledTypography placeholder="Seu Email ?" />
      <Button variant="contained" size="large" sx={getButtonStyle}>
        Participe Já
      </Button>
    </Box>
  );
};

export default News;
