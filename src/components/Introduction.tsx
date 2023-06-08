import React from "react";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        backgroundColor: "#e3dddd",
        width: "1000px",
        height: "350px",
        margin: "150px auto",
        color: "black",
      }}
    >
      <Box flex={"0.7"} mt={"10px"} ml={"20px"}>
        <h1 style={{ fontSize: "40px" }}>Here is who I am</h1>
        <p style={{ fontSize: "20px" }}>
          First of all, thank you for visiting my website. I am glad you took
          this opportunity to know me more. I am originally from Japan and am
          currently a <strong>computer science student</strong> at the
          University of British Columbia (UBC). My goal is to become an expert
          <strong>software engineer</strong> specializing in web development.
        </p>
      </Box>
      <Box flex={"0.3"}>
        <Image src="/face.png" alt="My face pic" width={420} height={350} />
      </Box>
    </Paper>
  );
};

export default Introduction;
