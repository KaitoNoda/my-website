import React from "react";
import { Header } from "components/Header";
import Footer from "components/Footer";
import { Introduction } from "components/Introduction";
import Portfolios from "components/Portfolios";
import { TimeLine } from "components/Timeline";
import Skills from "components/Skills";
import { CssBaseline } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "#e3dddd",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Header />
        <Introduction />
        <Portfolios />
        <TimeLine />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default Home;
