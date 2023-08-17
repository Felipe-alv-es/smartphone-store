export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
  "> div > div > .swiper-slide": {
    background: "#D9D9D9",
    borderRadius: "8px",
  },
  "@media(max-width: 544px)": {
    padding: 0,
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
});

export const getOfferTypeStyle = () => ({
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "16px",
});
