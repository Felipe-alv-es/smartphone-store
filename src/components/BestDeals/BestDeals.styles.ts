export const getPageTitleStyle = () => ({
  typography: "h4",
  fontWeight: "bold",
  margin: "64px 0px 16px 0px",
  whiteSpace: "pre-line",
  textAlign: "center",
});

export const getContainerStyle = () => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "16px 72px 32px 72px",
  "@media(max-width: 544px)": {
    margin: "16px",
    display: "block",
  },
});

export const getOptionsStyle = () => ({
  width: "100%",
  margin: "16px",
  borderRadius: "16px",
  padding: "16px",
  display: "grid",
  placeItems: "center",
  "@media(max-width: 544px)": {
    margin: "0 0 16px 0",
  },
});

export const getContentStyle = () => ({
  padding: " 0 32px 0 32px",
  margin: "16px 0 16px 0",
});

export const getTitleStyle = () => ({
  typography: "h5",
  fontWeight: "bold",
  marginBottom: "16px",
  textAlign: "center",
});

export const getTextStyle = () => ({
  marginBottom: "32px",
  whiteSpace: "pre-line",
});
