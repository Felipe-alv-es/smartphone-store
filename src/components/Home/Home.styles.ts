export const getContainerStyle = () => ({
  "> div > .swiper-button-prev": {
    color: "#f3f3f3",
  },
  "> div > .swiper-button-next": {
    color: "#f3f3f3",
  },
  "> div > .swiper-pagination": {
    "> span": {
      height: "12px",
      width: "12px",
      borderColor: "#f3f3f3",
      borderStyle: "solid",
      background: "transparent",
      borderWidth: "2px",
    },
  },
});

export const getImageStyle = () => ({
  width: "100%",
  "@media(max-width: 544px)": {
    width: "auto",
    height: "500px",
    objectPosition: "top 0px right 14em",
  },
});

export const getContentBoxStyle = () => ({
  position: "absolute",
  marginLeft: "64px",
  top: "40%",
  "@media(max-width: 544px)": {
    marginLeft: "32px",
  },
});

export const getTitleStyle = () => ({
  typography: "h3",
  fontWeight: "bold",
  color: "#f3f3f3",
  whiteSpace: "pre-line",
  "@media(max-width: 544px)": {
    typography: "h5",
    fontWeight: "bold",
  },
});

export const getTextStyle = () => ({
  typography: "h5",
  color: "#f3f3f3",
  whiteSpace: "pre-line",
  "@media(max-width: 544px)": {
    typography: "subtitle1",
    fontWeight: "medium",
  },
});

export const getButtonStyle = () => ({
  color: "white",
  borderColor: "white",
  textTransform: "none",
  padding: "12px 28px 12px 28px",
  fontSize: "24px",
  ":hover": {
    borderColor: "#E6E6E6",
  },
  "@media(max-width: 544px)": {
    height: "48px",
    fontSize: "16px",
  },
});
