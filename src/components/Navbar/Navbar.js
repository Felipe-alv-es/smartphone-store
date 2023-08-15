import React, { useState } from "react";
import {
  Box,
  Drawer,
  Icon,
  Divider,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import Logo from "../../assets/images/Fictional.png";
import {
  getNavbarStyles,
  getDrawerMenuStyle,
  getImageStyle,
  StyledBurguerButton,
  getMobileContainerStyle,
  topContainerStyle,
  StyledSearch,
} from "./Navbar.styles.tsx";
import {
  AiFillHome,
  AiFillDatabase,
  AiFillProject,
  AiFillMessage,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GoBell } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const menuOptions = [
    { text: "Oferta do Dia", icon: <AiFillHome /> },
    { text: "Lançamentos", icon: <AiFillDatabase /> },
    { text: "Em Destaque", icon: <AiFillProject /> },
    { text: "Samsung", icon: <AiFillMessage /> },
    { text: "Xiaomi", icon: <AiFillMessage /> },
    { text: "Acessórios", icon: <AiFillMessage /> },
    { text: "Iphone", icon: <AiFillMessage /> },
    { text: "Lançamentos", icon: <AiFillMessage /> },
    { text: "Cartão Fictional Mobile", icon: <AiFillMessage /> },
  ];

  return (
    <>
      {isMobile ? (
        <Box sx={getMobileContainerStyle}>
          {/* <Box
            sx={getMobileLogoStyle}
            component="img"
            src={FBLogo}
            alt="FictionalBank Logo"
          /> */}
          <StyledBurguerButton
            onClick={() => setIsOpen(isOpen ? false : true)}
            isOpen={isOpen}
          />
          <Drawer
            PaperProps={{ sx: { background: "#e7e7e7" } }}
            open={isOpen}
            anchor="top"
            onClose={() => setIsOpen(false)}
          >
            <Box sx={getDrawerMenuStyle}>
              <ul>
                {menuOptions.map((item) => (
                  <>
                    <li key={item.text}>
                      <Icon>{item.icon}</Icon>
                      <Link onClick={() => setIsOpen(false)}>{item.text}</Link>
                    </li>
                    <Divider
                      variant="inset"
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                    />
                  </>
                ))}
              </ul>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box sx={getNavbarStyles}>
          <Box sx={topContainerStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={getImageStyle}
                component="img"
                src={Logo}
                alt="FictionalBank Logo"
              />
              <StyledSearch />
              <Box sx={{ marginLeft: "16px" }}>
                <Typography color={"white"} variant="body2">
                  Bem vindo
                </Typography>
                <Typography color={"white"} variant="body2">
                  <Link color="inherit">Entre</Link> ou{" "}
                  <Link color="inherit">Cadastre-se</Link>
                </Typography>
              </Box>
            </Box>
            <Box>
              <IconButton>
                <GoBell color="white" />
              </IconButton>
              <IconButton>
                <AiOutlineUser color="white" />
              </IconButton>
              <IconButton>
                <AiOutlineShoppingCart color="white" />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ul>
              {menuOptions.map((item) => (
                <li key={item.text}>
                  <Link>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
