import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#111111", color: "white", p: 2 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            width: "300px",
            margin: "0 auto",
            textAlign: "center",
            color: "#fff",
            borderBottom: "solid 1px #fff",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "64px",
          }}
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
