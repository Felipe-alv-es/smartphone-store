import React from "react";
import { Button, Typography } from "@mui/material";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
  alignItems: "center",
  ".swiper-slide": {
    background: "#D9D9D9",
    borderRadius: "8px",
    cursor: "pointer",
  },
  "@media(max-width: 544px)": {
    padding: "0px 4px 0px 16px",
  },
});

export const getPageTitleStyle = () => ({
  typography: "h4",
  fontWeight: "bold",
  margin: "32px 0px 16px 0px",
  whiteSpace: "pre-line",
  textAlign: "center",
});

export const getContentStyle = () => ({
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateAreas: `'image''content''button'`,
  placeItems: "center stretch",
  padding: "32px",
  borderRadius: "16px",
  "> *": {
    maxWidth: "100%",
  },
  "@media(max-width: 544px)": {
    padding: "16px",
    gridTemplateAreas: `'image content''image button'`,
  },
});

export const getOfferTypeStyle = () => ({
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "16px",
});

export const getIconButtonStyle = () => ({
  background: "#E6E6E6",
  borderRadius: "32px",
  height: "fit-content",
});

export const getChipContainerStyle = () => ({
  margin: "16px 0 32px 0",
  width: "100%",
  placeItems: "center",
  translate: "8px 0px",
});

export const getRadiogroupStyle = () => ({
  ".MuiTypography-root": {
    padding: "4px 8px 4px 8px",
    borderRadius: "12px",
    borderWidth: "1px",
    fontWeight: "bold",
    borderStyle: "solid",
    borderColor: "transparent",
    ":hover": {
      background: "#E6E6E6",
    },
  },
  ".Mui-checked + .MuiTypography-root": {
    borderColor: "black",
  },
});

export const StyledTypography = (props) => {
  return (
    <Typography
      variant="body1"
      sx={{ fontWeight: "medium", textAlign: "center" }}
      {...props}
    />
  );
};

export const StyledButton = (props) => {
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        marginTop: "16px",
        borderColor: "black",
        color: "black",
        textTransform: "none",
        whiteSpace: "nowrap",
        fontWeight: "medium",
        borderRadius: "8px",
        ":hover": {
          borderColor: "#8C8C8C",
        },
      }}
      {...props}
    />
  );
};
