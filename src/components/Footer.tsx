import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { COLOR_CODES } from "constants/color-codes";

export const Footer = () => {
  return (
    <Box
      id="contact"
      bgcolor={COLOR_CODES.BLACK}
      color={COLOR_CODES.WHITE}
      p={2}
    >
      <Container maxWidth="lg">
        <Typography
          width={"300px"}
          m={"0 auto"}
          textAlign={"center"}
          color={COLOR_CODES.WHITE}
          borderBottom={`solid 1px ${COLOR_CODES.WHITE}`}
          fontSize={"32px"}
          fontWeight={"bold"}
          mb={8}
        >
          Contact
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin="0 auto"
          width="280px"
          gap={2}
        >
          <Box display="flex" gap={1}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            <Typography variant="h5">Vancouver, Canada</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
            <Typography variant="h5">KaitoNoda@outlook.com</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <IconButton color="inherit">
              <PhoneIcon />
            </IconButton>
            <Typography variant="h5">+1(236)-516-9943</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
