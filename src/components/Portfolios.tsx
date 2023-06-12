import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLOR_CODES } from "constants/color-codes";
import { EXTERNAL_PATHS } from "constants/external-paths";

const settings: Settings = {
  className: "center",
  arrows: false,
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};

const imgStyles: React.CSSProperties = {
  color: COLOR_CODES.WHITE,
  maxWidth: "300px",
  margin: "60px auto",
  padding: 2,
  textAlign: "center",
  opacity: 0.4,
};

export const Portfolios: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const handleClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <Box
      id={"portfolios"}
      margin={" 160px auto"}
      padding={"80px 40px 40px 40px"}
      width={"100%"}
      height={"600px"}
      bgcolor={COLOR_CODES.BLACK}
    >
      <style>{cssstyle}</style>
      <Typography
        width={"250px"}
        marginBottom={"50px"}
        marginLeft={"200px"}
        color={COLOR_CODES.WHITE}
        borderBottom={`solid 1px ${COLOR_CODES.WHITE}`}
        fontSize={"30px"}
      >
        Portfolios
      </Typography>
      <Slider dots ref={sliderRef} {...settings}>
        <Box height={"300px"}>
          <Image
            src={EXTERNAL_PATHS.IMG1}
            alt="Image 1"
            width={290}
            height={180}
            style={imgStyles}
            onClick={() => handleClick(0)}
          />
        </Box>
        <Box height={"300px"}>
          <Image
            src={EXTERNAL_PATHS.IMG2}
            alt="Image 2"
            width={290}
            height={180}
            style={imgStyles}
            onClick={() => handleClick(1)}
          />
        </Box>
        <Box height={"300px"}>
          <Image
            src={EXTERNAL_PATHS.IMG3}
            alt="Image 3"
            width={290}
            height={180}
            style={imgStyles}
            onClick={() => handleClick(2)}
          />
        </Box>
        <Box height={"300px"}>
          <Image
            src={EXTERNAL_PATHS.IMG4}
            alt="Image 4"
            width={290}
            height={180}
            style={imgStyles}
            onClick={() => handleClick(3)}
          />
        </Box>
        <Box height={"300px"}>
          <Image
            src={EXTERNAL_PATHS.IMG5}
            alt="Image 5"
            width={290}
            height={180}
            style={imgStyles}
            onClick={() => handleClick(4)}
          />
        </Box>
        <Box height={"300px"}>
          <Image
            src={EXTERNAL_PATHS.IMG6}
            alt="Image 6"
            width={290}
            height={180}
            style={imgStyles}
            onClick={() => handleClick(5)}
          />
        </Box>
      </Slider>
    </Box>
  );
};

const cssstyle = `
.center .slick-center img {
  opacity: 1 !important;
  transform: scale(1.58);
}
.center img {
  transition: all 0.8s ease;
}
 .slick-dots li button::before {
  font-size: 13px;
  color:${COLOR_CODES.WHITE};
  opacity: 0.4;
  margin-top:20px;
}

.slick-dots li.slick-active button::before {
  color: ${COLOR_CODES.WHITE};
  opacity: 1 ;
}
`;
