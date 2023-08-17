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
