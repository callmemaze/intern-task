import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import image from "../assets/footer.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          background: "transparent",
          m: 1,
          width: 400,
          height: 210,
          alignItems: "center",
        }}
      >
        <img alt="elearning" src={image} style={{ width: 150, height: 140 }} />
        <Card
          sx={{ minWidth: 275, boxShadow: "none", background: "transparent" }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Typography
              variant="body2"
              sx={{ color: "#445c6f", fontWeight: 700 }}
            >
              Expert Teachers we have world expert mentors, how are giving you
              better guideline.
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            <Typography variant="h7" color="white">
              4.8
            </Typography>
            <Rating name="read-only" value={1} max={1} readOnly size="small" />
            <Divider color="white" sx={{ width: 50 }} />
            <Typography variant="h8" color="white">
              View 416 reviews
            </Typography>
          </CardContent>
        </Card>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          width: 650,
          background: "transparent",
          boxShadow: "none",
          paddingBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 200,
              height: 150,
            },
          }}
        >
          <Paper elevation={0}>
            <Card sx={{ minWidth: 200, background: "#445c6f" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <LocalLibraryIcon sx={{ color: "white" }} />
                <Typography variant="h6" color="white">
                  22000+ Student
                </Typography>
                <Typography variant="body2" sx={{ color: "#6f7a84" }}>
                  They can learn
                  <br />
                  new things everyday
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  sx={{ textTransform: "none", color: "#f4ae01" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
          <Paper sx={{ background: "transparent" }}>
            <Card
              sx={{
                minWidth: 200,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <LocalLibraryIcon sx={{ color: "white" }} />
                <Typography variant="h6" color="white">
                  2600+ Course
                </Typography>
                <Typography variant="body2" sx={{ color: "#6f7a84" }}>
                  Everyday we added
                  <br />
                  here new course
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  sx={{ textTransform: "none", color: "#f4ae01" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
          <Paper
            elevation={3}
            sx={{ background: "transparent", boxShadow: "none" }}
          >
            <Card
              sx={{
                minWidth: 200,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <LocalLibraryIcon sx={{ color: "white" }} />
                <Typography variant="h6" color="white">
                  230 Instructor
                </Typography>
                <Typography variant="body2" sx={{ color: "#6f7a84" }}>
                  World's popular
                  <br />
                  instructor teaches here
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  sx={{ textTransform: "none", color: "#f4ae01" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export default Footer;
