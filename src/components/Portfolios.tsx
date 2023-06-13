import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COLOR_CODES } from "constants/color-codes";
import { IMAGE_PATHS } from "@/constants/image-paths";

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

  const images = [
    { src: IMAGE_PATHS.IMG1, index: 0 },
    { src: IMAGE_PATHS.IMG2, index: 1 },
    { src: IMAGE_PATHS.IMG3, index: 2 },
    { src: IMAGE_PATHS.IMG4, index: 3 },
    { src: IMAGE_PATHS.IMG5, index: 4 },
    { src: IMAGE_PATHS.IMG6, index: 5 },
  ];

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
      <Typography
        width={"250px"}
        mb={7}
        ml={25}
        color={COLOR_CODES.WHITE}
        borderBottom={`solid 1px ${COLOR_CODES.WHITE}`}
        fontSize={"30px"}
      >
        Portfolios
      </Typography>
      <Slider dots ref={sliderRef} {...settings}>
        {images.map((image) => (
          <Box
            key={image.src}
            height={"300px"}
            sx={{ outline: "none", "&:focus": { outline: "none" } }}
            onClick={() => handleClick(image.index)}
          >
            <Image
              src={image.src}
              alt={`Image ${image.index + 1}`}
              width={290}
              height={180}
              style={imgStyles}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
