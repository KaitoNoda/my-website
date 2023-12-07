import React from "react";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { IMAGE_PATHS } from "@/constants/image-paths";
import { COLOR_CODES } from "constants/color-codes";

export const Introduction: React.FC = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        backgroundColor: COLOR_CODES.BG,
        pl: 2,
        width: "1000px",
        height: "350px",
        margin: "150px auto",
        color: COLOR_CODES.BLACK,
      }}
    >
      <Box id={"aboutMe"} flex={"0.7"} ml={"20px"} pt={12} mt={-12}>
        <Typography
          variant={"h1"}
          component={"h1"}
          fontSize={"40px"}
          fontWeight={"bold"}
          mt={"30px"}
          mb={"30px"}
        >
          Here is who I am
        </Typography>
        <Typography variant={"body1"} component={"p"} fontSize={"20px"}>
        My name is Kaito Noda. Welcome to my personal website. I am glad you took this opportunity to know me more. Originally born and raised in Japan, I designed and created this website from scratch on my own. As a university student in Canada my interests are Designing (especially architecture), Shodo (Japanese Calligraphy), Languages, Travelling, and Art.
        </Typography>
      </Box>
      <Box flex={"0.3"}>
        <Image
          src={IMAGE_PATHS.FACE}
          alt="My face pic"
          width={420}
          height={350}
        />
      </Box>
    </Paper>
  );
};
