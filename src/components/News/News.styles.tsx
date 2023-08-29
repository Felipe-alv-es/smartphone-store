import React from "react";
import { TextField } from "@mui/material";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px",
  justifyContent: "center",
  alignItems: "center",
  "@media(max-width: 544px)": {
    display: "grid",
    placeItems: "center",
  },
});

export const StyledTypography = (props) => {
  return (
    <TextField
      size="small"
      sx={{ marginRight: "16px", background: "#f3f3f3" }}
      {...props}
    />
  );
};

export const getButtonStyle = () => ({
  background: "black",
  height: "100%",
  textTransform: "none",
  whiteSpace: "nowrap",
});

export const getTitleStyle = () => ({
  typography: "h5",
  fontWeight: "bold",
  "@media(max-width: 544px)": {
    typography: "h6",
    fontWeight: "bold",
  },
});

export const getContentStyle = () => ({
  marginRight: "16px",
  textAlign: "center",
  "@media(max-width: 544px)": {
    marginBottom: "16px",
  },
});
