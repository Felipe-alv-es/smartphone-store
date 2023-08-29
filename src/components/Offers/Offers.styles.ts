export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
  alignItems: "center",
  ".swiper-slide": {
    background: "#D9D9D9",
    borderRadius: "8px",
    cursor: "pointer",
    height: "auto",
  },
  "@media(max-width: 544px)": {
    padding: 0,
  },
  ".swiper-pagination": {
    position: "relative",
    marginTop: "1em",
    "> span": {
      height: "8px",
      width: "16px",
      borderColor: "#000000",
      borderStyle: "solid",
      background: "#000000",
      borderRadius: "8px",
    },
  },
});

export const getPageTitleStyle = () => ({
  typography: "h5",
  fontWeight: "bold",
  margin: "32px 0px 16px 0px",
  whiteSpace: "pre-line",
  textAlign: "center",
});

export const getContentStyle = () => ({
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  "> *": {
    maxWidth: "100%",
  },
});

export const getOfferTypeStyle = () => ({
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "16px",
});

export const getIconButtonStyle = () => ({
  background: "#D9D9D9",
  borderRadius: "32px",
  height: "fit-content",
});
