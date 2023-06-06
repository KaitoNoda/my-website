import {
  ImageList,
  ImageListItem,
  Box,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";

const itemData = [
  {
    img: "sunset.jpg",
    title: "Sunset View",
    date: "May 12, 2022",
    place: "Anglemont, Canada",
  },
  {
    img: "Shampagne.jpg",
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

const MyInterests: React.FC = () => {
  return (
    <Box sx={{ width: "40%", margin: "200px auto" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MyInterests;
