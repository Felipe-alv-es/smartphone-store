import React from "react";
import { TextField } from "@mui/material";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px",
  justifyContent: "center",
  alignItems: "center",
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
