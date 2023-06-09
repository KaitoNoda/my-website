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

const itemData = [
  {
    img: "sunset.jpg",
    title: "Sunset View",
    date: "May 12, 2022",
    place: "Anglemont, Canada",
  },
  {
    img: "Champagne.jpg",
    title: "Rose Champagne Bay",
    date: "Aug 3, 2022",
    place: "Vernon, Canada",
  },
  {
    img: "hanabi.jpg",
    title: "Hanabi",
    date: "Aug 29, 2020",
    place: "Nagano, Japan",
  },
  {
    img: "art.jpg",
    title: "No Titile",
    date: "May 12, 2022",
    place: "Anglemont, Canada",
  },
  {
    img: "breakfast.jpg",
    title: "Luxury Breakfast",
    date: "Aug 3, 2022",
    place: "Kelowna, Canada",
  },
  {
    img: "forest.jpg",
    title: "Cave",
    date: "Sep 21, 2021",
    place: "Aichi, Japan",
  },
  {
    img: "winery.jpg",
    title: "Winery in Kelowna",
    date: "Aug 3, 2022",
    place: "Kelowna, Canada",
  },
  {
    img: "acai.jpg",
    title: "Honolulu Beach",
    date: "June 19, 2022",
    place: "Hawaii, USA",
  },
];

export const MyInterests: React.FC = () => {
  const [open, setOpen] = useState(false);
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
            <img src={item.img} alt={item.title} loading="lazy" />
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
              <h3>Title: {item.title}</h3>
              <p>Date: {item.date}</p>
              <p>Place: {item.place}</p>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={currentItem.img}
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
