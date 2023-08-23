import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { dealsOptions } from "../../assets/utils/dealsOptions.tsx";
import { StyledButton } from "../FeaturedProducts/Featuredproducts.styles.tsx";

const BestDeals = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "48px 72px 32px 72px",
      }}
    >
      {dealsOptions.map((item) => (
        <Paper
          sx={{
            width: "100%",
            margin: "16px",
            borderRadius: "16px",
            padding: "16px",
            display: "grid",
            placeItems: "center",
          }}
          elevation={0}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box component="img" alt={item.title} src={item.image} />
          </Box>
          <Box
            sx={{
              padding: " 0 32px 0 32px",
              margin: "16px 0 16px 0",
            }}
          >
            <Typography
              sx={{
                typography: "h5",
                fontWeight: "bold",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ marginBottom: "32px", whiteSpace: "pre-line" }}>
              {item.text}
            </Typography>
            <StyledButton>Participe Já</StyledButton>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default BestDeals;
