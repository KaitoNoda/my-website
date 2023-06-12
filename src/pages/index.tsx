import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Introduction } from "components/Introduction";
import { Portfolios } from "components/Portfolios";
import { TimeLine } from "components/Timeline";
import { MyInterests } from "components/MyInterests";
import { CssBaseline } from "@mui/material";
import Box from "@mui/system/Box";
import { COLOR_CODES } from "constants/color-codes";

const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box bgcolor={COLOR_CODES.BG} m={0} p={0} boxSizing={"border-box"}>
        <Header />
        <Introduction />
        <TimeLine />
        <Portfolios />
        <MyInterests />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
