import { Box, Icon, Typography } from "@mui/material";
import React from "react";
import {
  getContainerStyles,
  getSubtitleStyle,
  getFooterContentStyle,
  getTitleStyle,
  getTextStyle,
} from "./Footer.styles.ts";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiPagseguro } from "react-icons/si";
import { MdOutlinePix } from "react-icons/md";

const Footer = () => {
  return (
    <Box sx={getContainerStyles}>
      <Box sx={getFooterContentStyle}>
        <Typography sx={getTitleStyle}>Formas de Pagemento</Typography>
        <Box sx={getSubtitleStyle}>
          <Typography
            fontFamily={"sans-serif"}
            variant="subtitle2"
            color={"#e7e7e7"}
          >
            <Icon fontSize="small">
              <AiOutlineCreditCard />
            </Icon>
            <Icon fontSize="small">
              <FaCcMastercard />
            </Icon>
            <Icon fontSize="small">
              <SiPagseguro />
            </Icon>
            <Icon fontSize="small">
              <FaCcVisa />
            </Icon>
            <Icon fontSize="small">
              <MdOutlinePix />
            </Icon>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={getTextStyle}>
          <b>Contato</b>: <u>0800 400 28922</u>
        </Typography>
        <Typography sx={getTextStyle}>
          <b>Email:</b> <u>fictional-bank@fictionalbank.com.br</u>
        </Typography>
        <Typography sx={getTextStyle}>
          <b>Doc:</b> <u>Documento Ficticio</u>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
