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
        width={"320px"}
        m={"0 auto"}
        textAlign={"center"}
        color={COLOR_CODES.BLACK}
        borderBottom={`solid 1px ${COLOR_CODES.BLACK}`}
        fontSize={"32px"}
        fontWeight={"bold"}
        marginBottom={"64px"}
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
            sx={{ backgroundColor: "#e3dddd", padding: "10px", width: "400px" }}
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
                backgroundColor: "#e3dddd",
                padding: "10px",
                width: "400px",
              }}
            >
              <Typography>
                Eager to gain practical experience, I secured a jobat the
                Marriott Hotel in Nagoya where I worked for the next three
                years.
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
            sx={{ backgroundColor: "#e3dddd", padding: "10px", width: "400px" }}
          >
            <Typography>
              A milestone year for me as I successfully graduated from high
              school in my hometown, Nagoya, and continuing my job at the
              Marriott.
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
                backgroundColor: "#e3dddd",
                padding: "10px",
                width: "400px",
              }}
            >
              <Typography>
                Eager to see the world and to pursue higher education, I
                embarked on a new adventure, relocating to Canada.
              </Typography>
            </Paper>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={4}
            sx={{ backgroundColor: "#e3dddd", padding: "10px", width: "400px" }}
          >
            <Typography>
              As a significant step towards my academic and career goals, I
              enrolled in a Bachelor of Science degree program at the
              prestigious University of British Columbia in Canada.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
