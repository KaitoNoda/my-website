import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import { styled } from '@mui/system';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderButton = styled(Button)({
  color: "#111111",
});

const Header: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: "#e3dddd",
      padding: "30px",  
      boxSizing: "border-box",
    }}>
      <Box sx={{
        width: "60%",
        borderBottom: "1px solid #111111",
        margin: "0 auto",
      }}>
        <Box sx={{ display: "flex" }}>
          <HeaderButton>About Me</HeaderButton>
          <HeaderButton>Timeline</HeaderButton>
          <HeaderButton>Portfolios</HeaderButton>
          <HeaderButton>Skills</HeaderButton>
          <HeaderButton>Contact</HeaderButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
