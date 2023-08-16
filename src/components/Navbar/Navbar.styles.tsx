import React from "react";
import {
  SxProps,
  Box,
  InputBaseProps,
  InputBase,
  IconButton,
} from "@mui/material/";
import { BsSearch } from "react-icons/bs";

export const getNavbarStyles = (): SxProps => ({
  width: "100%%",
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
          background: "#4D4D4D",
        },
        ":active": {
          background: "#333333",
        },
      },
    },
  },
});

export const getImageStyle = (): SxProps => ({
  height: "50px",
  marginRight: "16px",
});

export const topContainerStyle = (): SxProps => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: "4px 0px 4px 0px",
  padding: "0 5% 0 5%",
  alignItems: "center",
});

export const StyledSearch = React.forwardRef<HTMLElement, InputBaseProps>(
  (props) => (
    <form>
      <InputBase
        placeholder="Buscar na Loja"
        size="small"
        sx={{
          Input: {
            color: "black",
            borderColor: "white",
            borderStyle: "solid",
            borderWidth: "1px",
            padding: "8px",
            borderRadius: "2px",
            background: "white",
            width: "300px",
            "::placeholder": {
              color: "black",
            },
          },
        }}
        {...props}
      />
      <IconButton sx={{ pointerEvents: "none" }}>
        <BsSearch color="white" />
      </IconButton>
    </form>
  )
);

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
