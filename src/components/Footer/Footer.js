import React from "react";
import { Box, Divider, Icon, Typography } from "@mui/material";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiPagseguro } from "react-icons/si";
import { MdOutlinePix } from "react-icons/md";
import MobileWorldLogo from "../../assets/images/Logos/MobileWorldLogo.png";
import {
  getContainerStyles,
  getTitleStyle,
  getContactStyle,
  getFootermenuStyle,
} from "./Footer.styles.ts";

const Footer = () => {
  return (
    <Box sx={getContainerStyles}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <Box
          sx={{
            width: "15%",
            height: "fit-content",
            "@media(max-width: 544px)": {
              width: "70%",
            },
          }}
          component="img"
          src={MobileWorldLogo}
          alt="Man avatar generic image"
        />
        <Box>
          <Typography sx={getTitleStyle}>Formas de Pagemento</Typography>
          <Icon fontSize="large">
            <AiOutlineCreditCard color="#e7e7e7" />
          </Icon>
          <Icon fontSize="large">
            <FaCcMastercard color="#e7e7e7" />
          </Icon>
          <Icon fontSize="large">
            <SiPagseguro color="#e7e7e7" />
          </Icon>
          <Icon fontSize="large">
            <FaCcVisa color="#e7e7e7" />
          </Icon>
          <Icon fontSize="large">
            <MdOutlinePix color="#e7e7e7" />
          </Icon>
        </Box>
        <Box sx={getContactStyle}>
          <Typography>Contato</Typography>
          <Box>
            <ul>
              <li>{"(11) 94002-7592"}</li>
              <li>{"contato@mobileworld.com.br"}</li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ background: "white" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "32px",
        }}
      >
        <Box sx={getFootermenuStyle}>
          <Typography>Produtos & Serviços</Typography>
          <Box>
            <ul>
              <li>{"Home"}</li>
              <li>{"MobileWorld News"}</li>
              <li>{"Ofertas"}</li>
              <li>{"Produtos em Destaque"}</li>
              <li>{"Melhores Promoções"}</li>
              <li>{"Categorias"}</li>
            </ul>
          </Box>
        </Box>
        <Box sx={getFootermenuStyle}>
          <Typography>Seu Perfil</Typography>
          <Box>
            <ul>
              <li>{"Minha Conta"}</li>
              <li>{"Meus Pedidos"}</li>
              <li>{"Carrinho"}</li>
              <li>{"Meus Favoritos"}</li>
            </ul>
          </Box>
        </Box>
        <Box sx={getFootermenuStyle}>
          <Typography>Suporte</Typography>
          <Box>
            <ul>
              <li>{"Baixe nosso App"}</li>
              <li>{"Suporte"}</li>
              <li>{"Informações da empresa"}</li>
              <li>{"Noticias"}</li>
              <li>{"Segurança e Privacidade "}</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
