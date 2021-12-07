import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  return (
    <>
      <CssBaseline />
      <Box width="100%" component="main" sx={{ background: "#11213c" }}>
        <Header />
        <Home />
        <Footer />
      </Box>
    </>
  );
}

export default App;
