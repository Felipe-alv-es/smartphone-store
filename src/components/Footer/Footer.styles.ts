import { SxProps } from "@mui/material/";

export const getContainerStyles = (): SxProps => ({
  background: "#000000",
  padding: "1em 2em 1em 2em",
  display: "grid",
  placeItems: "center",
  marginTop: "32px",
  gridTemplateAreas: `'footerContent contats'`,
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'footerContent''contats'`,
    placeItems: "normal",
  },
});

export const getFooterContentStyle = (): SxProps => ({
  gridArea: "footerContent",
  "@media(max-width: 544px)": {
    marginBottom: "1em",
  },
});

export const getSubtitleStyle = (): SxProps => ({
  "> h6 > span": {
    marginLeft: "10px",
  },
});

export const getTitleStyle = () => ({
  typography: "h5",
  fontWeight: "medium",
  color: "#e7e7e7",
});

export const getTextStyle = () => ({
  typography: "body2",
  color: "#e7e7e7",
});
