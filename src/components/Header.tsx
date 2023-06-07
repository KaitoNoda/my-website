import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import { styled } from "@mui/system";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { COLOR_CODES } from "constants/color-codes";
import { EXTERNAL_LINKS } from "constants/external-links";

const HeaderButton = styled(Button)({
  color: COLOR_CODES.BLACK,
  textDecoration: "none",
  marginRight: "20px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "0",
  fontSize: "20px",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "0",
    height: "2px",
    backgroundColor: COLOR_CODES.BLACK,
    transition: "all 0.3s",
    transform: "translateX(-50%)",
  },
  "&:hover::after": {
    width: "100%",
  },
});

const IconButton = styled("a")({
  color: COLOR_CODES.BLACK,
  marginLeft: "20px",
  cursor: "pointer",
  transition: "color 0.3s",
  "&:hover": {
    color: COLOR_CODES.GRAY,
  },
});

export const Header: React.FC = () => {
  return (
    <Box
      p={"30px"}
      boxSizing={"border-box"}
      sx={{
        backgroundColor: COLOR_CODES.BG,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"70%"}
        borderBottom={"1px solid #111111"}
        m={"0 auto"}
      >
        <Box sx={{ display: "flex" }}>
          <HeaderButton href="#aboutMe">About Me</HeaderButton>
          <HeaderButton href="#timeline">Timeline</HeaderButton>
          <HeaderButton href="#portfolios">Portfolios</HeaderButton>
          <HeaderButton href="#skills">Skills</HeaderButton>
          <HeaderButton href="#contact">Contact</HeaderButton>
        </Box>
        <Box display={"flex"}>
          <IconButton
            href={EXTERNAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </IconButton>
          <IconButton
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
