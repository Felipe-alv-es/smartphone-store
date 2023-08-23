import React from "react";
import { Box, Typography } from "@mui/material";
import { dealsOptions } from "../../assets/utils/dealsOptions.tsx";

const BestDeals = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "32px 72px 32px 72px",
      }}
    >
      {dealsOptions.map((item) => (
        <Box
          sx={{
            width: "100%",
            margin: "16px",
            borderRadius: "16px",
            background: "white",
          }}
        >
          <Box component="img" alt={item.title} src={item.image} />
          <Box>
            <Typography>{item.title}</Typography>
            <Typography>{item.text}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BestDeals;
