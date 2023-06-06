import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography>Contact</Typography>
        <Box>
          <Box>
            <IconButton>
              <HomeIcon />
            </IconButton>
            <Typography>Vancouver, Canada</Typography>
          </Box>
          <Box>
            <IconButton>
              <EmailIcon />
            </IconButton>
            <Typography>Info@gmail.com</Typography>
          </Box>
          <Box>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <Typography>2399348959</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
