import React from "react";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { EXTERNAL_PATHS } from "constants/external-paths";

export const Introduction: React.FC = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        backgroundColor: "#e3dddd",
        pl: "10px",
        width: "1000px",
        height: "350px",
        margin: "150px auto",
        color: "black",
      }}
    >
      <Box flex={"0.7"} mt={"10px"} ml={"20px"}>
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
          First of all, thank you for visiting my website. I am glad you took
          this opportunity to know me more. I am originally from Japan and am
          currently a <strong>computer science student</strong> at the
          University of British Columbia (UBC). My goal is to become an expert
          <strong> software engineer</strong> specializing in web development.
        </Typography>
      </Box>
      <Box flex={"0.3"}>
        <Image
          src={EXTERNAL_PATHS.FACE}
          alt="My face pic"
          width={420}
          height={350}
        />
      </Box>
    </Paper>
  );
};
