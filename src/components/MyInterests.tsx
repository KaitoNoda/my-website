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
          >
            <img src={item.img} alt={item.title} loading="lazy" />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                opacity: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                paddingLeft: 1,
                width: "100%",
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
    </Box>
  );
};

export default MyInterests;
