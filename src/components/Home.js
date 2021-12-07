import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import image from "../assets/elearning.png";
import InputBase from "@mui/material/InputBase";

function Home() {
  return (
    <Container>
      <Grid sx={{ flexGrow: 1, padding: "45px" }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item>
              <Paper
                sx={{
                  width: 350,
                  boxShadow: "none",
                  height: 325,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  background: "transparent",
                }}
              >
                <Typography
                  variant="h6"
                  color="#f4ae01"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Choose Your Best Course
                </Typography>
                <Typography variant="h4" color="white">
                  Start learning from best platform
                </Typography>
                <Typography variant="body2" color="white">
                  E-Learning is the use of technology in education Learn how to
                  design engaging inteactive elearning courses that help learner
                  at their own pace
                </Typography>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    height: 60,
                    paddingLeft: 2,
                    paddingRight: 2,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="What do you want to learn?"
                    inputProps={{ "aria-label": "What do you want to learn?" }}
                  />
                  <Button
                    sx={{
                      background: "#f4ae01",
                      color: "white",
                      width: 120,
                      textTransform: "none",
                    }}
                  >
                    Sign Up
                  </Button>
                </Paper>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                sx={{
                  width: 450,
                  height: 325,
                  boxShadow: "none",
                  background: "transparent",
                }}
              >
                <img
                  alt="elearning"
                  src={image}
                  style={{ width: "100%", height: "100%" }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
