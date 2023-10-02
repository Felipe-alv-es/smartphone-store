import { SxProps } from "@mui/material/";

export const getContainerStyles = (): SxProps => ({
  background: "#000000",
  padding: "3% 10% 3% 10%",
});

export const getTitleStyle = () => ({
  typography: "h6",
  fontWeight: "bold",
  color: "#e7e7e7",
  marginBottom: "8px",
});

export const getContactStyle = () => ({
  "> p": {
    color: "#e7e7e7",
    typography: "h6",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  "> div > ul": {
    color: "#e7e7e7",
    listStyle: "none",
    "> li": {
      marginBottom: "8px",
    },
  },
});

export const getFootermenuStyle = () => ({
  "> p": {
    color: "#e7e7e7",
    typography: "h6",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  "> div > ul": {
    color: "#e7e7e7",
    listStyle: "none",
    "> li": {
      marginBottom: "16px",
    },
  },
});
