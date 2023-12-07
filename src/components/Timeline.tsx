import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { COLOR_CODES } from "constants/color-codes";

export const TimeLine: React.FC = () => {
  return (
    <Timeline position="alternate">
      <Typography
        id={"timeline"}
        width={"320px"}
        m={"0 auto"}
        textAlign={"center"}
        color={COLOR_CODES.BLACK}
        borderBottom={`solid 1px ${COLOR_CODES.BLACK}`}
        fontSize={"32px"}
        fontWeight={"bold"}
        marginBottom={"64px"}
        pt={12}
        mt={-12}
      >
        Timeline
      </Typography>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          1999
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: COLOR_CODES.BG,
              padding: 1,
              width: "400px",
            }}
          >
            <Typography>
              I was born in the culturally rich city of Nagoya, Japan
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" justifyContent="right">
            <Paper
              elevation={4}
              sx={{
                backgroundColor: COLOR_CODES.BG,
                padding: 1,
                width: "400px",
              }}
            >
              <Typography>
              When I was 17 years old, I was eager to gain practical experience and start to save to pay for my university study abroad. I was successful in getting a job at the Marriott Hotel in Nagoya where I worked for three years.
              </Typography>
            </Paper>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: COLOR_CODES.BG,
              padding: 1,
              width: "400px",
            }}
          >
            <Typography>
            A milestone for me was successfully graduating from high school while I continued my job at Marriott. 
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" justifyContent="right">
            <Paper
              elevation={4}
              sx={{
                backgroundColor: COLOR_CODES.BG,
                padding: 1,
                width: "400px",
              }}
            >
              <Typography>
              I was eager to see the world and pursue my life-long goal of studying abroad and so moved to Canada to follow my dream.
              </Typography>
            </Paper>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: COLOR_CODES.BG,
              padding: 2,
              width: "400px",
            }}
          >
            <Typography>
            As a significant step towards my academic and life goals, I have decided to pursue Architecture as my career. I am excited for what future holds.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
