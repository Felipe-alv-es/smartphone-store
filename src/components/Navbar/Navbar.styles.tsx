import React from "react";
import { SxProps, Box } from "@mui/material/";

export const getNavbarStyles = (): SxProps => ({
  width: "100%",
  background: "#000000",
  paddingBottom: "8px",
  paddingTop: "8px",
  "> div > ul": {
    display: "flex",
    listStyle: "none",
    cursor: "pointer",
    width: "100%",
    justifyContent: "space-between",
    padding: "0 5% 0 5%",
    "> li": {
      display: "flex",
      "> *": {
        color: "#f3f3f3",
        textDecoration: "none",
        borderRadius: "5px",
        transition: ".5s",
        fontSize: "14px",
        fontWeight: "medium",
        padding: "16px",
        ":hover": {
          background: "#4966E6",
        },
        ":active": {
          background: "#415BCC",
        },
      },
    },
  },
});

export const getImageStyle = (): SxProps => ({
  height: "50px",
});

export const StyledBurguerButton = ({ isOpen, ...props }) => (
  <Box
    sx={{
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "8px 8px 8px 8px",
      borderRadius: "4px",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    }}
    {...props}
  >
    <Box
      {...props}
      sx={{
        width: "100%",
        height: "2px",
        background: "#f3f3f3",
        borderRadius: "4px",
        transform: isOpen ? "rotate(45deg)" : "",
        translate: isOpen ? "0em 0.70em" : "",
        transition: "ease-out 0.3s",
      }}
    />
    <Box
      sx={{
        width: "100%",
        height: "2px",
        background: "#f3f3f3",
        borderRadius: "4px",
        transform: isOpen ? "rotate(45deg)" : "",
        transition: "ease-out 0.3s",
      }}
    />
    <Box
      sx={{
        width: "100%",
        height: "2px",
        background: "#f3f3f3",
        borderRadius: "4px",
        transform: isOpen ? "rotate(-45deg)" : "",
        translate: isOpen ? "0em -0.70em" : "",
        transition: "ease-out 0.3s",
      }}
    />
  </Box>
);

export const getDrawerMenuStyle = (): SxProps => ({
  "> ul": {
    listStyle: "none",
    marginTop: "4em",
    "> li": {
      padding: "20px 4%",
      transition: ".5s",
      ":active": {
        background: "#C4C4C4",
      },
      "> *": {
        color: "#1a1a1a",
        textDecoration: "none",
        marginLeft: "10px",
        lineHeight: "31px",
      },
    },
  },
});

export const getMobileContainerStyle = (): SxProps => ({
  display: "flex",
  width: "100%",
  justifyContent: "right",
  alignItems: "center",
  background: "#5271FF",
  position: "fixed",
  zIndex: 1400, // Todo: A navbar só fica a frente do drawer caso o Zindex seja mais que 1400
});

export const getMobileLogoStyle = (): SxProps => ({
  height: "48px",
  position: "absolute",
  left: 0,
  marginLeft: "4px",
});
