import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

const pages = ["Home", "Lessons", "About", "Service", "Blog"];

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        display: "flex",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10,
      }}
      color="transparent"
    >
      <Container maxWidth="xl" sx={{}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
              color: "white",
            }}
          >
            Taktiv
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "bold",
                color: "#f4ae01",
              }}
            >
              .
            </Typography>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",

              marginLeft: "auto",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  display: "block",
                  textTransform: "none",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ marginRight: 5, color: "white" }}
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button
              sx={{
                background: "#f4ae01",
                color: "white",
                width: 120,
                height: 40,
                textTransform: "none",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
