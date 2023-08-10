import React from "react";
import {
  SxProps,
  TextFieldProps,
  Box,
  IconButton,
  IconButtonProps,
  Divider,
  Button,
  ButtonProps,
} from "@mui/material/";

export const getNavbarStyles = (): SxProps => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  background: "#5271FF",
  padding: "0 60px 0 60px",
  paddingBottom: "12px",
  paddingTop: "12px",
  justifyContent: "space-between",
  "> div > ul": {
    display: "flex",
    listStyle: "none",
    cursor: "pointer",
    marginLeft: "16px",
    "> li": {
      "> *": {
        color: "#f3f3f3",
        textDecoration: "none",
        borderRadius: "5px",
        transition: ".5s",
        fontSize: "14px",
        fontWeight: "medium",
        height: "40px",
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
  height: "40px",
});

export const StyledTextField = React.forwardRef<HTMLElement, TextFieldProps>(
  (props) => (
    <Box
      sx={{
        display: "flex",
        background: "#f3f3f3",
        borderRadius: "4px",
        padding: "8px",
        alignItems: "center",
      }}
      id="input-id"
    >
      <input
        placeholder="agência"
        type="text"
        style={{
          borderStyle: "none",
          width: "64px",
          backgroundColor: "#f3f3f3",
          fontSize: "14px",
          outline: "none",
          paddingLeft: "8px",
          color: "#374957",
        }}
      />
      <Divider
        orientation="vertical"
        sx={{
          background: "#C8C7C9",
          borderRadius: "4px",
          borderWidth: "1px",
          margin: "0 8px 0 8px",
          height: "16px",
        }}
      />
      <input
        placeholder="conta"
        type="text"
        style={{
          borderStyle: "none",
          width: "56px",
          backgroundColor: "#f3f3f3",
          fontSize: "14px",
          outline: "none",
          color: "#374957",
          paddingLeft: "8px",
        }}
      />
    </Box>
  )
);

export const StyledLockButton = React.forwardRef<HTMLElement, IconButtonProps>(
  (props) => (
    <IconButton
      sx={{
        width: "40px",
        height: "40px",
        background: "#f3f3f3",
        borderRadius: "4px",
        marginLeft: "8px",
        ":hover": {
          background: "#E6E6E6",
        },
        "> *": {
          color: "#374957",
        },
      }}
      {...props}
    ></IconButton>
  )
);

export const StyledOutlineButton = React.forwardRef<HTMLElement, ButtonProps>(
  (props) => (
    <Button
      variant="outlined"
      sx={{
        color: "white",
        borderColor: "white",
        textTransform: "none",
        padding: "8px 12px 8px 12px",
        whiteSpace: "nowrap",
        ":hover": {
          borderColor: "#E6E6E6",
        },
      }}
      {...props}
    />
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
