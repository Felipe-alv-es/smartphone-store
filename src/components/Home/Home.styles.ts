export const getContainerStyle = () => ({
  "> div > .swiper-button-prev": {
    color: "#f3f3f3",
  },
  "> div > .swiper-button-next": {
    color: "#f3f3f3",
  },
  "> div > .swiper-pagination": {
    "> span": {
      height: "6px",
      width: "32px",
      borderRadius: "8px",
      borderColor: "#f3f3f3",
      borderStyle: "solid",
      background: "white",
      borderWidth: "2px",
      "@media(max-width: 544px)": {
        height: "8px",
        width: "8px",
      },
    },
  },
});

export const getImageStyle = () => ({
  width: "100%",
  "@media(max-width: 544px)": {
    width: "100%",
  },
});
