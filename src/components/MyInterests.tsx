import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Box,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { COLOR_CODES } from "@/constants/color-codes";
import Image from "next/image";

const itemData = [
  {
    img: {
      src: "/sunset.jpg",
      width: 600,
      height: 522,
    },
    title: "Sunset View",
    date: "May 12, 2022",
    place: "Anglemont, Canada",
  },
  {
    img: {
      src: "/Champagne.jpg",
      width: 600,
      height: 798,
    },
    title: "Rose Champagne Bay",
    date: "Aug 3, 2022",
    place: "Vernon, Canada",
  },
  {
    img: {
      src: "/hanabi.jpg",
      width: 600,
      height: 414,
    },
    title: "Hanabi",
    date: "Aug 29, 2020",
    place: "Nagano, Japan",
  },
  {
    img: {
      src: "/art.jpg",
      width: 600,
      height: 450,
    },
    title: "No Titile",
    date: "May 12, 2022",
    place: "Anglemont, Canada",
  },
  {
    img: {
      src: "/breakfast.jpg",
      width: 600,
      height: 798,
    },
    title: "Luxury Breakfast",
    date: "Aug 3, 2022",
    place: "Kelowna, Canada",
  },
  {
    img: {
      src: "/forest.jpg",
      width: 600,
      height: 804,
    },
    title: "Cave",
    date: "Sep 21, 2021",
    place: "Aichi, Japan",
  },
  {
    img: {
      src: "/winery.jpg",
      width: 600,
      height: 798,
    },
    title: "Winery in Kelowna",
    date: "Aug 3, 2022",
    place: "Kelowna, Canada",
  },
  {
    img: {
      src: "/acai.jpg",
      width: 600,
      height: 768,
    },
    title: "Honolulu Beach",
    date: "June 19, 2022",
    place: "Hawaii, USA",
  },
];

export const MyInterests: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(itemData[0]);

  const handleClickOpen = (item: (typeof itemData)[0]) => {
    setCurrentItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box width={"40%"} margin={"200px auto"}>
      <Typography
        width={"40%"}
        margin={"0 auto"}
        textAlign={"center"}
        color={COLOR_CODES.BLACK}
        borderBottom={`solid 1px ${COLOR_CODES.BLACK}`}
        fontSize={"32px"}
        fontWeight={"bold"}
        mb={"64px"}
      >
        Pictures
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              position: "relative",
              "&:hover img": {
                opacity: 0.5,
              },
              "&:hover div": {
                opacity: 1,
              },
            }}
            onClick={() => handleClickOpen(item)}
          >
            <Image
              src={item.img.src}
              alt={item.title}
              height={item.img.height}
              width={item.img.width}
              loading="lazy"
              layout="responsive"
            />

            <Box
              position={"absolute"}
              bottom={0}
              left={0}
              color={COLOR_CODES.WHITE}
              pl={1}
              width={"100%"}
              sx={{
                opacity: 0,
                backgroundColor: COLOR_CODES.DARKGRAY,
                transition: "opacity 0.3s ease",
              }}
            >
              <Typography variant="h6">Title: {item.title}</Typography>
              <Typography variant="body1">Date: {item.date}</Typography>
              <Typography variant="body1" mb="10px">
                Place: {item.place}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={currentItem.img.src}
            height={currentItem.img.height}
            width={currentItem.img.width}
            alt={currentItem.title}
            style={{
              maxWidth: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
            }}
          />
          <Typography variant="h5" mt={2}>
            Title: {currentItem.title}
          </Typography>
          <Typography variant="body1">Date: {currentItem.date}</Typography>
          <Typography variant="body1">Place: {currentItem.place}</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
