import React, { useState } from "react";
import { Box, Drawer, Icon, Divider, Link } from "@mui/material";
import FBLogo from "../../assets/images/FictionalBankLogo.png";
import {
  getNavbarStyles,
  getDrawerMenuStyle,
  getImageStyle,
  StyledTextField,
  StyledLockButton,
  StyledOutlineButton,
  StyledBurguerButton,
  getMobileContainerStyle,
  getMobileLogoStyle,
} from "./Navbar.styles.tsx";
import {
  AiFillHome,
  AiFillDatabase,
  AiFillProject,
  AiFillMessage,
  AiOutlineLock,
} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    if (isMobile) {
      return;
    }
    document
      .querySelector("#input-id")
      .addEventListener("keypress", function (e) {
        const keyCode = e.keyCode ? e.keyCode : e.wich;

        if (keyCode < 47 || keyCode > 58) {
          e.preventDefault();
        }
      });
  }, [isMobile]);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const menuOptions = [
    { text: "Inicio", icon: <AiFillHome /> },
    { text: "Para Clientes", icon: <AiFillDatabase /> },
    { text: "Para Empresas", icon: <AiFillProject /> },
    { text: "Benefícios", icon: <AiFillMessage /> },
    { text: "Ajuda", icon: <AiFillMessage /> },
  ];

  return (
    <>
      {isMobile ? (
        <Box sx={getMobileContainerStyle}>
          <Box
            sx={getMobileLogoStyle}
            component="img"
            src={FBLogo}
            alt="FictionalBank Logo"
          />
          <StyledOutlineButton>Abra sua conta</StyledOutlineButton>
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={getImageStyle}
              component="img"
              src={FBLogo}
              alt="FictionalBank Logo"
            />
            <ul>
              {menuOptions.map((item) => (
                <li key={item.text}>
                  <Link>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box display={"flex"}>
            <StyledTextField />
            <StyledLockButton>
              <AiOutlineLock />
            </StyledLockButton>
          </Box>
          <StyledOutlineButton>Abra sua conta</StyledOutlineButton>
        </Box>
      )}
    </>
  );
};

export default Navbar;
