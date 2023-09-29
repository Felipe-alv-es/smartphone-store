import React, { useState } from "react";
import {
  Box,
  Drawer,
  Icon,
  Link,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import Logo from "../../assets/images/Logos/MobileWorldLogo.png";
import FMLogo from "../../assets/images/Logos/MB.png";
import {
  getNavbarStyles,
  getDrawerMenuStyle,
  getImageStyle,
  StyledBurguerButton,
  getMobileContainerStyle,
  topContainerStyle,
  StyledSearch,
  StyledTypohraphy,
  StyledLink,
  getDrawerContainerStyle,
  getDrawerTitleStyle,
  getDrawerButtonStyle,
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
    { text: "Categorias", icon: <AiFillHome /> },
    { text: "Minha Conta", icon: <AiFillDatabase /> },
    { text: "Meus Pedidos", icon: <AiFillProject /> },
    { text: "Favoritos", icon: <AiFillMessage /> },
    { text: "Mais procurados", icon: <AiFillMessage /> },
    { text: "Baixe o App", icon: <AiFillMessage /> },
    { text: "Suporte", icon: <AiFillMessage /> },
  ];

  return (
    <>
      {isMobile ? (
        <Box sx={getMobileContainerStyle}>
          <Box
            component="img"
            src={FMLogo}
            alt="FictionalBank Logo"
            sx={{
              width: "32px",
              height: "32px",
              marginLeft: "4px",
            }}
          />
          <StyledSearch />
          <IconButton color="primary">
            <AiOutlineShoppingCart color="white" />
          </IconButton>
          <StyledBurguerButton
            onClick={() => setIsOpen(isOpen ? false : true)}
            isOpen={isOpen}
          />
          <Drawer
            PaperProps={{ sx: { background: "#000000" } }}
            open={isOpen}
            anchor="top"
            onClose={() => setIsOpen(false)}
          >
            <Box sx={{ margin: "5em 32px 16px 32px" }}>
              <Box sx={getDrawerContainerStyle}>
                <IconButton color="primary">
                  <AiOutlineUser color="white" />
                </IconButton>
                <Typography sx={getDrawerTitleStyle}>
                  Olá, faça seu Login
                </Typography>
              </Box>
              <Box sx={{ m: 2 }} />
              <Box sx={getDrawerMenuStyle}>
                <ul>
                  {menuOptions.map((item) => (
                    <>
                      <li key={item.text}>
                        <Icon fontSize="small">{item.icon}</Icon>
                        <Link onClick={() => setIsOpen(false)}>
                          {item.text}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </Box>
              <Button fullWidth sx={getDrawerButtonStyle}>
                Entrar
              </Button>
              <Button fullWidth sx={{ color: "#ffffff" }}>
                Cadastre-se
              </Button>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box sx={getNavbarStyles}>
          <Box sx={topContainerStyle}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={getImageStyle}
                component="img"
                src={Logo}
                alt="FictionalBank Logo"
              />
              <StyledSearch />
              <Box sx={{ marginLeft: "16px" }}>
                <StyledTypohraphy>Bem vindo</StyledTypohraphy>
                <StyledTypohraphy>
                  <StyledLink>Entre</StyledLink>
                  {" ou "}
                  <StyledLink>Cadastre-se</StyledLink>
                </StyledTypohraphy>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <IconButton color="primary">
                <GoBell color="white" />
              </IconButton>
              <IconButton color="primary">
                <AiOutlineUser color="white" />
              </IconButton>
              <IconButton color="primary">
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
